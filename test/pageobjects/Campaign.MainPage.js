import Page from "./page";

class CampaignPage extends Page {
    
    //constants
    get introText() {return 'Ideas that change the world are often the most controversial' }

    //selectors
    get modelIntro() {return $('//div[@id="ModelIntro-1"]/section/h2');}
    get acceptCookiesButton(){return $('//button[@id="onetrust-accept-btn-handler"]');}
    get volvoLogo() {return $('//div[@id="sitenav:topbar"]//a')}

    //video
    get mainVideo() {return $('//div[@id="Video-1"]//video')}
    get pauseVideoButton() {return $('//button[@aria-label="pause"]')}
    get playVideoButton() {return $('//button[@aria-label="play"]')}
    get watchTheStoryButton() {return $('//span[text()="watch the story"]/parent::button')}
    get youtubeIframe() {return $('//div[@id="Video-1"]//iframe')}
    get testimonialList() { return $$('//div[@class="ay c co cp cq fn jk jl jm"]')}

    get learnMoreButton() { return $('//a[@data-autoid="imageWithText:primaryCta"]')}
    get rechargeLink() { return $('//a[@data-autoid="ProductListCarousel:cta1"]')}
    get mildHybridCarsLink() { return $('//a[@data-autoid="ProductListCarousel:cta2"]')}

    //footer
    get cookiesFooterLink() { return $('//a[text()="Cookies"]')}
    get legalFooterLink() { return $('//a[text()="Legal"]')}
    get privacyFooterLink() { return $('//a[text()="Privacy"]')}
    get socialMediaFooterLink() { return $('//a[text()="Social Media"]')}
    get tellUsFooterLink() { return $('//a[text()="Tell Us"]')}

    open (){
        return super.open();
    }
}

export default new CampaignPage();