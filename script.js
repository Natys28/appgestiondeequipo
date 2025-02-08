// Función para mostrar la sección seleccionada
function mostrarSeccion(seccion) {
    document.querySelectorAll(".seccion").forEach(s => s.style.display = "none");
    document.getElementById(seccion).style.display = "block";
}

// Simulación de escaneo
function escanearCodigo() {
    alert("Escaneo exitoso: IMEI 123456789");
}

// Manejo del formulario
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    let nombre = event.target.elements[0].value;
    let cedula = event.target.elements[1].value;
    let telefono = event.target.elements[2].value;
    let imei = event.target.elements[3].value;
    let estado = event.target.elements[4].value;

    let nuevaActa = document.createElement("li");
    nuevaActa.textContent = `Empleado: ${nombre}, IMEI: ${imei}, Estado: ${estado}`;
    document.getElementById("lista-actas").appendChild(nuevaActa);

    alert("Acta generada correctamente");
    event.target.reset();
});
