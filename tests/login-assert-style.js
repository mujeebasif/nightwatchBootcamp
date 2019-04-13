module.exports = {
   'Try Login with valid credentials':function (browser) {
      browser
            .url('http://10.10.10.2:8081')
            .waitForElementVisible('body',3000)
            .verify.title('Log in - EMS')
            .waitForElementVisible('#Input_Email',2000)
            .clearValue('#Input_Email')
            // .setValue('#Input_Email','bhtest18@gmail.com')
            .setValue('#Input_Email','admin@admin')
            // .setValue('#Input_Password','@Datum123')
            .setValue('#Input_Password','@Password1')
            .click('button[type="submit"]')
            .pause(3000)
            .assert.title('Home Page - EMS')
            .assert.containsText('#PageContent > div > h1','Welcome to Online Certification Exam Portal!')
            // .assert.containsText('#PageContent > div > h1','Welcome to Online Certification Exam Portal!!')
   }
}