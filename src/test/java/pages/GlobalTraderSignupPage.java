package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class GlobalTraderSignupPage {
    public GlobalTraderSignupPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy (id = "email")
    public WebElement emailBox;
    @FindBy (xpath = "//input[@name='name']")
    public WebElement nameBox;
    @FindBy (id = "mobile")
    public WebElement phoneBox;
    @FindBy (id = "password")
    public WebElement passwordBox;
    @FindBy(id = "re_password")
    public WebElement repasswordBox;
    @FindBy (xpath = "(//button[@name='submit'])[1]")
    public WebElement signUpButton;
    @FindBy(id = "alert_email_address")
    public WebElement redEmailMessage;





}
