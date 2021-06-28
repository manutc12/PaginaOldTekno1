//Funciones Modulo de Pagina Olvidar Clave

function Cambiarclave() {
    try {
    var obj = {
        email: $("#txtemail").val()

    }

    $.ajax({
        type: "POST",
        url: "OlvidarClave.aspx/Cambiarclave",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: SucessCambiarclave,
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

function SucessCambiarclave(response) {

    if (response.d == "1") {

        sweetAlert("Correo Enviado", "Verifique su casilla de correo electronico y siga las instrucciones", "success");
        document.getElementById('txtemail').value = "";
    }

    if (response.d == "2") {
        sweetAlert("No se encuentra Email", "Verifique que su email este registrado en el sistema", "info");

    }

}

function validarmail() {
    if ($("#txtemail").val().indexOf('@', 0) == -1 || $("#txtemail").val().indexOf('.', 0) == -1) {
        sweetAlert("Incorrecto", "Email no posee formato correcto", "error");
    }
    else {
        Cambiarclave();
    }

}