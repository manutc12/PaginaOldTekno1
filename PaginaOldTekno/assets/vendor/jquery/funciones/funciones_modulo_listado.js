// Javascript Modulo Listado de Comisiones


function AlertaAprobacion(tipodocumento, numerodocumento, secuencia) {
    try {

        var str = tipodocumento;
        var separador = "_";
        var limitar = 2;
        var tipoalert = str.substring(0, 7);
        tipoalert = tipoalert.split(separador, limitar);
        //str_a = str_a.replace(" ", "_");


        if (tipoalert == "COAPROB") {
            swal({
                title: 'Esta seguro que desea aprobar la comision?',
                text: numerodocumento,
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#31B404',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Aprobar',
                cancelButtonText: 'Cancelar',
            }).then((result) => {
                if (result.value) {
                    AprobarComisionLiquidacion(tipodocumento,numerodocumento, secuencia, "A");
                }
            })
        }

        if (tipoalert == "LIAPROB") {
            swal({
                title: 'Esta seguro que desea aprobar la Liquidacion?',
                text: numerodocumento,
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#31B404',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Aprobar',
                cancelButtonText: 'Cancelar',
            }).then((result) => {
                if (result.value) {
                    AprobarComisionLiquidacion(tipodocumento,numerodocumento, secuencia, "A");
                }
            })
        }
    }
    catch (err) {
        alert(err);
    }
}


function AlertaDesaprobacion(tipodocumento, numerodocumento, secuencia) {
    try {

        var str = tipodocumento;
        var separador = "_";
        var limitar = 2;
        var tipoalert = str.substring(0, 7);
        tipoalert = tipoalert.split(separador, limitar);

        if (tipoalert == "CORECHA") {
            swal({
                title: 'Esta seguro que desea rechazar la comision?',
                text: numerodocumento,
                type: 'error',
                showCancelButton: true,
                confirmButtonColor: '#31B404',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Rechazar',
                cancelButtonText: 'Cancelar',
            }).then((result) => {
                if (result.value) {
                    AprobarComisionLiquidacion(tipodocumento, numerodocumento, secuencia, "R");
                }
            })
        }

        if (tipoalert == "LIRECHA") {
            swal({
                title: 'Esta seguro que desea rechazar la liquidacion?',
                text: numerodocumento,
                type: 'error',
                showCancelButton: true,
                confirmButtonColor: '#31B404',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Rechazar',
                cancelButtonText: 'Cancelar',
            }).then((result) => {
                if (result.value) {
                    AprobarComisionLiquidacion(tipodocumento, numerodocumento, secuencia, "R");
                }
            })
        }

    }
    catch (err) {
        alert(err);
    }
}


function AprobarComisionLiquidacion(tipodocumento,numerodocumento,secuencia,respuesta) {
    try {

        $("#tipodoc").val(tipodocumento);
        var num_doc = numerodocumento;
        var sec = secuencia;
        var usuariologeado = document.getElementById('lbtUsername').innerText;

        var obj = {
            respu: respuesta,
            numerodoc: num_doc,
            secuen: sec,
            usuario: usuariologeado,
            tipdoc: tipodocumento,
        }

        $.ajax({
            type: "POST",
            url: "/ListadoComisiones.aspx/AprobarComision",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: Sucessok1,
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

function Sucessok1(response) {
    try {


        var mensaje = response.d;
        var titulo = "";
        var valor = $("#tipodoc").val();
        var str = valor;
        var separador = "_";
        var limitar = 2;
        var tipoalert = str.substring(8);
        tipoalert = tipoalert.split(separador, limitar);

        if (valor == "CO") {
            titulo = "Comision de Servicio"
        }

        if (valor == "LI") {
            titulo = "Liquidacion de Viatico"
        }


        if (mensaje == "1") {

            swal({
                title: titulo,
                text: 'ha ocurrido un error de conexion intente nuevamente',
                type: 'error',
            })

        }

        if (mensaje != "1") {

            var valor = $("#tipodoc").val();
            document.getElementById(valor).style.display = 'none';
            var str = valor;
            var separador = "_";
            var limitar = 2;
            var tipoalert = str.substring(8);
            tipoalert = tipoalert.split(separador, limitar);
            var str2 = valor;
            var separador2 = "_";
            var limitar2 = 2;
            var tipoalert2 = str2.substring(0,2);
            tipoalert2 = tipoalert2.split(separador, limitar);
            var juntar = tipoalert2 + "RECHA_" + tipoalert;
            var juntar2 = tipoalert2 + "APROB_" + tipoalert;
            document.getElementById(juntar).style.display = 'none';
            document.getElementById(juntar2).style.display = 'none';

            swal({
                title: titulo,
                text: mensaje,
                type:'success'
            })

        }

        BusquedaComisiones();

    }
    catch (err) {

        alert(err);
    }

}







function BusquedaComisiones() {

    var out = $('#co_1').val();
    var select_estado = $('#estado_opc');
    var selected = $(':selected', select_estado);
    var tipodoc = (selected.closest('optgroup').attr('label'));
    var estado = $("#estado_opc").val();
    var usuariologeado = document.getElementById('lbtUsername').innerText;

    var obj = {
        usuario: $("#list_usuario").val(),
        documento: $("#DropDownList1").val(),
        tiposelc: tipodoc,
        estado: $("#estado_opc").val(),
        usuariolog: usuariologeado,
    }
    $.ajax({
        type: "POST",
        url: "/ListadoComisiones.aspx/BusquedaComisiones",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: Busquedaexitosa,
        failure: function (response) {
            alert(response.responseText);


        },
        error: function (response) {
            alert(response.responseText);


        }
    });
}

function Busquedaexitosa(response) {

    var display_results = $("#tblusuarios");
    display_results.empty();

    var jsonObj = response.d; //For storing the response data in jsonObj variable.
    var strHTML = '<tr><<th>NUMERO COMISION</th><th>FECHA COMISION</th><th>TIPO DE DOCUMENTO</th><th>ESTADO COMISION</th><th>NUMERO LIQUIDACION</th><th>FECHA LIQUIDACION</th><th>ESTADO LIQUIDACION</th><th></th><th></th><tr>';
    $(jsonObj).each(function () {
        var row = $(this)[0]; //Extracting out row object one by one.
        strHTML += '<tr><td><label id="N_DOC_' + row["IDUSUARIO"] + '">' + row["N_DOC"] + '</label></td></td>'
            + '<td><label id="N_DOC_' + row["IDUSUARIO"] + '">' + row["FECHA_DOC"] + '</label></td>'
            + '<td><label id="N_DOC_' + row["IDUSUARIO"] + '">' + row["TIPO_DOCUMENTO"] + '</label></td>'
           


        if (row["ESTADO_COMISION"] == "EN ESPERA" && row["SECUENCIA"] > 0 ) {

            strHTML += '<td><center><label id="N_DOC_' + row["IDUSUARIO"] + '">' + row["ESTADO_COMISION"] + '</label></center><br><center><button disabled id="COAPROB_' + row["N_DOC"] + '" onclick="AlertaAprobacion(this.id,' + row["N_DOC"] + ', ' + row["SECUENCIA"] + '); return false;" type="button" class="mb-xs mt-xs mr-xs btn btn-primary"><i class="fa fa-thumbs-up"></i> </button> <button disabled id="CORECHA_' + row["N_DOC"] + '" onclick="AlertaDesaprobacion(this.id,' + row["N_DOC"] + ', ' + row["SECUENCIA"] + '); return false;"  type="button" class="mb-xs mt-xs mr-xs btn btn-danger"><i class="fa fa-thumbs-down"></i> </button></center></td>'
        }


        else {

            strHTML += '<td><center><label id="N_DOC_' + row["IDUSUARIO"] + '">' + row["ESTADO_COMISION"] + '</label></td>'
        }


        strHTML +='<td><label id="N_DOC_' + row["IDUSUARIO"] + '">' + row["N_LIQ"] + '</label></td>'
            + '<td><label id="N_DOC_' + row["IDUSUARIO"] + '">' + row["FECHA_LIQ"] + '</label></td>'


        if (row["ESTADO_LIQUIDACION"] == "EN ESPERA" && row["SECUENCIA"] > 0 ) {

            strHTML += '<td><center><label id="N_DOC_' + row["IDUSUARIO"] + '">' + row["ESTADO_LIQUIDACION"] + '</label></center><br><center><button disabled id="LIAPROB_' + row["N_LIQ"] + '" onclick="AlertaAprobacion(this.id,' + row["N_LIQ"] + ', ' + row["SECUENCIA"] + '); return false;" type="button" class="mb-xs mt-xs mr-xs btn btn-primary"><i class="fa fa-thumbs-up"></i> </button> <button  disabled id="LIRECHA_' + row["N_LIQ"] + '"  onclick="AlertaDesaprobacion(this.id,' + row["N_LIQ"] + ', ' + row["SECUENCIA"] + '); return false;"  type="button" class="mb-xs mt-xs mr-xs btn btn-danger"><i class="fa fa-thumbs-down"></i> </button></center></td>'
        }


        else {

            strHTML += '<td><label id="N_DOC_' + row["IDUSUARIO"] + '">' + row["ESTADO_LIQUIDACION"] + '</label></td>'
        }

          

        if (row["N_LIQ"] != "") {

            strHTML += '<td> <button onclick="Valordoc(' + row["N_DOC"] + '); return false;"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-warning"><i class="fa fa-search"></i>Ver Comision</button></td>'
                +'<td> <button onclick="Valorliq(' + row["N_LIQ"] + '); return false;"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-success"><i class="fa fa-search"></i>Ver Liquidacion</button></td></tr > '
        }

        else {

            strHTML += '<td> <button onclick="Valordoc(' + row["N_DOC"] + '); return false;"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-warning"><i class="fa fa-search"></i>Ver Comision</button></td>'
                + '<td> </td></tr >  '
        }


           
    });
    $('#tblusuarios').append(strHTML);//To append the html part into the table

}

