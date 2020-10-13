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
  "name": "",
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
  "name": "user is on Login/Registration page",
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
  "name": "",
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
  "name": "user is on Login/Registration page",
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
  "name": "user should see red message under email box",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_should_see_red_message_under_email_box()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});