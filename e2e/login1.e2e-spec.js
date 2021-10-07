//import { AppPage } from './app.po';

describe("i-recruit-ng4 App", function() {
  /*let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });*/
  browser.ignoreSynchronization = true;
  browser.get("http://localhost:4200/login");

  it("should login after entering username and password", function() {
    //page.navigateTo();
    //expect(page.getParagraphText()).toEqual('Welcome to app!');
    
    element(by.css("input.form-control.userName")).sendKeys("userName");
    element(by.css("input.form-control.password")).sendKeys("password");
    //var userLoginBtn  = browser.driver.findElement(by.buttonText("Login"));
    
    element(by.buttonText("Login")).click().then(function() {
    	//browser.driver.get("http://localhost:4200/irecruit/profile?access_token=ff29e68d-2f31-4811-adc7-597b7f91ccb3");
    	//browser.driver.get("http://localhost:4200/profiles?access_token=ff29e68d-2f31-4811-adc7-597b7f91ccb3");
    	//browser.pause();
    	//browser.driver.sleep(500);
    	
    	browser.executeAsyncScript(function(callback) {
    	var inj = angular.element(document.body).injector();
    	var reHTTP = inj.get('reHTTP');
    	var myService = inj.get('myService');
    	var someVar = myService.getCurrent().definition.userName;
    	console.log(someVar); // works
    	reHTTP.get('/irecruit/profile?access_token=21e4b4c9-f9e8-4538-8d12-f083cde1aa45').then(function () {
        callback();
    });
});
    });
  });
});