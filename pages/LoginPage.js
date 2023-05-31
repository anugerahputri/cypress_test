const locator = require("../locator/loginLocator")
class HomeLoginPage {
  
  async NavigateUrlHome() {
    return cy.visit("/")
  }
  
      //Login with Email
    async Clickloginhome () {
      cy.get(locator.datatestid.buttonemail).click()
    };
    
    async InputUserName(username) {
      cy.get(locator.datatestid.NotyourAccount).then(($cek) => {
        if($cek.text().includes("Not your account?")){
          return cy.wrap($cek).click()
        }
      })
        cy.get(locator.datatestid.Inputusername).type(username);
    };

    async InputPassword(password) {
        cy.get(locator.datatestid.Inputpassword).type(password , { sensitive: true });
    };
    async Clicklogin () {
        cy.get(locator.datatestid.buttonlogin).click();
    };
    async SuccessLogin() {
       cy.get(locator.datatestid.validasisekolah,{ timeout: 20000 }).should('TK ASSALAM AUTOMATION');
    };
    async ClickUsernameLogin (usernameemail){
        cy.get(locator.datatestid.usernameloginexisting).click({timeout: 3000});
    };
    async VerifyUsernameExisting(usernameemail){
        cy.get(locator.datatestid.usernameloginexisting).contains(usernameemail);
    };
    async ClickLogout() {
        cy.get (locator.datatestid.burgerbutton).click();
        cy.get(locator.datatestid.buttonlogout).click();
    }
    
    async EmailNotRegisterd() {
      cy.get(locator.datatestid.NotyourAccount).then(($cek) => {
        if($cek.text().includes("Not your account?")){
          return cy.wrap($cek).click()
        }
      })
        
      cy.get (locator.datatestid.Inputusername).type(userID_Alpha());

        function userID_Alpha() {
            var email = "anugerah"
            var text = "";
    
            var possible = "qwertyuioplkjhgfdazxcvbnm1234567890";
    
            for (var i = 0; i < 4; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            var value = email + text.concat('@mail.com')
            return value;
            } 
    }

    async VerifyErrorMessageLogin() {
        cy.contains("Wrong email or password.").should("be.visible")
    }; 

    async ValidPresensiPage(){
      cy.url().should('include','/portal/6abbbe9c-3ae9-46af-8192-92378c5a1bc6/presensi/create/schedule/')
    };

    //loginGmail
    async loginInternal(email) {
        cy.loginAPIInternal(email);
        cy.setSessionData(email);
        cy.setCookies();
        cy.visit("");
      }

    //Login With Number Phone
    async ClickBtnPhone(){
        cy.get(locator.datatestid.BtnPhone).click()
      }
      async InputPhone(phone) {
        cy.get(locator.datatestid.InputPhone).type(phone)
      }
      async ClickBtnWhatsapp() {
        cy.get(locator.datatestid.BtnWhatsapp).click()
      }
      async Clicklogin() {
        cy.get(locator.datatestid.buttonlogin).click()
      }
      async SuccessLogin() {
        cy.get(locator.datatestid.validasisekolah, { timeout: 20000 }).should(
          "have.text",
          "TK ASSALAM AUTOMATION"
        )
      }
      async InputOtp(otp) {
        cy.get(locator.datatestid.InputOtp).type(otp)
      }
      async ClickBtnLanjut() {
        cy.get(locator.datatestid.BtnLanjut).click()
        return cy.wait(9000)
      }
      async ClickBtnMenu() {
        cy.get(locator.datatestid.BtnMenu).click()
      }
      async VerifyUserLogin(akun) {
        cy.contains(akun)
      }
      async ClickBtnLogout() {
        cy.get(locator.datatestid.BtnLogout).click()
      }
      async ClickLogout() {
        cy.get(locator.datatestid.BtnMenu).click()
        cy.get(locator.datatestid.buttonlogout).click()
      }
      async VerifyErrorMessageLogin() {
        cy.contains("Wrong email or password.").should("be.visible")
      }
      async ClickButtonNotNow() {
        cy.get(locator.datatestid.buttonnotnow).click()
      }
      async ClickBtnLogoutRegister() {
        cy.contains("Syarat & Ketentuan")
        cy.get(locator.datatestid.BtnLogoutRegister).click()
      } 
      
    }



module.exports = new HomeLoginPage()
