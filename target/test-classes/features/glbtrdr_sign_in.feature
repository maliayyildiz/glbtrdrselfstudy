
  Feature: Global Trader Login

    Background: Login should be accessible with valid credentials
      Given user is on the global trader page
      When user clicks sign in button
      When user is on Login page "Login"


    Scenario: As a user, I should able to access to the application with valid credentials
      When user input valid data into username box "muzu@sami.com"
      When user input valid data into password box "12345"
      When user clicks login button
      Then verify user is on the profile page "My Order"


    Scenario: As a user, I should not able to access to the application with invalid username
      When user provide invalid username "muzu"
      When user input valid data into password box "12345"
      When user clicks login button
      When user is on Login page "Login"

    Scenario: As a user, I should not able to access to the application with invalid password
      When user input valid data into username box "muzu@sami.com"
      When user provide invalid password "muzu"
      When user clicks login button
      When user is on Login page "Login"

    Scenario: As a user, I should not able to access to the application with invalid credentials
      When user provide invalid username "muzu"
      When user provide invalid password "muzu"
      When user clicks login button
      When user is on Login page "Login"




