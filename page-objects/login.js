var loginPage = {
   url : "http://10.10.10.2:8081",
   commands: {
      emsLoginCheck : function () {
         return this.pause(2000)
      }
   },
   elements: {
      email: {selector : ""},
      password: {selector : ""},
      submit: {selector : ""}
   }
}

module.exports = {
   url: loginPage.url,
   commands: [loginPage.commands],
   elements: loginPage.elements
}