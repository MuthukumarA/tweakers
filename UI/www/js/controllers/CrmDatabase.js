app.factory('DatabaseService',['$cordovaSQLite','$ionicPlatform','$q',
  function($cordovaSQLite, $ionicPlatform, $q) {

    var db;

    var trackersList;

    return {
      initDB: initDB,
      addNewImage: addNewImage

    }


    function initDB() {

      $ionicPlatform.ready(function() {

        //   if(window.cordova)

        //   {

        // 	db = $cordovaSQLite.openDB("myapp.db");

        // }else

        // {

        // 	db = window.openDatabase("myapp.db", '1.0', 'Trackers DB', -1);

        // }


        db = $cordovaSQLite.openDB("myapp.db");


        var query =
          "CREATE TABLE IF NOT EXISTS CrmImage (id integer autoincrement primary key, name string , detail string)";

        runQuery(query,
          [],
          function(res) {

            console.log("table created ");

          },
          function(err) {

            console.log(err);

          });

      }.bind(this));

    }

    function addNewImage(name) {

      console.log('adding new tracker :' + name);

      var deferred = $q.defer();

      var query = "INSERT INTO CrmImage (name, detail) VALUES (?,?)";

      runQuery(query, ["name", 'detail'], function (response) {

        //Success Callback

        console.log(response);

        deferred.resolve(response);

      }, function (error) {

        //Error Callback

        console.log(error);

        deferred.reject(error);

      });



      return deferred.promise;

    }

  }

]);