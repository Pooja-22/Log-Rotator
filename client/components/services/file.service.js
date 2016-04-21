/**
 * Created by pooja on 13/4/16.
 */

angular.module('logRotator')

    .factory('fileService', ['$resource', function ($resource) {

        return $resource('/api/backUp/:folder/:file', {}, {

            /**
             * Get request to retrieve folder and file names
             */

            get: {
                method: 'GET',
                isArray: true
            },

            /**
             * Get request to retrieve file data
             */

            getFilesData: {
                method: 'GET'
            }
        });
    }]);
