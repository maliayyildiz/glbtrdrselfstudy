
  Feature: Global Trader Sign Up

    Scenario: As a user, I should able to sign up with valid data to all mandatory fields
      Given user is on the global trader page
      When  user clicks on Join Now button
      Given user is on Login_Registration page
      When  user clicks email box and input valid data "mv3@vm.com"
      When user input name into name box "Ali"
      When user provide valid phone number "0777691510"
      When user provide valid password into password box  "616161"
      When user must type same password to the confirmation box  "616161"
      When  clicks signup button
      Then user should see success message "Success! !"