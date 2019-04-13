module.exports = {
   'Simple login Test - Expect Syle': function (browser) {
      browser.url('http://10.10.10.2:8081')
      browser.expect.element('body').to.be.visible.before(3000)
      browser.verify.title('Log in - EMS')
      browser.expect.element('#Input_Email').to.be.present.before(2000)
   }
}