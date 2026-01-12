//VEMOS SI EXISTE UN LOGIN ACTIVO EN EL LOCALSTORAGE
let login = localStorage.getItem("login");


if(!login){
    alert("Usted no tiene los permisos para estar en esta página.");
    location.href = "index.html";
}