describe('This is the first example of protractor', () => {
    it('Url debería ser.', () => {
    	browser.ignoreSynchronization = true ;
        browser.get( 'http://www.google.com' );
        expect(browser.getTitle()).toEqual( 'Google' ); 
    });
});