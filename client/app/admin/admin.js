/**
 * Created by pooja on 13/4/16.
 */

angular.module('logRotator')

    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider

            .state('admin', {
                url: '/admin',
                templateUrl: 'app/admin/admin.html'
            })

            .state('admin.folders', {
                url: '/folders',
                templateUrl: 'app/admin/Views/folders.html'
            })

            .state('admin.folders.files', {
                url: '/files',
                templateUrl: 'app/admin/Views/files.html'
            })

            .state('admin.folders.files.fileData', {
                url: '/',
                templateUrl: 'app/admin/Views/fileData.html'
            });

    }]);

