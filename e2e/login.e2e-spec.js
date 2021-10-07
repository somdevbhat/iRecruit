describe('login page', function() {
    browser.driver.get('http://localhost:4200/login');
    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });
    it('should render login page', function(done) {

      // Checking the current url
      var currentUrl = browser.driver.getCurrentUrl();
      expect(currentUrl).toMatch('/login');
      done();
    });
    it('should sign in', function(done) {

      // Find page elements
      var userNameField = browser.driver.findElement(by.css("input.form-control.userName"));
      var userPassField = browser.driver.findElement(by.css("input.form-control.password"));
      var userLoginBtn  = browser.driver.findElement(by.id("loginBtn"));

      // Fill input fields
      userNameField.sendKeys('sbhattacharya@osius.com');
      userPassField.sendKeys('pass$007');

      // Ensure fields contain what we've entered
      expect(userNameField.getAttribute('value')).toEqual('sbhattacharya@osius.com');
      expect(userPassField.getAttribute('value')).toEqual('pass$007');

      // Click to sign in - waiting for Angular as it is manually bootstrapped.
      /*userLoginBtn.click().then(function() {
        browser.waitForAngular();
        expect(browser.driver.getCurrentUrl()).toMatch('/profiles');
      }, 10000);*/
      userLoginBtn.click();
      
      var request = require('request');
      var options = {
          headers: {
        	  'Authorization':'Basic aXJlY3J1aXQtc2VydmljZToxMjNvc2kxMjM='
          }
      };
      request.post('http://localhost:4200/irecruit/oauth/token?grant_type=password&username=sbhattacharya@osius.com&password=pass$007', options, callback);

      function callback(error, response, body) {
          if (!error && response.statusCode == 200) {
              var info = JSON.parse(body);
              console.log(info);
          }
      }
      return browser.driver.wait(function() {
            return browser.driver.getCurrentUrl().then(function(url) {//done();
                return /profiles/.test(url);
            });
      }, 10000);
      
      done();
    });
});