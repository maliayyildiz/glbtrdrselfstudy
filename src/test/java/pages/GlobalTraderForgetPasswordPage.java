package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class GlobalTraderForgetPasswordPage {
    public GlobalTraderForgetPasswordPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath = "(//h2)[1]")
    public WebElement forgetFormText;
    @FindBy(id = "forgot_email")
    public WebElement forgetEmailBox;
    @FindBy(xpath = "//*[text()='Forgot Password']")
    public WebElement forgetPasswordButton;
    @FindBy(xpath = "//*[text()='Your new Password Send Successfully On Your Email']")
    public WebElement confirmationMessage;
}
