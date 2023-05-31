import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor"

const LoginPage = require("../../pages/LoginPage")

//login with Email
Given("A user opens a Website Pordi", () => {
  LoginPage.NavigateUrlHome();
});
When("A user click on the Email button",() => {
  LoginPage.Clickloginhome();
});
And("A user enter the username {string}",(username) => {
  LoginPage.InputUserName(username);
});
And("A user enter the password {string}", (password) =>{
  LoginPage.InputPassword(password);
});
And("A user click log in button",() =>{
  LoginPage.Clicklogin();
});
And("A user click login last time with username {string}",(usernameemail) =>{
  LoginPage.VerifyUsernameExisting(usernameemail);
  LoginPage.ClickUsernameLogin(usernameemail);
});
And("A user click button notnow",() => {
  LoginPage.ClickButtonNotNow();
});
And("A user enter the username not regisstered",() => {
  cy.log('berhasil');
  LoginPage.EmailNotRegisterd();
});
Then("user succesfully login Pordi",() =>{
  LoginPage.SuccessLogin();
  LoginPage.ClickLogout();
});
Then("A user see Error Message",() =>{
  LoginPage.VerifyErrorMessageLogin();
});

Then("user see presensi page",() =>{
  LoginPage.ValidPresensiPage()
});

Given("user open a Website Pordi", () => {
  LoginPage.NavigateUrlHome()
})

//Login Internal 
When("user login google widget use email {string}",(email) => {
  LoginPage.loginInternal(email);
  return cy.wait(3000);
});

//Login With Number Phone
When("user click button Nomor HP", () => {
  LoginPage.ClickBtnPhone()
})
And("user enter Nomor HP {string}", (phone) => {
  LoginPage.InputPhone(phone)
})
And("user click button Whatsapp", () => {
  LoginPage.ClickBtnWhatsapp()
})
And("user enter Kode Autentikasi {string}", (otp) => {
  LoginPage.InputOtp(otp)
})
And("user click button Lanjut", () => {
  LoginPage.ClickBtnLanjut()
})
Then("user succesfully login Pordi use {string}", (akun) => {
  LoginPage.ClickBtnMenu()
  LoginPage.VerifyUserLogin(akun)
  LoginPage.ClickBtnLogout()
});

Then("user succesfully login Pordi Internal use {string}",(akun) =>{
  LoginPage.ClickBtnMenu()
  LoginPage.VerifyUserLogin(akun)
  LoginPage.ClickBtnLogout()
});


//Login with Phone unregistered
Then("user will be direct to Register page", () => {
  LoginPage.ClickBtnLogoutRegister()
})

//Login With Email
When("user click button email", () => {
  LoginPage.ClickBtnEmail()
})
And("user enter Email {string}", (email) => {
  LoginPage.InputEmail(email)
})
And("user enter Password {string}", (password) => {
  LoginPage.InputPassword(password)
})
And("user click button Log in", () => {
  LoginPage.ClickBtnLogin()
})

//Login With Email has logged
And("user click button email logged", () => {
  LoginPage.ClickBtnEmailLogged()
})

//Fail Login
Then("user see toast alert fail login", () => {
  LoginPage.MsgError()
})

//Login With Internal IDN
And("user login google widget use email", () => {
  LoginPage.ClickBtnEmailLogged()
})

