import CampaignPage from "../pageobjects/Campaign.MainPage";

describe('Campaign Videos in A Million More Campaign Main Page', () => {
    const timeout= 5000;

    before( async () =>{
        await CampaignPage.open()
        await CampaignPage.acceptCookiesButton.click();
    });

    beforeEach(async () => {
        await CampaignPage.open()
        await CampaignPage.mainVideo.scrollIntoView();
    })

    it('should autoplay the main featured video upon complete page load', async () =>{
        expect(await CampaignPage.mainVideo).toHaveAttribute('preload', 'auto');
    });

    it('should have a pause button visible when main video is playing', async () => {
        expect(await CampaignPage.pauseVideoButton).toBeDisplayed();
    })

    it('should have a play button visible when main video is paused', async () =>{
        await CampaignPage.pauseVideoButton.click();
        expect(await CampaignPage.playVideoButton).toBeDisplayed();
    })

    it('should have Watch the Story Button visible', async () =>{
        await   CampaignPage.watchTheStoryButton.waitForDisplayed({timeout});
    })

    it('should load the Youtube Flash Player when Watch the Story Button is clicked', async () =>{
        await CampaignPage.watchTheStoryButton.click();
        expect(await CampaignPage.youtubeIframe).toBeDisplayed();
    })

})