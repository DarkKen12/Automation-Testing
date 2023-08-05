const {Builder , By, Key} = require("selenium-webdriver");

async function testFunc(){
    
    // Launching the browser
    let driver = await new Builder().forBrowser("chrome").build();

    //Navigation to GoodReads.com
    await driver.get("https://www.goodreads.com");
    await driver.findElement(By.xpath('//div[@class="authSwitchFlow u-marginTopLarge"]/a[@class="gr-hyperlink"]')).click();
    await driver.findElement(By.xpath('//div[@class="third_party_sign_in"]/a[5]/button')).click();

    //Logging in
    await driver.findElement(By.id("ap_email")).sendKeys("ananddakash27@gmail.com");
    await driver.findElement(By.id("ap_password")).sendKeys("Qwerty098",Key.RETURN);    
    const close_btn= await driver.findElement(By.className("modal__close"));
    await close_btn.click();
  
    //Searching for Book
    const book_name="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones";
    await driver.findElement(By.className("searchBox__input searchBox__input--navbar")).sendKeys(book_name,Key.RETURN);
    await driver.findElement(By.linkText(book_name)).click();
    await driver.sleep(100);
    await driver.findElement(By.className("Button Button--wtr Button--medium Button--block")).click();
    await driver.sleep(50);
    
    // Removing the Books from Books
    await driver.findElement(By.linkText("My Books")).click();
    await driver.findElement(By.className("selectedShelf")).click();
    await driver.findElement(By.xpath('//a[@class="actionLinkLite smallText deleteLink"]')).click();
    await driver.sleep(30);
    await driver.switchTo().alert().accept();

    
    //Logout
    await driver.sleep(30);
    await driver.findElement(By.xpath('//div[@class="dropdown dropdown--profileMenu"]/a[1]')).click();
    await driver.sleep(30);
    await driver.findElement(By.xpath('//div[@class="siteHeader__subNav siteHeader__subNav--profile gr-box gr-box--withShadowLarge"]/ul[1]/li[13]/a')).click();


    // Closing the Browser
    await driver.quit();
}
testFunc()
