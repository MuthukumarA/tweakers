app.controller('MotionCtrl', function ($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, $cordovaSQLite) {

  function OndataLabel(sender) {
    sender.data.location.x = sender.data.location.x + 20;
  }

  $scope.SmileCount = 0;
  $scope.SelfieCount = 0;
  $scope.SunsetCount = 0;
  $scope.PersonCount = 0;

  $scope.LoadTagCount= function() {
    $scope.gallery = [];
    var db = window.openDatabase("Tweakers.db", "1.0", "Tweakers", 500000);

    var AppSettingQuery = 'select * from ImageGallery';
    return $cordovaSQLite.execute(db, AppSettingQuery).then(
      function (res) {
        var result = res.rows;
        for (var i = 0; i < res.rows.length; i++) {
          var temp = res.rows[i];
          var tempTag = ej.parseJSON(temp.TagElements);
          var img = {
            "Id": temp.Id,
            "url": temp.ImageSource,
            "tagsConcat": tempTag.description.tags,
            "rating": temp.Rating,
            "categories": tempTag.categories,
            "description": tempTag.description,
            "color": tempTag.color,
            "requestId": tempTag.requestId,
            "metadata": tempTag.metadata
          };
          $scope.gallery.push(img);
        }

        $scope.galleryImages = $scope.gallery;

        var smileTags = ej.DataManager($scope.galleryImages).executeLocal(ej.Query().where("tagsConcat", ej.FilterOperators.contains, "smile"));
        $scope.SmileCount = smileTags.length > 0 ? smileTags.length : 0;

        var selfieTags = ej.DataManager($scope.galleryImages).executeLocal(ej.Query().where("tagsConcat", ej.FilterOperators.contains, "selfie"));
        $scope.SelfieCount = selfieTags.length > 0 ? selfieTags.length : 0;

        var sunsetTags = ej.DataManager($scope.galleryImages).executeLocal(ej.Query().where("tagsConcat", ej.FilterOperators.contains, "sunset"));
        $scope.SunsetCount = sunsetTags.length > 0 ? sunsetTags.length : 0;

        var personTags = ej.DataManager($scope.galleryImages).executeLocal(ej.Query().where("tagsConcat", ej.FilterOperators.contains, "person"));
        $scope.PersonCount = personTags.length > 0 ? personTags.length : 0;

      },
      function (err) {
        debugger;
        console.log(error);

        return "error";
      });
  }

  $scope.RenderBarChart = function () {

    $scope.LoadTagCount();

    var areaChart = $("#AreaChart").data('ejChart');
    areaChart ? areaChart.destroy() : null;

    var pieChart = $("#PieChart").data('ejChart');
    pieChart ? pieChart.destroy() : null;

    var widthSet = "" + window.innerWidth;  

    $("#BarChart").ejChart(
      {
        //Initializing Primary X Axis	 
        primaryXAxis:
        {
          title: { text: 'Tags' },
          range: { min: 1, max: 5, interval: 1 },
        },

        width: "100%",

        //Initializing Primary Y Axis	
        primaryYAxis:
        {
          range: { min:0, max: 10, interval: 1 },
          labelFormat: "{value}%",
          title: { text: 'Count' }
        },

        //Initializing Common Properties for all the series
        commonSeriesOptions:
        {
          type: 'bar',
          enableAnimation: true,
          tooltip: { visible: true, format: "#series.name# <br/> #point.x# : #point.y#" },
          marker:
          {
            dataLabel:
            {
              font: { size: '13px', fontFamily: 'Segoe UI', fontStyle: 'Normal', fontWeight: 'regular' },
              textPosition: 'bottom',
              horizontalTextAlignment: "near",
              visible: true,
              enableContrastColor: true
            },
          }
        },

        //Initializing Series
        series:
        [
          {
            points: [{ x: "Smile", y: $scope.SmileCount }, { x: "Selfie", y: $scope.SelfieCount }, { x: "Sunset", y: $scope.SunsetCount }, { x: "Person", y: $scope.PersonCount }],
            name: 'Phone images'
          }
        ],
        load: "loadTheme",
        displayTextRendering: "OndataLabel",
        isResponsive: true,
        showTooltip: true,
        title: { text: 'Tags' },
        size: { height: "600", width: widthSet },
        legend: { visible: true, position: 'bottom', alignment: "near" }
      });

  }

  $scope.RenderPieChart = function () {

    var areaChart = $("#AreaChart").data('ejChart');
    areaChart ? areaChart.destroy() : null;

    var barChart = $("#BarChart").data('ejChart');
    barChart ? barChart.destroy() : null;

    var widthSet = "" + window.innerWidth;


    $("#PieChart").ejChart(
      {
        width: "100%",
        //Initializing Series
        series:
        [
          {
            points: [{ x: 'Smile', y: $scope.SmileCount, text: 'Smiling,' + $scope.SmileCount },
              { x: 'Selfie', y: $scope.SelfieCount, text: 'Selfie, ' + $scope.SelfieCount },
              { x: 'Sunset', y: $scope.SunsetCount, text: 'Sunset, ' + $scope.SunsetCount },
              { x: 'Person', y: $scope.PersonCount, text: 'Person, ' + $scope.PersonCount }],
            marker:
            {
              dataLabel:
              {
                visible: true,
                shape: 'none',
                connectorLine: { type: 'bezier', color: 'black' },
                font: { size: '14px' },
                enableContrastColor: true
              }
            },
            border: { width: 2, color: 'white' },
            name: 'Expenses',
            type: 'pie',
            enableAnimation: true,
            labelPosition: 'outsideExtended',
            enableSmartLabels: true, startAngle: 145
          }
        ],
        load: "loadTheme",
        seriesRendering: "seriesRender",
        title: { text: 'Tags' },
        isResponsive: true,
        size: { height: "600", width: widthSet },
        legend: { visible: false }
      });

  }

  $scope.RenderAreaChart = function () {

    var pieChart = $("#PieChart").data('ejChart');
    pieChart ? pieChart.destroy() : null;

    var barChart = $("#BarChart").data('ejChart');
    barChart ? barChart.destroy() : null;

    var widthSet = "" + window.innerWidth;

    $("#AreaChart").ejChart(
      {
        width: "100%",
        //Initializing Primary X Axis
        primaryXAxis:
        {
          axisLine: { visible: false },
          majorGridLines: { visible: false },
          majorTickLines: { visible: false },
          range: { min: 1, max: 5, interval: 1 },
          title: { text: 'Tags' }
        },

        //Initializing Primary Y Axis
        primaryYAxis:
        {
          axisLine: { visible: false },
          majorTickLines: { visible: false },
          range: { min: 0, max: 10, interval: 1 },          
          title: { text: 'Count' }
        },

        //Initializing Series	
        series:
        [
          {
            points: [{ x: "Smile", y: $scope.SmileCount }, { x: "Selfie", y: $scope.SelfieCount }, { x: "Sunset", y: $scope.SunsetCount }, { x: "Person", y: $scope.PersonCount }],
            name: 'Gallery',
            type: 'Area',
            enableAnimation: true,
            border: { color: 'transparent' },
            opacity: 0.5,
            fill: '#69D2E7'
          }
        ],
        load: "loadTheme",
        isResponsive: true,
        title: { text: 'Tags' },
        size: { height: "600", width: widthSet },
        legend: { visible: true }
      });

  }

  $scope.chartTypeChange = function (args) {
    var selected = args.selectedValue;
    switch (selected) {
      case "1":
        $scope.RenderBarChart();
        break;
      case "2":
        $scope.RenderPieChart();
        break;
      case "3":
        $scope.RenderAreaChart();
        break;
    }
  }

  $scope.init = function () {

    $scope.LoadTagCount();  

    $('#ChartTypesList').ejDropDownList({
      value: '3',
      change: $scope.chartTypeChange,
      width:(window.innerWidth-50)+""
    });

    $scope.RenderAreaChart();

  }

  $scope.init();

});