function kontaktPoruka(){

let ime = document.getElementById("ime").value;
let email = document.getElementById("email").value;
let tip = document.getElementById("tip").value;
let model = document.getElementById("model").value;
let gorivo = document.getElementById("gorivo").value;
let konjaza = document.getElementById("konjaza").value;
let kubikaza = document.getElementById("kubikaza").value;
let datum = document.getElementById("datum").value;



if(
ime === "" ||
email === "" ||
tip === "" ||
model === "" ||
gorivo === "" ||
konjaza === "" ||
kubikaza === "" ||
datum === ""
){

alert("Molimo popunite sva polja!");

}
else if(!email.includes("@gmail.com") ){

alert("Molimo unesite validan email!"
}
else{

window.location.href =
"uspesno.html?model=" + model +
"&gorivo=" + gorivo +
"&konjaza=" + konjaza +
"&kubikaza=" + kubikaza;

}

}
