


const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchHomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearch() {
        return $('#gh-ac');
    }


    get btnSearch () {
        return $('button[type="submit"]');
    }
    get itemsList () {
        const xpathText= ".//h1/span[@class='BOLD'][1]"
        return $(xpathText);
    }

    async searchText (text) {
        await this.inputSearch.setValue(text);
        await this.btnSearch.click();
    }
    async getItemList() {
        await console.log(this.itemsList.getText())
    }
    open () {
        return super.open();
    }
}

module.exports = new SearchHomePage();
