//Add image
function addNewImages(UpdatedTime, ImageSource, FileName, FileType, TagElements) {
    var db = window.openDatabase("Tweakers.db", "1.0", "Tweakers", 500000);
    var deferred = $q.defer();
    var AppSettingQuery = "INSERT INTO ImageGallery (UpdatedTime, ImageSource, FileName, FileType,TagElements) VALUES (?,?)";
    return $cordovaSQLite.execute(db, AppSettingQuery, [UpdatedTime, ImageSource, FileName, FileType, TagElements]).then(
        function (res) {
            return res.rows;
            deferred.resolve(response);
        },
        function (err) {
            console.log(error);
            deferred.reject(error);
            return err;
        });
    return "";
}

function UpdateImagesFavoriteStatus(Id, Favourite) {
    var db = window.openDatabase("Tweakers.db", "1.0", "Tweakers", 500000);
    var deferred = $q.defer();
    var AppSettingQuery = "Update ImageGallery set Favourite = " + Favourite + " Where Id = " + Id;
    return $cordovaSQLite.execute(db, AppSettingQuery).then(
        function (res) {
            return res.rows;
            deferred.resolve(response);
        },
        function (err) {
            console.log(error);
            deferred.reject(error);
            return err;
        });
    return "";
}

function UpdateImagesRatingStatus(Id, Rating) {
    var db = window.openDatabase("Tweakers.db", "1.0", "Tweakers", 500000);
    var deferred = $q.defer();
    var AppSettingQuery = "Update ImageGallery set Rating = " + Rating + " Where Id = " + Id;
    return $cordovaSQLite.execute(db, AppSettingQuery).then(
        function (res) {
            return res.rows;
            deferred.resolve(response);
        },
        function (err) {
            console.log(error);
            deferred.reject(error);
            return err;
        });
    return "";
}

function DeleteImage(Id) {
    var db = window.openDatabase("Tweakers.db", "1.0", "Tweakers", 500000);
    var deferred = $q.defer();
    var AppSettingQuery = "DELETE FROM ImageGallery WHERE id = ?"; 
    return $cordovaSQLite.execute(db, AppSettingQuery, [Id]).then(
        function (res) {
            return res.rows;
            deferred.resolve(response);
        },
        function (err) {
            console.log(error);
            deferred.reject(error);
            return err;
        });
    return "";
}

//Get image
function getAllImages() {
    var db = window.openDatabase("Tweakers.db", "1.0", "Tweakers", 500000);
    var deferred = $q.defer();
    var AppSettingQuery = 'select * from ImageGallery';
    return $cordovaSQLite.execute(db, AppSettingQuery).then(
        function (res) {
            return res.rows;
            deferred.resolve(response);
        },
        function (err) {
            console.log(error);
            deferred.reject(error);
            return "error";
        });
    return "";
}
