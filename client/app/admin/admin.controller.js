/**
 * Created by pooja on 13/4/16.
 */

angular.module('logRotator')
    .controller('AdminCtrl', ['$scope', 'fileService', function ($scope, fileService) {

        /**
         * Display all the files inside a particular folder
         */

        $scope.displayFileNames = function () {
            fileService.getFilesName(function (data, err) {
                $scope.fileNames = data;
            });
        };

        $scope.displayFileData = function (file) {
            fileService.getFileData({file: file}, function (data, err) {
                $scope.fileData = data;
            });
        }
    }]);