require("chromedriver"); // You WILL need to update chrome on the LoD
const { Builder, By, Key, until, Browser } = require("selenium-webdriver");
//Builder - what builds our browser
//By - how we select the element to click or input values into
//Key - keyboard functionality
const { expect } = require("chai");

describe("ex1 tests", function () {
  this.timeout(90_000); 


  it("should find change miles to km", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("http://localhost:3000/testing/ex1");
      const search = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div:nth-child(2) > input"));
      await search.sendKeys("10");
      const result = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div.mt-4.input-group > input"));
      expect(await result.getAttribute("value")).to.equal("16");
    } finally {
     await driver.quit();
    }
  });

  it("should find change km to miles", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("http://localhost:3000/testing/ex1");
      const search = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div.mt-4.input-group > input"));
      await search.sendKeys("16");
      const result = await driver.findElement(By.css("#root > div > div.container > div:nth-child(2) > div:nth-child(2) > input"));
      expect(await result.getAttribute("value")).to.equal("10");
    } finally {
     await driver.quit();
    }
  })
  });

  describe("ex2 tests", function () {
    this.timeout(90_000); 
  
  
    it("should find add change and get the correct answer", async () => {
      const driver = await new Builder().forBrowser("chrome").build();
      try {
        await driver.get("http://localhost:3000/testing/ex2");
        const plusOne= await driver.findElement(By.css("#root > div > div.container > div.input-group > button:nth-child(4)"));
        await plusOne.click();
        await plusOne.click();
        await plusOne.click();
        await plusOne.click();
        const CountBox = await driver.findElement(By.css("#root > div > div.container > div.input-group > input"));
        expect(await CountBox.getAttribute("value")).to.equal("4");
        const History1 = await driver.findElements(By.css("#root > div > div.container > div:nth-child(5) > p"));
        // const History2 = await driver.findElement(By.css("#root > div > div.container > div:nth-child(5) > p:nth-child(1)"));
        // expect(await (await History2.getAttribute("value")).to.equal("2"));
        // const History3 = await driver.findElement(By.css("#root > div > div.container > div:nth-child(5) > p:nth-child(1)"));
        // expect(await (await History3.getAttribute("value")).to.equal("3"));
        // const History4 = await driver.findElement(By.css("#root > div > div.container > div:nth-child(5) > p:nth-child(1)"));
        // expect(await (await History4.getAttribute("value")).to.equal("4"));
      } finally {
       await driver.quit();
      }
    });
})

describe("ex3 tests", function () {
    this.timeout(90_000); 
  
  
    it("should find Bluey", async () => {
      const driver = await new Builder().forBrowser("chrome").build();
      try {
        await driver.get("http://localhost:3000/testing/ex3");
        const SearchInput= await driver.findElement(By.id("filmTitle"));
        await SearchInput.sendKeys("Bluey");
        await (await driver.findElement(By.css("#root > div > div.container > form > div > div > button"))).click();
        const result = await driver.wait(until.elementLocated(By.css("#root > div > div.container > div.container > div > div:nth-child(1) > div > div > div")));
        expect(await result.getText()).to.equal("Bluey");
        const pic = await driver.findElement(By.css("#root > div > div.container > div.container > div > div:nth-child(1) > div > img"));
        await pic.click();
        const newText = await driver.wait(until.elementLocated(By.css("#root > div > div:nth-child(3) > div > div > div")));
        expect(await newText.getText()).to.equal("Bluey");
        const redirect = await driver.getCurrentUrl();
        expect(redirect).to.equal("http://localhost:3000/filmDetails/tt7678620");
      } finally {
       await driver.quit();
      }
    });
})