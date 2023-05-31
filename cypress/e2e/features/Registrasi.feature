Feature: Registrasi Page
    Feature Registrasi page for positive case and negative case

    Background:
        Given A user opens a Website Pordi

    @negatif @registrasibyemail 
    Scenario: A user failed registration in pordi with input email registered
        When A user click button Email
        And A user click page sign Up
        And A user input email and password registered
        Then A user see "The user already exists."

    @positif @registrasibyemail 
    Scenario: user successfully registration in pordi with Email (existing School & Join Event & leader & not upload file)
        When A user click button Email
        And A user click page sign Up
        And A user input new email and password 
        And A user click button allow
        And A user see Syarat n Ketentuan in pordi
        And A user see Kebijakan Privasi in pordi
        And A user select existing school
        And A user click button text Saya mengikuti Pelatihan or Webinar
        And A user input code event
        And A user enter data of user as leader
        And A user input phone number
        And A user click button SMS
        And A user input otp
        And A user confirms
        And A user click button Mulai
        Then A user succesfully registration in pordi

    @positif @registrasibyemail @focus
    Scenario: user successfully registration in pordi with Email (existing School & Join Event & leader & upload file)
        When A user click button Email
        And A user click page sign Up
        And A user input new email and password 
        And A user click button allow
        And A user see Syarat n Ketentuan in pordi
        And A user see Kebijakan Privasi in pordi
        And A user select existing school
        And A user click button text Saya mengikuti Pelatihan or Webinar
        And A user input code event
        And A user enter data of user as leader
        And A user input phone number
        And A user click button SMS
        And A user input otp
        And A user confirms
        And A user click button upload
        And A user upload student data
        And A user confirm student data
        Then A user succesfully registration in pordi

    @positif @registrasibyemail
    Scenario: user successfully registration in pordi with Email (existing School & Join Event & staff & not upload file)
        When A user click button Email
        And A user click page sign Up
        And A user input new email and password 
        And A user click button allow
        And A user see Syarat n Ketentuan in pordi
        And A user see Kebijakan Privasi in pordi
        And A user select existing school
        And A user click button text Saya mengikuti Pelatihan or Webinar
        And A user input code event
        And A user enter data of user as staff
        And A user input phone number
        And A user click button SMS
        And A user input otp and lanjut
        And A user enter data leader
        And A user confirms
        And A user click button Mulai
        Then A user succesfully registration in pordi with 2 gtk
    
    @positif @registrasibyemail
    Scenario: user successfully registration in pordi with Email (existing School & Join Event & staff & upload file)
        When A user click button Email
        And A user click page sign Up
        And A user input new email and password 
        And A user click button allow
        And A user see Syarat n Ketentuan in pordi
        And A user see Kebijakan Privasi in pordi
        And A user select existing school
        And A user click button text Saya mengikuti Pelatihan or Webinar
        And A user input code event
        And A user enter data of user as staff
        And A user input phone number
        And A user click button SMS
        And A user input otp and lanjut
        And A user enter data leader
        And A user confirms
        And A user click button upload
        And A user upload student data
        And A user confirm student data
        Then A user succesfully registration in pordi with 2 gtk

    @positif @registrasibyemail
    Scenario: user successfully registration in pordi with Email (existing School & not Join Event & leader)
        When A user click button Email
        And A user click page sign Up
        And A user input new email and password 
        And A user click button allow
        And A user see Syarat n Ketentuan in pordi
        And A user see Kebijakan Privasi in pordi
        And A user select existing school
        And A user click button text Saya tidak mengikuti Pelatihan or Webinar
        And A user enter data of user as leader
        And A user input phone number
        And A user click button SMS
        And A user input otp
        Then A user see waiting approvall page

    @positif @registrasibyemail 
    Scenario: user successfully registration in pordi with Email (existing School & not Join Event & staff)
        When A user click button Email
        And A user click page sign Up
        And A user input new email and password 
        And A user click button allow
        And A user see Syarat n Ketentuan in pordi
        And A user see Kebijakan Privasi in pordi
        And A user select existing school
        And A user click button text Saya tidak mengikuti Pelatihan or Webinar
        And A user enter data of user as staff
        And A user input phone number
        And A user click button SMS
        And A user input otp
        And A user enter data leader
        Then A user see waiting approvall page

    @positif @registrasibyemail
    Scenario: user successfully registration in pordi with Email (new School & Join Event & leader & not upload file)
        When A user click button Email
        And A user click page sign Up
        And A user input new email and password 
        And A user click button allow
        And A user see Syarat n Ketentuan in pordi
        And A user see Kebijakan Privasi in pordi
        And A user Input  new school name
        And A user input data school
        And A user click button text Saya mengikuti Pelatihan or Webinar
        And A user input code event
        And A user enter data of user as leader
        And A user input phone number
        And A user click button SMS
        And A user input otp
        And A user confirms
        And A user click button Mulai
        Then A user succesfully registration in pordi

    @positif @registrasibyemail 
    Scenario: user successfully registration in pordi with Email (new School & Join Event & leader & upload file)
        When A user click button Email
        And A user click page sign Up
        And A user input new email and password 
        And A user click button allow
        And A user see Syarat n Ketentuan in pordi
        And A user see Kebijakan Privasi in pordi
        And A user Input  new school name
        And A user input data school
        And A user click button text Saya mengikuti Pelatihan or Webinar
        And A user input code event
        And A user enter data of user as leader
        And A user input phone number
        And A user click button SMS
        And A user input otp
        And A user confirms
        And A user click button upload
        And A user upload student data
        And A user confirm student data
        Then A user succesfully registration in pordi

    @positif @registrasibyemail
    Scenario: user successfully registration in pordi with Email (new School & Join Event & Staff & not upload file)
        When A user click button Email
        And A user click page sign Up
        And A user input new email and password 
        And A user click button allow
        And A user see Syarat n Ketentuan in pordi
        And A user see Kebijakan Privasi in pordi
        And A user Input  new school name
        And A user input data school
        And A user click button text Saya mengikuti Pelatihan or Webinar
        And A user input code event
        And A user enter data of user as staff
        And A user input phone number
        And A user click button SMS
        And A user input otp and lanjut
        And A user enter data leader
        And A user confirms
        And A user click button Mulai
        Then A user succesfully registration in pordi with 2 gtk

    @positif @registrasibyemail 
    Scenario: user successfully registration in pordi with Email (new School & Join Event & Staff & upload file)
        When A user click button Email
        And A user click page sign Up
        And A user input new email and password 
        And A user click button allow
        And A user see Syarat n Ketentuan in pordi
        And A user see Kebijakan Privasi in pordi
        And A user Input  new school name
        And A user input data school
        And A user click button text Saya mengikuti Pelatihan or Webinar
        And A user input code event
        And A user enter data of user as staff
        And A user input phone number
        And A user click button SMS
        And A user input otp and lanjut
        And A user enter data leader
        And A user confirms
        And A user click button upload
        And A user upload student data
        And A user confirm student data
        Then A user succesfully registration in pordi with 2 gtk

    @positif @registrasibyemail 
    Scenario: user successfully registration in pordi with Email (new School & Not Join Event & Leader)
        When A user click button Email
        And A user click page sign Up
        And A user input new email and password 
        And A user click button allow
        And A user see Syarat n Ketentuan in pordi
        And A user see Kebijakan Privasi in pordi
        And A user Input  new school name
        And A user input data school
        And A user click button text Saya tidak mengikuti Pelatihan or Webinar
        And A user enter data of user as leader
        And A user input phone number
        And A user click button SMS
        And A user input otp
        Then A user see waiting approvall page

    @positif @registrasibyemail
    Scenario: user successfully registration in pordi with Email (new School & Not Join Event & Staff)
        When A user click button Email
        And A user click page sign Up
        And A user input new email and password 
        And A user click button allow
        And A user see Syarat n Ketentuan in pordi
        And A user see Kebijakan Privasi in pordi
        And A user Input  new school name
        And A user input data school
        And A user click button text Saya tidak mengikuti Pelatihan or Webinar
        And A user enter data of user as staff
        And A user input phone number
        And A user click button SMS
        And A user input otp
        And A user enter data leader
        Then A user see waiting approvall page

    @negatif @registrasibyemail
    Scenario: user registration in pordi with Email and active existing schools
        When A user click button Email
        And A user click page sign Up
        And A user input new email and password 
        And A user click button allow
        And A user see Syarat n Ketentuan in pordi
        And A user see Kebijakan Privasi in pordi
        And A user select active existing schools
        Then A user see waiting approvall page

    @negatif @registrasibyemail
    Scenario: user failed registration in pordi, user upload student data with same NIS
        When A user click button Email
        And A user click page sign Up
        And A user input new email and password 
        And A user click button allow
        And A user see Syarat n Ketentuan in pordi
        And A user see Kebijakan Privasi in pordi
        And A user select existing school
        And A user click button text Saya mengikuti Pelatihan or Webinar
        And A user input code event
        And A user enter data of user as leader
        And A user input phone number
        And A user click button SMS
        And A user input otp
        And A user confirms
        And A user click button upload
        And A user upload student data with same NIS
        And A user confirm student data
        Then A user get an error message that file has same NIS

    @negatif @registrasibyemail
    Scenario: user failed registration in pordi, user upload student data with same NISN
        When A user click button Email
        And A user click page sign Up
        And A user input new email and password 
        And A user click button allow
        And A user see Syarat n Ketentuan in pordi
        And A user see Kebijakan Privasi in pordi
        And A user select existing school
        And A user click button text Saya mengikuti Pelatihan or Webinar
        And A user input code event
        And A user enter data of user as leader
        And A user input phone number
        And A user click button SMS
        And A user input otp
        And A user confirms
        And A user click button upload
        And A user upload student data with same NISN
        And A user confirm student data
        Then A user get an error message that file has same NISN

    @negatif @registrasibyemail
    Scenario: user failed registration in pordi, user upload duplikat student data 
        When A user click button Email
        And A user click page sign Up
        And A user input new email and password 
        And A user click button allow
        And A user see Syarat n Ketentuan in pordi
        And A user see Kebijakan Privasi in pordi
        And A user select existing school
        And A user click button text Saya mengikuti Pelatihan or Webinar
        And A user input code event
        And A user enter data of user as leader
        And A user input phone number
        And A user click button SMS
        And A user input otp
        And A user confirms
        And A user click button upload
        And A user upload student data with duplikat student data
        And A user confirm student data
        Then A user get an error message that duplikat student data 

###############

    @positive @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (New School & Join Event & Kepala Pimpinan & Tidak upload file)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter new name of school
        And     user enter data of school
        And     user click ikut event
        And     user enter kode event "abcd"
        And     user enter data of user as Kepala Sekolah
        And     user click Button Saya Mengerti
        And     user click Button Mulai
        Then    user succesfully registration Pordi use "083333344444"

    @positive @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (New School & Join Event & Kepala Pimpinan & upload file)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter new name of school
        And     user enter data of school
        And     user click ikut event 
        And     user enter kode event "abcd"
        And     user enter data of user as Kepala Sekolah
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload excel Pelajar
        Then    user succesfully registration Pordi use "083333344444"

    @negative @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (New School & Join Event & Kepala Pimpinan & upload file not suitable)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter new name of school
        And     user enter data of school
        And     user click ikut event 
        And     user enter kode event "abcd"
        And     user enter data of user as Kepala Sekolah
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload file not suitable Pelajar
        Then    user get an error message that file not suitable

    @negative @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (New School & Join Event & Kepala Pimpinan & upload file more than 5 students)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter new name of school
        And     user enter data of school
        And     user click ikut event 
        And     user enter kode event "abcd"
        And     user enter data of user as Kepala Sekolah
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload file more than 5 students
        Then    user get an error message that file more than 5 students

    @negative @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (New School & Join Event & Kepala Pimpinan & upload file has same NIS)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter new name of school
        And     user enter data of school
        And     user click ikut event 
        And     user enter kode event "abcd"
        And     user enter data of user as Kepala Sekolah
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload excel Pelajar same NIS
        Then    user get an error message that file has same NIS

    @negative @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (New School & Join Event & Kepala Pimpinan & upload file has same NISN)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter new name of school
        And     user enter data of school
        And     user click ikut event 
        And     user enter kode event "abcd"
        And     user enter data of user as Kepala Sekolah
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload excel Pelajar same NISN
        Then    user get an error message that file has same NISN

    @positive @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (New School & Join Event & Staff & Tidak upload file)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter new name of school
        And     user enter data of school
        And     user click ikut event
        And     user enter kode event "abcd"
        And     user enter data of user as Staff TU
        And     user enter data of pimpinan lembaga
        And     user click Button Saya Mengerti
        And     user click Button Mulai
        Then    user succesfully registration Pordi use "083333344444" with 2 gtk

    @positive @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (New School & Join Event & Staff & upload file)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter new name of school
        And     user enter data of school
        And     user click ikut event
        And     user enter kode event "abcd"
        And     user enter data of user as Staff TU
        And     user enter data of pimpinan lembaga
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload excel Pelajar 
        Then    user succesfully registration Pordi use "083333344444" with 2 gtk

    @negative @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (New School & Join Event & Staff & upload file not suitable)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter new name of school
        And     user enter data of school
        And     user click ikut event 
        And     user enter kode event "abcd"
        And     user enter data of user as Staff TU
        And     user enter data of pimpinan lembaga
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload file not suitable Pelajar
        Then    user get an error message that file not suitable

    @negative @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (New School & Join Event & Staff & upload file more than 5 students)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter new name of school
        And     user enter data of school
        And     user click ikut event 
        And     user enter kode event "abcd"
       And     user enter data of user as Staff TU
        And     user enter data of pimpinan lembaga
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload file more than 5 students
        Then    user get an error message that file more than 5 students

    @negative @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (New School & Join Event & Staff & upload file has same NIS)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter new name of school
        And     user enter data of school
        And     user click ikut event
        And     user enter kode event "abcd"
        And     user enter data of user as Staff TU
        And     user enter data of pimpinan lembaga
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload excel Pelajar same NIS
        Then    user get an error message that file has same NIS

    @negative @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (New School & Join Event & Staff & upload file has same NISN)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter new name of school
        And     user enter data of school
        And     user click ikut event
        And     user enter kode event "abcd"
        And     user enter data of user as Staff TU
        And     user enter data of pimpinan lembaga
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload excel Pelajar same NISN
        Then    user get an error message that file has same NISN

    @positive @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (New School & Not Join Event & Kepala Pimpinan)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter new name of school
        And     user enter data of school
        And     user click tidak ikut event
        And     user enter data of user as Kepala Sekolah
        Then    user successfully registration with page hubungi CS
    
    @positive @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (New School & Not Join Event & Staff)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter new name of school
        And     user enter data of school
        And     user click tidak ikut event
        And     user enter data of user as Staff TU
        And     user enter data of pimpinan lembaga
        Then    user successfully registration with page hubungi CS

    @positive @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (Existing School & School has a staff before)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter exsiting name of school where has a staff
        Then    user successfully registration with page hubungi CS

    @positive @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (Existing School & School doesn't have a staff before & Join Event & Kepala Pimpinan & Tidak upload file)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter exsiting name of school where doesn't have a staff
        And     user click ikut event
        And     user enter kode event "abcd"
        And     user enter data of user as Kepala Sekolah
        And     user click Button Saya Mengerti
        And     user click Button Mulai
        Then    user succesfully registration Pordi use "083333344444"

    @positive @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (Existing School & School doesn't have a staff before & Join Event & Kepala Pimpinan & upload file)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter exsiting name of school where doesn't have a staff
        And     user click ikut event
        And     user enter kode event "abcd"
        And     user enter data of user as Kepala Sekolah
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload excel Pelajar 
        Then    user succesfully registration Pordi use "083333344444"

    @negative @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (Existing School & School doesn't have a staff before & Join Event & Kepala Pimpinan & upload file not suitable)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter exsiting name of school where doesn't have a staff
        And     user click ikut event 
        And     user enter kode event "abcd"
        And     user enter data of user as Kepala Sekolah
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload file not suitable Pelajar
        Then    user get an error message that file not suitable

    @negative @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (Existing School & School doesn't have a staff before & Join Event & Kepala Pimpinan & upload file more than 5 students)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter exsiting name of school where doesn't have a staff
        And     user click ikut event 
        And     user enter kode event "abcd"
        And     user enter data of user as Kepala Sekolah
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload file more than 5 students
        Then    user get an error message that file more than 5 students

    @negative @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (Existing School & School doesn't have a staff before & Join Event & Kepala Pimpinan & upload file has same NIS)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter exsiting name of school where doesn't have a staff
        And     user click ikut event
        And     user enter kode event "abcd"
        And     user enter data of user as Kepala Sekolah
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload excel Pelajar same NIS
        Then    user get an error message that file has same NIS

    @negative @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (Existing School & School doesn't have a staff before & Join Event & Kepala Pimpinan & upload file has same NISN)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter exsiting name of school where doesn't have a staff
        And     user click ikut event
        And     user enter kode event "abcd"
        And     user enter data of user as Kepala Sekolah
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload excel Pelajar same NISN
        Then    user get an error message that file has same NISN

    @negative @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (Existing School & School doesn't have a staff before & Join Event & Kepala Pimpinan & upload file has same NIS than existing student)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter exsiting name of school where doesn't have a staff but have student same NIS
        And     user click ikut event
        And     user enter kode event "abcd"
        And     user enter data of user as Kepala Sekolah
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload excel Pelajar same NIS than existing student
        And     user confirm file uploaded
        Then    user get an error message that file has same NIS than existing student

    @positive @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (Existing School & School doesn't have a staff before & Join Event & Staff & Tidak upload file)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter exsiting name of school where doesn't have a staff
        And     user click ikut event
        And     user enter kode event "abcd"
        And     user enter data of user as Staff TU
        And     user enter data of pimpinan lembaga
        And     user click Button Saya Mengerti
        And     user click Button Mulai
        Then    user succesfully registration Pordi use "083333344444" with 2 gtk

    @positive @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (Existing School & School doesn't have a staff before & Join Event & Staff & upload file)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter exsiting name of school where doesn't have a staff
        And     user click ikut event
        And     user enter kode event "abcd"
        And     user enter data of user as Staff TU
        And     user enter data of pimpinan lembaga
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload excel Pelajar 
        Then    user succesfully registration Pordi use "083333344444" with 2 gtk

    @negative @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (Existing School & School doesn't have a staff before & Join Event & Staff & upload file not suitable)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter exsiting name of school where doesn't have a staff
        And     user click ikut event 
        And     user enter kode event "abcd"
        And     user enter data of user as Staff TU
        And     user enter data of pimpinan lembaga
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload file not suitable Pelajar
        Then    user get an error message that file not suitable

    @negative @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (Existing School & School doesn't have a staff before & Join Event & Staff & upload file more than 5 students)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter exsiting name of school where doesn't have a staff
        And     user click ikut event 
        And     user enter kode event "abcd"
        And     user enter data of user as Staff TU
        And     user enter data of pimpinan lembaga
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload file more than 5 students
        Then    user get an error message that file more than 5 students

    @negative @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (Existing School & School doesn't have a staff before & Join Event & Staff & upload file has same NIS)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter exsiting name of school where doesn't have a staff
        And     user click ikut event
        And     user enter kode event "abcd"
        And     user enter data of user as Staff TU
        And     user enter data of pimpinan lembaga
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload excel Pelajar same NIS
        Then    user get an error message that file has same NIS

    @negative @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (Existing School & School doesn't have a staff before & Join Event & Staff & upload file has same NISN)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter exsiting name of school where doesn't have a staff
        And     user click ikut event
        And     user enter kode event "abcd"
        And     user enter data of user as Staff TU
        And     user enter data of pimpinan lembaga
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload excel Pelajar same NISN
        Then    user get an error message that file has same NISN

    @negative @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (Existing School & School doesn't have a staff before & Join Event & Staff & upload file has same NIS than existing student)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter exsiting name of school where doesn't have a staff but have student same NIS
        And     user click ikut event
        And     user enter kode event "abcd"
        And     user enter data of user as Staff TU
        And     user enter data of pimpinan lembaga
        And     user click Button Saya Mengerti
        And     user click Button Upload Data
        And     user enter data class and upload excel Pelajar same NIS than existing student
        And     user confirm file uploaded
        Then    user get an error message that file has same NIS than existing student

    @positive @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (Existing School & School doesn't have a staff before & Not Join Event & Kepala Pimpinan)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter exsiting name of school where doesn't have a staff
        And     user click tidak ikut event
        And     user enter data of user as Kepala Sekolah
        Then    user successfully registration with page hubungi CS 

    @positive @Registrasi_with_phone
    Scenario:   user successfully registration in pordi with Input Phone (Existing School & School doesn't have a staff before & Not Join Event & Staff)
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        And     user see "Syarat & Ketentuan" in pordi first
        And     user see "Kebijakan Privasi" in pordi
        And     user enter exsiting name of school where doesn't have a staff
        And     user click tidak ikut event
        And     user enter data of user as Staff TU
        And     user enter data of pimpinan lembaga
        Then    user successfully registration with page hubungi CS
