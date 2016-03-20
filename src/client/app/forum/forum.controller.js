(function (angular) {
    'use strict';

    angular
        .module('app.forum')
        .controller('ForumController', ForumController);

    ForumController.$inject = ['logger'];
    /* @ngInject */
    function ForumController(logger) {
        var vm = this;

    }
})(this.angular);
