app.controller('SDcardMemory_tabCtrl', function ($scope, $stateParams, $ionicActionSheet, $timeout, $ionicLoading, $ionicModal, $ionicPopup, ionicMaterialInk) {

  $scope.RenderGaugeControlForMobile = function () {

    $("#CircularGauge1").ejCircularGauge({
      backgroundColor: "transparent",
      width: 500,
      radius: 130,
      readOnly: true,
      gaugePosition: "topcenter",
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

  $scope.init = function () {

    $scope.RenderGaugeControlForMobile();
  }

  $scope.init();

 });