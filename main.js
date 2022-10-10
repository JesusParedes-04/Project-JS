//Variables de acceso
const emailAcceso = 'jesus@hotmail.com';
const passwordAcceso = '1234'

//Seleccion variables

const inputAcceso= document.querySelector('#exampleInputEmail1')
const inputPassword= document.querySelector('#exampleInputPassword1')

//Seleccion funciones

function login () {
    if(inputAcceso.value===emailAcceso && inputPassword.value===passwordAcceso){
        alert('Autenticación completa')
        window.location = "plataforma.html";
    }
    else {
    console.log('intente nuevamente')

}}

//----------------------------------------------------------- Reproductor


const playReproductor = document.querySelector('#btnReproductor') 


let listaPlaylist = [

    {
        Grupo: 'The Beatles',
        Cancion: 'Let it be'
    },
    {
        Grupo: 'Rolling Stones',
        Cancion: 'Angie'
    },
    {
        Grupo: 'John Lennon',
        Cancion: 'Imagine'
    },
    {
        Grupo: 'Led Zeppelin',
        Cancion: 'Stairway to heaven'
    },
    {
        Grupo: 'The Doors',
        Cancion: 'The End'
    },
    {
        Grupo: 'Rod Stewart',
        Cancion: 'Young Turks'
    },
  
  ]

const cancionUno = document.querySelector('#cancionUno')
cancionUno.addEventListener('click', ()=>{

    const resultado = listaPlaylist.find(elemento => elemento.Cancion === 'Let it be')
console.log(resultado)
});
    





playReproductor.addEventListener('click', ()=>{

    let aleatorio = Math.floor(Math.random()*listaPlaylist.length);
    let cancion = listaPlaylist[aleatorio];
    console.log(cancion)

})



// class theBeatles{

//     constructor(grupo, cancion) {
//         this.grupo=grupo
//         this.cancion=cancion
//     }

// }

// const theBeatles = [back, letter]

// let appMusica = prompt('Desea Abrir App de Musica');
// const cerrarApp = ()=>
// alert('Cerrando la app...')


// let listaPlaylist = [

//   {
//       Grupo: 'The Beatles',
//       Cancion: 'Let it be'
//   },
//   {
//       Grupo: 'Rolling Stones',
//       Cancion: 'Angie'
//   },
//   {
//       Grupo: 'John Lennon',
//       Cancion: 'Imagine'
//   },
//   {
//       Grupo: 'Led Zeppelin',
//       Cancion: 'Stairway to heaven'
//   },
//   {
//       Grupo: 'The Doors',
//       Cancion: 'The End'
//   },
//   {
//       Grupo: 'Rod Stewart',
//       Cancion: 'Young Turks'
//   },

// ]

// if (appMusica === 'Si' || appMusica === 'si' || appMusica === 'YES' || appMusica === 'yes') {
//   abriendoApp()
// }
// else {
// alert('Cerrando app ...')
// }

// //------------------------------------------------------------------------


// function abriendoApp() {

//   let peticionUsuario = prompt('Ingrese nombre de usuario');
//   let peticionContrasenia = prompt('Ingrese contrasenia');
//   const contraseniaVerificada = '1234';
//   const usuarioVerificado = 'Jesus'


// if( peticionUsuario === usuarioVerificado && peticionContrasenia ===contraseniaVerificada) {
//   appBienvenida()
// }
// else{
//   cerrarApp()
// }}

//  // ------------------------------------------------------------------------------------


// function appBienvenida() {

//   alert(`Bienvenido... cargando playlist`)
//   cargandoPlaylist()

// }


// function cargandoPlaylist() {

//   for (let i = 1; i < listaPlaylist.length; i++) {

//     console.log(listaPlaylist[i]);

//     } 


// }
//    const elegirTema= parseInt(prompt('Elija un numero de tema (1,2,3,4,5)'))
 

//    if (elegirTema <=5) {

//     console.log('reproduciendo su tema...')
    
//     } 
    
//     else {
    
//     console.log(cerrarApp())
    
//     }


