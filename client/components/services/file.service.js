/**
 * Created by pooja on 13/4/16.
 */

angular.module('logRotator')
    .factory('fileService', ['$resource', function ($resource) {
        return $resource('/api/backUp/:file', {}, {
            getFilesName: {
                method: 'GET',
                isArray: true
            },
            getFileData: {
                method: 'GET'
            }
        });
    }]);
