
const grupos = [
    {
        Artista: 'Eric clapton',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        infoArtista: 'lorem',
        enlace: './listaClaymand.html',

    },

    {
        Artista: 'Richard Clayderman',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        infoArtista: 'lorem',
        enlace: './listaClaymand.html',
    },

    {
        Artista: 'The Beatles',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        infoArtista: 'lorem',
        enlace: './listaClaymand.html',

    },

    {
        Artista: 'Electric Light Orchestra',
        imagen: 'https://dummyimage.com/300x200/000/fff',
        infoArtista: 'lorem',
        enlace: './listaClaymand.html',
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
