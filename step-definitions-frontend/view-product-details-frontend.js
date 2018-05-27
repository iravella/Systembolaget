let { $, sleep } = require('./funcs');
module.exports = function() {


    this.Given(/^that the is on the online shopping cart$/, async function() {

        await helpers.loadPage('http://localhost:3000');
        console.log("page is loaded");
        await sleep(1000);

    });

    this.When(/^the user enters King Cobra in the search field and clicks on search button$/, async function() {

        let sortiment = await $('#Sortiment');
        await sortiment.click();
        await sleep(1000);


        let searchField = await $('#inputfield');
        assert(searchField, "There is no search field");
        await searchField.sendKeys("King Cobra");
        await sleep(1000);

        let searchBtn = await $('#sokButton');
        assert(searchBtn, "There is no search button");
        await searchBtn.click();
        await sleep(1000);
    });

    this.Then(/^the user should be able to see the details of that product$/, async function() {
        let products = await $('.productDisplayed');
        for (let product of products) {
            let text = await product.getText();
            if (text.includes("King Cobra")) {
                await product.click();

                await sleep(5000);


            }
        }



    });


}