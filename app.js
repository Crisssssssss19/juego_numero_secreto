
let numero = 0;
let intentos = 0;
let array_Numero_secreto =[];
let numero_Maximo = 10 ;
function verificar_Intento_De_Usuario(){
    let numero_Usiario = parseInt(document.getElementById('valor_Usuario').value);//
    if(numero === numero_Usiario){
        asignar_Texto_Elementio('p',`Acertaste el numero en ${intentos} ${(intentos === 1)? 'intento':'intentos'}`);
        document.querySelector("#reiniciar").removeAttribute('disabled'); 
        document.querySelector('#Intentar').setAttribute('disabled','true');

    }else{
        //El usuario no acerto
        if(numero < numero_Usiario){
            asignar_Texto_Elementio('p', 'El numero secreto es menor')
        }else{
            asignar_Texto_Elementio('p', 'El numero secreto es mayor')

        }
        intentos++;
        limpiar_caja();
    }
    return;
    
}
function reiniciar_juego(){
   
    limpiar_caja();
    condiciones_Iniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    document.querySelector('#Intentar').removeAttribute('disabled');

}
function condiciones_Iniciales(){
    asignar_Texto_Elementio('h1','Juego del numero secreto!');
    asignar_Texto_Elementio('p', 'Ingresa un numero del 1 al '+ numero_Maximo);
    intentos = 1;
    numero = generar_Numero();
}

function limpiar_caja(){
    document.querySelector('#valor_Usuario').value = ''; 
}

function asignar_Texto_Elementio(elemento, texto){
    let elemento_HTML = document.querySelector(elemento);
    elemento_HTML.innerHTML =texto;
}

function generar_Numero(){
    let numero_Generaro = Math.floor(Math.random()*numero_Maximo)+1;
    //Si el numero generado esta incluido esta en la lisata hacemos una operacion U otra
    
    //Si ya se sortearon todos los numero detener el juego
    if(array_Numero_secreto.length == numero_Maximo){
        asignar_Texto_Elementio('p','Ya se asignaron todos los numeros posibles');
    }else{

        if(array_Numero_secreto.includes(numero_Generaro)){
            return generar_Numero();
        }else{
            array_Numero_secreto.push(numero_Generaro);
            return numero_Generaro;
        }
    }
    
    
}
condiciones_Iniciales();

