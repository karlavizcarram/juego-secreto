let numeroSecreto = 0;
let contadorIntentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto){
   let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}

function intentoUsuario() {
    //let numeroUsuario = document.querySelector('input');
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);

    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('p',`Acertaste el número en ${contadorIntentos} ${(contadorIntentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        contadorIntentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#numeroUsuario').value = '';
}

function generadorSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log('El número generado es: +numeroGenerado');
    console.log('El número total de números generados son: +listaNumeroSorteado');
    // Sí ya sorteamos todos los números
    if (listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else{
        // Sí el número generado esta incluido en la lista
        if(listaNumeroSorteado.includes(numeroGenerado)){
            return generadorSecreto();
        }else{
        listaNumeroSorteado.push(numeroGenerado); 
        return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','¡Juego del número secreto!');
    asignarTextoElemento('p', `Introduce un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generadorSecreto();
    contadorIntentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aletorio
    //Inicializar el número de intentos   
    condicionesIniciales();
    //Deshabilitar el botón de "Nuevo juego"
    document.querySelector('#reiniciar').setAttribute('disabled' , 'true');
}
condicionesIniciales();



// EJERCICIOS

/*
function saludoInicial(nombre){
    console.log(`Hola, ${nombre}`);
}
saludoInicial('Karla');

function calcularDoble(numero) {
  return numero * 2;
}

let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);
saludoInicial('Karla');*/
