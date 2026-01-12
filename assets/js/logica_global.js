//AGREGAMOS AL CARGAR LA PÁGINA EL SALDO SI EXISTE EN EL LOCALSOTAGE O POR DEFECTO INICIAMOS CON 15.000


// INICIO LÓGICA DE SALDO
let saldo = 15_000;

if(localStorage.getItem("saldo")){
    saldo = Number(localStorage.getItem("saldo"));

}else{

    localStorage.setItem("saldo", saldo);
}



function descontarSaldo(monto){
    
    saldo = saldo - monto;

    if(saldo < 0){
        alert("Usted no cuenta con fondos suficientes.");
    }
    else {
        localStorage.setItem("saldo", saldo);

        return saldo;
    }
}

function aumentarSaldo(monto){

    saldo = saldo + monto;
    localStorage.setItem("saldo", saldo);

    return saldo;
}

// FIN LÓGICA DE SALDO




// INICIO LÓGICA HISTORIAL TRANSACCIONES

let transaccion1 = {
    monto: 1_000,
    origen: "Cuenta personal",
    destino: "Carlitos",
    glosa: "Transferencia a otras cuentas",
    ingreso: 0,
    egreso: 1_000,
    fecha: new Date()
};

let transaccion2 = {
    monto: 2_000,
    origen: "Cuenta personal",
    destino: "Cuenta personal",
    glosa: "Depósito misma cuenta",
    ingreso: 2_000,
    egreso: 0,
    fecha: new Date
};

let historialTransacciones = [transaccion1, transaccion2];



function agregarTransaccionHistorial(transaccion){
    historialTransacciones.push(transaccion);
    
}


// FIN LÓGICA HISTORIAL TRANSACCIONES




