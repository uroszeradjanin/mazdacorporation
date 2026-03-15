function kontaktPoruka(){

let ime = document.getElementById("ime").value;
let email = document.getElementById("email").value;
let tip = document.getElementById("tip").value;
let model = document.getElementById("model").value;
let gorivo = document.getElementById("gorivo").value;
let konjaza = document.getElementById("konjaza").value;
let kubikaza = document.getElementById("kubikaza").value;
let datum = document.getElementById("datum").value;

let poruka = document.getElementById("poruka");

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

poruka.innerHTML = "Niste popunili sva polja!"; 
poruka.style.background = "red"; 
poruka.style.color = "white"; 
poruka.style.padding = "10px"; 
poruka.style.borderRadius = "5px";


}
else if(!email.includes("@gmail.com") ){


poruka.innerHTML = "niste uneli validan email!";
poruka.style.background = "red";
poruka.style.color = "white";
poruka.style.padding = "10px";
poruka.style.borderRadius = "5px";
}
else{

window.location.href =
"uspesno.html?model=" + model +
"&gorivo=" + gorivo +
"&konjaza=" + konjaza +
"&kubikaza=" + kubikaza;

}

}
