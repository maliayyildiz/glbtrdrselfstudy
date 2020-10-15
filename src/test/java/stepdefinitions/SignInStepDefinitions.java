package stepdefinitions;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import pages.GlobalTraderForgetPasswordPage;
import pages.GlobalTraderLoginPage;
import pages.GlobalTraderMainPage;
import utilities.Driver;

import java.util.concurrent.TimeUnit;

public class SignInStepDefinitions {
    GlobalTraderMainPage globalTraderMainPage = new GlobalTraderMainPage();
    GlobalTraderLoginPage globalTraderLoginPage = new GlobalTraderLoginPage();
    GlobalTraderForgetPasswordPage globalTraderForgetPasswordPage = new GlobalTraderForgetPasswordPage();

    @When("user clicks sign in button")
    public void user_clicks_sign_in_button() {
      globalTraderMainPage.signInButton.click();
    }

    @When("user is on Login page {string}")
    public void user_is_on_Login_page(String loginTitle) {
       Assert.assertTrue(Driver.getDriver().getTitle().contains(loginTitle));
    }

    @When("user input valid data into username box {string}")
    public void user_clicks_username_box_and_input_valid_data(String username) {
        globalTraderLoginPage.emailBox.sendKeys(username);
    }

    @When("user input valid data into password box {string}")
    public void user_clicks_password_box_and_input_valid_data(String password) {
       globalTraderLoginPage.passwordBox.sendKeys(password);
    }

    @When("user clicks login button")
    public void user_clicks_login_button()  {
        globalTraderLoginPage.loginButton.click();
    }

    @Then("verify user is on the profile page {string}")
    public void user_should_be_on_user_profile_page(String title) {
      Assert.assertEquals(title,Driver.getDriver().getTitle());
    }
    @When("user provide invalid username {string}")
    public void user_provide_invalid_username(String invalid_username) {
        globalTraderLoginPage.emailBox.sendKeys(invalid_username);
    }
    @When("user provide invalid password {string}")
    public void user_provide_invalid_password(String invalid_password) {
        globalTraderLoginPage.emailBox.sendKeys(invalid_password);
    }
    @When("user clicks forget password button on login page")
    public void user_clicks_forget_password_button_on_login_page() {
        globalTraderLoginPage.forgetPassword.click();
    }

    @When("user is on {string} page")
    public void user_is_on_page(String string) {
        Assert.assertEquals(string,globalTraderForgetPasswordPage.forgetFormText.getText());
    }

    @When("user input valid email to email box")
    public void user_input_valid_email_to_email_box() {
        globalTraderForgetPasswordPage.forgetEmailBox.sendKeys("maliayyildiz61@gmail.com");
    }

    @When("user clicks forget password button")
    public void user_clicks_forget_password_button() {
        globalTraderForgetPasswordPage.forgetPasswordButton.click();
    }

    @Then("verify new password link has been send")
    public void verify_new_password_link_has_been_send() {
        Assert.assertTrue(globalTraderForgetPasswordPage.confirmationMessage.isDisplayed());
    }


}
