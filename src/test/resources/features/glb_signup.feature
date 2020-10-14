@hooks
Feature: glb_signup

  Background:user is on home page and click join now button
    Given user is on the global trader page
    When  user clicks on Join Now button
    Given user is on Login_Registration page
  Scenario: user_should_signup_with_valid_email
    When  user clicks email box and input valid data "mv@vm.com"
    When  clicks signup button
    Then  user should not see red message under email box

  Scenario: user_should_not_signup_with_invalid_email
    When  user clicks email box and input invalid data "mw"
    When  clicks signup button
    Then  user should see red message under email box "Please Enter Valid Email Address"

  Scenario: user_should_not_leave_email_field_blank
    When user leave email field blank
    Then user should see red message under blank email box "Please Enter Email Address"

  Scenario: user_should_input_name_in_name_box
    When user input name into name box "Ali"
    Then red message should not display

  Scenario: user_should_not_input_special_character_for_name
    When user use special character in name "Ali*"
    Then user see red message "Name can not contain special character"

  Scenario: user_should_not_leave_name_field_blank
    When user leave name field blank
    Then user should see red message under blank name box "Please Enter Your Name."

  Scenario:  user_should_provide_valid_phone_number
    When user provide valid phone number "0773091590"
    Then user should not see red message under phone box

  Scenario:  user_leave_phone_box_blank
    When user leave phone box blank
    Then user see red message under phone box "Please Enter Your Phone."

  Scenario: user_should_able_to_signup_with_valid_password
    When user provide valid password into password box and click signup button "12345"
    Then user should not see red message under password box

  Scenario: user_should_not_able_to_signup_with_invalid_password
    When user provide invalid password into password box or and click signup button "123"
    Then user should see red message under password box "Please Enter Atleast 5 Character Password."

  Scenario: user_should_not_able_to_signup_without_providing_password
    When user not provide password into password box or and click signup button ""
    Then user should see red message under blank password box "Please Enter Atleast 5 Character Password."

  Scenario: user_should_retype_same_password_to_confirmation_box
    When user must type same password to the confirmation box and click sigup button "12345"
    Then user should not see red message under confirmation box

  Scenario:  user_do_not_retype_same_password_to_confirmation_box
    When user type different password to confirmation box and click signup button "123"
    Then user see red message under confirmation box "Password doesn't match!"