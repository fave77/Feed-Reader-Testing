/*  The test suites are contained within a wrapper function
    in order to ensure that the specs run only when the DOM
    is fully loaded and accessible for performing tests.
*/
$(function() {
    describe('RSS Feeds', function() {
        /*  The following spec tests to make sure that the allFeeds variable
            has been defined and that it is not empty.
        */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*  The following spec loops through each feed
            in the allFeeds object and ensures it has a URL defined
            and that the URL is not empty.
        */
        it('url should be defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(typeof feed.url).toBe('string');
                expect(feed.url.length).not.toBe(0);
            });
        });

        /*  The following spec loops through each feed
            in the allFeeds object and ensures it has a name defined
            and that the name is not empty.
        */
         it('name should be defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(typeof feed.name).toBe('string');
                expect(feed.name.length).not.toBe(0);
            });
        });

    });

    describe('The menu', function() {
        /*  The following spec ensures that the menu element is
            hidden by default.
        */
        it('should be hidden by default', function() {
            const hiddenMenu = $('body').hasClass('menu-hidden');
            expect(hiddenMenu).toBe(true);
        });

        /*  The following spec ensures that the menu changes
            visibility when the menu icon is clicked.
        */
        it('should change visibility based on click', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    describe('Initial Entries', function() {
        /*Calling the 'loadFeed' function before running the spec*/
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        /*  The following spec ensures that when the 'loadFeed'
            function is called and completes its work, there is at least
            a single .entry element within the '.feed' container.
        */
        it('should be in the .feed container', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });

    });

    describe('New Feed Selection', function() {
        let [initialEntry, finalEntry] = [undefined, undefined];

        /*Calling 'loadFeed' function with two different feeds*/
         beforeEach(function(done) {
            $('.feed').empty();
            loadFeed(1, function() {
                initialEntry = $('.feed').find(allFeeds.url);
                loadFeed(0, function() {
                    finalEntry = $('.feed').find(allFeeds.url);
                    done();
                });
            });
         });

        /*  The following spec ensures that when a new feed is loaded
            by the 'loadFeed' function that the content actually changes.
        */
         it('should enable content switching', function(done) {
            expect(initialEntry.html()).not.toBe(finalEntry.html());
            done();
        });
    });
}());