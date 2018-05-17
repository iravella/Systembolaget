module.exports = function() {

  // This does NOT give us all of jQuery's functions.
  // It's just a shorter way of writing "findElem...."
  function $(selector){
    return driver.findElement(by.css(selector));
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  this.Given(/^that I'm at the homepage$/, async function () {
    await helpers.loadPage('http://localhost:3000');
    console.log('it works');
  });

  this.When(/^I click the wow-button$/, async function () {
    let theButton = await $('#wow');
    await theButton.click();
  });

  this.Then(/^the body's background should be blue$/, async function () {
    let body = await driver.findElement(by.css('body'));
    let bgColor = await body.getCssValue('background-color');

    assert(
      bgColor == "rgba(0, 0, 255, 1)",
      "The background-color didn't turn blue!"
    );
  });

}