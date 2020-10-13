package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import static junit.framework.Assert.*;
import pages.GlobalTraderMainPage;
import pages.GlobalTraderSignupPage;
import utilities.ConfigReader;
import utilities.Driver;

public class SignupEmailStepDefinitions {
    GlobalTraderMainPage globalTraderMainPage = new GlobalTraderMainPage();
    GlobalTraderSignupPage globalTraderSignupPage= new GlobalTraderSignupPage();

    @Given("user is on the global trader page")
    public void user_is_on_the_global_trader_page() {
        Driver.getDriver().get(ConfigReader.getProperty("glb_url"));
    }

    @When("user clicks on Join Now button")
    public void user_clicks_on_Join_Now_button() {
        globalTraderMainPage.joinNowButton.click();
    }

    @Given("user is on Login_Registration page")
    public void user_is_on_Login_Registration_page() {
       String actualTitle = Driver.getDriver().getTitle();
       assertEquals(ConfigReader.getProperty("expected_sign_up_title"),actualTitle);
    }

    @When("user clicks email box and input valid data {string}")
    public void user_clicks_email_box_and_input_valid_data(String valid_email) {
        globalTraderSignupPage.emailBox.sendKeys(valid_email);
    }

    @When("clicks signup button")
    public void clicks_signup_button() {
        globalTraderSignupPage.signUpButton.click();
    }

    @Then("user should not see red message under email box")
    public void user_should_not_see_red_message_under_email_box() {
        assertFalse(globalTraderSignupPage.redEmailMessage.isDisplayed());
    }
    @When("user clicks email box and input invalid data {string}")
    public void user_clicks_email_box_and_input_invalid_data(String invalid_data) {
        globalTraderSignupPage.emailBox.sendKeys(invalid_data);
    }
    @Then("user should see red message under email box")
    public void user_should_see_red_message_under_email_box() {
       assertTrue(globalTraderSignupPage.redEmailMessage.isDisplayed());
    }




}
