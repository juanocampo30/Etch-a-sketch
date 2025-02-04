let contenedorDivs = document.querySelector('.contenedorDivs');
let botonTamano = document.querySelector('.tamano');

/*------------------Funcion 1*/

function colocarDivs() {

    function crearDivs(numeroEscojido = 16) {

        let divsCreados = [];

        for (let i = 1; i <= numeroEscojido * numeroEscojido; i++) {
            let nuevoDiv = document.createElement('div');
            nuevoDiv.addEventListener('mouseenter', e => {
                nuevoDiv.style.backgroundColor = 'lightblue';
            })
            nuevoDiv.style.width = `${100 / numeroEscojido}%`;
            nuevoDiv.style.height = `${100 / numeroEscojido}%`;
            /*Opcionales y por quitar*/
            nuevoDiv.style.boxSizing = 'border-box';
            nuevoDiv.style.border = '1px solid lightgray';
            /*Opcionales y por quitar*/
            divsCreados.push(nuevoDiv);
        }

        return divsCreados;
    }

    let divsEnArray = crearDivs();

    divsEnArray.forEach(div => {
        contenedorDivs.appendChild(div);
    })

}

/*--------------------Funcion 2*/

function colocarDivsBoton() {

    let numeroEscojido = +prompt('escoje un tamano de cuadricula');

    if (numeroEscojido > 0 && numeroEscojido <= 100) {

        function crearDivs(numeroEscojido) {


            for (let i = 1; i <= numeroEscojido * numeroEscojido; i++) {
                let nuevoDiv = document.createElement('div');
                nuevoDiv.addEventListener('mouseenter', e => {
                    nuevoDiv.style.backgroundColor = 'lightblue';
                })
                nuevoDiv.style.width = `${100 / numeroEscojido}%`;
                nuevoDiv.style.height = `${100 / numeroEscojido}%`;
                /*Opcionales y por quitar*/
                nuevoDiv.style.boxSizing = 'border-box';
                nuevoDiv.style.border = '1px solid lightgray';
                /*Opcionales y por quitar*/
                divsCreados.push(nuevoDiv);
            }

            return divsCreados;
        }

        let divsCreados = [];

        let divsEnArray = crearDivs(numeroEscojido);

        divsEnArray.forEach(div => {
            contenedorDivs.appendChild(div);
        })

    } else {
        alert("haz click de nuevo y escoge un numero mayor entre 1 y 100");
    }


}

/*-------------------------------Codigo por ejecutar*/

document.addEventListener('DOMContentLoaded', colocarDivs);

botonTamano.addEventListener('click', e => {
    contenedorDivs.innerHTML = '';
    colocarDivsBoton();
})









