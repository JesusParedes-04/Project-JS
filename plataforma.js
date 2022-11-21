
const grupos = [
    {
        Artista: 'Eric clapton',
        imagen: '/Imagenes/derek.jpg',
        infoArtista: 'Las mejores canciones y composiciones de Slowhand y su carrera como solista y su paso por The Cream, Yardbirds, etc. ',
        enlace: './clapton.html',

    },

    {
        Artista: 'Richard Clayderman',
        imagen: '/Imagenes/coverRC.jpg',
        infoArtista: 'Lo mejor del pianista francés especializado en música ligera y uno de los más exitosos a nivel mundial',
        enlace: './Claymand.html',
    },

    {
        Artista: 'The Beatles',
        imagen: '/Imagenes/letitbe.jpg',
        infoArtista: 'Los mejor de una de las bandas más importantes del movimiento contracultural de la década de 1960 y de la historia de la música.',
        enlace: './beatles.html',

    },

    {
        Artista: 'Electric Light Orchestra',
        imagen: '/Imagenes/OIP.jpg',
        infoArtista: 'Lo mejor del grupo británico de rock sinfónico y rock progresivo oriunda de Birmingham y liderado por el músico Jeff Lynne.',
        enlace: './elo.html',
    },
]


const info = document.getElementById('resultado');

const catalogo = () => {
    for (let info of grupos) {
        info.innerHTML += `
        <div class="card mx-5 my-5 d-inline-flex justify-content-center align-items-center"  style="width: 18rem;" id="eloFilter">
         <img src= ${info.imagen} class="card-img-top" alt="...">
              <div class="card-body">
                 <h5 class="card-title">${info.Artista}</h5>
                   <p class="card-text">${info.infoArtista}</p>
                   <div class="d-flex justify-content-evenly">
                   <a href= ${info.enlace} class="btn btn-primary">Ver Lista</a>
              </div>
             </div>
        </div>
        `
    }
}


const resultado = document.querySelector('#resultado');
const buscador = document.querySelector('#buscador');


const filtrarbuscador = () => {

    resultado.innerHTML = '';

    const texto = buscador.value.toLowerCase()

    for (let info of grupos) {
        let nombre = info.Artista.toLowerCase();

        if (nombre.indexOf(texto) !== -1) {
            resultado.innerHTML += `
            <div class="card mx-5 my-5 d-inline-flex justify-content-center align-items-center"  style="width: 18rem;" id="eloFilter">
            <img src= ${info.imagen} class="card-img-top" alt="...">
                 <div class="card-body">
                    <h5 class="card-title">${info.Artista}</h5>
                      <p class="card-text">${info.infoArtista}</p>
                             <div class="d-flex justify-content-evenly">
                                 <a href= ${info.enlace} class="btn btn-primary">Ver Lista</a>
                            </div>
                </div>
           </div>
            `
        }

    }
    if (resultado.innerHTML === '') {
        resultado.innerHTML = `<li>Canción no encontrada</li>`
    }

}

buscador.addEventListener('keyup', filtrarbuscador);
filtrarbuscador();
