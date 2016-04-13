/**
 * Created by pooja on 13/4/16.
 */

'use strict';

/**
 * Create angular app
 */

angular.module('logRotator', [
    'ngResource',
    'ui.router'
])

/**
 * Define Default Route
 */

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/admin');

    });
