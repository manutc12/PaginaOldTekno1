function Mensajes(texto) {

    if (texto != "SystemString") {

        swal({
            title: "Bienvenido" +" "+ texto,
            html: '<div class= "col-xs-12"><table class="table table-bordered table-striped mb-none table-hover tablesorter mb-none">' + texto + ' </table></div></br>',
            type: "success",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "ir a inicio",
            cancelButtonText: "Salir",
            closeOnConfirm: false,
            closeOnCancel: false,
            allowEscapeKey: false,
            allowOutsideClick: false
        }).then(function (result) {
            if (result.value) {
                window.location = "/PaginaInicial.aspx";
            } else if (result.dismiss == 'cancel') {
                window.location = "";
            }

        });


    }

}


function Alerta(mensaje) {

    swal({
        title: "Taller ASP AIEP",
        html: '<div class= "col-xs-12"><table class="table table-bordered table-striped mb-none table-hover tablesorter mb-none">' + mensaje + ' </table></div></br>',
        type: "error",
        showCancelButton: false,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Aceptar",
        closeOnConfirm: false,
        closeOnCancel: false,
        allowEscapeKey: false,
        allowOutsideClick: false
    }).then(function (result) {
        if (result.value) {
            
        } 
    });
}