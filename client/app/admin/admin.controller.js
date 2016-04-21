/**
 * Created by pooja on 13/4/16.
 */

angular.module('logRotator')

    .controller('AdminCtrl', ['$scope', 'fileService', '$state', function ($scope, fileService, $state) {

        $scope.showList = false;

        $scope.call = function(){
            $scope.showList = !$scope.showList;
            console.log(".......................")
        };

        /**
         * Display all the folders
         */

        $scope.displayFolders = function () {
            fileService.get(function (data, err) {
                $scope.foldersName = data;
            });
        };

        /**
         * Display all the files in a particular folder
         * @param folder
         */

        $scope.displayFileNames = function (folder) {
            if (folder.indexOf('.') === 0) {
                alert('Invalid Folder');
                return;
            }
            $scope.folderName = folder;
            fileService.get({folder: folder}, function (data, err) {
                if (data.length === 0) {
                    $scope.fileNames = '';
                    $scope.message = "This folder is empty";
                } else {
                    $scope.message = '';
                    $scope.fileNames = data;
                }
            });
        };

        /**
         * Display the data in a file
         * @param file
         */

        $scope.displayFileData = function (file) {
            fileService.getFilesData({folder: $scope.folderName, file: file}, function (data, err) {
                if (data.data) {
                    $scope.fileData = data.data;
                } else {
                    $scope.fileData = data.emptyFileMessage;
                }
            });
        };

    }]);