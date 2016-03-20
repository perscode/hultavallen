(function() {
    'use strict';

    angular
        .module('app.forum')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'forum',
                config: {
                    url: '/forum',
                    templateUrl: 'app/forum/forum.html',
                    controller: 'ForumController',
                    controllerAs: 'vm',
                    title: 'deltävlingar',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> Forum'
                    }
                }
            }
        ];
    }
})();
