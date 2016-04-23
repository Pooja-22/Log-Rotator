/**
 * Created by pooja on 13/4/16.
 */

angular.module('logRotator')

    .controller('AdminCtrl', ['$scope', 'fileService', '$state', function ($scope, fileService, $state) {

        /**
         * Display all the folders
         */

        $scope.fileNames = [];
        $scope.displayFolders = function () {
            fileService.get(function (data, err) {
                if (data.length !== 0) {
                    $scope.foldersName = data;
                } else {
                    $scope.message = 'No Logs';
                }
                $state.go('admin.folders');
            });
        };

        /**
         * Display all the files in a particular folder
         * @param folder
         */

        $scope.displayFileNames = function (folder, index) {
            $scope.folderName = folder;
            fileService.get({folder: folder}, function (data, err) {
                if (data.length === 0) {
                    $scope.fileNames = '';
                    $scope.message = "This folder is empty";
                    $scope.index = index;
                } else {
                    $scope.message = '';
                    $scope.index = index;
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
                $state.go('admin.folders.files.fileData');
            });
        };

        /**
         * Back button functionality
         */

        $scope.back = function () {
            window.history.back();
        }

    }]);