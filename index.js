// variaveis do formulario
var name = document.querySelector("#exampleInputName");
var gender = document.querySelector("#form-user-creat [name=gender]:checked");
var gender = document.querySelector("#exampleInputGenderF");
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var password = document.querySelector("#exampleInputPassword");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("exampleInputAdmin");

var fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach((field, index)=>{

    if (field.name == "gender"){

        if(field.checked){
            console.log("SIM", field)
        }

    }else{

        console.log("NÃO")

    }
    
    
    //console.log (field.name)

});
