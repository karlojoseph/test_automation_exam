import CampaignPage from "../pageobjects/Campaign.MainPage";
import MenuNavigationPane from "../pageobjects/CampaignPage.Menu";

describe('A Million More - Menu', async () =>{

    const timeout = 20000;
    const mainMenuList = ['Buy', 'Own', 'About Volvo', 'Explore', 'More'];
    const purchaseMenuList = ['Car Configurator', 'Fleet sales', 'Special Vehicles', 'Diplomatic sales', 'Child seats']
    const ownerInfoAndExploreList = ['Support', 'Service & Repair', 'Acessories', 'Volvo Recall', 'Volvo experience', 'Volvo Cars app']
    const aboutVolvoMenuList= ['Our story', 'Sustainability', 'Safety', 'Our news', 'Careers', 'Investors', 'Suppliers', 'Awards', 'Experience Volvo Cars']
    const exploreSubMenuList= ['Recharge', 'Concept', 'Electric cards']
    const moreSubMenuList= ['Contact us', 'Media/Press', 'Investor Relations', 'Military Sales']
    const intlAndCorpSiteList= ['Company', 'Volvo Cars International']
    const continentalSalesList= ['Americas', 'Middle East / Africa', 'Asia / Pacific', 'Europe', 'Special Sales']

    before(async () => {
        await CampaignPage.open();
        await CampaignPage.acceptCookiesButton.click();
    })

    beforeEach(async () =>{
        await CampaignPage.open();
        await MenuNavigationPane.menuButton.click();
        await MenuNavigationPane.closeMenu.waitForDisplayed({timeout})
    })

    it('should contain main menu item', async () =>{
        MenuNavigationPane.mainMenuList.forEach( async (menu) =>{
            console.log(menu.getText());
            expect(mainMenuList.includes(menu.getText()));
        })
    })

    it('should show purchase menu when buy button is clicked', async () =>  {
        await MenuNavigationPane.buyButton.click();
        await MenuNavigationPane.goBackToSiteNavigation.waitForDisplayed({timeout});
        MenuNavigationPane.purchaseMenu.forEach(async (el) =>{
            expect(purchaseMenuList.includes(el.getText()))
        })
    })

    it('should go back to main navigation panel when back button is clicked', async () =>{
        await MenuNavigationPane.buyButton.click();
        await MenuNavigationPane.goBackToSiteNavigation.waitForDisplayed({timeout});
        await MenuNavigationPane.goBackToSiteNavigation.click();
        expect(await MenuNavigationPane.buyButton).toBeDisplayed();
    })

    it('should close the menu when the close button', async () => {
        await MenuNavigationPane.closeMenu.click();
        expect(await MenuNavigationPane.closeMenu.waitForDisplayed({reverse:true}));
        expect(await MenuNavigationPane.buyButton.waitForDisplayed({reverse:true}));
    })

    it('should redirect to Volvo Main Page when the small logo in navigation pane is clicked', async () => {
        await MenuNavigationPane.smallVolvoLogo.waitForDisplayed({timeout});
        await MenuNavigationPane.smallVolvoLogo.click();
        await expect(browser).toHaveUrl('https://www.volvocars.com/intl');
    })

    it('should display the owner information and explore section when own button is clicked', async () => {
        await MenuNavigationPane.ownButton.click();
        await MenuNavigationPane.goBackToSiteNavigation.waitForDisplayed({timeout});
        MenuNavigationPane.ownerInfoAndExploreOptionList.forEach(async element => {
            expect(ownerInfoAndExploreList.includes(element.getText()));
        });
    })

    it('should display the about volvo menu links when about volvo button is clicked', async () => {
        await MenuNavigationPane.aboutVolvoButton.click();
        await MenuNavigationPane.goBackToSiteNavigation.waitForDisplayed({timeout});
        MenuNavigationPane.aboutVolvoLinks.forEach(async link =>{
            expect (aboutVolvoMenuList.includes(link.getText()));
        })
    })

    it('should display the explore submenu links when explore button is clicked', async () => {
        await MenuNavigationPane.exploreButton.click();
        await MenuNavigationPane.goBackToSiteNavigation.waitForDisplayed({timeout});
        MenuNavigationPane.exploreSubMenu.forEach(async link =>{
            expect (exploreSubMenuList.includes(link.getText()));
        })
    })

    it('should display the more submenu links when more button is clicked', async () => {
        await MenuNavigationPane.moreButton.click();
        await MenuNavigationPane.goBackToSiteNavigation.waitForDisplayed({timeout});
        MenuNavigationPane.moreSubMenu.forEach(async link =>{
            expect (moreSubMenuList.includes(link.getText()));
        })
    })

    it('should display the international submenu links when international button is clicked', async () => {
        await MenuNavigationPane.internationalButton.click();
        await MenuNavigationPane.goBackToSiteNavigation.waitForDisplayed({timeout});
        MenuNavigationPane.internationalAndCorporateSiteList.forEach(async link =>{
            expect (intlAndCorpSiteList.includes(link.getText()));
        })
        MenuNavigationPane.regionalAndSpecialSitesList.forEach(async region => {
            expect(continentalSalesList.includes(region.getText()));
        })
    })

    it('should display the social media icons when menu is clicked', async () =>{
        await expect(MenuNavigationPane.faceBookIcon).toBeDisplayed();
        await expect(MenuNavigationPane.instagramIcon).toBeDisplayed();
        await expect(MenuNavigationPane.twitterIcon).toBeDisplayed();
        await expect(MenuNavigationPane.youTubeIcon).toBeDisplayed();
        await expect(MenuNavigationPane.linkedInIcon).toBeDisplayed();
    })

    it('should contain social media URL for every social media icon', async () =>{
        await expect(MenuNavigationPane.facebookLink).toHaveHrefContaining('/Volvo')
        await expect(MenuNavigationPane.instagramLink).toHaveHrefContaining('/volvo')
        await expect(MenuNavigationPane.twitterLink).toHaveHrefContaining('/volvo')
        await expect(MenuNavigationPane.youTubeLink).toHaveHrefContaining('/Volvo')
        await expect(MenuNavigationPane.linkedInLink).toHaveHrefContaining('/Volvocars')
    })
});
