import Page from "./page";

class OurCarNavigationPane extends Page {
    //Our Car Navigation Section
    get ourCarsButton() {return $('//button[@id="nav:topNavCarMenu"]')}
    get closeOurCarContainer() {return $('//button[@data-autoid="nav:carMenuCloseIcon"]')};
    get electricCars() {return $('//div[@id="site-nav-cars-menu-section-panel-0"]/div')}
    get hybridCars() {return $('//div[@id="site-nav-cars-menu-section-panel-1"]/div')}
    get mildHybrid() {return $('//div[@id="site-nav-cars-menu-section-panel-2"]/div')}
    get electricSelectionButton(){return $('//button[@id="site-nav-cars-menu-section-tab-0"]')}
    get hybridSelectionButton() {return $('//button[@id="site-nav-cars-menu-section-tab-1"]')}
    get mildHybridSelectionButton(){return $('//button[@id="site-nav-cars-menu-section-tab-2"]')}
    get carCategorySelectionTab() {return $('//div[@role="tablist"]')}
    get suvCarsLink() {return $('//div[@role="tabpanel" and @aria-hidden="false"]//*[@data-autoid="nav:carCategoryTitle" and text() = "SUVs"]')}
    get crossoverCarsLink() {return $('//div[@role="tabpanel" and @aria-hidden="false"]//*[@data-autoid="nav:carCategoryTitle" and text() = "Crossover"]')}
    get estateCarsLink() {return $('//div[@role="tabpanel" and @aria-hidden="false"]//*[@data-autoid="nav:carCategoryTitle" and text() = "Estates"]')}
    get sedanCarsLink() {return $('//div[@role="tabpanel" and @aria-hidden="false"]//*[@data-autoid="nav:carCategoryTitle" and text() = "Sedans"]')}

}

export default new OurCarNavigationPane();