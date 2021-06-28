//Funciones Modulo de Login 

function verificaUsuario() {
    try {
        var usuario = $("#user").val();
        var psw = $("#psw").val();
        var nombrefuncion = "verificausuario()";
        var pathname = window.location.pathname;

        var obj = {
            usuario: usuario,
            password: psw
        }

        $.ajax({
            type: "POST",
            url: "Login.aspx/ValidaUsuario",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: Sucessok,
            failure: function (response) {
                alert(response.responseText);
            },
            error: function (response) {
                alert(response.responseText);

            }
        });
    }
    catch (err) {

        alert(err);
    }
   
    }

function Sucessok(response) {
    try {
        var mensaje = response.d;

        if (mensaje.indexOf(".") < 0 && mensaje !== "agarcia") {
            sweetAlert("Verifique", mensaje, "warning");
        }
        else {
            //redireccionar a resolucion                                
            //location.href = "http://localhost:63284/default.aspx?usuario=" + mensaje;
            //location.href = "http://192.168.193.5/default.aspx?usuario=" + mensaje;
            var pathname = window.location.hostname;
            location.href = "http://" + pathname + "/default.aspx?usuario=" + mensaje;
        }
    }
    catch (err) {

        alert(err);
    }

}


function AvisoUsuario(mensaje) {
    sweetAlert("Verifique", mensaje, "warning");
}


function checkRut(rut) {
    try {
        // Despejar Puntos
        var valor = rut.value.replace('.', '');
        // Despejar Gui�n
        valor = valor.replace('-', '');

        // Aislar Cuerpo y D�gito Verificador
        cuerpo = valor.slice(0, -1);
        dv = valor.slice(-1).toUpperCase();

        // Formatear RUN
        rut.value = cuerpo + '-' + dv;

        // Si no cumple con el m�nimo ej. (n.nnn.nnn)
        if (cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false; }

        // Calcular D�gito Verificador
        suma = 0;
        multiplo = 2;

        // Para cada d�gito del Cuerpo
        for (i = 1; i <= cuerpo.length; i++) {

            // Obtener su Producto con el M�ltiplo Correspondiente
            index = multiplo * valor.charAt(cuerpo.length - i);

            // Sumar al Contador General
            suma = suma + index;

            // Consolidar M�ltiplo dentro del rango [2,7]
            if (multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }

        }

        // Calcular D�gito Verificador en base al M�dulo 11
        dvEsperado = 11 - (suma % 11);

        // Casos Especiales (0 y K)
        dv = (dv === 'K') ? 10 : dv;
        dv = (dv === 0) ? 11 : dv;

        // Validar que el Cuerpo coincide con su D�gito Verificador
        if (dvEsperado !== dv) { rut.setCustomValidity("RUT Inv�lido"); return false; }


        // Si todo sale bien, eliminar errores (decretar que es v�lido)
        rut.setCustomValidity('');
    }
    catch (err) {

        alert(err);
    }

        }


function solorutlogin(key) {
    if ((key.charCode < 97 || key.charCode > 122)//letras mayusculas
        && (key.charCode < 65 || key.charCode > 90) //letras minusculas
        && (key.charCode !== 241) //�
        && (key.charCode !== 209) //�
        && (key.charCode !== 32) //espacio
        && (key.charCode !== 225) //�
        && (key.charCode !== 233) //�
        && (key.charCode !== 237) //�
        && (key.charCode !== 243) //�
        && (key.charCode !== 250) //�
        && (key.charCode !== 193) //�
        && (key.charCode !== 201) //�
        && (key.charCode !== 205) //�
        && (key.charCode !== 211) //�
        && (key.charCode !== 218) //�
        && (key.charCode < 48 || key.charCode > 57) //  Numeros
        && (key.charCode < 96 || key.charCode > 105) // Numeros
        && (key.charCode !== 0)
        && (key.charCode !== 45)
    )
        return false;
}
