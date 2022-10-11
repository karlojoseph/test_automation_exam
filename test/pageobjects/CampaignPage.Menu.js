import Page from "./page";

class MenuNavigationPane extends Page {
    //main menu Navigation section
    get menuButton() {return $('//button[@id="sitenav-sidenav-toggle"]')}
    get mainMenuList() {return $$('//div[@data-autoid="nav:sideNavLinksMenu"]')}
    get closeMenu() {return $('//button[@data-autoid="nav:siteNavCloseIcon"]')}
    
    //navigation link drawer
    get buyButton() {return $('//button[@aria-controls="links-menu0-content"]')}
    get ownButton() {return $('//button[@aria-controls="links-menu1-content"]')}
    get aboutVolvoButton() {return $('//button[@aria-controls="links-menu2-content"]')}
    get exploreButton() {return $('//button[@aria-controls="links-menu3-content"]')}
    get moreButton() {return $('//button[@aria-controls="links-menu0-content"]')}

    get purchaseMenu () {return $$('//div[@data-autoid="nav:sideNavLinksMenuDraw"]')}
    get goBackToSiteNavigation () {return $('//button[@aria-label="Go back in Site Navigation"]')}
    get smallVolvoLogo () {return $('//nav[@id="nav:sideNavigation"]//a[@data-autoid="nav:siteNavLogoSmall"]')}

    get ownerInfoAndExploreOptionList() {return $$('//div[@id="links-menu1-content"]//div[@data-autoid="nav:sideNavLinksMenuDraw"]')}
    get aboutVolvoLinks() {return $$('//div[@id="links-menu2-content"]//div[@data-autoid="nav:sideNavLinksMenuDraw"]')}
    get exploreSubMenu() {return $$('//div[@id="links-menu3-content"]//div[@data-autoid="nav:sideNavLinksMenuDraw"]')}
    get moreSubMenu() {return $$('//div[@id="links-menu4-content"]//div[@data-autoid="nav:sideNavLinksMenuDraw"]')}

    get internationalAndCorporateSiteList() {return $$('//div[@data-autoid="nav:sideNavigationGroupContainer"][1]')}
    get regionalAndSpecialSitesList() {return $$('//div[@data-autoid="nav:sideNavigationGroupContainer"][2]')}
    get internationalButton() {return $('//button[@aria-controls="region-content"]')}

    get facebookLink() {return $('//a[@aria-label="Facebook"]')}
    get faceBookIcon() {return $('//a[@aria-label="Facebook"]/div/img')}
    get instagramLink() {return $('//a[@aria-label="Instagram"]')}
    get instagramIcon() {return $('//a[@aria-label="Instagram"]/div/img')}
    get twitterIcon() {return $('//a[@aria-label="Twitter"]/div/img')}
    get twitterLink() {return $('//a[@aria-label="Twitter"]')}
    get youtubeLink() {return $('//a[@aria-label="YouTube"]')}
    get youTubeIcon() {return $('//a[@aria-label="YouTube"]/div/img')}
    get linkedInIcon() {return $('//a[@data-di-id="di-id-91640aab-3b1bfa1a"]/div/img')}
    get linkedInLink() {return $('//a[@data-di-id="di-id-91640aab-3b1bfa1a"]')}
    get learnMoreAboutLink() {return $('//a[@data-autoid="iconCallouts:cta"]')}
}

export default new MenuNavigationPane();