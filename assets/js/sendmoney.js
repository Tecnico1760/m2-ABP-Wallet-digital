let contacto1 = {
    nombre: "Pedro",
    apellido: "Soto",
    cbu: "111111111",
    alias: "Pedrito",
    nombreBanco: "Banco Estado"
}

let contacto2 = {
    nombre: "Carlos",
    apellido: "Pereira",
    cbu: "222222222",
    alias: "Carlitos",
    nombreBanco: "Banco Estado"
}

let contacto3 = {
    nombre: "Marta",
    apellido: "Osorio",
    cbu: "333333333",
    alias: "Martita",
    nombreBanco: "Banco Falabella"
}

let contactos = [contacto1, contacto2, contacto3];


function crearInfoContacto(contacto){

    if(!contacto){
        return "";
    }

    let {nombre, apellido, cbu, alias, nombreBanco } = contacto;

    let infoContacto = `
        <li class="list-group-item">
                <div class="contact-info">
                    <span class="contact-name">${nombre} ${apellido}</span>
                    <span class="contact-details">
                            CBU: ${cbu}, Alias: ${alias}, Banco: ${nombreBanco}
                    </span>
                </div>
        </li>
    `;
    return infoContacto;
}


function agregarContactosDom(listaContactos){
    
    let elementosLista = "";

    listaContactos.forEach(contacto => {
        elementosLista += crearInfoContacto(contacto); 
    });

    //document.getElementById("contactList").innerHTML = elementosLista;
    $("#contactList").html(elementosLista);
}


//INICIO FUNCIÓN AGREGAR NUEVOS CONTACTOS


$("#formAddContacto").on("submit", function(event){
    event.preventDefault();

    let nombre = $("#nombre").val();
    let apellido = $("#apellido").val();
    let cbu = $("#cbu").val();
    let alias = $("#alias").val();
    let banco = $("#banco").val();

    let nuevoContacto = {
        nombre,
        apellido,
        cbu,
        alias,
        nombreBanco: banco
    };

    contactos.push(nuevoContacto);

    alert(`Su nuevo contacto ${nombre} ${apellido}, ha sido agregado con éxito.`);

    agregarContactosDom(contactos);

    $('#modalAgregarContacto').modal('hide');

});


//FIN FUNCIÓN AGREGAR NUEVOS CONTACTOS


// INICIO EVENTO BUSCAR CONTACTO

$("#searchContact").on("input", function(event){

    let textoBusqueda = $(this).val();

    //CONVERTIR A MINÚSCULAS Y QUITAR ESPACIOS
    textoBusqueda = textoBusqueda.toLowerCase();

    //AHORA LE QUITAMOS CUALQUIER ESPACIO ADICIONAL
    textoBusqueda = textoBusqueda.trim();


    let contactosFiltrados = contactos.filter(function(contacto){

        let nombre = contacto.nombre.toLowerCase();
        let apellido = contacto.apellido.toLowerCase();
        let alias = contacto.alias.toLowerCase();

        let nombreApellido = `${nombre} ${apellido}`;

        //conjunto de reclas de filtrado
        let reglaNombre = nombre.includes(textoBusqueda);
        let reglaApellido = apellido.includes(textoBusqueda);
        let reglaAlias = alias.includes(textoBusqueda);
        let reglaNombreApellido= nombreApellido.includes(textoBusqueda);

        
        if(reglaNombre || reglaApellido || reglaAlias || reglaNombreApellido){
            return contacto;
        }
    });

    agregarContactosDom(contactosFiltrados);

});


// FIN EVENTO BUSCAR CONTACTO






// INICIO LÓGICA FORM ENVIAR DINERO

function crearInfoContactoSelect(contacto){
    if(!contacto){
        return "";
    }

    let {nombre, apellido, cbu, alias, nombreBanco } = contacto;

    let infoContacto = `<option value="${cbu}">${alias} - ${cbu} - ${nombreBanco}</option>`;
    return infoContacto;
}


function agregarContactosSelect(listaContactos){
    let elementosSelect= "";

    listaContactos.forEach(contacto => {
        elementosSelect += crearInfoContactoSelect(contacto); 
    });

    //document.getElementById("contactList").innerHTML = elementosLista;
    $("#enviarContacto").html(elementosSelect);
}



const formEnviarDinero = $("#formEnviarDinero");

formEnviarDinero.on("submit", function(event){
    event.preventDefault();

    let monto = $("#enviarMonto").val();

    let cbuDestino = $("#enviarContacto").val();

    if(monto > saldo){
        alert(`Usted no tiene el saldo suficiente para la operación.\nSaldo disponible:${saldo}`)
    }else {
        alert(`Se ha enviado la suma de ${monto}.\nCuenta CBU N°: ${cbuDestino}`);

        descontarSaldo(monto);

        actualizarSaldosDOM();

    }

    
});





// FIN LÓGICA FORM ENVIAR DINERO


function actualizarSaldosDOM(){
    $(".outputSaldo").text(saldo);
    $("#enviarMonto").attr("max", saldo);
}


function main(){
    agregarContactosDom(contactos);
    agregarContactosSelect(contactos);
    
    actualizarSaldosDOM();
}

main();