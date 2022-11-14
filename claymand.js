
class Cancion {
    constructor(id, banda, cancion, album, precio,) {
        this.id = id;
        this.banda = banda;
        this.cancion = cancion;
        this.album = album;
        this.precio = precio
        this.cantidad = 1

    }
}

const cancionUno = new Cancion(1, 'Richard Clayderman', 'Ballade Por Adeline', 'Reveries', 50,)
const cancionDos = new Cancion(2, 'Richard Clayderman', 'Love Is Blue', 'Mejores exitos', 50)
const cancionTres = new Cancion(3, 'Richard Clayderman', 'Exodus', 'Reveries', 50)

let Clayderman = [cancionUno, cancionDos, cancionTres]
let CarritoClayderman = []





//Cargando Carrito de LS
if (localStorage.getItem('carrito')) {
    CarritoClayderman = JSON.parse(localStorage.getItem('carrito'))
}

const contenedorCanciones = document.querySelector('#contenedorCanciones')
const mostrarCarritoDinamico = () => {
    Clayderman.forEach((cancion) => {
        const card = document.createElement('li')
        card.innerHTML = `
   <li class="cancionItem">
              
                <div class="cancionIconsContainer">
                    <button id="btnPlay" class="btnPlay">
                    <span class="cancionIcons">
                        <i class="fa-solid fa-play"></i>
                    </span>
                    <p> ${cancion.cancion} </p>
                    </button>

                    <button id="agregarCarritoBtn${cancion.id}" class="agregarCarrito"> $${cancion.precio}
                        <span class="cancionIcons">
                            <i class="fa-solid fa-cart-plus"></i>
                        </span>
                    </button>
                </div>
            </li>
            `

contenedorCanciones.appendChild(card)
            //Agregando canciones al Carrito
        const agregarCarritoBtn = document.querySelector(`#agregarCarritoBtn${cancion.id}`);
        agregarCarritoBtn.addEventListener('click', () => {
            agregarAlCarrito(cancion.id)
        })

    })
}

//Funcion agregar al Carrito:
const agregarAlCarrito = (id) => {

    const cancion = Clayderman.find((cancion) => cancion.id === id);
    const cancionEnCarrito = CarritoClayderman.find((cancion) => cancion.id === id)

    if (cancionEnCarrito) {
        cancionEnCarrito.cantidad++;
    }
    else {
        CarritoClayderman.push(cancion)
        localStorage.setItem('carrito', JSON.stringify(CarritoClayderman))
    }
    calcularTotal()

}

mostrarCarritoDinamico()

//Mostrando Carrito 

const contenedorCarritoo = document.querySelector('#contenedorCarritoo');
const verCarrito = document.querySelector('#verCarrito');
verCarrito.addEventListener('click', () => {
    mostrarCarrito();
})

//Funcion para mostrar carrito:
const mostrarCarrito = () => {
    // limpiar carrito
    contenedorCarritoo.innerHTML = '';
    CarritoClayderman.forEach((cancion) => {

        const card2 = document.createElement('li')
        card2.innerHTML = `
           <li class="cancionItem">
                    
                        <div class="cancionIconsContainer">
                            <button id="btnPlay" class="btnPlay mx-4">

                            <p> ${cancion.cancion} </p>

                            </button>
                            <button class="btnPlay">
                            <p> ${cancion.cantidad} </p>
                            </button>

                            <button id="eliminarCarritoBtn${cancion.id}" class="agregarCarrito"> $${cancion.precio}
                                Eliminar Cancion <span class="cancionIcons">
                                    <i class="fa-solid fa-cart-plus"></i>
                                </span>
                            </button>
                        </div>
                    </li>
                    `
        contenedorCarritoo.appendChild(card2);

        //Eliminar producto del carrito 

        const eliminarCarritoBtn = document.querySelector(`#eliminarCarritoBtn${cancion.id}`)
        eliminarCarritoBtn.addEventListener('click', () => {
            eliminarDelCarrito(cancion.id);
        })
    })
}

//Funcion eliminar cancion del carrito

const eliminarDelCarrito = (id) => {
    const cancion = CarritoClayderman.find((cancion) => cancion.id === id)
    const indice = CarritoClayderman.indexOf(cancion);
    CarritoClayderman.splice(indice, 1)
    mostrarCarrito();

    //LS

    localStorage.setItem('carrito', JSON.stringify(CarritoClayderman))

}


const vaciarCarrito = document.querySelector('#vaciarCarrito')
vaciarCarrito.addEventListener('click', () => {
    eliminarTodoCarrito()
})

// Funcion eliminar todo carrito

const eliminarTodoCarrito = () => {
    CarritoClayderman = []
    mostrarCarrito()
    //LS
    localStorage.clear
}


//Mensaje con total de compra

const totalCarrito = document.querySelector('#totalCarrito')
const calcularTotal = () => {

    let totalCompra = 0;
    CarritoClayderman.forEach((cancion) => {
        totalCompra += cancion.precio * cancion.cantidad
    })

    totalCarrito.innerHTML = `Total: $${totalCompra}`;

}







//Reproductor

const playCancion = document.getElementsByClassName('play')
const stopCancion = document.getElementsByClassName('pause')
let audio



for(elemento of playCancion){
elemento.addEventListener('click', ()=>{
let elementSong = this.getAttribute('id')
audio = new Audio(`/track/${elementSong}.mp3`)
audio.play()
})
}

for(song of stopCancion){
    song.addEventListener('click', ()=>{
        audio.pause()
    })
}



