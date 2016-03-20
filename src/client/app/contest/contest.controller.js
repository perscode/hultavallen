(function (angular) {
    'use strict';

    angular
        .module('app.contest')
        .controller('ContestController', ContestController);

    ContestController.$inject = ['logger','dataservice','$q'];
    /* @ngInject */
    function ContestController(logger,dataservice,$q) {
        var vm = this;
        vm.title = 'Deltävling 1';
        vm.contests = '';
        activate();

        function activate() {
            var promises = [getContests()];
            return $q.all(promises).then(function() {
                logger.info('Activated Dashboard View');
            });
        }

        function getContests() {
            return dataservice.getContests().then(function (data) {
                vm.contests = data;
                return vm.contests;
            });
        }
    }
})(this.angular);
