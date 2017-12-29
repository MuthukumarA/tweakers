// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-material', 'ngCordova']);

app.run(function ($ionicPlatform, $cordovaSQLite) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }

      //function createTableAppSetting() {
        var db = window.openDatabase("Tweakers.db", "1.0", "Tweakers", 500000);
        var AppSettingQuery = 'CREATE TABLE IF NOT EXISTS ImageGallery(Id INTEGER PRIMARY KEY, UpdatedTime TEXT,ImageSource TEXT, FileName TEXT,FileType TEXT,TagElements TEXT,Favourite INTEGER NULL,Rating INTEGER NULL)';
        return $cordovaSQLite.execute(db, AppSettingQuery).then(
          function (res) {
            console.log('Project table existed');
            return res;
          },
          function (err) {
            console.log('Error in Table creating')
            return err;
          });
     // }

   //   DatabaseService.initDB();
    });
})

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.lists', {
        url: '/lists',
        views: {
            'menuContent': {
                templateUrl: 'templates/lists.html',
                controller: 'ListsCtrl'
            }
        }
    })

    .state('app.ink', {
        url: '/ink',
        views: {
            'menuContent': {
                templateUrl: 'templates/ink.html',
                controller: 'InkCtrl'
            }
        }
    })

    .state('app.motion', {
        url: '/motion',
        views: {
            'menuContent': {
                templateUrl: 'templates/motion.html',
                controller: 'MotionCtrl'
            }
        }
    })

    .state('app.components', {
        url: '/components',
        views: {
            'menuContent': {
                templateUrl: 'templates/components.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.extensions', {
        url: '/extensions',
        views: {
            'menuContent': {
                templateUrl: 'templates/extensions.html',
                controller: 'UploadCtrl'
            }
        }
    })

        .state('app.phonememorytab', {
          url: '/phonememory',
          views: {
            'menuContent': {
              templateUrl: 'templates/phonememory_tab.html',
              controller: 'PhoneMemory_tabCtrl'
            }
          }
        })

        .state('app.sdcardmemorytab', {
          url: '/sdcard',
          views: {
            'menuContent': {
              templateUrl: 'templates/sdcardmemory_tab.html',
              controller: 'SDcardMemory_tabCtrl'
            }
          }
        })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/lists');
}).config(['$ionicConfigProvider', function ($ionicConfigProvider) {

  $ionicConfigProvider.tabs.position('bottom'); // other values: top

}]);
