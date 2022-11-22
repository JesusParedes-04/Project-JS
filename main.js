


//Iniciar Sesion Variables de acceso
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

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario Incorrecto',
            });
        };
    }
    )
}
const correo = localStorage.getItem('email')
const password = localStorage.getItem('password')


//Dark Mode funcionando correctamente
const darkMode = document.querySelector('#darkMode');
if (darkMode) {

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
    document.body.classList.remove('modoPantalla')
};







