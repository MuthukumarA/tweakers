app.controller('ComponentsCtrl', function ($scope, $stateParams, ionicMaterialInk) {  

  $scope.RenderGaugeControlForMobile = function () {

    var sdCard = $("#SDcardMemory").data('ejCircularGauge');
    sdCard ? sdCard.destroy() : null;

    $("#PhoneMemory").ejCircularGauge({
      backgroundColor: "transparent",
      width: 500,
      radius: 130,
      readOnly: true,
      gaugePosition: "center",
      distanceFromCorner: 10,
      frame: {
        frameType: 'halfcircle',
        halfCircleFrameStartAngle: 180,
        halfCircleFrameEndAngle: 360
      },
      scales: [
        {
          showRanges: true,
          startAngle: 180,
          sweepAngle: 180,
          radius: 130,
          showScaleBar: true,
          size: 10,
          backgroundColor: "#CBCFCE",
          border: { color: "#FEA501", width: 2 },
          maximum: 120,
          majorIntervalValue: 20,
          minorIntervalValue: 10,
          pointers: [
            {
              value: 90,
              showBackNeedle: false,
              length: 85,
              width: 10,

              backgroundColor: "#FEA501",
              border: { color: "#FEA501" }
            }
          ],
          pointerCap: {
            radius: 10,
            backgroundColor: "#0000F0",
            borderColor: "#262F36",
            borderWidth: 2,
          },
          ticks: [
            {
              type: "major",
              distanceFromScale: 0,
              height: 16,
              width: 3,
              color: "#FEA501"
            }, { type: "minor", height: 8, width: 2, distanceFromScale: 0, color: "#FEA501" }
          ],
          labels: [
            {
              color: "Red",
              distanceFromScale: 0,
              autoAngle: true,
            }
          ],
          //ranges: [
          //  {
          //    distanceFromScale: 30,
          //    startValue: 0,
          //    endValue: 90,
          //    backgroundColor: "#0000F0",
          //    border: { color: "#0000F0", width: 0 }
          //  }
          //]
        }
      ]
    });

  };

  $scope.RenderGaugeControlForSDcard = function () {

    var phoneMemory = $("#PhoneMemory").data('ejCircularGauge');
    phoneMemory ? phoneMemory.destroy() : null;

    $("#SDcardMemory").ejCircularGauge({
      backgroundColor: "transparent",
      width:window.innerWidth,
      radius: 130,
      readOnly: true,
      gaugePosition: "center",
      distanceFromCorner: 10,
      frame: {
        frameType: 'halfcircle',
        halfCircleFrameStartAngle: 180,
        halfCircleFrameEndAngle: 360
      },
      scales: [
        {
          showRanges: true,
          startAngle: 180,
          sweepAngle: 180,
          radius: 130,
          showScaleBar: true,
          size: 10,
          backgroundColor: "#CBCFCE",
          border: { color: "#FEA501", width: 2 },
          maximum: 120,
          majorIntervalValue: 20,
          minorIntervalValue: 10,
          pointers: [
            {
              value: 70,
              showBackNeedle: false,
              length: 85,
              width: 10,

              backgroundColor: "#FEA501",
              border: { color: "#FEA501" }
            }
          ],
          pointerCap: {
            radius: 10,
            backgroundColor: "#0000F0",
            borderColor: "#262F36",
            borderWidth: 2,
          },
          ticks: [
            {
              type: "major",
              distanceFromScale: 0,
              height: 16,
              width: 3,
              color: "#FEA501"
            }, { type: "minor", height: 8, width: 2, distanceFromScale: 0, color: "#FEA501" }
          ],
          labels: [
            {
              color: "Red",
              distanceFromScale: 0,
              autoAngle: true,
            }
          ],
          ranges: [
            {
              distanceFromScale: 30,
              startValue: 0,
              endValue: 70,
              backgroundColor: "#0000F0",
              border: { color: "#0000F0", width: 0 }
            }
          ]
        }
      ]
    });

  };

  $scope.memoryTypeChange = function (args) {
    var selected = args.selectedValue;
    switch (selected) {
    case "1":
      $scope.RenderGaugeControlForMobile();
      break;
    case "2":
      $scope.RenderGaugeControlForSDcard();
      break;  
    }
  }

  $scope.init = function () {

    $scope.RenderGaugeControlForMobile();

    $('#MemoryTypeList').ejDropDownList({
      value: '1',
      change: $scope.memoryTypeChange,
      width: (window.innerWidth - 50) + ""
    });

  }

  $scope.init();

});