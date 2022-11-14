


const contenedorDatos2 = document.querySelector("#contenedorDatos2");
const perfilMusica = "/jsoninfo/artistas.json";


fetch(perfilMusica)
	.then((respuesta) => respuesta.json())
	.then((data) => {

		data.forEach((datainfo) =>{
contenedorDatos2.innerHTML += `
<h2 style="color:white"> ${datainfo.nombre} </h2>
<img src="${datainfo.img} " alt="">
<p> ${datainfo.descripcion} </p>
`

	})

	})

.catch(error => console.error((error)));




