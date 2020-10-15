@forgotpassword
  Feature: Global Trader Login Page Forget Password
    Background: Login should be accessible with valid credentials
      Given user is on the global trader page
      When user clicks sign in button
      When user is on Login page "Login"

   Scenario: if user forget the password, user can recreate password by clicking forget password button
     When user clicks forget password button on login page
     When user is on "Forgot Form" page
     When user input valid email to email box
     When user clicks forget password button
     Then verify new password link has been send

