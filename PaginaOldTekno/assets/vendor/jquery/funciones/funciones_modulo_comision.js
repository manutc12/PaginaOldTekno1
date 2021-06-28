//Funciones Modulo de Pagina Comision de Servicio



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
        rut.value = cuerpo + '-' + dv
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
        dv = (dv == 'K') ? 10 : dv;
        dv = (dv == 0) ? 11 : dv;
        // Validar que el Cuerpo coincide con su Dígito Verificador
        if (dvEsperado != dv) { rut.setCustomValidity("RUT Inválido"); return false; }
        // Si todo sale bien, eliminar errores (decretar que es válido)
        rut.setCustomValidity('');
    }
    catch (err) {
        alert(err);
    }
}

function alerta_adjunto_comision() {

    swal(
        'Nombre del archivo no valido, contiene caracteres espaciales',
        'Por favor intenete nuevamente cambiando su nombre',
        'error'
    );

}

function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}


function ShowCurrentTime() {
    try {
        $.ajax({
            type: "POST",
            url: "/ComisionServicio.aspx/GetCustomers",
            data: '{name: "' + $("#txtRut").val() + '" }',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: OnSuccess,
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


function OnSuccess(response) {
    try {
        if ($("#txtRut").val().length > 10) {
            var mensaje = "El RUT debe tener como maximo 9 caracteres";
            sweetAlert("Verifique", mensaje, "warning");
            return false;
        }
        if (response.d == "1") {
            $('#modalWarning').modal('show');
            $('#txtRut').val($(this).find("").text());
            $('#txtNombre').val($(this).find("").text());
            $('#txtUnidad').val($(this).find("").text());
            $('#txtCodigo_1').val($(this).find("").text());
            $('#txtProyecto_1').val($(this).find("").text());
            document.getElementById('txtProcentaje_1').value = "";
        }
        else {
            var xmlDoc = $.parseXML(response.d);
            var xml = $(xmlDoc);
            var customers = xml.find("Customers");
            $(customers).each(function () {
                $('#txtNombre').val($(this).find("NOMBRE").text());
                $('#txtUnidad').val($(this).find("UNIDAD_TRABAJO").text());
                $('#txtCodigo_1').val($(this).find("IDPROYECTO").text());
                $('#txtProyecto_1').val($(this).find("NOMPROY").text());
                $('#TextBox1').val($(this).find("LUGAR_ORIGEN").text());
                var textToFind = $("#TextBox1").val();
                var dd = document.getElementById('listOrigen');
                for (var i = 0; i < dd.options.length; i++) {
                    if (dd.options[i].value === textToFind) {
                        dd.selectedIndex = i;
                        break;
                    }
                }
                document.getElementById('txtProcentaje_1').value = 100;
                verificarrurt();
            });
        }
    }
        catch (err) {
        }
}

function verificarrurt() {
    try {
        $.ajax({
            type: "POST",
            url: "/ComisionServicio.aspx/verificarrut",
            data: '{rut: "' + $("#txtRut").val() + '" }',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: OnSuccessrut,
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

function OnSuccessrut(response) {
    try {
        if (response.d != "") {
            $('#modalWarning3').modal('show');
            document.getElementById('Label3').innerHTML = response.d;
            $('#txtRut').val($(this).find("").text());
            $('#txtNombre').val($(this).find("").text());
            $('#txtUnidad').val($(this).find("").text());
            $('#txtCodigo_1').val($(this).find("").text());
            $('#txtProyecto_1').val($(this).find("").text());
            $('#txtProcentaje_1').val("");
        }
    }
    catch (err) {
        alert(err);
    }


}

function ocultartiponave() {
    try {
        topemaximo();
        var combo = document.getElementById("DropDownList2");
        var selected = $("#DropDownList2 option:selected").text();
        if (selected == "0") {
            document.getElementById('tipnave').style.display = 'none';
        }
        else {
            document.getElementById('tipnave').style.display = 'block';
            var embarcado = $("#DropDownList2").val();
            var al40 = $("#txtal40").val();
            //var resultado = al40 - embarcado;
            //alert(resultado);
            //document.getElementById('txtal40').value = resultado;

                
        }
    }
    catch (err) {
        alert(err);
    }
}

function ocultartipomostrar() {

    var combo = document.getElementById("DropDownList2");
    var selected = $("#DropDownList2 option:selected").text();
    if (selected == "0") {
        document.getElementById('tipnave').style.display = 'none';
    }
    else {
        document.getElementById('tipnave').style.display = 'block';
    }
}



function AdjuntarPYQ() {
    try {
        cargardestino();
        if ($("#listPais").val() != "01") {

            sweetAlert("Recuerde adjuntar formularios", "Solicitud de Participacion en Compromiso Internacional e Informe de Cometido al Exterior", "warning");
            $('#txtadjunto').val($(this).find("1").text());
            document.getElementById('txtadjunto').value = "1";


        }

        else {
            $('#txtadjunto').val($(this).find("0").text());
            document.getElementById('txtadjunto').value = "0";
        }
    }
    catch (err) {
        alert(err);
    }
}

function cargardestino() {
    try {
        var obj = {
            paises: $("#listPais").val()
        }
        $.ajax({
            type: "POST",
            url: "/ComisionServicio.aspx/cargardestino",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (r) {
                var ddlCustomers = $("[id*=listDestino]");
                ddlCustomers.empty().append('<option selected="selected" value="0">Selecciona Opcion</option>');
                $.each(r.d, function () {
                    ddlCustomers.append($("<option></option>").val(this['Value']).html(this['Text']));
                });
            }
        });
    }
    catch (err) {
        alert(err);
    }
}


function adjuntarexterior() {
    try {
        $('#txtadjunto').val($(this).find("0").text());
        document.getElementById('txtadjunto').value = "0";
    }
    catch (err) {
        alert(err);
    }
}

function mensajeerror() {
    try {
    var mensaje = "Error en la funcion tope maximo";
    sweetAlert("Verifique", mensaje, "warning");
    }
    catch (err) {
        alert(err);
    }
}

function ocultardiv() {
    try {
        document.getElementById('antecedentes').style.display = 'none';
    }
    catch (err) {
        alert(err);
    }
}

function valoradjunto() {
    try {
        document.getElementById('txtadjunto').style.display = 'none';
        document.getElementById('txt_usuario').style.display = 'none';
        document.getElementById('TextBox1').style.display = 'none';
    }
    catch (err) {
    alert(err);
}
}

function ocultarviaje() {
    try {
        document.getElementById('antecedenteviaje').style.display = 'none';
        document.getElementById('adjuntar').style.display = 'none';
     }
    catch (err)    {
    alert(err);
}
}

function Fechaerror() {
    try {
        $('#modalWarning4').modal('show');
    }
    catch (err) {
    alert(err);
    }
}


function soloNumeros(e) {
    try {
        var key = window.Event ? e.which : e.keyCode
        return ((key >= 48 && key <= 57) || (key == 8))
    }
   catch (err) {
   alert(err);
    }
}

function txtName_onchange(idelement) {
    try {
        var monto = document.getElementById(idelement).value;
        var elmenttope = idelement.replace("SOLICITADO_", "TOPE_");
        var tope = document.getElementById(elmenttope).textContent;
        if (Number(monto) > Number(tope)) {
            document.getElementById(idelement).value = 0;
            if (idelement == "SOLICITADO_7") {

                document.getElementById('otros_7').style.display = 'none';
            }
        }
        else {

            if (idelement == "SOLICITADO_7") {

                document.getElementById('otros_7').style.display = 'table-row';
            }
        }
    }
    catch (err) {
        alert(err);
    }

}






function topemaximo() {
    try {
        var dias40 = $("#txtal40").val();
        var nave = $("#list_nave").val();
        var pais = $("#listPais").val();
        var rut = $("#txtRut").val();
        var fechasalida = $("#txtDate").val();
        var fechallegada = $("#txtDateSal").val();
        var dias100 = $("#DropDownList1").val();
        var diasbono = $("#DropDownList2").val();
        var idproyecto = $("#txtCodigo_1").val();
        var numerodocumento = document.getElementById('Label2').innerText;

        if (dias40 == null) {
            dias40 = "";
        }

        if (rut == null) {
            rut = "";
        }

        if (fechasalida == null) {
            fechasalida = "";
        }

        if (fechallegada == null) {
            fechallegada = "";
        }

        if (dias100 == null) {
            dias100 = "";
        }


        if (diasbono == null) {
            diasbono = "";
        }

        if (idproyecto == null) {
            idproyecto = "";
        }

        if (numerodocumento == null) {
            numerodocumento = "";
        }



        if (nave == null) {
            nave = 0;

        }

        if (nave != "") {

            nave = $("#list_nave").val();
        }

        if (pais == null) {

            pais = 0;
        }

        if (pais != "") {

            pais = $("#listPais").val();
        }

        var obj = {
            rut: rut,
            fechasalida: fechasalida,
            fechallegada: fechallegada,
            dias100: dias100,
            diasbono: diasbono,
            idproyecto: idproyecto,
            numerodocumento: numerodocumento,
            tiponave: nave,
            tipopais: pais,
            dia40: dias40
        }

        $.ajax({
            type: "POST",
            url: "/ComisionServicio.aspx/topemaximo",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: topeexitoso,
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


function topeexitoso(response) {
    try {
        var display_results = $("#tblDynamic");
        var opcion = $("#txt_validar").val();
        display_results.empty();

        var jsonObj = response.d; //For storing the response data in jsonObj variable.
        var strHTML = '<tr><th></th><th>DESCRIPCION</th><th>SOLICITADO</th><th>TOPE MAXIMO</th><tr>';
        $(jsonObj).each(function () {
            var row = $(this)[0]; //Extracting out row object one by one.
      
            if (opcion == "0"){

                strHTML += '<tr><td><label id="IDTIPOGASTO_' + row["IDTIPOGASTO"] + '">' + row["IDTIPOGASTO"] + '</label></td>'
                    + '<td><label id="NOMBRE_' + row["IDTIPOGASTO"] + '">' + row["DESCRIPCION"] + '</label></td>';

            if (row["IDTIPOGASTO"] == 1 || row["IDTIPOGASTO"] == 8) {
                strHTML += '<td><input class="form-control" type="text" value="' + row["MONTO_SOLICITADO"] + '" id="SOLICITADO_' + row["IDTIPOGASTO"] + '" onKeyPress="return soloNumeros(event)" onchange="txtName_onchange(this.id)"></input></td>'
                    + '<td><label id="TOPEF_' + row["IDTIPOGASTO"] + '">' + row["TOPEF"] + '</label></td>';
            }

            if (row["IDTIPOGASTO"] == 7) {

                strHTML += '<td><input class="form-control" type="text" value="' + row["MONTO_SOLICITADO"] + '" id="SOLICITADO_' + row["IDTIPOGASTO"] + '" onKeyPress="return soloNumeros(event)" onchange="txtName_onchange(this.id)"></input > <br><input id="otros_7" class="form-control" value="' + row["otros"] + '"  placeholder="Ingrese Motivo del Gasto" type="text"></input></td>'
                    + '<td><label class="hidden" id="TOPEF_' + row["IDTIPOGASTO"] + '">' + row["TOPEF"] + '</label></td>';

            }

            if (row["IDTIPOGASTO"] != 7 & row["IDTIPOGASTO"] != 1 & row["IDTIPOGASTO"] != 8) {

                strHTML += '<td><input class="form-control" type="text" value="' + row["MONTO_SOLICITADO"] + '" id="SOLICITADO_' + row["IDTIPOGASTO"] + '" onKeyPress="return soloNumeros(event)" onchange="txtName_onchange(this.id)"></input ></td>'
                    + '<td><label class="hidden" id="TOPEF_' + row["IDTIPOGASTO"] + '">' + row["TOPEF"] + '</label></td>';

            }

            strHTML += '<td style="visibility:hidden;"><label id="TOPE_' + row["IDTIPOGASTO"] + '">' + row["TOPE"] + '</label></td>'
            }


            if (opcion == "2") {

                if (row["IDTIPOGASTO"] == 8) {
                    strHTML +=
                        '<tr><td><label id="IDTIPOGASTO_' + row["IDTIPOGASTO"] + '">' + row["IDTIPOGASTO"] + '</label></td>'
                        + '<td><label id="NOMBRE_' + row["IDTIPOGASTO"] + '">' + row["DESCRIPCION"] + '</label></td>';

                    strHTML += '<td><input class="form-control" type="text" value="' + row["MONTO_SOLICITADO"] + '" id="SOLICITADO_' + row["IDTIPOGASTO"] + '" onKeyPress="return soloNumeros(event)" onchange="txtName_onchange(this.id)"></input></td>'
                        + '<td><label id="TOPEF_' + row["IDTIPOGASTO"] + '">' + row["TOPEF"] + '</label></td>';

                    strHTML +=   '<td style="visibility:hidden;"><label id="TOPE_' + row["IDTIPOGASTO"] + '">' + row["TOPE"] + '</label></td>'
                }

            }


                if (opcion == "1") {


                    if (row["IDTIPOGASTO"] == 7) {


                        strHTML += '<tr><td><label id="IDTIPOGASTO_' + row["IDTIPOGASTO"] + '">' + row["IDTIPOGASTO"] + '</label></td>'
                            + '<td><label id="NOMBRE_' + row["IDTIPOGASTO"] + '">' + row["DESCRIPCION"] + '</label></td>';

                        strHTML += '<td><input class="form-control" type="text" value="' + row["MONTO_SOLICITADO"] + '" id="SOLICITADO_' + row["IDTIPOGASTO"] + '" onKeyPress="return soloNumeros(event)" onchange="txtName_onchange(this.id)"></input > <br><input id="otros_7" class="form-control" value="' + row["otros"] + '"  placeholder="Ingrese Motivo del Gasto" type="text"></input></td>'
                            + '<td><label class="hidden" id="TOPEF_' + row["IDTIPOGASTO"] + '">' + row["TOPEF"] + '</label></td>';

                        strHTML += '<td style="visibility:hidden;"><label id="TOPE_' + row["IDTIPOGASTO"] + '">' + row["TOPE"] + '</label></td>'

                    }

                    if (row["IDTIPOGASTO"] != 7 & row["IDTIPOGASTO"] != 1 & row["IDTIPOGASTO"] != 8) {


                        strHTML += '<tr><td><label id="IDTIPOGASTO_' + row["IDTIPOGASTO"] + '">' + row["IDTIPOGASTO"] + '</label></td>'
                            + '<td><label id="NOMBRE_' + row["IDTIPOGASTO"] + '">' + row["DESCRIPCION"] + '</label></td>';

                        strHTML += '<td><input class="form-control" type="text" value="' + row["MONTO_SOLICITADO"] + '" id="SOLICITADO_' + row["IDTIPOGASTO"] + '" onKeyPress="return soloNumeros(event)" onchange="txtName_onchange(this.id)"></input ></td>'
                            + '<td><label class="hidden" id="TOPEF_' + row["IDTIPOGASTO"] + '">' + row["TOPEF"] + '</label></td>';

                        strHTML += '<td style="visibility:hidden;"><label id="TOPE_' + row["IDTIPOGASTO"] + '">' + row["TOPE"] + '</label></td>'

                    }


                     
                    }


               

     

        });
        $('#tblDynamic').append(strHTML);
        if (opcion != "2") {
            mostrardetalle();
        }
    }
    catch (err) {
        alert(err);
    }
}


function mostrardetalle() {
    try {
        var solicitado_7 = $("#SOLICITADO_7")[0].value;
        if (solicitado_7 == "0") {

            document.getElementById('otros_7').style.display = 'none';
        }

        else {

            document.getElementById('otros_7').style.display = 'table-row';
        }
    }
            catch (err) {
        alert(err);
    }

}

function verificarfecha1() {
    try {
        var obj = {
            rut: $("#txtRut").val(),
            fechasalida: $("#txtDate").val(),
            fechallegada: $("#txtDateSal").val(),
            tipodocu: $("#txt_validar").val(),

        }
        $.ajax({
            type: "POST",
            url: "/ComisionServicio.aspx/verificafecha",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: OnSuccessfecha,
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

function OnSuccessfecha(response) {
    try {
        var xmlDoc = $.parseXML(response.d);
        var fechasalida = $("#txtDate").val();
        var fechallegada = $("#txtDateSal").val();
        var mensaje = "";

        if (fechallegada != "") {



            if ($.datepicker.parseDate('dd/mm/yy', fechasalida) > $.datepicker.parseDate('dd/mm/yy', fechallegada)) {
                $('#modalWarning5').modal('show');
                $('#txtdiasaprox').val($(this).find("").text());
                document.getElementById('txtDateSal').style.borderColor = "red"
                $('#txtDateSal').val($(this).find("").text());
                $('#txtDate').val($(this).find("").text());


            }


            else {
                $(xmlDoc).each(function () {
                    $('#txtdiasaprox').val($(this).find("NUM_DIAS").text());
                    mensaje = $(this).find("MENSAJE").text();
                    cantidad();
                    if (mensaje != "") {
                        sweetAlert("Verifique", mensaje, "warning");
                        $('#txtadjunto').val($(this).find("1").text());
                        document.getElementById('txtadjunto').value = "1";
                    }
                    if (mensaje == "") {
                        $('#txtadjunto').val($(this).find("0").text());
                        document.getElementById('txtadjunto').value = "0";
                    }
                });
            }
        }
    }
    catch (err) {
        alert(err);
    }
}


function AnularComision() {
    try {
        var obj = {
            numerodocumento: document.getElementById('Label2').innerText,
            usuario: $("#txt_usuario").val()
        }
        $.ajax({
            type: "POST",
            url: "/ComisionServicio.aspx/AnularComision",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: SucessAnularv1,
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


function SucessAnularv1(response) {
    var mensaje = response.d;
        sweetAlert("Anulada", mensaje, "success");
    }



function Mudarestado(el) {
    try {
        var display = document.getElementById(el).style.display;
        if (display == "none")
            document.getElementById(el).style.display = 'block';
        else
            document.getElementById(el).style.display = 'none';
    }
    catch (err) {
        alert(err);
    }
}

function ToggleDiv(Flag) {
    try {
        if (Flag == "first") {
            document.getElementById('dvFirstDiv').style.display = 'block';
            document.getElementById('dropzone-example').style.display = 'none';
        }
        else {
            document.getElementById('dropzone-example').style.display = 'none';
            document.getElementById('dvSecondDiv').style.display = 'block';
        }
    }
    catch (err) {
        alert(err);
    }
}


function successalert() {
    try {
        swal({
            title: 'No se Encuentra Comision',
            text: 'Reintente nuevamente',
            type: 'error'



        });


    }
    catch (err) {
        alert(err);
    }
}



function controltag(e) {
    try {
        tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) return true; // para la tecla de retroseso
        else if (tecla == 0 || tecla == 9) return true; //<-- PARA EL TABULADOR-> su keyCode es 9 pero en tecla se esta transformando a 0 asi que porsiacaso los dos
        patron = /[0-9\s]/;// -> solo letras
        // patron =/[0-9\s]/;// -> solo numeros
        te = String.fromCharCode(tecla);
        return patron.test(te);
    }
    catch (err) {
        alert(err);
    }
}

function soloLetras(e) {
    try {
        return false;
    }
            catch (err) {
            alert(err);
        }
}

function cantidad() {
    try {
        $.ajax({
            type: "POST",
            url: "/ComisionServicio.aspx/Getcantidad",
            data: '{cantidad: "' + $("#txtdiasaprox").val() + '" }',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (r) {
                var ddlCustomers = $("#DropDownList1");
                var embarque = $("[id*=DropDownList2]");
                ddlCustomers.empty().append('<option selected="selected" value="0">-Seleccione-</option>');
                embarque.empty().append('<option selected="selected" value="0">-Seleccione-</option>');
                $.each(r.d, function () {
                    ddlCustomers.append($("<option></option>").value = r.d);
                    ddlCustomers.append($("<option></option>").val(this['Id']).html(this['Name']));
                    embarque.append($("<option></option>").value = r.d);
                    embarque.append($("<option></option>").val(this['Id']).html(this['Name']));
                });
            }
        });
    }
    catch (err) {
        alert(err);
    }
}

function CondicionesPC() {
    try {
        swal({
            html:
            '<iframe src="http://docs.google.com/gview?url=http://autoservicio.ifop.cl/Obligaci%C3%B3n.PDF&embedded=true" style="width:700px; height:600px;" frameborder="0"></iframe>',
            input: 'checkbox',
            inputValue: 0,
            padding: 0,
            width: 900,
            allowEscapeKey: false,
            inputPlaceholder:
            'Acepta los terminos y condiciones',
            confirmButtonText:
            'Aceptar <i class="fa fa-arrow-right></i>',
            inputValidator: function (result) {
                return new Promise(function (resolve, reject) {
                    if (result) {
                        resolve()
                    } else {
                        reject('Tu necesitas aceptar los Terminos y Condiciones')
                    }
                })
            }
        }).then(function (result) {
            validarguardar();
        })
    }
    catch (err) {
        alert(err);
    }
}


function CondicionesMobil() {
    try {
        swal({
            html:
            '<div class="embed-responsive embed-responsive-16by9" > <iframe src="http://docs.google.com/gview?url=http://autoservicio.ifop.cl/Obligaci%C3%B3n.PDF&embedded=true" ></iframe></div>',
            input: 'checkbox',
            inputValue: 0,
            padding: 0,
            inputPlaceholder:
            'Acepta los términos y condiciones',
            confirmButtonText:
            'Aceptar <i class="fa fa-arrow-right></i>',
            inputValidator: function (result) {
                return new Promise(function (resolve, reject) {
                    if (result) {
                        resolve()
                    } else {
                        reject('Tu necesitas aceptar los Terminos y Condiciones')
                    }
                })
            }
        }).then(function (result) {
            validarguardar();
        })
    }
    catch (err) {
        alert(err);
    }

}



function GuardarDatosTabla() {
    try {
        var obj = {
            solicitado_1: $("#SOLICITADO_1")[0].value,
            solicitado_2: $("#SOLICITADO_2")[0].value,
            solicitado_3: $("#SOLICITADO_3")[0].value,
            solicitado_4: $("#SOLICITADO_4")[0].value,
            solicitado_5: $("#SOLICITADO_5")[0].value,
            solicitado_6: $("#SOLICITADO_6")[0].value,
            solicitado_7: $("#SOLICITADO_7")[0].value,
            solicitado_8: $("#SOLICITADO_8")[0].value,
            numerodocumento: document.getElementById('Label2').innerText,

        }
        $.ajax({
            type: "POST",
            url: "/ResolucionComisionServicio.aspx/GuardarDatosTabla",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: SucessTabla,
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

function SucessTabla(response) {
    try {

        if (response.d == "exitosa") {
            GuardarAntecedentesProyecto();
        }

        else {
            sweetAlert("Intente Nuevamente", "Ha ocurrido un error al guardar los datos", "info");
        }
    }
    catch (err) {
        alert(err);
    }
}

function GuardarAntecedentesProyecto() {
    try {
        var obj = {

            numerodocumento: document.getElementById('Label2').innerText,
            idproyecto: $("#txtCodigo_1").val(),
            porcentajeproy: "100",
        }
        $.ajax({
            type: "POST",
            url: "/ComisionServicio.aspx/AntecentesProyecto",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: SucessAntecedentes,
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

function SucessAntecedentes(response) {
    try {

        if (response.d == "exitosa") {
            GuardarAdjunto();
        }

        else {
            sweetAlert("Intente Nuevamente", "Ha ocurrido un error al guardar los datos", "info");
        }
    }
    catch (err) {
        alert(err);
    }
}

function GuardarAdjunto() {
    try {
        var obj = {
            usuario: $("#txt_usuario").val(),
            numerodocumento: document.getElementById('Label2').innerText,
        }
        $.ajax({
            type: "POST",
            url: "/ComisionServicio.aspx/GuardarAjdunto2",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: SucessAdjunto,
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

function SucessAdjunto(response) {
    try {
        if (response.d == "exitosa") {
            FlujoAprobacion();
        }

        else {
            sweetAlert("Intente Nuevamente", "Ha ocurrido un error al guardar los datos", "info");
        }
    }
    catch (err) {
        alert(err);
    }
}

function validarguardar() {
    try {
        var opcion = $("#txt_validar").val();

        if (opcion == "0" || opcion == "1") {
            var tx = $("#otros_7").val();
            var solicitado_7 = $("#SOLICITADO_7")[0].value;
        }
        var nombreproy = $('#txtProyecto_1').val();
        var data = $("#summernote").code();
        var fechadoc = document.getElementById('Label1').innerText;
        var rut = $("#txtRut").val();
        var fechasalida = $("#txtDate").val();
        var fechallegada = $("#txtDateSal").val();
        var numerodias = $("#txtdiasaprox").val();
        var destino = $("#listDestino").val();
        var pais = $("#listPais").val();
        var transporte = $("#listTransporte").val();
        var proyecto = $("#txtCodigo_1").val();
        var origen = $("#listOrigen").val();
        var dias_100 = $("#DropDownList1").val();
        var dias_40 = $("#txtal40").val();
        var dias_embarque = $("#DropDownList2").val();
        var tipo_nave = $("#list_nave").val();
        var adjunto = $("#txtadjunto").val();
        if (opcion == "0" || opcion == "2") {
            var anticipo = $("#SOLICITADO_8")[0].value;
        }
        var fundamento = data;
        var respuesta;
        var guardar;


        if (opcion == "1") {
            if (data == "<p><br></p>") {
                var mesaje = "Ingrese Fundamento";
                respuesta = "false";
                guardar = "1";
            }

            if (data != "<p><br></p>") {

                var mesaje = "";
            }

            if (solicitado_7 != '0') {
                if (tx == '') {
                    var mesaje = "Motivo Gasto";
                    document.getElementById('otros_7').style.borderColor = "red"
                    respuesta = "false";
                    guardar = "1";
                }
            }

            if (rut == '') {
                var mesaje = mesaje + " ,Rut";
                document.getElementById('txtRut').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";
            }

            if (destino == "0") {
                var mesaje = mesaje + " ,Destino";
                document.getElementById('listDestino').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";
            }

            if (pais == "0") {
                var mesaje = mesaje + " ,Pais";
                document.getElementById('listPais').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";
            }

            if (fechasalida == '') {
                var mesaje = mesaje + " ,Fecha de Salida";
                document.getElementById('txtDate').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";
            }

            if (fechallegada == '') {
                var mesaje = mesaje + " ,Fecha llegada";
                document.getElementById('txtDateSal').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";
            }


            if (numerodias == '') {
                var mesaje = mesaje + " ,Numero de Dias";
                document.getElementById('txtdiasaprox').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";
            }

            if (proyecto == '') {
                var mesaje = mesaje + " ,Proyecto";
                document.getElementById('txtCodigo_1').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";
            }


            if (nombreproy == '') {
                var mesaje = mesaje + " ,Codigo proyecto invalido";
                document.getElementById('txtProyecto_1').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";

            }


            if (origen == "0") {
                var mesaje = mesaje + " ,Origen";
                document.getElementById('listOrigen').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";
            }

            if (respuesta == "false") {
                sweetAlert("Verifique", "Faltan datos por Completar:" + mesaje, "error");
                guardar = "1";

            }



            if (adjunto == "1" && respuesta != "false") {
                sweetAlert("Obligatorio", "Debe adjuntar Archivo", "warning");
                respuesta = "otra";
                guardar = "1";
            }

        }


        if (opcion == "0") {


        if (data == "<p><br></p>") {
            var mesaje = "Ingrese Fundamento";
            respuesta = "false";
            guardar = "1";
        }

        if (data != "<p><br></p>") {

            var mesaje = "";
        }


        if (solicitado_7 != '0') {
            if (tx == '') {
                var mesaje = "Motivo Gasto";
                document.getElementById('otros_7').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";
            }
        }

        if (rut == '') {
            var mesaje = mesaje + " ,Rut";
            document.getElementById('txtRut').style.borderColor = "red"
            respuesta = "false";
            guardar = "1";
        }




        if (fechadoc == '') {
            var mesaje = mesaje + " ,Fecha de documento";
            document.getElementById('Label1').style.borderColor = "red"
            respuesta = "false";
            guardar = "1";
        }

        if (fechasalida == '') {
            var mesaje = mesaje + " ,Fecha de Salida";
            document.getElementById('txtDate').style.borderColor = "red"
            respuesta = "false";
            guardar = "1";
        }

        if (fechallegada == '') {
            var mesaje = mesaje + " ,Fecha llegada";
            document.getElementById('txtDateSal').style.borderColor = "red"
            respuesta = "false";
            guardar = "1";
        }


        if (numerodias == '') {
            var mesaje = mesaje + " ,Numero de Dias";
            document.getElementById('txtdiasaprox').style.borderColor = "red"
            respuesta = "false";
            guardar = "1";
        }

        if (destino == "0") {
            var mesaje = mesaje + " ,Destino";
            document.getElementById('listDestino').style.borderColor = "red"
            respuesta = "false";
            guardar = "1";
        }

        if (pais == "0") {
            var mesaje = mesaje + " ,Pais";
            document.getElementById('listPais').style.borderColor = "red"
            respuesta = "false";
            guardar = "1";
        }

        if (transporte == "0") {
            var mesaje = mesaje + " ,Transporte";
            document.getElementById('listTransporte').style.borderColor = "red"
            respuesta = "false";
            guardar = "1";
        }

        if (proyecto == '') {
            var mesaje = mesaje + " ,Proyecto";
            document.getElementById('txtCodigo_1').style.borderColor = "red"
            respuesta = "false";
            guardar = "1";
        }


        if (nombreproy == '') {
            var mesaje = mesaje + " ,Codigo proyecto invalido";
            document.getElementById('txtProyecto_1').style.borderColor = "red"
            respuesta = "false";
            guardar = "1";

        }

        if (origen == "0") {
            var mesaje = mesaje + " ,Origen";
            document.getElementById('listOrigen').style.borderColor = "red"
            respuesta = "false";
            guardar = "1";
        }

        if (dias_100 == '') {
            var mesaje = mesaje + " ,Dias al 100";
            document.getElementById('DropDownList1').style.borderColor = "red"
            respuesta = "false";
            guardar = "1";
        }

        if (dias_40 == '') {
            var mesaje = mesaje + " ,Dias al 40";
            document.getElementById('txtal40').style.borderColor = "red"
            respuesta = "false";
            guardar = "1";
        }

        if (dias_embarque == '') {
            var mesaje = mesaje + " ,Dias de embarque";
            document.getElementById('DropDownList2').style.borderColor = "red"
            respuesta = "false";
            guardar = "1";
        }

        if (dias_embarque != "0") {

            if (tipo_nave == "0") {

                var mesaje = mesaje + " ,Tipo de nave";
                document.getElementById('list_nave').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";


            }
        }



        if (anticipo != "0") {
            if (adjunto != "3") {
                var mesaje = mesaje + " ,No olvide adjuntar formulario de anticipo de bono de embarque";
                document.getElementById('SOLICITADO_8').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";
                adjunto = "1";

            }


        }


        if (respuesta == "false") {
            sweetAlert("Verifique", "Faltan datos por Completar:" + mesaje, "error");
            guardar = "1";

        }



        if (origen == destino && respuesta != "false") {
            sweetAlert("Verifique", "El lugar de destino debe ser distinto al lugar de origen", "warning");
            respuesta = "otra";
            guardar = "1";
        }

        if (adjunto == "1" && respuesta != "false") {
            sweetAlert("Obligatorio", "Debe adjuntar Archivo", "warning");
            respuesta = "otra";
            guardar = "1";
        }


        }


        if (opcion == "2") {

            if (data == "<p><br></p>") {
                var mesaje = "Ingrese Fundamento";
                respuesta = "false";
                guardar = "1";
            }

            if (data != "<p><br></p>") {

                var mesaje = "";
            }


            if (rut == '') {
                var mesaje = mesaje + " ,Rut";
                document.getElementById('txtRut').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";
            }




            if (fechadoc == '') {
                var mesaje = mesaje + " ,Fecha de documento";
                document.getElementById('Label1').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";
            }

            if (fechasalida == '') {
                var mesaje = mesaje + " ,Fecha de Salida";
                document.getElementById('txtDate').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";
            }

            if (fechallegada == '') {
                var mesaje = mesaje + " ,Fecha llegada";
                document.getElementById('txtDateSal').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";
            }


            if (numerodias == '') {
                var mesaje = mesaje + " ,Numero de Dias";
                document.getElementById('txtdiasaprox').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";
            }

            if (destino == "0") {
                var mesaje = mesaje + " ,Destino";
                document.getElementById('listDestino').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";
            }

            if (pais == "0") {
                var mesaje = mesaje + " ,Pais";
                document.getElementById('listPais').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";
            }

            if (transporte == "0") {
                var mesaje = mesaje + " ,Transporte";
                document.getElementById('listTransporte').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";
            }

            if (proyecto == '') {
                var mesaje = mesaje + " ,Proyecto";
                document.getElementById('txtCodigo_1').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";
            }


            if (nombreproy == '') {
                var mesaje = mesaje + " ,Codigo proyecto invalido";
                document.getElementById('txtProyecto_1').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";

            }

            if (origen == "0") {
                var mesaje = mesaje + " ,Origen";
                document.getElementById('listOrigen').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";
            }

            if (dias_embarque == '') {
                var mesaje = mesaje + " ,Dias de embarque";
                document.getElementById('DropDownList2').style.borderColor = "red"
                respuesta = "false";
                guardar = "1";
            }

            if (dias_embarque != "0") {

                if (tipo_nave == "0") {

                    var mesaje = mesaje + " ,Tipo de nave";
                    document.getElementById('list_nave').style.borderColor = "red"
                    respuesta = "false";
                    guardar = "1";


                }
            }


            if (anticipo != "0") {
                if (adjunto != "3") {
                    var mesaje = mesaje + " ,No olvide adjuntar formulario de anticipo de bono de embarque";
                    document.getElementById('SOLICITADO_8').style.borderColor = "red"
                    respuesta = "false";
                    guardar = "1";
                    adjunto = "1";

                }

            
            }


            if (respuesta == "false") {
                sweetAlert("Verifique", "Faltan datos por Completar:" + mesaje, "error");
                guardar = "1";

            }


            if (adjunto == "1" && respuesta != "false" && numerodias > "10") {
                sweetAlert("Obligatorio", "Debe adjuntar Archivo", "warning");
                respuesta = "otra";
                guardar = "1";
            }


        }





        if (guardar != "1") {
            GuardarTodoComision();
        }

        else {

        }
    }
    catch (err) {
        alert(err);
    }

}

function GuardarTodoComision() {

    try {

        var opcion = $("#txt_validar").val();
        var nave = $("#list_nave").val();

        var solicitado_1_p = "0";
        var solicitado_2_p = "0";
        var solicitado_3_p = "0";
        var solicitado_4_p = "0";
        var solicitado_5_p = "0";
        var solicitado_6_p = "0";
        var solicitado_7_p = "0";
        var solicitado_8_p = "0";

        if (opcion == "0") {

            var solicitado_1_p = $("#SOLICITADO_1")[0].value;
            var solicitado_2_p = $("#SOLICITADO_2")[0].value;
            var solicitado_3_p = $("#SOLICITADO_3")[0].value;
            var solicitado_4_p = $("#SOLICITADO_4")[0].value;
            var solicitado_5_p = $("#SOLICITADO_5")[0].value;
            var solicitado_6_p = $("#SOLICITADO_6")[0].value;
            var solicitado_7_p = $("#SOLICITADO_7")[0].value;
            var solicitado_8_p = $("#SOLICITADO_8")[0].value;
        }


        if (opcion == "1") {
            var solicitado_2_p = $("#SOLICITADO_2")[0].value;
            var solicitado_3_p = $("#SOLICITADO_3")[0].value;
            var solicitado_4_p = $("#SOLICITADO_4")[0].value;
            var solicitado_5_p = $("#SOLICITADO_5")[0].value;
            var solicitado_6_p = $("#SOLICITADO_6")[0].value;
            var solicitado_7_p = $("#SOLICITADO_7")[0].value;
        }

        if (opcion == "2") {
            var solicitado_8_p = $("#SOLICITADO_8")[0].value;
        }


  




        if (opcion != "2") {
            var tx = $("#otros_7").val();

            if (tx == "") {
                tx = 0
            }

            if (tx != "") {

                tx = $("#otros_7").val();
            }

        }

        if (opcion == "2") {
            var tx = $("#otros_7").val();

                tx = 0
        }




        if (nave == "") {
            nave = 0
        }

        if (nave != "") {

            nave = $("#list_nave").val();
        }

        var obj = {
            numerodocumento: document.getElementById('Label2').innerText,
            fechadoc: document.getElementById('Label1').innerText,
            rut: $("#txtRut").val(),
            fechasalida: $("#txtDate").val(),
            fechallegada: $("#txtDateSal").val(),
            numerodias: $("#txtdiasaprox").val(),
            destino: $("#listDestino").val(),
            pais: $("#listPais").val(),
            transporte: $("#listTransporte").val(),
            proyecto: $("#txtCodigo_1").val(),
            origen: $("#listOrigen").val(),
            dias_100: $("#DropDownList1").val(),
            dias_40: $("#txtal40").val(),
            dias_embarque: $("#DropDownList2").val(),
            fundamento: $("#summernote").code(),
            solicitado_1: solicitado_1_p,
            solicitado_2: solicitado_2_p,
            solicitado_3: solicitado_3_p,
            solicitado_4: solicitado_4_p,
            solicitado_5: solicitado_5_p,
            solicitado_6: solicitado_6_p,
            solicitado_7: solicitado_7_p,
            solicitado_8: solicitado_8_p,
            idproyecto: $("#txtCodigo_1").val(),
            porcentajeproy: "100",
            usuario: $("#txt_usuario").val(),
            tiponave: nave,
            detallegasto: tx,
            opcion : $("#txt_validar").val(),

        }

        $.ajax({
            type: "POST",
            url: "/ComisionServicio.aspx/ComisionInsertaDatos",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: SucessGuardarComision,
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

function SucessGuardarComision(response) {
    try {
        var jsonObj = response.d;
        $(jsonObj).each(function () {
            var row = $(this)[0]; //Extracting out row object one by one.
            if (row["MensajeError"] == "") {
                sweetAlert("Exitosamente", "ha sido guardado", "info");

                document.getElementById("Label2").innerHTML = row["Correlativo"];

            }
            else {

                sweetAlert("Error", row["MensajeError"], "warning");


            }
        });
    }
    catch (err) {
        alert(err);
    }
}




function ValidarTextoCantidad(source, arguments) {
    try {
        var maxlength = 10;
        if (arguments.Value.length == maxlength) {
            arguments.IsValid = true
        } else {
            arguments.IsValid = false
        }
    }
    catch (err) {
        alert(err);
    }
}

function FlujoAprobacion() {
    try {
        var obj = {
            numerodocumento: document.getElementById('Label2').innerText,
            idproyecto: $("#txtCodigo_1").val(),
        }
        $.ajax({
            type: "POST",
            url: "/ComisionServicio.aspx/FlujodeAprobacion",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: SucessFlujo,
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


function SucessFlujo(response) {
    try {
        if (response.d == "exitosa") {
            sweetAlert("Informacion", "Datos Guardados exitosamente", "success");
        }
        else {
            sweetAlert("Intente Nuevamente", "Ha ocurrido un error al guardar los datos", "info");
        }
    }
    catch (err) {
        alert(err);
    }
}


function generafcomi() {
    try {
        $.ajax({
            type: "POST",
            url: "/ComisionServicio.aspx/FlujoAprobacion",
            data: '{docnum: "' + document.getElementById('Label2').innerText + '" }',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: flujoexitosocomi,
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

function flujoexitosocomi(response) {
    try {
        var display_results = $("#tblFlujo");
        display_results.empty();

        var jsonObj = response.d; //For storing the response data in jsonObj variable.
        var strHTML = '';
        $(jsonObj).each(function () {
            var row = $(this)[0]; //Extracting out row object one by one.
            strHTML += '<div class="col-lg-4 col-md-4 col-xs-12">'
                + ' <section class="panel panel-group" >'
                + '    <header class="' + row["CLASEHEADER"] + '">'
                + '      <div class="widget-profile-info">'
                + '           <div class="profile-picture">'
                + '        <img src="assets/images/user.jpg">'
                + '      </div>'
                + '         <div class="profile-picture">'
                + '          <h4 class="name text-semibold">' + row["DESCRIPCION"]
                + '</h4>'
                + '      </div>'
                + '      </div>'
                + '    </header>'
                + '    <div id="accordion">'
                + '      <div class="panel panel-accordion panel-accordion-first">'
                + '        <div class="panel-heading">'
                + '          <h4 class="panel-title">'
                + '            <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse1One">'
                + '               <i class="' + row["CLASEI"] + '"></i>' + row["ESTADO"]
                + '            </a>'
                + '          </h4>'
                + '        </div>'
                + '      </div>'
                + '    </div>'
                + ' </section >'
                + '</div>';
        });
        $('#tblFlujo').append(strHTML);//To append the html part into the table    
    }
    catch (err) {
        alert(err);
    }
}


function nombre() {
    try {
        var sacos = document.getElementById('txtCodigo_1').value;

        var resto = sacos.substr(9);

        document.getElementById('txtProyecto_1').value = resto;
        document.getElementById('txtCodigo_1').value = document.getElementById('txtCodigo_1').value.substr(0, 9);

        document.getElementById("txtProyecto_1").disabled = true;
        document.getElementById('txtProcentaje_1').value = 100;
        topemaximo();
    }
    catch (err) {
        alert(err);
    }
}


function focodias() {
    try {
        document.getElementById('txtdiasaprox').focus();
        topemaximo();
    }
    catch (err) {
        alert(err);
    }
}

function calculodias() {
    try {
        var ndias = document.getElementById('txtdiasaprox').value;
        var diaal100 = document.getElementById('DropDownList1').value;
        var diferencia = ndias - diaal100;
        document.getElementById('txtal40').value = diferencia;
    }
    catch (err) {
        alert(err);
    }
}

function ocultarfundamento(){
    try {
        document.getElementById("summernote").value = "";
    }
          catch (err) {
            alert(err);
        }
}

function solorut(key) {
    if ((key.charCode < 97 || key.charCode > 122)//letras mayusculas
        && (key.charCode < 65 || key.charCode > 90) //letras minusculas
        && (key.charCode != 241) //ñ
        && (key.charCode != 209) //Ñ
        && (key.charCode != 32) //espacio
        && (key.charCode != 225) //á
        && (key.charCode != 233) //é
        && (key.charCode != 237) //í
        && (key.charCode != 243) //ó
        && (key.charCode != 250) //ú
        && (key.charCode != 193) //Á
        && (key.charCode != 201) //É
        && (key.charCode != 205) //Í
        && (key.charCode != 211) //Ó
        && (key.charCode != 218) //Ú
        && (key.charCode < 48 || key.charCode > 57) //  Numeros
        && (key.charCode < 96 || key.charCode > 105) // Numeros
        && (key.charCode != 0)
        && (key.charCode != 45)
    )
        return false;
}

function SaveError(message, url, line) {
    var obj = {
        usuario: $("#txt_usuario").val(),
        mesaje: message,
        url: url,
        linea: line
    }

    $.ajax({
        type: "POST",
        url: "ComisionServicio.aspx/Savejs",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: Sucesserrorjs,
        failure: function (response) {

        },
        error: function (response) {


        }
    });

}

function Sucesserrorjs(response) {
}