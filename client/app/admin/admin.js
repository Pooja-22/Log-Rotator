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
            });

    }]);

