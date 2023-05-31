Feature: Login Page
    Feature Login page for positive case and negative case

    Background:
        Given A user opens a Website Pordi

   @positive @loginbyemail @focus
    Scenario: user Login with account oprator
        When A user click on the Email button
        And A user enter the username "loginautomation@cypress.co"
        And A user enter the password "112233"
        And A user click log in button
        Then user succesfully login Pordi

    @positive @loginbyemail @focus
    Scenario: User successfully Login use login existing
        When A user click on the Email button
        And A user click login last time with username "loginautomation@cypress.co"
        Then user succesfully login Pordi

    @negative @loginbyemail @focus
    Scenario: User login with account not regisstered
        When A user click on the Email button
        And A user enter the username not regisstered
        And A user enter the password "12345"
        And A user click log in button
        Then A user see Error Message

    @positif @loginbyemail @focus
    Scenario: User login with account guru or wali kelas 
        When A user click on the Email button
        And A user enter the username "logingurudanwalikelas@cypress.co"
        And A user enter the password "112233"
        And A user click log in button
        Then user see presensi page
        

    @positive @loginbyphone
    Scenario:   User Success Login with phone number
        When    user click button Nomor HP
        And     user enter Nomor HP "081111122222"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "111222"
        And     user click button Lanjut
        Then    user succesfully login Pordi use "081111122222"

    @negative @loginbyphone
    Scenario:   User account with phone number not registered
        When    user click button Nomor HP
        And     user enter Nomor HP "083333344444"
        And     user click button Whatsapp
        And     user enter Kode Autentikasi "333444"
        And     user click button Lanjut
        Then    user will be direct to Register page
        
    @positive @loginbyemail
    Scenario:   User Success Login with email internal IDN
        When    A user click on the Email button
        And     user login google widget use email "rizki.ayu@infradigital.io"
        Then    user succesfully login Pordi Internal use "rizki.ayu@infradigital.io"
