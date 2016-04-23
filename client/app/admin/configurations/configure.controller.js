/**
 * Created by pooja on 22/4/16.
 */

angular.module('logRotator')

    .controller('configureCtrl', ['$scope', 'fileService', function ($scope, fileService) {

        $scope.configure = {};
        $scope.filePath = '';
        $scope.fileName = '';
        $scope.backUpCount = '';
        $scope.backUpHour = '';
        $scope.backUpMinute = '';
        $scope.backUpSecond = '';

        $scope.save = function () {
            var configure = {
                filePath: $scope.filePath,
                fileName: $scope.fileName,
                backUpCount: $scope.backUpCount,
                time: {
                    backUpHour: $scope.backUpHour,
                    backUMinute: $scope.backUpMinute,
                    backUpSecond: $scope.backUpSecond
                }
            };
            console.log(configure);
            fileService.saveConfigurations(configure, function (data, err) {
            });
        }


    }]);