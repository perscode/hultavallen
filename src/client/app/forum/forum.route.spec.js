/* jshint -W117, -W030 */
describe('forum routes', function () {
    describe('state', function () {
        var view = 'app/forum/forum.html';

        beforeEach(function() {
            module('app.forum', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        it('should map state forum to url /forum ', function() {
            expect($state.href('forum', {})).to.equal('/forum');
        });

        it('should map /forum route to forum View template', function () {
            expect($state.get('forum').templateUrl).to.equal(view);
        });

        it('of forum should work with $state.go', function () {
            $state.go('forum');
            $rootScope.$apply();
            expect($state.is('forum'));
        });
    });
});
