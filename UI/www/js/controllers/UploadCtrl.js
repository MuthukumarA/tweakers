
var api = "http://localhost:56882/api/upload/";

app.controller('UploadCtrl', function ($scope, $stateParams, $ionicActionSheet, $timeout, $ionicLoading, $ionicModal, $ionicPopup, ionicMaterialInk, $cordovaSQLite) {

 
  $scope.UploadFileSuccess = function (args) {
    
    var response = ej.parseJSON(args.responseText);
    var UpdatedTime = new Date();
    var ImageSource = response.FileUrl;
    var FileName = response.FileName;
    var FileType = args.files.extension;
    var TagElements = response.Data;
    //Inserting record into database
    var db = window.openDatabase("Tweakers.db", "1.0", "Tweakers", 500000);
    
    var AppSettingQuery = "INSERT INTO ImageGallery (UpdatedTime, ImageSource, FileName, FileType,TagElements) VALUES (?,?,?,?,?)";
    return $cordovaSQLite.execute(db, AppSettingQuery, [UpdatedTime, ImageSource, FileName, FileType, TagElements]).then(
      function (res) {
        return res.rows;        
      },
      function (err) {
        console.log(error);        
        return err;
      });
  }

  $("#UploadItem").ejUploadbox({
        saveUrl: "http://23.92.60.74:90/api/upload/Save",
    extensionsAllow: ".png, .jpeg, .jpg",
    autoUpload: true,
    multipleFilesSelection: true,
        success:$scope.UploadFileSuccess
  });


});
