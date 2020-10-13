@hooks
Feature: glb_signup

  Background:
    Given user is on the global trader page
    When  user clicks on Join Now button
    Given user is on Login/Registration page
  Scenario: user_should_signup_with_valid_email
    When  user clicks email box and input valid data "mv@vm.com"
    When  clicks signup button
    Then  user should not see red message under email box

  Scenario: user_should_not_signup_with_invalid_email
    When  user clicks email box and input invalid data "mw"
    When  clicks signup button
    Then  user should see red message under email box


