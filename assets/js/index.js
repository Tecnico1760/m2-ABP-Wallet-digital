//VEMOS SI EXISTE UN LOGIN ACTIVO EN EL LOCALSTORAGE
let login = localStorage.getItem("login");


if(login){
    alert("Usted ya tiene una sesión activa.");
    location.href = "menu.html";
}



const formLogin = document.getElementById("form-login");

// CREDENCIALES DE ACCESO SIMULADAS DE UNA BASE DE DATOS
const EMAIL_DB = "admin@admin.cl";
const PASSWORD_DB = "123456";


//AGREGAMOS UN EVENTO AL FORMULARIO formLogin

formLogin.addEventListener("submit", function(event){
    event.preventDefault();

    //CAPTURAMOS LOS VALORES DE LOS INPUTS A TRAVÉS DE SU ID
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(EMAIL_DB == email && PASSWORD_DB == password){
        alert("Se ha iniciado sesión de forma correcta.");
        formLogin.reset();

        //CREAR PERSISTENCIA DE EL LOGIN
        localStorage.setItem("login", true);

        // location.href = "menu.html";


        //CAPTURAMOS EL ELEMENTO <a> que está enlazado a la página menu.html
        let linkMenu = document.getElementById("link-menu");

        //LE QUITAMOS LA CLASE D-NONE AL ELEMENTO <a> PARA QUE SEA VISIBLE
        linkMenu.classList.remove("d-none");


    }else{
        alert("Email / Password incorrectos, vuelva a intentar.");
    }

});
