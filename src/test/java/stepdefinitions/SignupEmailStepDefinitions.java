package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.GlobalTraderMainPage;
import pages.GlobalTraderSignupPage;
import utilities.ConfigReader;
import utilities.Driver;

import java.util.concurrent.TimeUnit;

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
       Assert.assertEquals(ConfigReader.getProperty("expected_sign_up_title"),actualTitle);
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
        Assert.assertFalse(globalTraderSignupPage.redEmailMessage.isDisplayed());
    }
    @When("user clicks email box and input invalid data {string}")
    public void user_clicks_email_box_and_input_invalid_data(String invalid_data) {
        globalTraderSignupPage.emailBox.sendKeys(invalid_data);
    }
    @Then("user should see red message under email box {string}")
    public void user_should_see_red_message_under_email_box(String red_message) {
       Assert.assertEquals(globalTraderSignupPage.redEmailMessage.getText(),red_message);
    }
    @When("user leave email field blank")
    public void user_leave_email_field_blank() {
       globalTraderSignupPage.emailBox.sendKeys("");
    }
    @When("user use special character in name")
    public void user_use_special_character_in_name() {
       globalTraderSignupPage.nameBox.sendKeys("@");
    }
    @Then("user should see red message under blank email box {string}")
    public void user_should_see_red_message_under_blank_email_box(String emailRedMessage) {
        Assert.assertEquals(emailRedMessage,globalTraderSignupPage.redEmailMessage.getText());
    }
    @When("user input name into name box {string}")
    public void user_input_name_into_name_box(String name) {
       globalTraderSignupPage.nameBox.sendKeys(name);
    }

    @Then("red message should not display")
    public void red_message_should_not_display() {
       Assert.assertFalse(globalTraderSignupPage.redNameMessage.isDisplayed());
    }
    @When("user use special character in name {string}")
    public void user_use_special_character_in_name(String nameWithSpecial) {
        globalTraderSignupPage.nameBox.sendKeys(nameWithSpecial);
    }

    @Then("user see red message {string}")
    public void user_see_red_message(String nameRedMessage) {
        Assert.assertEquals(nameRedMessage,globalTraderSignupPage.redNameMessage.getText());
    }
    @When("user leave name field blank")
    public void user_leave_name_field_blank() {
      globalTraderSignupPage.nameBox.sendKeys("");
    }

    @Then("user should see red message under blank name box {string}")
    public void user_should_see_red_message_under_blank_name_box(String nameBlankMessage) {
        Assert.assertEquals(nameBlankMessage,globalTraderSignupPage.redNameMessage.getText());
    }
    @When("user provide valid phone number {string}")
    public void user_provide_valid_phone_number(String phoneNo) {
        globalTraderSignupPage.phoneBox.sendKeys(phoneNo);
    }

    @Then("user should not see red message under phone box")
    public void user_should_not_see_red_message_under_phone_box() {
      Assert.assertFalse(globalTraderSignupPage.redPhoneMessage.isDisplayed());
    }
    @When("user leave phone box blank")
    public void user_leave_phone_box_blank() {
      globalTraderSignupPage.phoneBox.sendKeys("");
    }

    @Then("user see red message under phone box {string}")
    public void user_see_red_message_under_phone_box(String phoneRedMessage) {
        Assert.assertEquals(phoneRedMessage,globalTraderSignupPage.redPhoneMessage.getText());
    }

    @When("user provide valid password into password box  {string}")
    public void user_provide_valid_password_into_password_box(String valid_password) {
        globalTraderSignupPage.passwordBox.sendKeys(valid_password);
        Driver.getDriver().manage().timeouts().implicitlyWait(2,TimeUnit.SECONDS);
    }

    @Then("user should not see red message under password box")
    public void user_should_not_see_red_message_under_password_box() {
        Assert.assertFalse(globalTraderSignupPage.redPasswordMessage.isDisplayed());
    }

    @When("user provide invalid password into password box {string}")
    public void user_provide_invalid_password_into_password_box(String invalid_password) {
        globalTraderSignupPage.passwordBox.sendKeys(invalid_password);
    }

    @Then("user should see red message under password box {string}")
    public void user_should_see_red_message_under_password_box(String redPasswordMessage) {
       Assert.assertEquals(redPasswordMessage,globalTraderSignupPage.redPasswordMessage.getText());
    }
    @When("user not provide password into password box {string}")
    public void user_not_provide_password_into_password_box(String invalid_password) {
        globalTraderSignupPage.passwordBox.sendKeys(invalid_password);
    }

    @Then("user should see red message under blank password box {string}")
    public void user_should_see_red_message_under_blank_password_box(String redPasswordMessage) {
        Assert.assertEquals(redPasswordMessage,globalTraderSignupPage.redPasswordMessage.getText());
    }
    @When("user must type same password to the confirmation box  {string}")
    public void user_must_type_same_password_to_the_confirmation_box(String rePassword) {
       // globalTraderSignupPage.passwordBox.sendKeys(rePassword);
        globalTraderSignupPage.repasswordBox.sendKeys(rePassword);
    }

    @Then("user should not see red message under confirmation box")
    public void user_should_not_see_red_message_under_confirmation_box() {
        Assert.assertFalse(globalTraderSignupPage.repasswordMessage.isDisplayed());
    }
    @When("user type different password to confirmation box  {string}")
    public void user_type_different_password_to_confirmation_box(String wrongPassword) {
        globalTraderSignupPage.repasswordBox.sendKeys(wrongPassword);
    }

    @Then("user see red message under confirmation box {string}")
    public void user_see_red_message_under_confirmation_box(String message) {
       Assert.assertEquals(message,globalTraderSignupPage.repasswordMessage.getText());
    }
    @Then("user should see success message {string}")
    public void user_should_see_success_message(String success) {
        Assert.assertEquals(success,globalTraderSignupPage.successMessage.getText());
    }

}
