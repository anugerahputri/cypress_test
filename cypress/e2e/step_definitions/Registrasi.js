import { When, And, Then } from "@badeball/cypress-cucumber-preprocessor"

const RegisterPage = require("../../pages/registrasiPage")
const RegisterPage2 = require("../../pages/RegisterPage")
const LoginPage = require("../../pages/LoginPage")

When("user click button email first", () => {
  RegisterPage.ClickEmail()
})
And("user click tab Sign Up", () => {
  RegisterPage.ClickTabSignUp()
})
And("user enter email", () => {
  RegisterPage.InputEmail()
})
And("user enter password {string}", (password) => {
  RegisterPage.InputPassword(password)
})
And("user click button Sign Up", () => {
  RegisterPage.ClickBtnSignUp()
  RegisterPage.ClickButtonAllow()
})
And("user see {string} in pordi first", (SyaratdanKetentuan) => {
  RegisterPage.SyaratdanKetentuan(SyaratdanKetentuan)
})
And("user see {string} in pordi", (KebijakanPrivasi) => {
  RegisterPage.KebijakanPrivasi(KebijakanPrivasi)
})
And("user enter new name of school", () => {
  RegisterPage.InputSchool()
})
And("user enter data of school", () => {
  RegisterPage.InputDataSekolah()
})
And("user click ikut event", () => {
  RegisterPage.ClickEvent()
})
And("user enter kode event {string}", (KodeEvent) => {
  RegisterPage.InputKodeEvent(KodeEvent)
})
And("user enter data of user as Kepala Sekolah", () => {
  RegisterPage.InputDataUserKepalaSekolah()
  RegisterPage.ClickBtnKonfirmasi()
})
And("user enter phone {string}", (phone) => {
  RegisterPage.InputPhone(phone)
})

//Register With Existing School
And("user enter name school {string}", (ExistingSchool) => {
  RegisterPage.InputExistingSchool(ExistingSchool)
})

And("user click Button Saya Mengerti", () => {
  RegisterPage.ClickBtnSayaMengerti()
})
And("user click Button Mulai", () => {
  RegisterPage.ClickBtnMulai()
})

//Jika tidak menggunakan kode event
And("user click tidak ikut event", () => {
  RegisterPage.ClickNotEvent()
})
Then("user successfully registration with page hubungi CS", () => {
  RegisterPage.HubungiCS()
})

//Jika Registrasi sebagai Staff TU
And("user enter data of user as Staff TU", () => {
  RegisterPage.InputDataUserStaffTU()
})
And("user enter data of pimpinan lembaga", () => {
  RegisterPage.InputDataPimpinanLembaga()
  RegisterPage.ClickBtnKonfirmasi()
})

//Jika Upload File
And("user click Button Upload Data", () => {
  RegisterPage.ClickBtnUploadData()
})
And("user enter data class and upload excel Pelajar", () => {
  RegisterPage.InputTahunAjaran()
  RegisterPage.ClickDownloadTemplate()
  RegisterPage.InputUploadFile()
  RegisterPage.CheckboxPelajar()
  RegisterPage.ClickBtnUpload()
  RegisterPage.ClickBtnOK()
  RegisterPage.ClickBtnHalamanUtama()
})
And("user enter data class and upload file not suitable Pelajar", () => {
  RegisterPage.InputTahunAjaran()
  RegisterPage.ClickDownloadTemplate()
  RegisterPage.InputUploadFileNotSuitable()
})

Then("user succesfully registration Pordi use {string}", (akun) => {
  LoginPage.ClickBtnMenu()
  LoginPage.VerifyUserLogin(akun)
  RegisterPage.ClickBtnCloseSidebar()
  RegisterPage2.HapusGTK()
})
Then("user succesfully registration Pordi use {string} with 2 gtk", (akun) => {
  LoginPage.ClickBtnMenu()
  LoginPage.VerifyUserLogin(akun)
  RegisterPage.ClickBtnCloseSidebar()
  RegisterPage.Hapus2GTK()
}) 

And("user enter exsiting name of school where has a staff", () => {
  RegisterPage.InputExistingSchool1()
})

And("user enter exsiting name of school where doesn't have a staff", () => {
  RegisterPage.InputExistingSchool2()
})

And("user enter exsiting name of school where doesn't have a staff but have student same NIS", () => {
  RegisterPage.InputExistingSchool3()
})
And("user enter data class and upload excel Pelajar same NIS than existing student", () => {
  RegisterPage.InputTahunAjaran()
  RegisterPage.ClickDownloadTemplate()
  RegisterPage.InputUploadFile()
})
And("user confirm file uploaded", () => {
  RegisterPage.CheckboxPelajar()
  RegisterPage.ClickBtnUpload()
  RegisterPage.ClickBtnOK()
})

And("user enter data class and upload file more than 5 students", () => {
  RegisterPage.InputTahunAjaran()
  RegisterPage.ClickDownloadTemplate()
  RegisterPage.InputUploadFileMoreThan5Students()
})
Then("user get an error message that file more than 5 students", () => {
  RegisterPage.ErrorMsgMoreThan5Students()
})

And("user enter data class and upload excel Pelajar same NIS", () => {
  RegisterPage.InputTahunAjaran()
  RegisterPage.ClickDownloadTemplate()
  RegisterPage.InputUploadFileSameNIS()
})
Then("user get an error message that file has same NIS", () => {
  RegisterPage.ErrorMsgNIS()
})

Then("user get an error message that file has same NIS than existing student", () => {
  RegisterPage.ErrorMsgNISExisting()
})

Then("user get an error message that file not suitable", () => {
  RegisterPage.ErrorMsgNotSuitable()
})

And("user enter data class and upload excel Pelajar same NISN", () => {
  RegisterPage.InputTahunAjaran()
  RegisterPage.ClickDownloadTemplate()
  RegisterPage.InputUploadFileSameNISN()
})
Then("user get an error message that file has same NISN", () => {
  RegisterPage.ErrorMsgNISN()
})