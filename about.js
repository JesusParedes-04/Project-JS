


const contenedorDatos2 = document.querySelector("#contenedorDatos2");
const perfilMusica = "/jsoninfo/artistas.json";


fetch(perfilMusica)
	.then((respuesta) => respuesta.json())
	.then((data) => {

		data.forEach((datainfo) => {
			contenedorDatos2.innerHTML += `
<h2 style="color:white"> ${datainfo.nombre} </h2>
<div class= "container-fluid">
<div class="row">
<div class = "col-sm-1 col-md-5 col-lg-6">
<img class="img-fluid" src="${datainfo.img} " alt=""> </div> 
<div class = "col-sm-1 col-md-5 col-lg-6">
<p class="d-flex align-items-center"> ${datainfo.descripcion} </p> <div/> 
</div> 
</div> 
`

		})

	})

	.catch(error => console.error((error)));




