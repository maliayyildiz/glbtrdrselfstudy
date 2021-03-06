package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class GlobalTraderMainPage {
    public GlobalTraderMainPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(linkText = "Join Now")
    public WebElement  joinNowButton;
    @FindBy(linkText = "Sign In")
    public WebElement signInButton;

}
