const fname = document.getElementById("firstName")
const lname = document.getElementById("lastName")
const email = document.getElementById("email")
const dob = document.getElementById("dob").value
const mobile = document.getElementById("mobile")
const gender = document.getElementById("gender")
const maritualStatus = document.getElementById("maritualStatus")
const country = document.getElementById("country")
const state = document.getElementById("state")
const address = document.getElementById("address")
const district = document.getElementById("district")
const postalcode = document.getElementById("postalCode")
const password = document.getElementById("password")
const repass = document.getElementById("rePass")
const form = document.getElementById('registrationForm')
var pattern = /^[A-Za-z]+$/

$(document).ready(function(){
    $("#registerId").on("click", function(){
       var flag = Boolean(validation())
        
       if(flag == true){
            var user = email.value
            var pass = password.value
            
            var data = "Username="+user+" & password="+pass
            $.ajax({
                url: "./php/register.php",
                type: "POST",
                data: data,
                sucess: function(data){
                    $("#register_output").html(data);
                }

            });

       }   
        
    })
});

function validation(){
    //First Name Validation
    if(fname.value == ""){
        document.getElementById("nameError1").innerHTML = "Please enter your firstname"
        return false
    }
    if(!pattern.test(fname.value)){
        document.getElementById("nameError1").innerHTML = "Name contains only alphabets"
        return false
    }
    if(fname.length <=2 || fname.length > 20){
        document.getElementById("nameError1").innerHTML = "Name is between 2 and 20 characters"
        return false
    }
    document.getElementById("nameError1").innerHTML = ""

    //Last Name Validation
    
    if(lname.value == ""){
        document.getElementById("nameError2").innerHTML = "Please enter your lastname"
        return false
    }
    if(!pattern.test(lname.value)){
        document.getElementById("nameError2").innerHTML = "Lastname contains only alphabets"
        return false
    }
    if(lname.length <=2 || lname.length > 20){
        document.getElementById("nameError2").innerHTML = "LastnName is between 2 and 20 characters"
        return false
    }
    document.getElementById("nameError2").innerHTML = ""

    //email validation
    if(email.value == ""){
        document.getElementById("emailError").innerHTML = "Please enter your email address"
        return false
    }
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))){
        document.getElementById("emailError").innerHTML = "Please enter valid email address"
        return false
    }

    //mobile validation
    
    if(!(/^[6-9][0-9]{9}$/).test(mobile.value)){
        document.getElementById("mobileError").innerHTML = "Mobile number contains only 10 digits"
        return false
    }
    document.getElementById("mobileError").innerHTML = ""

    //Country Validation
    if(country.value == ""){
        document.getElementById("countryError").innerHTML = "Please enter your country name"
        return false
    }
    if(!pattern.test(country.value)){
        document.getElementById("countryError2").innerHTML = "Country name contains only alphabets"
        return false
    }
    document.getElementById("countryError").innerHTML = ""

    //state validation
    if(state.value == ""){
        document.getElementById("stateError").innerHTML = "Please enter your state"
        return false
    }
    if(!pattern.test(state.value)){
        document.getElementById("stateError").innerHTML = "State contains only alphabets"
        return false
    }
    document.getElementById("stateError").innerHTML = ""

    //address validation
    if(address.value == ""){
        document.getElementById("addressError").innerHTML = "Please enter your address"
        return false
    }
    document.getElementById("addressError").innerHTML = ""

    //district validation
    if(district.value == ""){
        document.getElementById("districtError").innerHTML = "Please enter your district"
        return false
    }
    if(!pattern.test(district.value)){
        document.getElementById("districtError").innerHTML = "district contains only alphabets"
        return false
    }
    document.getElementById("districtError").innerHTML = ""

    //postalcode validation
    if(postalcode.value == ""){
        document.getElementById("postalError").innerHTML = "Please enter your postal code"
        return false
    }
    if(!(/^[0-9]{6}$/.test(postalcode.value))){
        document.getElementById("postalError").innerHTML = "please enter valid postal code"
        return false
    }
    document.getElementById("postalError").innerHTML = ""

    //password validation
    if(password.value == ""){
        document.getElementById("passwordError").innerHTML = "Please enter your password"
        return false
    }
    if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password.value))){
        document.getElementById("passwordError").innerHTML = "password must conatins 6 to 20 characters,<br>contain at least one numeric digit<br>one uppercase and one lowercase letter"
        return false

    }
    document.getElementById("passwordError").innerHTML = ""
    
    
    if(repass.value == ""){
        document.getElementById("repassError").innerHTML = "Please re-enter your password"
        return false
    }
    if(repass.value != password.value){
        document.getElementById("repassError").innerHTML = "Two passwords does not match"
    }
    return true
}
