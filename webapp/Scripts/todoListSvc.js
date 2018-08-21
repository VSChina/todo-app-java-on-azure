/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for
 * license information.
 */

'use strict';
angular.module('todoApp')
    .factory('todoListSvc', ['$http', function ($http) {
        var endpoint = '127.0.0.1';
        return {
            getItems: function () {
                return $http.get('http://' + endpoint + '/api/todolist');
            },
            getItem: function (id) {
                return $http.get('http://' + endpoint + '/api/todolist/' + id);
            },
            postItem: function (item) {
                return $http.post('http://' + endpoint + '/api/todolist/', item);
            },
            putItem: function (item) {
                return $http.put('http://' + endpoint + '/api/todolist/', item);
            },
            deleteItem: function (id) {
                return $http({
                    method: 'DELETE',
                    url: 'http://' + endpoint + '/api/todolist/' + id
                });
            }
        };
    }]);
