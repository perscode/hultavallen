(function() {
    'use strict';

    angular
        .module('app.contest')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'contest',
                config: {
                    url: '/contest',
                    templateUrl: 'app/contest/contest.html',
                    controller: 'ContestController',
                    controllerAs: 'vm',
                    title: 'deltävlingar',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-dashboard"></i> Deltävlingar'
                    }
                }
            }
        ];
    }
})();
