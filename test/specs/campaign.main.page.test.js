import CampaignPage from "../pageobjects/Campaign.MainPage";
import OurCarNavigationPane from "../pageobjects/CampaignPage.OurCars";
import MenuNavigationPane from "../pageobjects/CampaignPage.Menu";

describe('A Million Lives Campaign Homepage', () => {
    const  timeout=20000;

    before( async () =>{
        await CampaignPage.open()
        await CampaignPage.acceptCookiesButton.click();
    });

    beforeEach(async () =>{
        await CampaignPage.open()
    });
    
    it('should contain the Model Intro after the page loads' , async () => {
        await CampaignPage.modelIntro.waitForDisplayed({timeout});
        await expect(CampaignPage.modelIntro).toHaveTextContaining(CampaignPage.introText);
    });

    it('should contain Our Car and Menu Navigation Buttons', async () => {
        await expect(OurCarNavigationPane.ourCarsButton).toBeDisplayed();
        await expect(MenuNavigationPane.menuButton).toBeDisplayed();
    });

    it('should contain Volvo Logo on the upper left part of the screen', async () =>{
        await CampaignPage.volvoLogo.waitForDisplayed({timeout});
        await expect(CampaignPage.volvoLogo).toBeDisplayed();
    })

    it('should redirect to Volvo Main page when Volvo logo is clicked', async () => {
        await CampaignPage.volvoLogo.click();
        await expect(browser).toHaveUrl('https://www.volvocars.com/intl');
    })

    it('should display Learn More About Car Safety link', async () => {
        await MenuNavigationPane.learnMoreAboutLink.scrollIntoView();
        await expect(MenuNavigationPane.learnMoreAboutLink).toHaveLink('/intl/v/car-safety');
    })

    it('should redirect to another page when Learn More button is clicked', async () => {
        await CampaignPage.learnMoreButton.scrollIntoView();
        await CampaignPage.learnMoreButton.click({skipRelease:true});
        await expect(CampaignPage.learnMoreButton).toHaveHref('/intl/v/car-safety/safety-heritage');
    })

    it('should redirect to another page when Recharge link is clicked', async () => {
        await CampaignPage.rechargeLink.scrollIntoView();
        await CampaignPage.rechargeLink.waitForDisplayed({timeout});
        await CampaignPage.rechargeLink.click();
        await expect(browser).toHaveUrlContaining("/intl/v/cars/recharge");
    })

    it('should redirect to another page when Recharge link is clicked', async () => {
        await CampaignPage.mildHybridCarsLink.scrollIntoView();
        await CampaignPage.mildHybridCarsLink.waitForDisplayed({timeout});
        await CampaignPage.mildHybridCarsLink.click();
        await expect(browser).toHaveUrlContaining("/intl/v/cars/other-powertrain");
    })

    it('should redirect to Legal Cookie page when Cookies link is clicked', async () =>{
        await CampaignPage.cookiesFooterLink.scrollIntoView();
        await CampaignPage.cookiesFooterLink.waitForDisplayed({timeout});
        await CampaignPage.cookiesFooterLink.click();
        await expect(browser).toHaveUrlContaining("/intl/v/legal/cookies");
    })

    it('should redirect to Legal Notice page when Legal link is clicked', async () =>{
        await CampaignPage.legalFooterLink.scrollIntoView();
        await CampaignPage.legalFooterLink.waitForDisplayed({timeout});
        await CampaignPage.legalFooterLink.click();
        await expect(browser).toHaveUrlContaining("/intl/v/legal/legal");
    })

    it('should redirect to Privacy page when Privacy link is clicked', async () =>{
        await CampaignPage.privacyFooterLink.scrollIntoView();
        await CampaignPage.privacyFooterLink.waitForDisplayed({timeout});
        await CampaignPage.privacyFooterLink.click();
        await expect(browser).toHaveUrlContaining("/privacy-customer-privacy-policy");
    })

    it('should redirect to Social Media Page when Social Media link is clicked', async () =>{
        await CampaignPage.socialMediaFooterLink.scrollIntoView();
        await CampaignPage.socialMediaFooterLink.waitForDisplayed({timeout});
        await CampaignPage.socialMediaFooterLink.click();
        await expect(browser).toHaveUrlContaining("/intl/v/legal/social-media");
    })

    it('should redirect to Tell Us Page when Tell Us link is clicked', async () =>{
        await CampaignPage.tellUsFooterLink.scrollIntoView();
        await CampaignPage.tellUsFooterLink.waitForDisplayed({timeout});
        await CampaignPage.tellUsFooterLink.click();
        await expect(browser).toHaveUrlContaining("/intl/v/legal/tell-us-reporting-line");
    })
        
});
