var assert = require('assert');
var { $, sleep } = require('./funcs');

module.exports = function() {

    let product;
    this.Given(/^the user is in sortiment page$/, async function() {
        // Write code here that turns the phrase above into concrete actions

        await helpers.loadPage('http://localhost:3000');
        await sleep(1000);

        let sortiment = await $('#Sortiment');
        await sortiment.click();
        await sleep(1000);
    });

    this.Given(/^the user enters Captain Morgan in inputfeild$/, async function()

        {
            // Searchin for Captain Morgan product in the list
            let searchField = await $('#inputfield');
            assert(searchField, "There is no search field");
            await searchField.sendKeys("Captain Morgan");

        });


    this.When(/^the user clicks on search button$/, async function() {
        // Write code here that turns the phrase above into concrete actions
        let searchBtn = await $('#sokButton');
        assert(searchBtn, "There is no search button");
        await searchBtn.click();
        await sleep(1000);

    });

    this.When(/^we find products \(among them Captain Morgan - Spiced Gold\)$/, async function()

        {
            let products = await $('.productDisplayed');
            for (product of products) {
                let text = await product.getText();
                if (text.includes("Captain Morgan - Spiced Gold")) {
                    await product.click();
                    await sleep(2000);
                    break;
                }
            }
        });

    this.When(/^the user enters (\d+) bottles in tnhe quantity field of Captain Morgan - Spiced Gold$/, async function(arg1) {

        // Write code here that turns the phrase above into concrete actions
        let quantityField = await product.findElement(by.css('.antal'));
        await quantityField.sendKeys(arg1);
        await sleep(3000);
    });

    this.Then(/^(\d+) bottles of Captain Morgan - Spiced Gold should be added to his\/her shopping cart$/, async function(arg1) {
        // Write code here that turns the phrase above into concrete actions
        let köpId = await product.findElement(by.css('.köp'));
        await köpId.click();
        await sleep(5000);
    });

    //--------------------------------------SCENARIO2-----------------------------------

    this.Given(/^the user enters Canella \- Bellini in searchfeild$/, async function() {
        // Write code here that turns the phrase above into concrete actions

        let searchField1 = await $('#inputfield');
        //assert(searchField1, "There is no search field");
        await searchField1.sendKeys("Canella - Bellini");

    });

    this.When(/^the user clicks on Canella \- Bellini$/, async function() {


        // to get Canella - Bellini product 
        let products = await $('.productDisplayed');
        for (product of products) {
            let text1 = await product.getText();
            if (text1.includes("Canella - Bellini")) {
                await product.click();
                await sleep(2000);
                break;
            }

        }

    });

    this.When(/^the user enters (\d+) bottles in the quantity field of Canella \- Bellini$/,
        async function(arg1) {
            // Write code here that turns the phrase above into concrete actions
            let quantityField1 = await product.findElement(by.css('.antal'));
            await quantityField1.sendKeys(arg1);
            assert(quantityField1, "99 bottels are max");
            await sleep(8000);

        });

    this.Then(/^the sytem should be added (\d+) bottels of Canella \- Bellini defaultly to his\/her shopping cart$/, async function(arg1) {
        // Write code here that turns the phrase above into concrete actions

        let köpId1 = await product.findElement(by.css('.köp'));
        await köpId1.click();
        await sleep(8000);

    });

    //--------------------------------------SCENARIO--3--------------------------------------
    //-----------**********Sub-Scenario-*****------------------------------------  

    this.Given(/^the user enters Captain Morgan in searchfeild$/, async function() {
        // Write code here that turns the phrase above into concrete actions

        let searchField2 = await $('#inputfield');
        assert(searchField2, "There is no search field");
        await searchField2.sendKeys("Captain Morgan");
        await sleep(1000);

    });

    this.When(/^we find products Captain Morgan \- White Rum$/, async function() {
        // Write code here that turns the phrase above into concrete actions

        let products = await $('.productDisplayed');
        for (product of products) {
            let text2 = await product.getText();
            if (text2.includes("Captain Morgan - White Rum")) {
                await product.click();
                await sleep(2000);
                break;
            }
        }

    });
    this.When(/^the user enters (\d+) in quantity feild$/, async function(arg1) {
        // Write code here that turns the phrase above into concrete actions
        let quantityField2 = await product.findElement(by.css('.antal'));
        await quantityField2.sendKeys(arg1);
        await sleep(3000);
    });

    this.Then(/^the system should be added Captain Morgan \- White Rum and (\d+) to his\/her shopping cart$/, async function(arg1) {
        // Write code here that turns the phrase above into concrete actions
        köpId2 = await product.findElement(by.css('.köp'));
        await köpId2.click();
        await sleep(5000);

    });


    //-----------**********Sub-Scenario-2*****------------------------------------  

    this.Given(/^the user enters Renat in searchfeild$/, async function() {
        // Write code here that turns the phrase above into concrete actions
        let searchField3 = await $('#inputfield');
        assert(searchField3, "There is no search field");
        await searchField3.sendKeys("Renat");
        await sleep(1000);
    });

    this.When(/^we find products Renat$/, async function() {
        // Write code here that turns the phrase above into concrete actions
        let products = await $('.productDisplayed');
        for (product of products) {
            let text3 = await product.getText();
            if (text3.includes("Renat")) {
                await product.click();
                await sleep(2000);
                break;
            }
        }

    });

    this.Then(/^the system should be added Renat and (\d+) to his\/her shopping cart$/, async function(arg1) {
        // Write code here that turns the phrase above into concrete actions
        let köpId3 = await product.findElement(by.css('.köp'));
        await köpId3.click();
        await sleep(5000);

    });

    //-----------**********Sub-Scenario-3*****------------------------------------  


    this.Given(/^the user enters Valtellina Superiore in searchfeild$/, async function() {
        // Write code here that turns the phrase above into concrete actions
        let searchField4 = await $('#inputfield');
        assert(searchField4, "There is no search field");
        await searchField4.sendKeys("Valtellina Superiore");
        await sleep(1000);
    });


    this.When(/^we find products Valtellina Superiore \- Sassella Riserva$/, async function() {
        // Write code here that turns the phrase above into concrete actions
        let products = await $('.productDisplayed');
        for (product of products) {
            let text4 = await product.getText();
            if (text4.includes("Valtellina Superiore - Sassella Riserva")) {
                await product.click();
                await sleep(2000);
                break;
            }
        }

    });


    this.Then(/^the system should be added Valtellina Superiore \- Sassella Riserva and (\d+) to his\/her shopping cart$/, async function(arg1) {

        let köpId4 = await product.findElement(by.css('.köp'));
        await köpId4.click();
        await sleep(5000);


    });

    //--------------------------------------SCENARIO--4-------------------------------------

    this.Given(/^the user enters Amicone in searchfeild$/, async function() {
        // Write code here that turns the phrase above into concrete actions
        let searchField5 = await $('#inputfield');
        assert(searchField5, "There is no search field");
        await searchField5.sendKeys("Amicone");
        await sleep(1000);

    });

    this.When(/^the user find some products to choose Amicone \- Bianco$/, async function() {
        // Write code here that turns the phrase above into concrete actions
        let products = await $('.productDisplayed');
        for (product of products) {
            let text5 = await product.getText();
            if (text5.includes("Amicone - Bianco")) {
                await product.click();
                await sleep(2000);
                break;
            }
        }

    });

    this.Then(/^the total (\d+) of Amicone should be added to his\/her shopping cart$/,
        async function(arg1) {
            // Write code here that turns the phrase above into concrete actions

            let köpId5 = await product.findElement(by.css('.köp'));
            await köpId5.click();
            await sleep(5000);

        });
    //------------------------------SCENARIO--5---------------------------------------------------

    this.Given(/^the user enters Fighting Cock in searchfeild$/, async function() 
    {
        // Write code here that turns the phrase above into concrete actions
        let searchField6 = await $('#inputfield');
        assert(searchField6, "There is no search field");
        await searchField6.sendKeys("Fighting Cock");
        await sleep(1000);

    });

    this.When(/^the user find some products to choose Fighting Cock \- Kentucky Straight Bourbon$/, async function() {
        // Write code here that turns the phrase above into concrete actions
        let products = await $('.productDisplayed');
        for (product of products) {
            let text6 = await product.getText();
            if (text6.includes("Fighting Cock - Kentucky Straight Bourbon")) {
                await product.click();
                await sleep(2000);
                break;
            }
        }

    });

    this.When(/^the user enters (\d+) bottels in the quantity feild$/, async function(arg1) {
        // Write code here that turns the phrase above into concrete actions
        let quantityField6 = await product.findElement(by.css('.antal'));
        await quantityField6.sendKeys(arg1);
        await sleep(3000);

    });

    this.Then(/^the system should be displayed an error message as Fighting Cock is out of stock$/, async function() {
        // Write code here that turns the phrase above into concrete actions
        let köpId6 = await product.findElement(by.css('.köp'));
        await köpId6.click();
        await sleep(2000);
       
    });

}