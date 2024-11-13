// Función para validar los datos personales
function validardatospersonales(event) {
    // Obtiene los elementos de entrada del formulario
    const name = document.getElementById("Nombre");
    const email = document.getElementById("email");
    const edad = document.getElementById("Edad").value;

    // Verifica que los campos no estén vacíos y que la edad sea válida
    if (!name.value || !email.value || edad < 18) {
        alert("Por favor, completa todos los campos correctamente.");
        event.preventDefault(); // Aquí necesitas los paréntesis para que funcione
        return; // Termina la ejecución si los datos no son válidos
    }
}

// Función para validar los componentes de Machine Learning
function validarDatosComponentes(event) {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const otrosComponentes = document.getElementById("otrosComponentes").value;
    
    // Variable que verifica si al menos un componente está seleccionado
    let componenteSeleccionado = false;

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            componenteSeleccionado = true;
        }
    });

    // Verifica si se seleccionaron componentes o se ingresaron otros
    if (componenteSeleccionado || otrosComponentes.trim() !== "") {
        alert("Componentes verificados correctamente. ¡Listo para trabajar!");
    } else {
        alert("Faltan componentes necesarios para trabajar con Machine Learning.");
        event.preventDefault(); // Prevenir envío si faltan componentes
    }
}
