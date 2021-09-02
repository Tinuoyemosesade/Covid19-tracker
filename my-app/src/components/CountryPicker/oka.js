/*
desiredCapabilities: {
        deviceName: "Emmanuel's iPhone",
        platformName: "iOS",
        automationName: "XCUITest",
        udid: "00008030-000D29D82E98402E",
        xcodeOrgId: "GW7KWX9T3D",
        xcodeSigningId: "iPhone Developer"  */

Feature("complete order screen");

Scenario("user should be able to see complete order screen", (I) => {
  I.amOnPage("/"); // verify the call to the backend to show i am on the right screen
  I.seeElement(" any element you wanna verify"); // this is to verify all UI elements in the page, and their position, wrong placement can lead to testscripts failing. e.g, Seat reservation H1 element, coach 1, 2, 3 elements, etc.
  I.click("WYSIWYG Editor");
  I.waitForElement("#mce_0_ifr");
  I.switchTo("#mce_0_ifr");
  I.fillField("#tinymce", "My text bold");
  I.doubleClick("#tinymce");
  I.switchTo();
  I.click("#mceu_3");
  I.switchTo("#mce_0_ifr");
  I.click("#tinymce");
  I.switchTo();
  I.saveScreenshot("editor_test.png");
});
