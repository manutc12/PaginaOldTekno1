//Funciones Modulo de Pagina Maestra 

function validarclave() {
    try {
        var newpassword = $("#password_new").val();
        var confirmpassword = $("#password_confirm").val()
        var respuesta;
        var guardar;

        if (newpassword !== confirmpassword) {
            var mesaje = "Su contrase&ntildea ingresada de confirmacion sea igual a la nueva";
            respuesta = "false";
            guardar = "1";
            sweetAlert("Verifique", mesaje, "warning");

        }

        if (guardar !== "1") {

            cambiarclave();

        }
    }
    catch (err) {

        alert(err);
    }
}


function cambiarclave() {
    try {
        var obj = {
            usuario: document.getElementById('lbtUsername').innerText,
            oldpassword: $("#password_old").val(),
            newpassword: $("#password_new").val(),
            confirmpassword: $("#password_confirm").val()
        }

        $.ajax({
            type: "POST",
            url: "default.aspx/CambiarClave",
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

        if (mensaje !== "") {
            sweetAlert("Verifique", mensaje, "warning");
        }
        else {
            sweetAlert("Exitosamente", "Se realizo su cambio de contrasena", "success");
            document.getElementById('password_old').value = "";
            document.getElementById('password_new').value = "";
            document.getElementById('password_confirm').value = "";
            $('#password_modal').modal('hide');

        }
    }
    catch (err) {

        alert(err);
    }
}




       



