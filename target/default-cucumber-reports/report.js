$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/glb_signup.feature");
formatter.feature({
  "name": "glb_signup",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@hooks"
    }
  ]
});
formatter.background({
  "name": "user is on home page and click join now button",
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
  "name": "user clicks on Join Now button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_clicks_on_Join_Now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Login_Registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_is_on_Login_Registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user_should_signup_with_valid_email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hooks"
    }
  ]
});
formatter.step({
  "name": "user clicks email box and input valid data \"mv@vm.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_clicks_email_box_and_input_valid_data(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks signup button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.clicks_signup_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not see red message under email box",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_should_not_see_red_message_under_email_box()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user is on home page and click join now button",
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
  "name": "user clicks on Join Now button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_clicks_on_Join_Now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Login_Registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_is_on_Login_Registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user_should_not_signup_with_invalid_email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hooks"
    }
  ]
});
formatter.step({
  "name": "user clicks email box and input invalid data \"mw\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_clicks_email_box_and_input_invalid_data(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks signup button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.clicks_signup_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see red message under email box \"Please Enter Valid Email Address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_should_see_red_message_under_email_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user is on home page and click join now button",
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
  "name": "user clicks on Join Now button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_clicks_on_Join_Now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Login_Registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_is_on_Login_Registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user_should_not_leave_email_field_blank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hooks"
    }
  ]
});
formatter.step({
  "name": "user leave email field blank",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_leave_email_field_blank()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see red message under blank email box \"Please Enter Email Address\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_should_see_red_message_under_blank_email_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user is on home page and click join now button",
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
  "name": "user clicks on Join Now button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_clicks_on_Join_Now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Login_Registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_is_on_Login_Registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user_should_input_name_in_name_box",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hooks"
    }
  ]
});
formatter.step({
  "name": "user input name into name box \"Ali\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_input_name_into_name_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "red message should not display",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.red_message_should_not_display()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user is on home page and click join now button",
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
  "name": "user clicks on Join Now button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_clicks_on_Join_Now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Login_Registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_is_on_Login_Registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user_should_not_input_special_character_for_name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hooks"
    }
  ]
});
formatter.step({
  "name": "user use special character in name \"Ali*\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_use_special_character_in_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see red message \"Name can not contain special character\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_see_red_message(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Name can not contain special character]\u003e but was:\u003c[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat stepdefinitions.SignupEmailStepDefinitions.user_see_red_message(SignupEmailStepDefinitions.java:85)\n\tat ✽.user see red message \"Name can not contain special character\"(file:///Users/mehmetali/IdeaProjects/glbtrdrselfstudy/src/test/resources/features/glb_signup.feature:28)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshoots");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user is on home page and click join now button",
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
  "name": "user clicks on Join Now button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_clicks_on_Join_Now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Login_Registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_is_on_Login_Registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user_should_not_leave_name_field_blank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hooks"
    }
  ]
});
formatter.step({
  "name": "user leave name field blank",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_leave_name_field_blank()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see red message under blank name box \"Please Enter Your Name.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_should_see_red_message_under_blank_name_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user is on home page and click join now button",
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
  "name": "user clicks on Join Now button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_clicks_on_Join_Now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Login_Registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_is_on_Login_Registration_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user_should_provide_valid_phone_number",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hooks"
    }
  ]
});
formatter.step({
  "name": "user provide valid phone number \"0773091590\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_provide_valid_phone_number(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not see red message under phone box",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_should_not_see_red_message_under_phone_box()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user is on home page and click join now button",
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
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: Unable to receive message from renderer\n  (Session info: chrome\u003d86.0.4240.80)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Mehmets-MacBook-Air.local\u0027, ip: \u0027fe80:0:0:0:8bf:751d:203c:15f4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.80, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/2g/s60gg7qj3xx...}, goog:chromeOptions: {debuggerAddress: localhost:55663}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4be2f5417bc62a6ae0d7493337241e5e\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat stepdefinitions.SignupEmailStepDefinitions.user_is_on_the_global_trader_page(SignupEmailStepDefinitions.java:21)\n\tat ✽.user is on the global trader page(file:///Users/mehmetali/IdeaProjects/glbtrdrselfstudy/src/test/resources/features/glb_signup.feature:5)\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on Join Now button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_clicks_on_Join_Now_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on Login_Registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_is_on_Login_Registration_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "user_leave_phone_box_blank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hooks"
    }
  ]
});
formatter.step({
  "name": "user leave phone box blank",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_leave_phone_box_blank()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user see red message under phone box \"Please Enter Your Phone.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_see_red_message_under_phone_box(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", "screenshoots");
formatter.after({
  "status": "passed"
});
});