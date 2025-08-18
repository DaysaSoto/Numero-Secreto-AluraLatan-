/*let titulo = document.querySelector('h1');
titulo.innerHTML='Juega el numero secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML='Indica el numero del el 1 al 10';

//permite seleccionar una parte del html
//let encabezado = document.querySelector('h1');
//encabezado.innerHTML = 'Bienvenido al mundo dev';
oikji
*/

        let listaNumeroSorteados = [];
        let numeroSecreto = 0;
        let veces = 1;
        let numeroMaximo = 10;

        // Cambia texto en HTML
        function asignarTextoElemento(elemento, texto) {
            let elementoHTML = document.querySelector(elemento);
            elementoHTML.innerHTML = texto;
        }

        // Verifica si el número es correcto
        function verificarIntento() {
            let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
           
               if (numeroSecreto === numeroDeUsuario) {
                asignarTextoElemento('p', `Acertaste el número secreto en ${veces} ${veces === 1 ? 'vez' : 'veces'}`);
                document.getElementById('reiniciar').removeAttribute('disabled');
            } else {
                if (numeroSecreto < numeroDeUsuario) {
                    asignarTextoElemento('p', 'El número secreto es menor');
                } else {
                    asignarTextoElemento('p', 'El número secreto es mayor');
                }
                veces++;
                limpiarCaja();
            }
            
        }

        // Limpia el input
        function limpiarCaja() {
            document.getElementById('valorUsuario').value = '';
        }

        // Genera un número secreto sin repetir
        function generarNumeroSecreto() {
            let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

             if (listaNumeroSorteados.length == numeroMaximo) {
               asignarTextoElemento('p','ya se soltearon todos los numeros posibles')
            } else{
            if (listaNumeroSorteados.includes(numeroGenerado)) {
                return generarNumeroSecreto();
            } else {
                listaNumeroSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }
      }

        // Reinicia el juego
        function reiniciarJuego() {
            limpiarCaja();
            listaNumeroSorteados = [];
            mensajesIniciales();
        }

        // Mensaje inicial y número nuevo
        function mensajesIniciales() {
            numeroSecreto = generarNumeroSecreto();
            asignarTextoElemento('h1', 'Juega el número secreto');
            asignarTextoElemento('p', `Indica el número del 1 al ${numeroMaximo}`);
            veces = 1;
            document.querySelector('#reiniciar').setAttribute('disabled', true);
        }

        mensajesIniciales();