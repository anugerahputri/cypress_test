// const { Upload_file_page } = require("../locator/registrasiLocator")
const locator = require("../locator/registrasiLocator")

class registrasiPage{
  async ClickEmail(){
    cy.get(locator.datatestid.BtnEmail).click()
    cy.get(locator.datatestid.NotyourAccount).then(($cek) => {
      if($cek.text().includes("Not your account?")){
        return cy.wrap($cek).click()
      }
    })
  }
  async ClickTabSignUp(){
    cy.get('li').contains("Sign Up").click()
  }
  async InputEmail() {
    cy.get(locator.datatestid.Inputusername).type(userID_Alpha())

    function userID_Alpha() {
      var email = "regisautomation+"
      var text = ""

      var possible = "qwertyuioplkjhgfdazxcvbnm1234567890"

      for (var i = 0; i < 4; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      var value = email + text.concat("@yopmail.com")
      return value
    }
  }
  async InputPassword(password){
    cy.get(locator.datatestid.Inputpassword).type(password)
  }
  async ClickBtnSignUp(){
    cy.get(locator.datatestid.ButtonSignup)
      .invoke("show")
      .should("be.visible")
      .click({ timeout: 3000 })
  }
  async ClickButtonAllow(){
    cy.get(locator.datatestid.ButtonAllow)
      .invoke("show")
      .should("be.visible")
      .click()
    return cy.wait(15000)
  }
  async SyaratdanKetentuan(SyaratdanKetentuan){
    cy.contains(SyaratdanKetentuan)
    cy.get(locator.datatestid.ButtonLanjut).click()
    return cy.wait(8000)
  }
  async KebijakanPrivasi(KebijakanPrivasi){
    cy.contains(KebijakanPrivasi)
    cy.get(locator.datatestid.ButtonSetuju).click()
    return cy.wait(8000)
  }
  async InputSchool(){
    cy.get(locator.School_page.InputSchool).type(NameSchool())

    function NameSchool() {
      var school = "SD Auto "
      var text = " "
      var possible = "qwertyuiopasdfghjklzxcvbnm"
      var date = new Date()
      var tanggal = date.getDate()
      var bulan = date.getMonth()
      var arrbulan = ["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];

      for (var i = 0; i < 3; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      var value = school + tanggal + arrbulan[bulan] + text
      return value
    }
    cy.get(locator.School_page.BtnDaftarSekarang).click()
    return cy.wait(5000)
  }
  async InputDataSekolah(){
    cy.get(locator.School_add_page.InputNPSN).type("4444")
    cy.get(locator.School_add_page.InputProvinsi).select('Jambi').should('have.value', '5')
    cy.get(locator.School_add_page.InputKota).select('Kabupaten Merangin').should('have.value', '91')
    cy.get(locator.School_add_page.InputKecamatan).select('Jangkat').should('have.value', '1112')
    cy.get(locator.School_add_page.InputKelurahan).select('Pulau Tengah').should('have.value', '16122')
    cy.get(locator.School_add_page.BtnLanjut2).click()
  }
  async ClickEvent(){
    cy.get(locator.School_add_page.BtnEvent).click()
    return cy.wait(3000)
  }
  async InputKodeEvent(KodeEvent){
    cy.get(locator.Event_page.InputKodeEvent).type(KodeEvent)
    cy.get(locator.Event_page.BtnLanjut3).click()
    return cy.wait(3000)
  }
  async InputDataUserKepalaSekolah(){
    cy.get(locator.first_staff_page.InputNamaUser).type("Testing User")
    cy.get(locator.first_staff_page.InputJabatan).select('Kepala Sekolah').should('have.value', 'kepala_sekolah')
    cy.get(locator.first_staff_page.InputEmail).then(($email) => {
      if ($email.is(":enabled")) {
        cy.get(locator.first_staff_page.InputEmail).type(userID_Alpha())
      }

      function userID_Alpha() {
        var email = "regisautomation+"
        var text = ""
  
        var possible = "qwertyuioplkjhgfdazxcvbnm1234567890"
  
        for (var i = 0; i < 4; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length))
        var value = email + text.concat("@yopmail.com")
        return value
      }
    })
    cy.get(locator.first_staff_page.BtnLanjut4).click()
    return cy.wait(5000)
  }
  async InputPhone(phone){
    cy.get(locator.phone_page.InputPhone).type(phone)
    cy.get(locator.phone_page.BtnLanjut5).click()
    cy.get(locator.phone_page.BtnSMS).click()
    return cy.wait(5000)
  }
  async ClickBtnCloseSidebar(){
    cy.get(locator.datatestid.BtnCloseSidebar).click()
  }
  async Hapus2GTK(){
    cy.contains("Data Digital",{ timeout: 30000 }).should("be.visible")
    cy.get(locator.Portal_page.btnmenugtk).click()
    cy.get(locator.Portal_page.btnaturgtk).click()
    cy.contains('Testing Nama Pimpinan').click()
    cy.get(locator.Portal_page.HapusGtk).click()
    cy.get(locator.Portal_page.ConfirmHapus).click()
    cy.get(locator.Portal_page.CardGtk).click()
    cy.get(locator.Portal_page.HapusGtk).click()
    cy.get(locator.Portal_page.ConfirmHapus).click()
  }

  //Register With Exsiting School
  async InputExistingSchool1(){
    cy.get(locator.School_page.InputSchool).type("SD Automation Existing 1")
    cy.get('li:first').click()
    cy.get(locator.School_page.BtnLanjut).click()
    cy.get(locator.School_page.BtnSayaMengerti).click()
  }
  async InputExistingSchool2(){
    cy.get(locator.School_page.InputSchool).type("SD Automation Existing 2")
    cy.get('li:first').click()
    cy.get(locator.School_page.BtnLanjutExistingSchool).click()
  }
  async InputExistingSchool3(){
    cy.get(locator.School_page.InputSchool).type("SD Automation Existing 3")
    cy.get('li:first').click()
    cy.get(locator.School_page.BtnLanjutExistingSchool).click()
  }


  //Jika menggunakan kode event
  async ClickBtnSayaMengerti(){
    cy.url().should('include', 'http://localhost:3000/onboarding/tutorial/')
    cy.get(locator.tutorial_page.BtnSayaMengerti).click()
    cy.get(locator.tutorial_page.BtnSayaMengerti).click()
  }
  async ClickBtnMulai(){
    cy.get(locator.tutorial_page.BtnSayaMengerti).click()
  }

  //Jika tidak menggunakan kode event
  async ClickNotEvent(){
    cy.get(locator.School_add_page.BtnNotEvent).click()
    return cy.wait(3000)
  }
  async HubungiCS(){
    cy.contains("Hubungi CS")
  }

  //Jika Registrasi sebagai Staff TU
  async InputDataUserStaffTU(){
    cy.get(locator.first_staff_page.InputNamaUser).type("Testing User")
    cy.get(locator.first_staff_page.InputJabatan).select('Staff TU / Operator Data').should('have.value', 'staff_tu')
    cy.get(locator.first_staff_page.InputEmail).then(($email) => {
      if ($email.is(":enabled")) {
        cy.get(locator.first_staff_page.InputEmail).type(userID_Alpha())
      }

      function userID_Alpha() {
        var email = "regisautomation+"
        var text = ""
  
        var possible = "qwertyuioplkjhgfdazxcvbnm1234567890"
  
        for (var i = 0; i < 4; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length))
        var value = email + text.concat("@yopmail.com")
        return value
      }
    })
    cy.get(locator.first_staff_page.BtnLanjut4).click()
    return cy.wait(5000)
  }
  async InputDataPimpinanLembaga(){
    cy.get(locator.Data_pimpinan_page.DropdownBapakIbu).select('Ibu').should('have.value', 'wanita')
    cy.get(locator.Data_pimpinan_page.InputNamaPimpinan).type("Testing Nama Pimpinan")
    cy.get(locator.Data_pimpinan_page.InputJabatan).select('Kepala Sekolah').should('have.value', 'kepala_sekolah')
    cy.get(locator.Data_pimpinan_page.InputEmailPimpinan).type("testingpimpinan@yopmail.com")
    cy.get(locator.Data_pimpinan_page.InputPonselPimpinan).type("084444455555")
    cy.get(locator.Data_pimpinan_page.BtnSimpan).click()
  }
  async ClickBtnKonfirmasi(){
    cy.get(locator.phone_page.BtnKonfirmasi).click()
  }

  //Jika Upload Data
  async ClickBtnUploadData(){
    cy.get(locator.Onboarding_page.BtnUploadData).click()
  }
  async InputTahunAjaran(){
    cy.url().should('include', 'http://localhost:3000/onboarding/upload/')
    cy.get(locator.Upload_file_page.InputTahunAjaran).select("2022/2023").should('have.attr', 'data-cy')
    return cy.wait(3000)
  }
  async ClickDownloadTemplate(){
    cy.get(locator.Upload_file_page.BtnDownloadTemplate).click()
    return cy.wait(3000)
  }
  async InputUploadFile(){
    cy.fixture('file/student-idn-format.xlsx', { encoding: null }).as('myFixture')
    cy.get(locator.Upload_file_page.InputUploadFile).selectFile('@myFixture', { force: true })
    return cy.wait(5000)
  }
  async InputUploadFileNotSuitable(){
    cy.fixture('file/FileWord.docx', { encoding: null }).as('myFixture')
    cy.get(locator.Upload_file_page.InputUploadFile).selectFile('@myFixture', { force: true })
  }
  async CheckboxPelajar(){
    cy.get(locator.Konfirmasi_upload_page.CheckboxPelajar).click()
  }
  async ClickBtnUpload(){
    cy.get(locator.Konfirmasi_upload_page.BtnUpload).click()
  }
  async ClickBtnOK(){
    cy.get(locator.Konfirmasi_upload_page.BtnOK).click()
  }
  async ClickBtnHalamanUtama(){
    cy.get(locator.Jenjang_pendidikan_page.BtnHalamanUtama).click()
    return cy.wait(10000)
  }

  async InputUploadFileSameNIS(){
    cy.fixture('file/student-idn-format-same-nis.xlsx', { encoding: null }).as('myFixture')
    cy.get(locator.Upload_file_page.InputUploadFile).selectFile('@myFixture', { force: true })
    return cy.wait(5000)
  }
  async ErrorMsgNIS(){
    cy.contains("NIS")
    cy.contains("duplikat")
  }
  async ErrorMsgNISExisting(){
    cy.contains("nis")
    cy.contains("sudah terdaftar")
  }
  
  async ErrorMsgNotSuitable(){
    cy.get(locator.Upload_file_page.ErrorMsg).contains("Terjadi kesalahan ketika membaca file")
  }
  async InputUploadFileMoreThan5Students(){
    cy.fixture('file/student-idn-format-lebih dari 5.xlsx', { encoding: null }).as('myFixture')
    cy.get(locator.Upload_file_page.InputUploadFile).selectFile('@myFixture', { force: true })
    return cy.wait(5000)
  }
  async ErrorMsgMoreThan5Students(){
    cy.contains("Duplikasi Nomor HP Ibu")
    cy.contains("lebih dari 5")
  }
  
  async InputUploadFileSameNISN(){
    cy.fixture('file/student-idn-format-same-nisn.xlsx', { encoding: null }).as('myFixture')
    cy.get(locator.Upload_file_page.InputUploadFile).selectFile('@myFixture', { force: true })
    return cy.wait(10000)
  }
  async ErrorMsgNISN(){
    cy.contains("NISN")
    cy.contains("duplikat") 
  }
}

module.exports = new registrasiPage()