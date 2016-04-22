/**
 * Created by pooja on 13/4/16.
 */

angular.module('logRotator')

    .controller('AdminCtrl', ['$scope', 'fileService', '$state', function ($scope, fileService, $state) {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa');
        /**
         * Display all the folders
         */

        $scope.fileNames=[];
        $scope.displayFolders = function () {
            fileService.get(function (data, err) {
                for (var i = 0; i < data.length; i++) {
                    var folderName = data[i];
                    if (folderName.indexOf('.') === 0) {
                        var a = data.splice(i, 1);
                        --i;
                    }
                }
                $scope.foldersName = data;
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
                    console.log($scope.fileNames)

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

    }]);