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
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Name can not contain special character]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepdefinitions.SignupEmailStepDefinitions.user_see_red_message(SignupEmailStepDefinitions.java:85)\r\n\tat ✽.user see red message \"Name can not contain special character\"(file:///C:/Users/YSMNI/IdeaProjects/GlbTrdrSelfStudy/src/test/resources/features/glb_signup.feature:28)\r\n",
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
  "status": "passed"
});
formatter.step({
  "name": "user see red message under phone box \"Please Enter Your Phone.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_see_red_message_under_phone_box(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Please Enter Your Phone.]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepdefinitions.SignupEmailStepDefinitions.user_see_red_message_under_phone_box(SignupEmailStepDefinitions.java:112)\r\n\tat ✽.user see red message under phone box \"Please Enter Your Phone.\"(file:///C:/Users/YSMNI/IdeaProjects/GlbTrdrSelfStudy/src/test/resources/features/glb_signup.feature:40)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "screenshoots");
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
  "name": "user_should_able_to_signup_with_valid_password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hooks"
    }
  ]
});
formatter.step({
  "name": "user provide valid password into password box and click signup button \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_provide_valid_password_into_password_box_and_click_signup_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not see red message under password box",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_should_not_see_red_message_under_password_box()"
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
  "name": "user_should_not_able_to_signup_with_invalid_password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hooks"
    }
  ]
});
formatter.step({
  "name": "user provide invalid password into password box or and click signup button \"123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_provide_invalid_password_into_password_box_or_and_click_signup_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see red message under password box \"Please Enter Atleast 5 Character Password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_should_see_red_message_under_password_box(java.lang.String)"
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
  "name": "user_should_not_able_to_signup_without_providing_password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hooks"
    }
  ]
});
formatter.step({
  "name": "user not provide password into password box or and click signup button \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_not_provide_password_into_password_box_or_and_click_signup_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see red message under blank password box \"Please Enter Atleast 5 Character Password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_should_see_red_message_under_blank_password_box(java.lang.String)"
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
  "name": "user_should_retype_same_password_to_confirmation_box",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hooks"
    }
  ]
});
formatter.step({
  "name": "user must type same password to the confirmation box and click sigup button \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_must_type_same_password_to_the_confirmation_box_and_click_sigup_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not see red message under confirmation box",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_should_not_see_red_message_under_confirmation_box()"
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
  "name": "user_do_not_retype_same_password_to_confirmation_box",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hooks"
    }
  ]
});
formatter.step({
  "name": "user type different password to confirmation box and click signup button \"123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_type_different_password_to_confirmation_box_and_click_signup_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see red message under confirmation box \"Password doesn\u0027t match!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignupEmailStepDefinitions.user_see_red_message_under_confirmation_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});