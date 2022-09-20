const { Given, When, Then } = require('@wdio/cucumber-framework');


const SearchPage = require('../pageobjects/search.home');


const pages = {
    search: SearchPage
}

Given(/^I am on the home page$/, async function()  {
    await SearchPage.open()
});

When(/^I complete the input search with (.*) and search$/, async (text) => {
    await SearchPage.searchText(text)
});
Then(/^Print results$/, async function () {
    await SearchPage.getItemList()
});