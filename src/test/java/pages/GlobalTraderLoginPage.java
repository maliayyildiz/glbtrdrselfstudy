package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class GlobalTraderLoginPage {
    public GlobalTraderLoginPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath = "//button[@value='Login']")
    public WebElement loginButton;
    @FindBy(id = "email")
    public WebElement emailBox;
    @FindBy(id = "password")
    public WebElement passwordBox;
    @FindBy(xpath = "//*[text()=' Forgot Password?']")
    public WebElement forgetPassword;
}
