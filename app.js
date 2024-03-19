//Esto puede ser optimizado
//let titulo = document.querySelector('h1'); //Aca vamos a definir una variable xd esto es como un puete 
//titulo.innerHTML = 'Juego del Numero Secreto '; // Es una variable de html de tipo helen tambien se actualiza la pagina 

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'India un numero del 1 al 10 porfa';

//Nuestras variables 
let numeroSecreto = 0;
//Esto para crear un contador 
let intentos = 1;
//Ahora vamos a crear la lista
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//F12 es la tecla para poder acceder xd 
console.log(numeroSecreto);
//Aca vamos a declarar una funcion
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;         //'Juego del numero secreto actualizado'; 
}
//Lo que queremos hacer en esa funcion es que verifique el valor 
function verificarIntento(){                                 //Llamando a nuestra funcion para llamarla y declarlarla 
    //Aca lo pongo entre parentesis para convertirlo en el parametro xd 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);  //La funcion es un encapsulamiento de lo que queremos que haga
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario === numeroSecreto);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //Activar el boton luego de que aciertes xd 
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            //El usuario no acerto 
            if (numeroDeUsuario > numeroSecreto){
                asignarTextoElemento('p','El numero secreto es menor');
            } else {
                asignarTextoElemento('p','El numero secreto es mayor');
            }
            intentos++;
            limpiarCaja();
        }    
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
    //valorCaja.value = '';
}

//Ahora vamos a crear funcion xd 
function generarNumeroSecreto(){
    //En vez de retornar el valor vamos a declarar 
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length == numeroMaximo){
       asignarTextoElemento('p','Ya se sortearon todos los numeros posibles'); 
    } else {
    //Ahora ese numero generado esta en la lista ?
    //Si el numero generado esta incluido en la lista 
       if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }  else {
             listaNumerosSorteados.push(numeroGenerado);
             return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    //Ahora se puede optimizar en vez de una lo del inicio xd
    asignarTextoElemento('p',`India un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja se refiere al rectangulo en blanco 
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros 
    
    //Generar el numero aletorio 
     
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Desahabilitar el boton del nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true'); 
} 

condicionesIniciales();