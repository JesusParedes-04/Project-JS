let cancionActual = null

//Lista de Canciones Clayderman
const listaCanciones = [

    { 
    Album: 'Discovery',
    portada: 'Discovery.jpg',
    cancion:   'Last Train To London',
    archivo:  'cancion1.mp3'
    },

    { 
    Album: 'A New Word Record',
    portada: 'neworldrecord.jpg',
    cancion:   'Livin thing',
    archivo:  'cancion2.mp3'
    },

    { 
    Album: 'Electric Light Orchestra',
    portada: 'OIP.jpg',
    cancion:   'Mr. Blue Sky',
    archivo:  'cancion3.mp3'
},

]


//Enlazando con HTML
const contenedorCanciones = document.getElementById("contenedorCanciones")
const audioCancion = document.getElementById("audioCancion")
const portadaAlbum = document.getElementById("portada")
const tituloCancion = document.getElementById("tituloCancion")
const playBtn = document.getElementById("playBtn")
const anteriorBtn = document.getElementById("anteriorBtn")
const siguienteBtn = document.getElementById("siguienteBtn")
const barraProgreso = document.getElementById("barraProgreso")
const progreso = document.getElementById("progreso")


// barraProgreso.addEventListener("click", setProgress);
audioCancion.addEventListener("timeupdate", updateProgress)


//Se asigna como let porque es la canción que irá variando y nula
siguienteBtn.addEventListener("click", () => siguienteCancion())
anteriorBtn.addEventListener("click", () => anteriorCancion())

// Cargar estructura de canciones y mostrar el listado
function cargarCanciones() {
    listaCanciones.forEach((cancion, indice) => {
        const li = document.createElement("li")
        const link = document.createElement("a")
        link.textContent = cancion.cancion
        link.href = "#"
        link.addEventListener("click", ()=> cargarCancion(indice))
        li.appendChild(link)
        contenedorCanciones.appendChild(li)
    })

}

// Cargar canción seleccionada
function cargarCancion(indiceCancion) {
    if (indiceCancion !== cancionActual) {
        cancionActual = indiceCancion
        audioCancion.src = "/tracks/" + listaCanciones[indiceCancion].archivo
        reproducirCancion()
        actualizarTitulo(indiceCancion)
        actualizarPortada(indiceCancion)
}}

// Barra de progreso

function updateProgress(event) {
    const {duration, currentTime} = event.srcElement
    const percent = (currentTime / duration) * 100
    progreso.style.width = percent + "%" 
    
}
// Reproducir canción
function reproducirCancion() {
    if (cancionActual !== null) {
        togglePlay()
    }
}

// Pausar canción
function pausarcancion() {
    audioCancion.pause()
    togglePlay()
}

// Funciones de Actualizar titulo y cancion
function actualizarPortada(indiceCancion) {
    portadaAlbum.src = "/Imagenes/" + listaCanciones[indiceCancion].portada
}
function actualizarTitulo(indiceCancion) {

    Toastify({
        text:  tituloCancion.innerText = listaCanciones[indiceCancion].cancion + ' - ' +listaCanciones[indiceCancion].Album,
        gravity: "bottom", 
        position: "right", 
        style: {
       background: "linear-gradient(to right, #730202, #401212)",
        }
      }).showToast();
    
}

// Anterior canción
function anteriorCancion() {
    if (cancionActual > 0) {
        cargarCancion(cancionActual - 1)
    } else {
        cargarCancion(listaCanciones.length - 1)
    }
}

// Siguiente canción
function siguienteCancion() {
    if (cancionActual < listaCanciones.length -1) {
        cargarCancion(cancionActual + 1)
    } else {
        cargarCancion(0)
    }

}

function togglePlay() {
	if (audioCancion.paused){
		toggleIcon();
		return audioCancion.play();

	} else {
		toggleIcon();
		return audioCancion.pause();
	}
}


function toggleIcon() {
    playBtn.classList.toggle("fa-pause");
    playBtn.classList.toggle("fa-play");
 }

//siguiente canción cuando se acaba la actual
audioCancion.addEventListener("ended", () => siguienteCancion())

cargarCanciones()