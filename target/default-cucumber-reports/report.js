$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/glbltrdr_sign_in_forge_password.feature");
formatter.feature({
  "name": "Global Trader Login Page Forget Password",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@forgotpassword"
    }
  ]
});
formatter.background({
  "name": "Login should be accessible with valid credentials",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the global trader page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_is_on_the_global_trader_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDefinitions.user_clicks_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Login page \"Login\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDefinitions.user_is_on_Login_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "if user forget the password, user can recreate password by clicking forget password button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@forgotpassword"
    }
  ]
});
formatter.step({
  "name": "user clicks forget password button on login page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDefinitions.user_clicks_forget_password_button_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"Forgot Form\" page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDefinitions.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user input valid email to email box",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDefinitions.user_input_valid_email_to_email_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks forget password button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDefinitions.user_clicks_forget_password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify new password link has been send",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDefinitions.verify_new_password_link_has_been_send()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[text()\u003d\u0027Your new Password Send Successfully On Your Email\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.75)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-NH68CP9\u0027, ip: \u002710.49.171.31\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.75, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\YSMNI\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53206}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: dcdc74428fefcc2005e27012cd1702c7\n*** Element info: {Using\u003dxpath, value\u003d//*[text()\u003d\u0027Your new Password Send Successfully On Your Email\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\r\n\tat stepdefinitions.SignInStepDefinitions.verify_new_password_link_has_been_send(SignInStepDefinitions.java:77)\r\n\tat ✽.verify new password link has been send(file:///C:/Users/YSMNI/IdeaProjects/GlbTrdrSelfStudy/src/test/resources/features/glbltrdr_sign_in_forge_password.feature:13)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshoots");
formatter.after({
  "status": "passed"
});
});