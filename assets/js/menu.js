//DESDE AQUÍ EJECUTAR EL CÓDIGO SI EXISTE LOGIN


//AGREGAMOS EL SALDO AL ELEMENTO DEL DOM DONDE QUEREMOS MOSTRARLO

const montoSaldo = document.getElementById("monto-saldo");

montoSaldo.textContent = saldo;


const linkDeposit = document.getElementById("link-deposit");

function redireccionar(mensaje, enlace){
    let mensajeRedireccion = document.getElementById("mensaje-redireccion");

    mensajeRedireccion.textContent = (mensaje);

    setTimeout(function(){
        location.href = enlace;
    }, 2000);

}


//  evento botón depositar
linkDeposit.addEventListener("click", function(event){
    event.preventDefault();
    redireccionar("Redireccionando a la página para deposito de dinero...", "deposit.html");
});


const linkSendmoney = document.getElementById("link-sendmoney");

//evento botón enviar dinero
linkSendmoney.addEventListener("click", function(event){
    event.preventDefault();
    redireccionar("Redireccionando a la página de movimientos de dinero...", "sendmoney.html");
});

const linkTransactions = document.getElementById("link-transactions");

//evento botón enviar dinero
linkTransactions.addEventListener("click", function(event){
    event.preventDefault();
    redireccionar("Redireccionando a la página de historial de transacciones...", "transactions.html");
});
