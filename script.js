document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded");
    console.log("Javascript has been linked");

//BankAccount object
    var BankAccount = {
        accNum : 694206942069,
        balance : 1000.0,
        user : "JohnSmith",
        password : 12345678,
        grocSaving : 0,
        dineSaving : 0,
        recSaving : 0,
        suppSaving : 0,
        totalSaving : 0
    }

    function startProgram(){
        login()
    }
    document.getElementById("redirect").addEventListener("click", function () {
        if(document.getElementById("inputbankusername").value == "JohnSmith" && document.getElementById("inputpassword").value == 12345678){
            // window.location.replace("./program.html");
            location.replace("./program.html");

        }else{
            alert ("Incorrect bank number / password");
        }
    });

//functions and passing words
//document.getElementById("maintext").innerText = "Enter bank account number!";
})