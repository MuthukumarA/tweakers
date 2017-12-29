var currentImageId;

app.controller('ListsCtrl', function ($scope, $stateParams, ionicMaterialMotion, $cordovaSQLite) {

    var reset = function () {
        var inClass = document.querySelectorAll('.in');
        for (var i = 0; i < inClass.length; i++) {
            inClass[i].classList.remove('in');
            inClass[i].removeAttribute('style');
        }
        var done = document.querySelectorAll('.done');
        for (var i = 0; i < done.length; i++) {
            done[i].classList.remove('done');
            done[i].removeAttribute('style');
        }
        var ionList = document.getElementsByTagName('ion-list');
        for (var i = 0; i < ionList.length; i++) {
            var toRemove = ionList[i].className;
            if (/animate-/.test(toRemove)) {
                ionList[i].className = ionList[i].className.replace(/(?:^|\s)animate-\S*(?:$|\s)/, '');
            }
        }
    };

    $scope.ripple = function () {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-ripple';
        setTimeout(function () {
            ionicMaterialMotion.ripple();
        }, 500);
    };

    $scope.fadeSlideInRight = function () {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in-right';
        setTimeout(function () {
            ionicMaterialMotion.fadeSlideInRight();
        }, 500);
    };

    $scope.fadeSlideIn = function () {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in';
        setTimeout(function () {
            ionicMaterialMotion.fadeSlideIn();
        }, 500);
    };

    $scope.blinds = function () {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
        setTimeout(function () {
            ionicMaterialMotion.blinds(); // ionic.material.motion.blinds(); //ionicMaterialMotion
        }, 500);
    };

    $scope.blinds();

    //Default Object Initialize
//    var imageValues = [
//{
//    "id": "1",
//    "url": "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg",
//    "tagsConcat": "",
//    "rating": "",
//    "categories": [
//          {
//              "name": "people_group",
//              "score": 0.84375,
//              "detail": {
//                  "celebrities": [
//                  ]
//              }
//          }
//    ],
//    "description": {
//        "tags": ["train", "platform", "station", "building", "indoor", "subway", "track", "walking", "waiting", "pulling", "board", "people", "man", "luggage", "standing", "holding", "large", "woman", "yellow", "suitcase"],
//        "captions": [
//           {
//               "text": "a person posing for the camera",
//               "confidence": 0.947480109294659
//           }
//        ]
//    },
//    "color": {
//        "dominantColorForeground": "White",
//        "dominantColorBackground": "White",
//        "dominantColors": [
//           "White",
//           "Blue"
//        ],
//        "accentColor": "B68715",
//        "isBwImg": false
//    },
//    "requestId": "72f78f98-c4c6-4e71-8f72-f1a4851a7bd3",
//    "metadata": {
//        "height": 400,
//        "width": 600,
//        "format": "Png"
//    }
//},
//{
//    "id": "2",
//    "url": "https://image.freepik.com/free-psd/abstract-background-design_1297-73.jpg",
//    "tagsConcat": "",
//    "rating": "",
//    "categories": [
//  {
//      "name": "people_group",
//      "score": 0.84375,
//      "detail": {
//          "celebrities": [
//          ]
//      }
//  }
//    ],
//    "description": {
//        "tags": ["Colorful", "orange", "red", "bubble", "green", "waves"],
//        "captions": [
//           {
//               "text": "a person posing for the camera",
//               "confidence": 0.947480109294659
//           }
//        ]
//    },
//    "color": {
//        "dominantColorForeground": "White",
//        "dominantColorBackground": "White",
//        "dominantColors": [
//           "White",
//           "Blue"
//        ],
//        "accentColor": "B68715",
//        "isBwImg": false
//    },
//    "requestId": "72f78f98-c4c6-4e71-8f72-f1a4851a7bd3",
//    "metadata": {
//        "height": 400,
//        "width": 600,
//        "format": "Png"
//    }
//},
//{
//    "id": "3",
//    url: "https://image.freepik.com/free-psd/abstract-background-design_1297-84.jpg",
//    "tagsConcat": "",
//    "rating": "",
//    "categories": [
//    {
//        "name": "people_group",
//        "score": 0.84375,
//        "detail": {
//            "celebrities": [
//            ]
//        }
//    }
//    ],
//    "description": {
//        "tags": ["greenish", "leaf", "leaves", "tree", "grash", "nature"],
//        "captions": [
//           {
//               "text": "a person posing for the camera",
//               "confidence": 0.947480109294659
//           }
//        ]
//    },
//    "color": {
//        "dominantColorForeground": "White",
//        "dominantColorBackground": "White",
//        "dominantColors": [
//           "White",
//           "Blue"
//        ],
//        "accentColor": "B68715",
//        "isBwImg": false
//    },
//    "requestId": "72f78f98-c4c6-4e71-8f72-f1a4851a7bd3",
//    "metadata": {
//        "height": 400,
//        "width": 600,
//        "format": "Png"
//    }
//},
//{
//    "id": "4",
//    url: "https://images3.alphacoders.com/853/thumb-1920-85305.jpg",
//    "tagsConcat": "",
//    "rating": "",
//    "categories": [
//{
//    "name": "people_group",
//    "score": 0.84375,
//    "detail": {
//        "celebrities": [
//        ]
//    }
//}
//    ],
//    "description": {
//        "tags": ["sand", "sun", "brown", "sunset", "sunrise", "sea"],
//        "captions": [
//           {
//               "text": "a person posing for the camera",
//               "confidence": 0.947480109294659
//           }
//        ]
//    },
//    "color": {
//        "dominantColorForeground": "White",
//        "dominantColorBackground": "White",
//        "dominantColors": [
//           "White",
//           "Blue"
//        ],
//        "accentColor": "B68715",
//        "isBwImg": false
//    },
//    "requestId": "72f78f98-c4c6-4e71-8f72-f1a4851a7bd3",
//    "metadata": {
//        "height": 400,
//        "width": 600,
//        "format": "Png"
//    }
//}];

    //Initialization for concatination
    $scope.tagsConcat = "";

    //Initialization for showing hide cards
    $scope.noImage = true;

    //Concat the tags into tagsConcat
    //angular.forEach(imageValues, function (value) {
    //    value.tagsConcat = $scope.tagsConcat.concat(value.description.tags);
    //});

    //Values binding in card
 // $scope.gallery = $scope.LoadImages();
  //$scope.gallery = imageValues;

    //Auto Complete 
    $('#autocomplete').ejAutocomplete({
        showPopupButton: true,
        showEmptyResultText: false,
        change: function (args) {
          var filteredObject = ej.DataManager($scope.galleryImages).executeLocal(ej.Query().where("tagsConcat", ej.FilterOperators.contains, args.value));
          debugger;
            $scope.$apply(function () {
                $scope.gallery = filteredObject;
            });
        }
    });

    //Tags View
    $("#accordion").ejAccordion();

    //Clear search box text
    $scope.clearSearch = function () {
        $('#autocomplete').ejAutocomplete({
            value: ""
        });
        $scope.gallery = $scope.galleryImages;
    }

    //Rating Dialog box Initialization
    $("#dialog").ejDialog({ showOnInit: false, minWidth: 300, width: 300, enableModal: true, allowDraggable: false, enableResize: false, isResponsive: true, title: "Rating" });

  $("#RatingImage").ejRating({
    value: 1,
    change: function (args) {
      var db = window.openDatabase("Tweakers.db", "1.0", "Tweakers", 500000);
      var AppSettingQuery = "Update ImageGallery set Rating = " + args.value + " Where Id = " + currentImageId;
      return $cordovaSQLite.execute(db, AppSettingQuery).then(
        function (res) {
          $scope.LoadImages();
          return res.rows;
        },
        function (err) {
          console.log(error);
          return err;
        });
    }
  });

    //Image click
    $scope.showPopup = function (id) {
        currentImageId = id;
        $("#dialog").ejDialog("open");
        $("#dialog_wrapper").css({ 'width': '300px' });
    }

  var favourite = true;
  $("#favourite").on("click", function () {
    if (favourite == true) {
      $("#favourite").css({ 'color': 'black' });
      var db = window.openDatabase("Tweakers.db", "1.0", "Tweakers", 500000);
      var AppSettingQuery = "Update ImageGallery set Favourite = " + favourite + " Where Id = " + currentImageId;
      return $cordovaSQLite.execute(db, AppSettingQuery).then(
        function (res) {
          $scope.LoadImages();
          return res.rows;
        },
        function (err) {
          console.log(error);
          return err;
        });
      favourite = false;
    }
    else {
      $("#favourite").css({ 'color': '#82c3d6' });
      var db = window.openDatabase("Tweakers.db", "1.0", "Tweakers", 500000);
      var deferred = $q.defer();
      var AppSettingQuery = "Update ImageGallery set Favourite = " + favourite + " Where Id = " + currentImageId;
      return $cordovaSQLite.execute(db, AppSettingQuery).then(
        function (res) {
          $scope.LoadImages();
          return res.rows;
          deferred.resolve(response);
        },
        function (err) {
          console.log(error);
          deferred.reject(error);
          return err;
        });
      favourite = true;
    }

    });

  $scope.LoadImages = function() {

    $scope.gallery = [];
    var db = window.openDatabase("Tweakers.db", "1.0", "Tweakers", 500000);

    var AppSettingQuery = 'select * from ImageGallery';
    return $cordovaSQLite.execute(db, AppSettingQuery).then(
      function(res) {
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

      },
      function(err) {
        debugger;
        console.log(error);

        return "error";
      });

  };

  $scope.init = function () {

    $scope.LoadImages();
  }

  $scope.init();

    ////WhatsApp Share
    //$scope.whatsappShare = function () {
    //    window.plugins.socialsharing.shareViaWhatsApp('Digital Signature Maker', null /* img */, "https://play.google.com/store/apps/details?id=com.prantikv.digitalsignaturemaker" /* url */, null, function (errormsg) { alert("Error: Cannot Share") });
    //}

    ////Twitter Share
    //$scope.twitterShare = function () {
    //    window.plugins.socialsharing.shareViaTwitter('Digital Signature Maker', null /* img */, 'https://play.google.com/store/apps/details?id=com.prantikv.digitalsignaturemaker', null, function (errormsg) { alert("Error: Cannot Share") });
    //}

    ////Other Share
    //$scope.OtherShare = function () {
    //    window.plugins.socialsharing.share('Digital Signature Maker', null, null, 'https://play.google.com/store/apps/details?id=com.prantikv.digitalsignaturemaker');
    //}
});