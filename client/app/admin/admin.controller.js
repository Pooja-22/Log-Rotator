/**
 * Created by pooja on 13/4/16.
 */

angular.module('logRotator')

    .controller('AdminCtrl', ['$scope', 'fileService', '$state', function ($scope, fileService, $state) {

        $scope.showFilesNames = true;
        $scope.showFoldersNames = true;

        //$scope.showFiles = function(){
        //    $scope.showFilesNames = ! $scope.showFilesNames;
        //};
        //
        //$scope.showFolders = function(){
        //    $scope.showFoldersNames = ! $scope.showFoldersNames;
        //};

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

        $scope.displayFileNames = function (folder,index) {
            if (folder.indexOf('.') === 0) {
                alert('Invalid Folder');
                $scope.message = "This folder is Invalid";
                return;
            }
            $scope.folderName = folder;
            fileService.get({folder: folder}, function (data, err) {
                if (data.length === 0) {
                    $scope.fileNames = '';
                    $scope.message = "This folder is empty";
                    $scope.index = index;
                } else {
                    $scope.message = '';
                    $scope.fileNames = data;
                    $scope.index = index;
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