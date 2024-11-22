// Definir las credenciales correctas
const CORREO_CORRECTO = "fabianarteaga49@gmail.com";
const CONTRASENA_CORRECTA = "GhettoFabyShop";

// Función para manejar el envío del formulario de login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío normal del formulario

    // Obtenemos los valores del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verificamos si el correo y la contraseña son correctos
    if (email === CORREO_CORRECTO && password === CONTRASENA_CORRECTA) {
        // Redirigir a la página de inicio
        window.location.href = 'Inicio.html'; // Cambia 'Inicio.html' si tu página de inicio tiene otro nombre
    } else {
        // Mostrar mensaje de error si las credenciales no son correctos
        document.getElementById('error-message').style.display = 'block';
    }
});
