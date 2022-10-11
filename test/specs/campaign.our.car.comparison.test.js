import OurCarNavigationPane from "../pageobjects/CampaignPage.OurCars";
import CampaignPage from "../pageobjects/Campaign.MainPage";

describe('Image Comparision Test - Our Car', () =>{
    const timeout = 20000;

    before(async () => {
        await CampaignPage.open();
        await CampaignPage.acceptCookiesButton.click();
    })

    beforeEach(async () =>{
        await CampaignPage.open();
        await OurCarNavigationPane.ourCarsButton.click();
        await OurCarNavigationPane.closeOurCarContainer.waitForDisplayed({timeout})
    })

    async function checkAvailableCarSelection() {
        expect(await OurCarNavigationPane.crossoverCarsLink.waitForDisplayed({reverse:true}));
        expect(await OurCarNavigationPane.suvCarsLink).toBeDisplayed();
        expect(await COurCarNavigationPane.suvCarsLink).toBeClickable();
        expect(await OurCarNavigationPane.estateCarsLink).toBeDisplayed();
        expect(await OurCarNavigationPane.estateCarsLink).toBeClickable();
        expect(await OurCarNavigationPane.sedanCarsLink).toBeDisplayed();
        expect(await OurCarNavigationPane.sedanCarsLink).toBeClickable();
        };

    it('should only contain hybrid cars when hybrid card selection is selected', async () =>{
        await OurCarNavigationPane.hybridSelectionButton.click();
        await OurCarNavigationPane.hybridCars.waitForDisplayed({timeout});
        expect(await browser.checkElement(await OurCarNavigationPane.hybridCars, 'hybrid-cars-collection', {misMatchPercentage:1})).toEqual(0);
        expect(await OurCarNavigationPane.electricCars.waitForDisplayed({reverse:true}));
        expect(await OurCarNavigationPane.mildHybrid.waitForDisplayed({reverse:true}));
    })

    it('should only contain electric car when electric car selection is selected ', async () =>{
        await OurCarNavigationPane.electricSelectionButton.click();
        await OurCarNavigationPane.electricCars.waitForDisplayed({timeout});
        expect(await browser.checkElement(await OurCarNavigationPane.electricCars, 'electric-cars-collection', {misMatchPercentage:1})).toEqual(0);
        expect(await OurCarNavigationPane.hybridCars.waitForDisplayed({reverse:true}));
        expect(await OurCarNavigationPane.mildHybrid.waitForDisplayed({reverse:true}));
    })

    it('should only contain mild hybrid car when mild hybrid car selection is selected ', async () =>{
        await OurCarNavigationPane.mildHybridSelectionButton.click();
        await OurCarNavigationPane.mildHybrid.waitForDisplayed({timeout});
        expect(await browser.checkElement(await OurCarNavigationPane.mildHybrid, 'mild-hybrid-cars-collection', {misMatchPercentage:1})).toEqual(0);
        expect(await OurCarNavigationPane.hybridCars.waitForDisplayed({reverse:true}));
        expect(await OurCarNavigationPane.electricCars.waitForDisplayed({reverse:true}));
    })

    it('should contain car category tab', async () =>{
        expect(await OurCarNavigationPane.carCategorySelectionTab).toBeDisplayed();
    })

    it('should only include SUVs and Crossover links when Electric car category is selected', async () => {
        await OurCarNavigationPane.electricSelectionButton.click();
        expect(await OurCarNavigationPane.sedanCarsLink.waitForDisplayed({reverse:true}));
        expect(await OurCarNavigationPane.estateCarsLink.waitForDisplayed({reverse:true}));
        expect(await OurCarNavigationPane.suvCarsLink).toBeDisplayed();
        expect(await OurCarNavigationPane.suvCarsLink).toBeClickable();
        expect(await OurCarNavigationPane.crossoverCarsLink).toBeDisplayed();
        expect(await OurCarNavigationPane.crossoverCarsLink).toBeClickable();
    })

    it('should only include SUVs, estates and sedan links when hybrid car or Mild Hybrid category is selected', async () =>{
        await OurCarNavigationPane.hybridSelectionButton.click();
        checkAvailableCarSelection();
        await OurCarNavigationPane.mildHybridSelectionButton.click();
        checkAvailableCarSelection();
    })
});