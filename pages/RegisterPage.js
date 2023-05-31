const locator = require("../locator/registrasiLocator");
class RegisterPage  {
    async NavigateUrlHome() {
        cy.visit("/")
      }
    async NavigateUrlRegistrasi(){
        cy.forceVisit('http://localhost:1000/')
        cy.visit('http://localhost:3000/')
        cy.get(locator.datatestid.BtnEmail).click();
        cy.get(locator.datatestid.NotyourAccount).then(($cek) => {
            if($cek.text().includes("Not your account?")){
              return cy.wrap($cek).click()
            }
          })
    };

    async PageSignin(){
        cy.get("li").contains("Sign Up").click();
    };

    //Delete Staff by API
    async DeleteStaffbyPhone(phonenumber){
        cy.APIDeleteStaff(phonenumber);
    }

    //registered email
    async InputEmailRegistered () {
        cy.get(locator.datatestid.Inputusername).type('loginautomation@cypress.co')
    };
    async InputPassword() {
        cy.get(locator.datatestid.Inputpassword).type('112233' , { sensitive: true });
    };
    async AlreadyExists(ErorAlreadyExists) {
        cy.contains(ErorAlreadyExists).should("be.visible")
    };

    //register email 
    //general
    async InputNewUserName () {
        cy.get(locator.datatestid.Inputusername).type(userID_Alpha())

        function userID_Alpha() {
        var email = "newemail"
        var text = "";

            var possible = "qwertyuioplkjhgfdazxcvbnm1234567890";
            for (var i = 0; i < 4; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            var value = email + text.concat('@test.com')
            return value;
        }

    };
    async ClickbuttonSignup () {
        cy.get(locator.datatestid.ButtonSignup).click();
    }
    async ClickButtonAllow(){
        cy.get(locator.datatestid.ButtonAllow).click()
    };

    async PageSnK(){
        cy.wait(5000)
        cy.contains("Syarat & Ketentuan",{ timeout: 30000 }).should("be.visible")
        cy.get(locator.datatestid.ButtonLanjut).click()
    };

    async PageKebijakanPrivasi(){
        cy.wait(5000)
        cy.contains("Kebijakan Privasi").should("be.visible")
        cy.get(locator.datatestid.ButtonSetuju).click()
    };

    async SelectSchool (){
        cy.get(locator.School_page.InputSchool).type("sek")
        cy.get('li:first').click()
     };

    async ClickLanjutSchool (){
        cy.contains('Lanjut').click()
    };

    async InputNewSchool(){
        cy.get(locator.School_page.InputSchool).type(NewSchool())

        function NewSchool() {
            var school = "Sekolah "
            var text = "";
    
            var possible = "qwertyuioplkjhgfdazxcvbnm1234567890";
    
            for (var i = 0; i < 4; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            var value = school + text
            return value;
            }
    };

    async ClickButtonDaftar (){
        cy.get(locator.School_page.BtnDaftarSekarang).click()
    };

    async InputNoSchool(){
        cy.get(locator.School_add_page.InputNPSN).type(NoSchool(6))

        function NoSchool() {
            var Nomor = "22 "
            var text = "";
    
            var possible = "1234567890";
    
            for (var i = 0; i < 4; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            var value = Nomor + text
            return value;
            }

    };

    async SchoolActive(){
        cy.get(locator.School_page.InputSchool).type('sekolah hikari')
        cy.get('li:first').click()
    }

    async ClickMengikutiWebbinar(){
        cy.get(locator.School_page.ClickMengikutiWebbinar).click()
    };
    
    async ClickTidakMengikutiWebbinar(){
        cy.get(locator.School_page.ClickTidakMengikutiWebbinar).click()
    };

    async ClickMengerti(){
        cy.get(locator.School_page.BtnSayaMengerti).click()
    };

    async InputCodeEvent(){
        cy.get(locator.Event_page.InputKodeEvent).type('abcd')
    };

    async ClickLanjutEventCode(){
        cy.get(locator.Event_page.BtnLanjut3).click()
    };

    //staff
    async InputNamaStaff(){
        cy.get(locator.first_staff_page.InputNamaUser).type('Putra Putri')
    };

    async InputNamaLeader(){
        cy.get(locator.Data_pimpinan_page.InputNamaPimpinan).type('Bos Putra Putri')
    };

    async SelectJabatanLeader(){
        cy.get(locator.Data_pimpinan_page.InputJabatan).select('Kepala Sekolah')
    };

    async InputEmailLeader (){
        cy.get(locator.Data_pimpinan_page.InputEmailPimpinan).type('emailleader@mail.com')
    };

    async PhoneLeader (){
        cy.get(locator.Data_pimpinan_page.InputPonselPimpinan).type('084444455555')
    };

    async SelectJabatanStaff(){
        cy.get(locator.first_staff_page.InputJabatan).select('Staff TU / Operator Data')
    };

    async LanjutInputStaff(){
        cy.get(locator.first_staff_page.BtnLanjut4).click({force:true})
    };

    async SimpanDataLeader(){
        cy.get(locator.Data_pimpinan_page.BtnSimpan).click({force:true})
    };

    //otp
    async InputPhone(){
        cy.get(locator.phone_page.InputPhone).type('085555566666')
        cy.get(locator.phone_page.BtnLanjut5).click()
    };

    async ClickButtonSms() {
        cy.get(locator.phone_page.BtnSMS).click()
    };

    async InputOtp() {

        cy.get(locator.OTP_page.InputOtp1).type('55566')
        cy.wait(2000)
        cy.get(locator.OTP_page.InputOtp6).type('6')
        cy.wait(2000)
        
    };

    async ClickSelesaiOtp(){
        cy.contains('Selesai').click()
    };

    async ClickLanjutOtp(){
        cy.contains('Lanjut').click()
    };

    //new scholl
    async SelectProvinsi(){
        cy.get(locator.School_add_page.InputProvinsi).select('Riau').should('have.value', '4')
    }; 
    async SelectKabupaten(){
        cy.get(locator.School_add_page.InputKota).select('Kabupaten Bengkalis').should('have.value', '76')
    };  
    async SelectKecamatan(){
        cy.get(locator.School_add_page.InputKecamatan).select('Bantan').should('have.value', '905')
    };  
    async SelectKelurahan(){
        cy.get(locator.School_add_page.InputKelurahan).select('Bantan Air').should('have.value', '13695')
    }; 
    async ClickLanjutAddSchool(){
        cy.get(locator.School_add_page.BtnLanjut2).click()
    };

    //confirmation
    async ClickConfirm(){
        cy.wait(5000)
        cy.contains('Ya, Lanjutkan!').click()
    };

    async ClickMengerti(){
        cy.contains('Saya Mengerti').click()
        cy.contains('Saya Mengerti').click()
    };
    
    async ClickMulai(){
        cy.contains('Mulai').click()
    };

    async ClikUpload(){
        cy.get(locator.Onboarding_page.BtnUploadData).click()
    };

    async PilihTahunAjaran(){
        cy.get(locator.Upload_file_page.InputTahunAjaran).select("2022/2023")
        return cy.wait(3000)
    };
    
    async UploadFile(){
        cy.fixture('file/UploadSiswa.xlsx', { encoding: null }).as('myFixture')
        cy.get(locator.Upload_file_page.InputUploadFile).selectFile('@myFixture', { force: true })
        return cy.wait(10000)
    };

    async StudentSameNIS(){
        cy.fixture('file/student-idn-format-same-nis.xlsx', { encoding: null }).as('myFixture')
        cy.get(locator.Upload_file_page.InputUploadFile).selectFile('@myFixture', { force: true })
        return cy.wait(10000)
    };

    async StudentSameNISN(){
        cy.fixture('file/student-idn-format-same-nisn.xlsx', { encoding: null }).as('myFixture')
        cy.get(locator.Upload_file_page.InputUploadFile).selectFile('@myFixture', { force: true })
        return cy.wait(10000)
    };

    async StudentDuplikat(){
        cy.fixture('file/StudentDataDuplikat.xlsx', { encoding: null }).as('myFixture')
        cy.get(locator.Upload_file_page.InputUploadFile).selectFile('@myFixture', { force: true })
        return cy.wait(10000)
    };

    async ConfirmData(){
        cy.get(locator.Konfirmasi_upload_page.CheckboxPelajar).click()
        cy.get(locator.Konfirmasi_upload_page.BtnUpload).click()
        cy.get(locator.Konfirmasi_upload_page.BtnOK).click()
    };

    async ClickBtnHalUtama(){
        cy.contains('Halaman Utama').click({force:true})
        return cy.wait(10000)
    };

    //Then
    async HapusGTK(){
        cy.contains("Data Digital",{ timeout: 30000 }).should("be.visible")
        cy.get(locator.Portal_page.btnmenugtk).click()
        cy.get(locator.Portal_page.btnaturgtk).click()
        cy.get(locator.Portal_page.CardGtk).click()
        cy.get(locator.Portal_page.HapusGtk).click()
        cy.get(locator.Portal_page.ConfirmHapus).click()
    };

    async HapusGTK2(){
        cy.contains("Data Digital",{ timeout: 30000 }).should("be.visible")
        cy.get(locator.Portal_page.btnmenugtk).click()
        cy.get(locator.Portal_page.btnaturgtk).click()
        cy.contains('Bos Putra Putri').click()
        cy.get(locator.Portal_page.HapusGtk).click()
        cy.get(locator.Portal_page.ConfirmHapus).click()
        cy.get(locator.Portal_page.CardGtk).click()
        cy.get(locator.Portal_page.HapusGtk).click()
        cy.get(locator.Portal_page.ConfirmHapus).click()
    };

    async HubungiCS(){
        cy.contains("Hubungi CS")
    };

    async ErrorMsgNIS(){
        cy.contains("NIS")
        cy.contains("duplikat")
    };

    async ErrorMsgNISN(){
        cy.contains("NISN")
        cy.contains("duplikat")
    };
    
    async ErrorMsgDuplikat(){
        cy.contains("Gagal Mengupload Data Siswa")
    };
}


module.exports = new RegisterPage();