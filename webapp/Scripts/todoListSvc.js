/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for
 * license information.
 */

'use strict';
angular.module('todoApp')
    .factory('todoListSvc', ['$http', function ($http) {
        return {
            getItems: function () {
                return $http.get('http://40.121.0.118/api/todolist');
            },
            getItem: function (id) {
                return $http.get('http://40.121.0.118/api/todolist/' + id);
            },
            postItem: function (item) {
                return $http.post('http://40.121.0.118/api/todolist/', item);
            },
            putItem: function (item) {
                return $http.put('http://40.121.0.118/api/todolist/', item);
            },
            deleteItem: function (id) {
                return $http({
                    method: 'DELETE',
                    url: 'http://40.121.0.118/api/todolist/' + id
                });
            }
        };
    }]);
