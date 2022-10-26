
//Variables de acceso
const emailAcceso = 'jesus@hotmail.com';
const passwordAcceso = '1234';

//Seleccion variables

const inputAcceso = document.querySelector('#exampleInputEmail1');
const inputPassword = document.querySelector('#exampleInputPassword1');

//Seleccion funciones

const btnAutenticado = document.querySelector('#btnAutenticado');
btnAutenticado.addEventListener('click', () => {

    if (inputAcceso.value === emailAcceso && inputPassword.value === passwordAcceso) {
        localStorage.setItem('email', 'jesus@hotmail.com');
        localStorage.setItem('password', 1234);
        window.location = "plataforma.html"
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario Incorrecto',
        });
    };
})

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

let theBeatAlbum = [letItBe, digApony, acrossTheUniverse, iMeMine, whileMyGuitar]

//Add event listener
const cancionUno = document.querySelector('#cancionUno');

cancionUno.addEventListener('click', () => {
    const reproducir = theBeatAlbum.find((cancion) => cancion.cancion == ' Let it Be')
    console.log(reproducir)
})

const cancionDos = document.querySelector('#cancionDos')

cancionDos.addEventListener('click', () => {
    const reproducir = theBeatAlbum.find((cancion) => cancion.cancion === ' Dig a Pony')
    console.log(reproducir)

})

const cancionTres = document.querySelector('#cancionTres')

cancionTres.addEventListener('click', () => {
    const reproducir = theBeatAlbum.find((cancion) => cancion.cancion === ' Across the Universe')
    console.log(reproducir)

})

const cancionCuatro = document.querySelector('#cancionCuatro')

cancionCuatro.addEventListener('click', () => {
    const reproducir = theBeatAlbum.find((cancion) => cancion.cancion === ' I me mine')
    console.log(reproducir)

})

const cancionCinco = document.querySelector('#cancionCinco')

cancionCinco.addEventListener('click', () => {
    const reproducir = theBeatAlbum.find((cancion) => cancion.cancion === 'While My Guitar Gently Weeps')
    console.log(reproducir)

})

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

cancionSeis.addEventListener('click', () => {
    const reproducir = rollingAlbum.find((cancion) => cancion.cancion === ' years ago')
    console.log(reproducir)

})

const cancionSiete = document.querySelector('#cancionSiete')

cancionSiete.addEventListener('click', () => {
    const reproducir = rollingAlbum.find((cancion) => cancion.cancion === ' Coming Down Again')
    console.log(reproducir)

})

const cancionOcho = document.querySelector('#cancionOcho')

cancionOcho.addEventListener('click', () => {
    const reproducir = rollingAlbum.find((cancion) => cancion.cancion === ' DooDooDooDoo (heartbreaker)')
    console.log(reproducir)

})

const cancionNueve = document.querySelector('#cancionNueve')

cancionNueve.addEventListener('click', () => {
    const reproducir = rollingAlbum.find((cancion) => cancion.cancion === 'Angie')
    console.log(reproducir)

})

const cancionDiez = document.querySelector('#cancionDiez')

cancionDiez.addEventListener('click', () => {
    const reproducir = rollingAlbum.find((cancion) => cancion.cancion === '(I cant get no) satisfaction')
    console.log(reproducir)

})
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

cancionOnce.addEventListener('click', () => {
    const reproducir = claptonAlbum.find((cancion) => cancion.cancion === ' Tears in Heaven')
    console.log(reproducir)

})

const cancionDoce = document.querySelector('#cancionDoce')

cancionDoce.addEventListener('click', () => {
    const reproducir = claptonAlbum.find((cancion) => cancion.cancion === ' Layla')
    console.log(reproducir)

})

const cancionTrece = document.querySelector('#cancionTrece')

cancionTrece.addEventListener('click', () => {
    const reproducir = claptonAlbum.find((cancion) => cancion.cancion === ' Old Love')
    console.log(reproducir)

})

const cancionCatorce = document.querySelector('#cancionCatorce')

cancionCatorce.addEventListener('click', () => {
    const reproducir = claptonAlbum.find((cancion) => cancion.cancion === ' I shot the Sheriff')
    console.log(reproducir)

})

const cancionQuince = document.querySelector('#cancionQuince')

cancionQuince.addEventListener('click', () => {
    const reproducir = claptonAlbum.find((cancion) => cancion.cancion === ' Let it grow')
    console.log(reproducir)

});


const btnReproductor = document.querySelector('#btnReproductor')
btnReproductor.addEventListener('click', () => {

    let aleatorio = Math.floor(Math.random() * claptonAlbum.length);
    let cancion = claptonAlbum[aleatorio];
    alert('reproduciendo... ' + cancion.album + '-' + cancion.cancion)

})




//Dark Mode funcionando correctamente
const darkMode = document.querySelector('#darkMode');

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('modoPantalla');

    if (document.body.classList.contains('modoPantalla')) {
        localStorage.setItem('darkKey', 'true')
    } else {
        localStorage.setItem('darkKey', 'false')
    }
});

if (localStorage.getItem('darkKey') === 'true') {
    document.body.classList.add('modoPantalla')
} else {
    document.body.classList.remove('modoPantalla');
};
