(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger', '$interval'];
    /* @ngInject */
    function DashboardController($q, dataservice, logger,$interval) {
        var vm = this;
        vm.clock = $interval(function(){
            vm.date = moment().format('MMMM Do YYYY, HH:mm:ss');
        }, 1000);
        vm.news = {
            title: 'Hultavallen',
            description: 'Hultavallenmästerskapen 2016 blir tävlingens fjärde iteration, i år kommer spetskompetens ' +
                         'inom följande områden eventuellt vara gynsamma:' +
                         'Bombdesarmering, konvergerande rekursiva matematiska talföljder på explicit form ' +
                         'samt kast med litet ägg.'
        };
        vm.people = [];
        vm.title = 'Dashboard';

        activate();

        function activate() {
            var promises = [getPeople()];
            return $q.all(promises).then(function() {
                logger.info('Activated Dashboard View');
            });
        }

        function getPeople() {
            return dataservice.getPeople().then(function (data) {
                vm.people = data;
                return vm.people;
            });
        }
    }
})();
