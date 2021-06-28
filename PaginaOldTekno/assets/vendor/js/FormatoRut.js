function checkRut(rut) {
    try {
        // Despejar Puntos
        var valor = rut.value.replace('.', '');
        // Despejar Guión
        valor = valor.replace('-', '');

        // Aislar Cuerpo y Dígito Verificador
        cuerpo = valor.slice(0, -1);
        dv = valor.slice(-1).toUpperCase();

        // Formatear RUN
        rut.value = cuerpo + '-' + dv;

        // Si no cumple con el mínimo ej. (n.nnn.nnn)
        if (cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false; }

        // Calcular Dígito Verificador
        suma = 0;
        multiplo = 2;

        // Para cada dígito del Cuerpo
        for (i = 1; i <= cuerpo.length; i++) {

            // Obtener su Producto con el Múltiplo Correspondiente
            index = multiplo * valor.charAt(cuerpo.length - i);

            // Sumar al Contador General
            suma = suma + index;

            // Consolidar Múltiplo dentro del rango [2,7]
            if (multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }

        }

        // Calcular Dígito Verificador en base al Módulo 11
        dvEsperado = 11 - (suma % 11);

        // Casos Especiales (0 y K)
        dv = (dv === 'K') ? 10 : dv;
        dv = (dv === 0) ? 11 : dv;

        // Validar que el Cuerpo coincide con su Dígito Verificador
        if (dvEsperado !== dv) { rut.setCustomValidity("RUT Inválido"); return false; }


        // Si todo sale bien, eliminar errores (decretar que es válido)
        rut.setCustomValidity('');
    }
    catch (err) {

        alert(err);
    }

}


function solorutlogin(key) {
    if ((key.charCode < 97 || key.charCode > 122)//letras mayusculas
        && (key.charCode < 65 || key.charCode > 90) //letras minusculas
        && (key.charCode !== 241) //ñ
        && (key.charCode !== 209) //Ñ
        && (key.charCode !== 32) //espacio
        && (key.charCode !== 225) //á
        && (key.charCode !== 233) //é
        && (key.charCode !== 237) //í
        && (key.charCode !== 243) //ó
        && (key.charCode !== 250) //ú
        && (key.charCode !== 193) //Á
        && (key.charCode !== 201) //É
        && (key.charCode !== 205) //Í
        && (key.charCode !== 211) //Ó
        && (key.charCode !== 218) //Ú
        && (key.charCode < 48 || key.charCode > 57) //  Numeros
        && (key.charCode < 96 || key.charCode > 105) // Numeros
        && (key.charCode !== 0)
        && (key.charCode !== 45)
    )
        return false;
}


