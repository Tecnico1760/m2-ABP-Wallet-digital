//DESDE AQUÍ EJECUTAR EL CÓDIGO SI EXISTE LOGIN

// let saldo = localStorage.getItem("saldo");

// if(saldo){
//     saldo = Number(saldo);
// }

// else {
//     saldo = 15_000;
// }

const montoSaldo = document.getElementById("monto-saldo");

montoSaldo.textContent = saldo;


function actualizarSaldo(monto){
    

    aumentarSaldo(monto);

    //saldo = saldo + monto;
    alert("Se ha recibido un monto a depositar de: $ " + monto);
    montoSaldo.textContent = saldo;

    //GUARDAMOS DE FORMA PERSISTENTE EL NUEVO SALDO
    localStorage.setItem("saldo", saldo);
}



//PROCEDEMOS A CAPTURAR EL EVENTO SUBMIT DEL FORMULARIO

const formDeposit = document.getElementById("form-deposit");

formDeposit.addEventListener("submit", function(event){
    event.preventDefault();

    let montoDeposito = document.getElementById("depositAmount").value;

    //CON NUMBER CONVERTIMOS EL VALOR QUE VIENE STRING EN UN NÚMERO
    montoDeposito = Number(montoDeposito);

    actualizarSaldo(montoDeposito);

});