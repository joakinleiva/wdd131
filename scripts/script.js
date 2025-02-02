const fechaHora = document.getElementById('fechaHora');

function actualizarFechaHora() {
    const fecha = new Date();
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
    fechaHora.textContent = fechaFormateada;
}

actualizarFechaHora();
setInterval(actualizarFechaHora, 1000); // Actualiza cada segundo