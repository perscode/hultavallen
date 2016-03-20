/* jshint -W117, -W030 */
describe('contest routes', function () {
    describe('state', function () {
        var view = 'app/contest/contest.html';

        beforeEach(function() {
            module('app.contest', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        it('should map state contest to url /contest ', function() {
            expect($state.href('contest', {})).to.equal('/contest');
        });

        it('should map /contest route to contest View template', function () {
            expect($state.get('contest').templateUrl).to.equal(view);
        });

        it('of contest should work with $state.go', function () {
            $state.go('contest');
            $rootScope.$apply();
            expect($state.is('contest'));
        });
    });
});
