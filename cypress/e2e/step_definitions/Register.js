import { When, And, Then } from "@badeball/cypress-cucumber-preprocessor"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const RegisterPage = require("../../pages/RegisterPage")
// const GTKPage = require ("../../pages/gtkPage")

//Registered Email
When("A user click button Email", () => {
  RegisterPage.NavigateUrlRegistrasi()
});
And ("A user click page sign Up",() => {
  RegisterPage.PageSignin();
});
And("A user input email and password registered", () => {
  RegisterPage.InputEmailRegistered()
  RegisterPage.InputPassword()
  RegisterPage.ClickbuttonSignup()
});
Then ("A user see {string}",(ErorAlreadyExists)=> {
  RegisterPage.AlreadyExists(ErorAlreadyExists)
});

//Register Email
And("A user input new email and password", () => {
  RegisterPage.InputNewUserName();
  RegisterPage.InputPassword();
  RegisterPage.ClickbuttonSignup();
});

And("A user click button allow",() => {
  RegisterPage.ClickButtonAllow()
});

And("A user see Syarat n Ketentuan in pordi",() => {
  RegisterPage.PageSnK()
});

And("A user see Kebijakan Privasi in pordi",() =>{
    RegisterPage.PageKebijakanPrivasi()
});

//input scholl
And("A user select existing school",() => {
    RegisterPage.SelectSchool()
    RegisterPage.ClickLanjutSchool()
});

And("A user Input  new school name",() => {
    RegisterPage.InputNewSchool()
    RegisterPage.ClickButtonDaftar()
});

And("A user select active existing schools",() => {
  RegisterPage.SchoolActive()
  RegisterPage.ClickMengerti()
});


And("A user input data school",()=>{
    RegisterPage.InputNoSchool()
    RegisterPage.SelectProvinsi()
    RegisterPage.SelectKabupaten()
    RegisterPage.SelectKecamatan()
    RegisterPage.SelectKelurahan()
    RegisterPage.ClickLanjutAddSchool()
});

And("A user click button text Saya mengikuti Pelatihan or Webinar",()=>{
  RegisterPage.ClickMengikutiWebbinar()
});

And("A user click button text Saya tidak mengikuti Pelatihan or Webinar",()=>{
    RegisterPage.ClickTidakMengikutiWebbinar()
});

And("A user input code event", () =>{
  RegisterPage.InputCodeEvent()
  RegisterPage.ClickLanjutEventCode()
});

// data staff
And("A user enter data of user as leader",()=>{
  RegisterPage.InputNamaStaff()
  RegisterPage.SelectJabatanLeader()
  RegisterPage.LanjutInputStaff()
});

And("A user enter data of user as staff",()=>{
    RegisterPage.InputNamaStaff()
    RegisterPage.SelectJabatanStaff()
    RegisterPage.LanjutInputStaff()
});
  
  And("A user enter data leader",()=>{
    RegisterPage.InputNamaLeader()
    RegisterPage.SelectJabatanLeader()
    RegisterPage.InputEmailLeader()
    RegisterPage.PhoneLeader()
    RegisterPage.SimpanDataLeader()
});

//verification
And("A user input phone number",()=>{
  RegisterPage.InputPhone()
});

And("A user click button SMS",()=>{
  RegisterPage.ClickButtonSms()
});

And("A user input otp",()=>{
  RegisterPage.InputOtp()
  RegisterPage.ClickSelesaiOtp()
});

And("A user input otp and lanjut",()=>{
    RegisterPage.InputOtp()
    RegisterPage.ClickLanjutOtp()
  });

And("A user confirms",()=>{
  RegisterPage.ClickConfirm()
  RegisterPage.ClickMengerti()
});

And("A user click button Mulai",()=>{
  RegisterPage.ClickMulai()
});

//data student
And("A user click button upload",()=>{
  RegisterPage.ClikUpload()
});

And ("A user upload student data with same NIS",()=> {
  RegisterPage.StudentSameNIS()
});

And ("A user upload student data with same NISN",()=> {
  RegisterPage.StudentSameNISN()
});

And ("A user upload student data with duplikat student data",()=> {
  RegisterPage.StudentDuplikat()
});

And("A user upload student data",()=>{
  RegisterPage.PilihTahunAjaran()
  RegisterPage.UploadFile()
});

And("A user confirm student data",()=>{
  RegisterPage.ConfirmData()

});

Then("A user succesfully registration in pordi",()=>{
  RegisterPage.HapusGTK();
});

Then("A user succesfully registration in pordi with 2 gtk",()=>{
  RegisterPage.ClickBtnHalUtama()
    RegisterPage.HapusGTK2();
});

Then("A user see waiting approvall page",()=>{
    RegisterPage.HubungiCS();
});

Then("A user get an error message that file has same NIS",()=>{
  RegisterPage.ErrorMsgNIS();
});

Then("A user get an error message that file has same NISN",()=>{
  RegisterPage.ErrorMsgNISN();
});

Then("A user get an error message that duplikat student data ",()=>{
  RegisterPage.ErrorMsgDuplikat();
});

