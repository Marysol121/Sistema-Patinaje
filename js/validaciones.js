
// Función para validar el formato de fecha (yyyy-mm-dd)
export function isValidDate(dateString) {
    const regexDate = /^\d{4}-\d{2}-\d{2}$/;
    return regexDate.test(dateString);
}

// Función para validar la edad (solo números positivos)
export function isValidEdad(edadString) {
    const regexEdad = /^\d+$/;
    return regexEdad.test(edadString);
}

// Función para validar la cédula
export function isValidCedula(cedula) {
    if (cedula.length !== 10 || isNaN(cedula)) {
        return false;
    }

    const provincia = parseInt(cedula.substring(0, 2));
    if (provincia < 0 || provincia > 24) {
        return false;
    }

    const tercerDigito = parseInt(cedula.charAt(2));
    if (tercerDigito > 5) {
        return false;
    }

    // Calcular el dígito verificador
    const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    let suma = 0;
    for (let i = 0; i < 9; i++) {
        let valor = parseInt(cedula.charAt(i)) * coeficientes[i];
        if (valor >= 10) {
            valor -= 9;
        }
        suma += valor;
    }
    const digitoVerificador = (10 - (suma % 10)) % 10;

    const ultimoDigito = parseInt(cedula.charAt(9));
    return digitoVerificador === ultimoDigito;
}
