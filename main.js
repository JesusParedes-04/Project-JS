
//Variables de acceso
const emailAcceso = 'jesus@hotmail.com';
const passwordAcceso = '1234';

//Seleccion variables

const inputAcceso = document.querySelector('#exampleInputEmail1');
const inputPassword = document.querySelector('#exampleInputPassword1');

//Seleccion funciones

const btnAutenticado = document.querySelector('#btnAutenticado');

    if (btnAutenticado) {

        btnAutenticado.addEventListener('click', () => {


            if (inputAcceso.value === emailAcceso && inputPassword.value === passwordAcceso) {
                localStorage.setItem('email', 'jesus@hotmail.com');
                localStorage.setItem('password', 1234);
                window.location = "plataforma.html"
        }  else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario Incorrecto',
            });
        };}
        )
    }


const correo = localStorage.getItem('email')
const password = localStorage.getItem('password')

// Simulador ReproductorMusica-lista

// Musica Beatles

class theBeatles {
    constructor(id, cancion, album) {
        this.id = id
        this.cancion = cancion
        this.album = album
    }
    // reproducirBeatles() {
    //     console.log(`Reproduciendo canción numero ${this.id} cancion: ${this.cancion} del album ${this.album}`)
    // }
}

const letItBe = new theBeatles(1, ' Let it Be', 'Let it Be')
const digApony = new theBeatles(2, ' Dig a Pony', ' Let it Be')
const acrossTheUniverse = new theBeatles(3, ' Across the Universe', 'let it be')
const iMeMine = new theBeatles(4, ' I me mine', 'let it be')
const whileMyGuitar = new theBeatles(5, 'While My Guitar Gently Weeps', 'White Album')

let theBeatAlbum = [letItBe, digApony, acrossTheUniverse, iMeMine, whileMyGuitar];

//Add event listener
const cancionUno = document.querySelector('#cancionUno');

if(cancionUno){

    cancionUno.addEventListener('click', () => {
        const reproducir = theBeatAlbum.find((cancion) => cancion.cancion == ' Let it Be')
        console.log(reproducir)
        Toastify({
            text: "Reproduciendo Let it be - The Beatles",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #401212, #0D0D0D)",
            },
          }).showToast();
    });

}



const cancionDos = document.querySelector('#cancionDos')


if(cancionDos){

    cancionDos.addEventListener('click', () => {
        const reproducir = theBeatAlbum.find((cancion) => cancion.cancion === ' Dig a Pony')
        console.log(reproducir)
        Toastify({
            text: "Reproduciendo Dig a Pony - The Beatles",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #401212, #0D0D0D)",
            },
          }).showToast()
    });

}



const cancionTres = document.querySelector('#cancionTres')


if(cancionTres) {

    cancionTres.addEventListener('click', () => {
        const reproducir = theBeatAlbum.find((cancion) => cancion.cancion === ' Across the Universe')
        console.log(reproducir)
        Toastify({
            text: "Reproduciendo Across The Universe - The Beatles",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #401212, #0D0D0D)",
            },
          }).showToast()
    });
}


const cancionCuatro = document.querySelector('#cancionCuatro')

if(cancionCuatro){

    cancionCuatro.addEventListener('click', () => {
        const reproducir = theBeatAlbum.find((cancion) => cancion.cancion === ' I me mine')
        console.log(reproducir)
        Toastify({
            text: "Reproduciendo I me mine - The Beatles",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #401212, #0D0D0D)",
            },
          }).showToast()
    });

}

const cancionCinco = document.querySelector('#cancionCinco')

if(cancionCinco){

    cancionCinco.addEventListener('click', () => {
        const reproducir = theBeatAlbum.find((cancion) => cancion.cancion === 'While My Guitar Gently Weeps')
        console.log(reproducir)
        Toastify({
            text: "Reproduciendo While My Guitar Gently Weeps - The Beatles",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #401212, #0D0D0D)",
            },
          }).showToast()
    });

}


// Musica Stones

class rollingStones {

    constructor(id, cancion, album) {
        this.id = id
        this.cancion = cancion
        this.album = album
    }
    // reproducirStones() {
    //     console.log(`Reproduciendo canción numero ${this.id} cancion: ${this.cancion} del album ${this.album}`)
    // }
}

const yearsAgo = new rollingStones(1, ' years ago', ' Goats Head Soup')
const commingDown = new rollingStones(2, ' Coming Down Again', ' Goats Head Soup')
const dooDoo = new rollingStones(3, ' DooDooDooDoo (heartbreaker)', ' Goats Head Soup')
const angie = new rollingStones(4, 'Angie', 'Goats Head Soup')
const satisFaction = new rollingStones(5, '(I cant get no) satisfaction', ' Out of Our Heads')

let rollingAlbum = [yearsAgo, commingDown, dooDoo, angie, satisFaction];

const cancionSeis = document.querySelector('#cancionSeis')

if(cancionSeis){

    cancionSeis.addEventListener('click', () => {
        const reproducir = rollingAlbum.find((cancion) => cancion.cancion === ' years ago')
        console.log(reproducir)
        Toastify({
            text: "Reproduciendo Years Ago - Rolling Stones",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #401212, #0D0D0D)",
            },
          }).showToast()
    });

}


const cancionSiete = document.querySelector('#cancionSiete')
if(cancionSiete){

    cancionSiete.addEventListener('click', () => {
        const reproducir = rollingAlbum.find((cancion) => cancion.cancion === ' Coming Down Again')
        console.log(reproducir)
        Toastify({
            text: "Reproduciendo Coming Down Again - Rolling Stones",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #401212, #0D0D0D)",
            },
          }).showToast()
    });

}


const cancionOcho = document.querySelector('#cancionOcho')
if(cancionOcho){

    cancionOcho.addEventListener('click', () => {
        const reproducir = rollingAlbum.find((cancion) => cancion.cancion === ' DooDooDooDoo (heartbreaker)')
        console.log(reproducir)
        Toastify({
            text: "Reproduciendo DooDooDooDoo (Heartbreaker)- Rolling Stones",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #401212, #0D0D0D)",
            },
          }).showToast()
    });
    
}

const cancionNueve = document.querySelector('#cancionNueve')

if(cancionNueve){

    cancionNueve.addEventListener('click', () => {
        const reproducir = rollingAlbum.find((cancion) => cancion.cancion === 'Angie')
        console.log(reproducir)
        Toastify({
            text: "Angie - Rolling Stones",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #401212, #0D0D0D)",
            },
          }).showToast()
    
    });
 
}

const cancionDiez = document.querySelector('#cancionDiez')

if(cancionDiez){

    cancionDiez.addEventListener('click', () => {
        const reproducir = rollingAlbum.find((cancion) => cancion.cancion === '(I cant get no) satisfaction')
        console.log(reproducir)
        Toastify({
            text: "(I cant get no) satisfaction - Rolling Stones",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #401212, #0D0D0D)",
            },
          }).showToast()
    });

}

// Musica Eric Clapton 

class Clapton {
    constructor(id, cancion, album) {

        this.id = id;
        this.cancion = cancion;
        this.album = album
    }
    // reproducirClapton() {

    //     console.log(`Reproduciendo canción numero ${this.id} cancion: ${this.cancion} del album ${this.album}`)

    // }

}
const tearsInHeaven = new Clapton(1, ' Tears in Heaven', 'Unplugged')
const layLa = new Clapton(2, ' Layla', 'Uunplugged')
const oldLove = new Clapton(3, ' Old Love', ' Unplugged')
const shotSheriff = new Clapton(4, ' I shot the Sheriff', '461 Ocean Boulevard')
const letItgrow = new Clapton(5, ' Let it grow', '461 Ocean Boulevard')

let claptonAlbum = [tearsInHeaven, layLa, oldLove, shotSheriff, letItgrow];

const cancionOnce = document.querySelector('#cancionOnce')
if(cancionOnce){
    cancionOnce.addEventListener('click', () => {
        const reproducir = claptonAlbum.find((cancion) => cancion.cancion === ' Tears in Heaven')
        console.log(reproducir)
        Toastify({
            text: "Tears in Heaven - Eric Clapton",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #401212, #0D0D0D)",
            },
          }).showToast()
    });

}
const cancionDoce = document.querySelector('#cancionDoce')

if(cancionDoce){

    cancionDoce.addEventListener('click', () => {
        const reproducir = claptonAlbum.find((cancion) => cancion.cancion === ' Layla')
        console.log(reproducir)
        Toastify({
            text: "Layla - Eric Clapton",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #401212, #0D0D0D)",
            },
          }).showToast()
    });

}



const cancionTrece = document.querySelector('#cancionTrece')
if(cancionTrece){

    cancionTrece.addEventListener('click', () => {
        const reproducir = claptonAlbum.find((cancion) => cancion.cancion === ' Old Love')
        console.log(reproducir)
        Toastify({
            text: "Old Love - Eric Clapton",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #401212, #0D0D0D)",
            },
          }).showToast()
    });

}


const cancionCatorce = document.querySelector('#cancionCatorce')

if(cancionCatorce){


    cancionCatorce.addEventListener('click', () => {
        const reproducir = claptonAlbum.find((cancion) => cancion.cancion === ' I shot the Sheriff')
        console.log(reproducir)
        Toastify({
            text: "I shot the Sheriff - Eric Clapton",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #401212, #0D0D0D)",
            },
          }).showToast()
    });

}
const cancionQuince = document.querySelector('#cancionQuince')

if(cancionQuince){

    cancionQuince.addEventListener('click', () => {
        const reproducir = claptonAlbum.find((cancion) => cancion.cancion === ' Let it grow')
        console.log(reproducir)
        Toastify({
            text: "Let it grow - Eric Clapton",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #401212, #0D0D0D)",
            },
          }).showToast()
    });
}


//Dark Mode funcionando correctamente
const darkMode = document.querySelector('#darkMode');
if(darkMode){

    darkMode.addEventListener('click', () => {
        document.body.classList.toggle('modoPantalla');
    
        if (document.body.classList.contains('modoPantalla')) {
            localStorage.setItem('darkKey', 'true')
        } else {
            localStorage.setItem('darkKey', 'false')
        }
    });

}


if (localStorage.getItem('darkKey') === 'true') {
    document.body.classList.add('modoPantalla')
} else {
    document.body.classList.remove('modoPantalla');
};

// ----------------------------------------------------------------------Carrito


class listaMusica {

constructor(id,nombre, precio){
    this.id= id
this.nombre= nombre;
this.precio= precio;
this.cantidad= 1;
}
}

const clapton = new listaMusica (1,'Clapton', 800)
const Beatles = new listaMusica (2,'The Beatles', 1200)
const Rolling = new listaMusica (3,'Rolling Stone', 900)

//Array con todo el catalogo de productos
const listaGrupos = [clapton, Rolling, Beatles]

// Array Carrito se inicializa vacio porque inicia con 0 productos
let listaCarrito = []; 


// Creando funciones

const contenedorCarrito = document.getElementById('contenedorCarrito')

function agregarCarrito() {
    listaGrupos.forEach ((item) => item.cantidad++)
    listaCarrito.push(Beatles)
    console.log(listaCarrito);
}

const btnCarrito = document.querySelector('#btnCarrito')
if(btnCarrito){ 
btnCarrito.addEventListener('click', ()=> {
agregarCarrito(2)
mostrarCarrito(2)
}) }

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML=" "
    listaCarrito.forEach((producto)=> {
const card = document.createElement('div');
card.innerHTML= `
<div class="card" style="width: 18rem;">
  <div class="card-header">
    The Beatles
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> ${producto.cantidad} <//li>
    <li class="list-group-item"> ${producto.precio} <//li>
  </ul>
</div>

`
contenedorCarrito.appendChild(card);
    })
}