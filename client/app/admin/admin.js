/**
 * Created by pooja on 13/4/16.
 */

angular.module('logRotator')

    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider

            .state('admin', {
                url: '/admin',
                templateUrl: 'app/admin/admin.html',
                controller: 'AdminCtrl'
            })

            .state('admin.folders', {
                url: '/folders',
                templateUrl: 'app/admin/views/folders.html',
                controller: 'AdminCtrl'
            })

            .state('admin.folders.files', {
                url: '/files',
                templateUrl: 'app/admin/views/files.html',
                controller: 'AdminCtrl'
            })

            .state('admin.folders.files.fileData', {
                url: '/',
                templateUrl: 'app/admin/views/fileData.html',
                controller: 'AdminCtrl'
            });

    }]);

