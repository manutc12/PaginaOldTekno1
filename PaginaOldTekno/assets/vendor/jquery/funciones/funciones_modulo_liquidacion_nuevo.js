//Funciones Modulo de Pagina Liquidacion 

function AgregarFilaItinerario() {
    try {
        document.getElementById('contadoritinerario').innerText
        var cont = Number(document.getElementById('contadoritinerario').innerText);
        cont = cont + 1;
        document.getElementById('contadoritinerario').innerText = cont;

        $.ajax({
            type: "POST",
            url: "/LiquidacionViatico.aspx/ListaPaises",
            data: '{}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                var jsonObj = data.d;
                var strHTML = '<tr id="fila_' + cont + '">'
                    + '<td><select id="Paise_' + cont + '" class="form-control"  onchange="CambiarPais(this.id,value)">';
                $(jsonObj).each(function () {
                    var row = $(this)[0]; 
                    strHTML += '<option value= "' + row["IDPAIS"] + '" >' + row["PAISDESCRIPCION"] + '</option>';

                });

                strHTML += '</select ></td><td><select id="Lugar_' + cont + '" class="form-control"  onchange="GrabarFilaItinerario(this.id,value)">';

                $.ajax({
                    type: "POST",
                    url: "/LiquidacionViatico.aspx/TransporteCombox",
                    data: '{}',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        var jsonObj = data.d; 
                        strHTML += '</select ></td><td><select id= "Medio_' + cont + '" class="form-control" onchange= "GrabarFilaItinerario(this.id,value)">';
                        $(jsonObj).each(function () {
                            var row = $(this)[0]; 
                            strHTML += '<option value= "' + row["IDTRANSPORTE"] + '" >' + row["DESCRIPCION"] + '</option>';
                        });


                        strHTML += '</select ></td><td><input  id="Fecll_' + cont + '" class="form-control" onchange="GrabarFilaItinerario(this.id,value)" onkeypress="return soloLetras(event)"   type="text"   /> </td>'
                            + '<td><input id="horll_' + cont + '" class="form-control" onchange="GrabarFilaItinerario(this.id,value)"   type="text"  placeholder="00:00" /> </td>'
                            + '<td><input  id="fecsa_' + cont + '" class="form-control"  onchange="GrabarFilaItinerario(this.id,value)" onkeypress="return soloLetras(event)"  type="text"  readonly  /></td>'
                            + '<td><input  id="horsa_' + cont + '" class="form-control"  onchange="GrabarFilaItinerario(this.id,value)"  type="text" placeholder="00:00"   /></td>'
                            + '<td> <button onclick="AgregarFilaItinerario(); return false;"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-primary"><i class="fa fa-plus"></i> Agregar</button></td>'
                            + '<td> <button onclick="EliminarFilaItinerario(' + cont + ')"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-danger"><i class="fa fa-trash-o"></i> Eliminar</button></td>'
                            + '</tr>';



                        $('#tblItinerario').append(strHTML); 
                        calendar(cont);
                        $('#horll_' + cont).bind("cut copy paste", function (e) {
                            e.preventDefault();
                        });
                        $('#horsa_' + cont).bind("cut copy paste", function (e) {
                            e.preventDefault();
                        });

                     

                    },
                    failure: function (response) {
                        alert(response.responseText);

                    },
                    error: function (response) {
                        alert(response.responseText);

                    }


                });

            }

        });
    }
    catch (err) {
        alert(err);
    }
}



function CambiarPais(id, valor) {
    try {
        var cont = Number(document.getElementById('contadoritinerario').innerText);
        cont = cont;
        var str = id;
        var res = str.replace("Paise_", "");
        var obj = {
            numeroid: id,
            valortext: valor

        }

        $.ajax({
            type: "POST",
            url: "/LiquidacionViatico.aspx/CambiarPais",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (r) {
                var ddlCustomers = $("[id*=Lugar_" + res + "]");
                ddlCustomers.empty().append('<option selected="selected" value="0">Seleccion Opcion</option>');
                $.each(r.d, function () {
                    ddlCustomers.append($("<option></option>").val(this['Value']).html(this['Text']));
                });

            }
        });
        GrabarFilaItinerario(id, valor);
    
      }
    catch (err) {
    alert(err);
}

}

function EliminarFilaItinerario(valor) {
    try {
    var obj = {
        valortext: valor,
        numerodocumento: document.getElementById('lblnumresol').innerText,
        idproyecto: $("#txtCodigo_1").val(),
        usuario: $("#txt_usuario").val()
    }
    $.ajax({
        type: "POST",
        url: "/LiquidacionViatico.aspx/EliminarFilaItinerario",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: EliminarFilaItinerariotop(valor),
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

function EliminarFilaItinerariotop(response) {

    eliminarFila(response);


}



function eliminarFila(index) {

    if (index != 1) {
        $("#fila_" + index).remove();

    }
}


function GrabarFilaItinerario(id, valor) {
    try {
    var cod = document.getElementById(id).value;


    var obj = {
        numeroid: id,
        valortext: valor,
        numerodocumento: document.getElementById('lblnumresol').innerText,
        idproyecto: $("#txtCodigo_1").val(),
        usuario: $("#txt_usuario").val(),
        idmedio: cod
    }
    $.ajax({
        type: "POST",
        url: "/LiquidacionViatico.aspx/GrabarFilaItinerario",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function () {
            Guardarfila();
        },
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

function Guardarfila() {
    calculosliquidacion();
    Cambiardias();
}



function AgregarFilaGasto() {
    try {
        console.log("pasa");
    var cont = Number(document.getElementById('contador').innerText);
    cont = cont + 1;
    document.getElementById('contador').innerText = cont;
    var strHTML = '<tr id="filag_' + cont + '">'
        + ' <td><input type="text"  class="form-control" id="fecha_' + cont + '"  onchange="GrabarFilaGasto(this.id,value)" onkeypress="return camposletnum(event)" ReadOnly /></td>'
        + '<td><input id="ndocu_' + cont + '" class="form-control" onchange="GrabarFilaGasto(this.id,value)" type="text" onkeypress="return camposletnum(event)"  /></td>'
        + '<td><input id="conga_' + cont + '" class="form-control" onchange="GrabarFilaGasto(this.id,value)" type="text"  onkeypress="return camposletnum(event)" /></td>'
        + '<td><input  id="valor_' + cont + '" class="form-control"  onchange="GrabarFilaGasto(this.id,value)" type="text"   onKeyPress="return soloNumeros(event)"  /> </td>'
        + '<td> <button onclick="AgregarFilaGasto(); return false;"  onchange="GrabarFilaGasto(this.id,value)"  type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-primary"><i class="fa fa-plus"></i> Agregar</button></td>'
        + '<td> <button onclick="EliminarFilaGasto(' + cont + '); return false;"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-danger"><i class="fa fa-trash-o"></i> Eliminar</button></td>'
        + '</tr>';
    $('#filagasto').append(strHTML);  
    $('#ndocu_' + cont).bind("cut copy paste", function (e) {
    e.preventDefault();
    });
    $('#conga_' + cont).bind("cut copy paste", function (e) {
        e.preventDefault();
    });
    $('#valor_' + cont).bind("cut copy paste", function (e) {
        e.preventDefault();
    });
    calendargasto(cont);
    }
    catch (err) {
        alert(err);
    }

}


function GrabarFilaGasto(id, valor) {
    try {
    var obj = {
        numeroid: id,
        valortext: valor,
        numerodocumento: document.getElementById('lblnumresol').innerText,
        idproyecto: $("#txtCodigo_1").val(),
        usuario: $("#txt_usuario").val(),
    }
    $.ajax({
        type: "POST",
        url: "/LiquidacionViatico.aspx/GrabarFilaGasto",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: SucessGrabarFilaGasto,
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

function SucessGrabarFilaGasto(response) {

    calculosliquidacion();

}

function EliminarFilaGasto(valor) {
    try {
    var obj = {
        valortext: valor,
        numerodocumento: document.getElementById('lblnumresol').innerText,
        idproyecto: $("#txtCodigo_1").val(),
        usuario: $("#txt_usuario").val(),
    }
    $.ajax({
        type: "POST",
        url: "/LiquidacionViatico.aspx/EliminarFilaGasto",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: EliminarFilaGastotop(valor),
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

function EliminarFilaGastotop(response) {

    eliminarFilagastosjs(response);


}

function eliminarFilagastosjs(index) {

    if (index != 1) {
        $("#filag_" + index).remove();
    }

}

function calculosliquidacion() {
    try {
    var obj = {
        numerodocumento: document.getElementById('lblnumresol').innerText,
        fecharesolucion: document.getElementById('lblfecharesol').innerText,
        usuario: $("#txt_usuario").val(),

    }
    $.ajax({
        type: "POST",
        url: "/LiquidacionViatico.aspx/calculosliquidacion",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var display_results = $("#tblcalliqui");
            display_results.empty();

            var jsonObj = data.d; 
            var strHTML = '';
            $(jsonObj).each(function () {
                var row = $(this)[0];                 
                //alert(row["valortotal"] + "--" + row["Gastototal"] + "--" + row["Subtotal"] + "--" + row["Anticipo"] + "--" + row["Saldo"]);
                strHTML += '<div>'
                    + '<div class="form-group"><label class="col-sm-3 control-label">Valor total</label><div class="col-sm-9"><input id="txt_valortotal"  class="form-control" type="text" value="' + row["valortotal"] + '" readonly="readonly" ></input></div></div>'
                    + '<div class="form-group"><label class="col-sm-3 control-label">Gasto total </label><div class="col-sm-9"><input id="txt_gastototal" class="form-control" type="text" value="' + row["Gastototal"] + '" readonly="readonly" ></input></div></div>'
                    + '<div class="form-group"><label class="col-sm-3 control-label">Subtotal </label><div class="col-sm-9"><input id="txt_subtotal" class="form-control" type="text" value="' + row["Subtotal"] + '" readonly="readonly" ></input></div></div>'
                    + '<div class="form-group"><label class="col-sm-3 control-label">Anticipo </label><div class="col-sm-9"><input id="txt_anticipo" class="form-control" type="text" value="' + row["Anticipo"] + '" readonly="readonly" ></input></div></div>'
                    + '<div class="form-group"><label class="col-sm-3 control-label">Saldo </label><div class="col-sm-9"><input id="txt_saldo" class="form-control" type="text" value="' + row["Saldo"] + '" readonly="readonly" ></input></div></div></div>';
                
            });
            $('#tblcalliqui').append(strHTML);              
        },
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

function Cambiardias() {
    try{
    var obj = {
        usuario: $("#txt_usuario").val(),        numerodocumento: document.getElementById('lblnumresol').innerText

    }

    $.ajax({
        type: "POST",
        url: "LiquidacionViatico.aspx/Diascombobox",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: SucessDias,
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

function SucessDias(response) {
    try {
    var mensaje = response.d;

    $('#txttope').val(mensaje);
    alert(mensaje);

    if (mensaje != "") {

        $("#DropDownList1 option").remove();
        $("#DropDownList2 option").remove();
        $("#DropDownList3 option").remove();

        var ddl1 = $('#DropDownList1');
        var ddl2 = $('#DropDownList2');
        var ddl3 = $('#DropDownList3');



        for (var item = 0; item <= mensaje; item++) {
            $(ddl1).append($("<option>" + item + "</option>"))
            $(ddl2).append($("<option>" + item + "</option>"))
            $(ddl3).append($("<option>" + item + "</option>"))
        }

    }
    }
    catch (err) {
        alert(err);
    }
}


function Cambiardias2() {
    try {
        var obj = {
            usuario: $("#txt_usuario").val(),            numerodocumento: document.getElementById('lblnumresol').innerText

        }

        $.ajax({
            type: "POST",
            url: "LiquidacionViatico.aspx/Diascombobox2",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: SucessDias2,
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

function SucessDias2(response) {
    try {
        var mensaje = response.d;

        $('#txttope').val(mensaje);

        if (mensaje != "") {

            var drop1 = $("#DropDownList1").val();
            var drop2 = $("#DropDownList2").val();
            var drop3 = $("#DropDownList3").val();

            var ddl1 = $('#DropDownList1');
            var ddl2 = $('#DropDownList2');
            var ddl3 = $('#DropDownList3');


            if (drop1 == null && drop2 != null && drop3 != null) {

                $("#DropDownList1 option").remove();
                for (var item = 0; item <= mensaje; item++) {
                    $(ddl1).append($("<option>" + item + "</option>"))
                }

            }

            if (drop2 == null && drop1 != null && drop3 != null) {

                $("#DropDownList2 option").remove();
                for (var item = 0; item <= mensaje; item++) {
                    $(ddl2).append($("<option>" + item + "</option>"))
                }

            }

            if (drop3 == null && drop1 != null && drop2 != null) {

                $("#DropDownList3 option").remove();
                for (var item = 0; item <= mensaje; item++) {
                    $(ddl3).append($("<option>" + item + "</option>"))
                }

            }



            if (drop1 != null && drop2 == null && drop3 == null ) {

             $("#DropDownList2 option").remove();
             $("#DropDownList3 option").remove();
              for (var item = 0; item <= mensaje; item++) {
                 $(ddl2).append($("<option>" + item + "</option>"))
                 $(ddl3).append($("<option>" + item + "</option>"))
            }

            }

            if (drop2 != null && drop1 == null && drop2 == null) {
                $("#DropDownList1 option").remove();
                $("#DropDownList3 option").remove();
                for (var item = 0; item <= mensaje; item++) {
                    $(ddl1).append($("<option>" + item + "</option>"))
                    $(ddl3).append($("<option>" + item + "</option>"))
                }

            }

            if (drop3 != null && drop1 == null && drop2 == null) {
                $("#DropDownList1 option").remove();
                $("#DropDownList2 option").remove();
                for (var item = 0; item <= mensaje; item++) {
                    $(ddl1).append($("<option>" + item + "</option>"))
                    $(ddl2).append($("<option>" + item + "</option>"))
                }

            }

            if (drop1 != null && drop2 != null && drop3 != null) {

            }

            if (drop1 == null && drop2 == null && drop3 == null) {
                $("#DropDownList1 option").remove();
                $("#DropDownList2 option").remove();
                $("#DropDownList3 option").remove();
                for (var item = 0; item <= mensaje; item++) {
                    $(ddl1).append($("<option>" + item + "</option>"))
                    $(ddl2).append($("<option>" + item + "</option>"))
                    $(ddl3).append($("<option>" + item + "</option>"))
                }
            }



        }
    }
    catch (err) {
        alert(err);
    }
}






function restodias(id) {
    try {
    var idingreso = id;
    var topem = $("#txttope").val();
    var ddl1 = $('#DropDownList1');
    var ddl2 = $('#DropDownList2');
    var ddl3 = $('#DropDownList3');
    var seleccion1 = $("#DropDownList1 option:selected").text();
    var seleccion2 = $("#DropDownList2 option:selected").text();
    var seleccion3 = $("#DropDownList3 option:selected").text();
    var resto1 = (topem - seleccion1);

    if (id == "DropDownList1") {

       
        var sumatotal = (parseInt(seleccion2) + parseInt(seleccion1) + parseInt(seleccion3));

        MostrarMontos(id, sumatotal, topem);

        if (sumatotal > topem) {
            $("#DropDownList1 option").remove();
            for (var item = 0; item <= topem; item++) {
                $(ddl1).append($("<option>" + item + "</option>"))

            }


        }



    }

    if (id == "DropDownList2") {



        var sumatotal = (parseInt(seleccion2) + parseInt(seleccion1) + parseInt(seleccion3));
        MostrarMontos(id, sumatotal, topem);

        if (sumatotal > topem) {

            $("#DropDownList2 option").remove();
            for (var item = 0; item <= topem; item++) {
                $(ddl2).append($("<option>" + item + "</option>"))
            }


        }



    }

    if (id == "DropDownList3") {


        var sumatotal = (parseInt(seleccion2) + parseInt(seleccion1) + parseInt(seleccion3));
        MostrarMontos(id, sumatotal, topem);

        if (sumatotal > topem) {

            $("#DropDownList3 option").remove();
            for (var item = 0; item <= topem; item++) {
                $(ddl3).append($("<option>" + item + "</option>"))

            }


        }
    }
    }
    catch (err) {
        alert(err);
    }
}

function MostrarMontos(id, suma, tope) {
    try {
    var dias1 = $("#DropDownList1").val();
    var porcentaje1 = $("#Porce_1").val();
    var dias2 = $("#DropDownList2").val();
    var porcentaje2 = $("#Porce_2").val();
    var dias3 = $("#DropDownList3").val();
    var porcentaje3 = $("#Porce_3").val();

    if (suma > tope && id == "DropDownList1") {
        $('#Monto_1').val('');
        $('#Total_1').val('');

    }

    if (suma > tope && id == "DropDownList2") {
        $('#Monto_2').val('');
        $('#Total_2').val('');

    }

    if (suma > tope && id == "DropDownList3") {
        $('#Monto_3').val('');
        $('#Total_3').val('');

    }

    if (suma <= tope) {
        var obj = {
            numero: id,
            usuario: $("#txt_usuario").val(),            numerodocumento: document.getElementById('lblnumresol').innerText,
            porcentaje1: porcentaje1,
            dias1: dias1,
            porcentaje2: porcentaje2,
            dias2: dias2,
            porcentaje3: porcentaje3,
            dias3: dias3,
        }

        $.ajax({
            type: "POST",
            url: "LiquidacionViatico.aspx/Mostrarmontos",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                sucessmontos(response, id);
            },
            failure: function (response) {
                alert(response.responseText);

            },
            error: function (response) {
                alert(response.responseText);

            }
        });
    }
    }
    catch (err) {
        alert(err);
    }
}

function sucessmontos(response, id) {
    try {
    var num = id;
    var xmlDoc = $.parseXML(response.d);
    var xml = $(xmlDoc);
    var customers = xml.find("Customers");


    $(customers).each(function () {
        if (num == "DropDownList1") {
            $('#Monto_1').val($(this).find("MONTO").text());
            $('#Total_1').val($(this).find("TOTAL_LINEA").text());
        }
        if (num == "DropDownList2") {
            $('#Monto_2').val($(this).find("MONTO").text());
            $('#Total_2').val($(this).find("TOTAL_LINEA").text());
        }
        if (num == "DropDownList3") {
            $('#Monto_3').val($(this).find("MONTO").text());
            $('#Total_3').val($(this).find("TOTAL_LINEA").text());
        }

        calculosliquidacion();
    });
    }
    catch (err) {
        alert(err);
    }
}

function generaFlujo() {
    try {
    var obj = {
        nliqui: $("#txtliqui").val()

    }
    $.ajax({
        type: "POST",
        url: "/LiquidacionViatico.aspx/FlujoAprobacion",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var display_results = $("#tblFlujo");
            display_results.empty();

            var jsonObj = data.d; 
            var strHTML = '';
            $(jsonObj).each(function () {
                var row = $(this)[0]; 
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
            $('#tblFlujo').append(strHTML);            
        },
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

function validarguardarliquidacion() {
    try {
    var proyecto = $("#txtCodigo_1").val();
    var fundamento = $("#summernote").val();
    var summer = $("#summernote").code();
    var edicion = $("#txt_edicion").val();
    var guardar;


    if (proyecto == "") {
        swal(
            'Faltan datos por Completar',
            'Ingrese Codigo de Proyecto',
            'error'
        );

        guardar = "1";

    }


    if (summer == "<p><br></p>") {
        swal(
            'Faltan datos por Completar',
            'Ingrese Fundamento',
            'error'
        );

        guardar = "1";

    }


    if (guardar != "1" && edicion != "1") {

        GuardarTodoLiquidacion();
    }

    if (guardar != "1" && edicion == "1") {


        GuardarPersonaEdicion();
    }



    }
    catch (err) {
        alert(err);
    }
}

function GuardarPersonaEdicion() {
    try {
        var obj = {
            numeroliquidacion: document.getElementById('lblnumliqui').innerText,
            numeroresolucion: document.getElementById('lblnumresol').innerText,
            usuario: $("#txt_usuario").val()
        }
        $.ajax({
            type: "POST",
            url: "/LiquidacionViatico.aspx/PersonaEdicion",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: SucessPersonaEdicionv1,
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


function SucessPersonaEdicionv1(response) {
    GuardarTodoLiquidacion();
}





function GuardarTodoLiquidacion() {
    try {
    var obj = {
        numeroliquidacion: document.getElementById('lblnumliqui').innerText,
        fechaliquidacion: document.getElementById('lblfechaliqui').innerText,
        numerodocumento: document.getElementById('lblnumresol').innerText,
        estado: "I",
        usuario: $("#txt_usuario").val(),
        idproyecto: $("#txtCodigo_1").val(),
        observacion: $("#summernote").code(),

    }

    $.ajax({
        type: "POST",
        url: "/LiquidacionViatico.aspx/LiquidacionInsertaDatos",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: SucessGuardarLiquidacion,
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

function SucessGuardarLiquidacion(response) {
    try {
    var jsonObj = response.d;
    $(jsonObj).each(function () {
        var row = $(this)[0]; 
        if (row["MensajeError"] == "") {
            sweetAlert("Exitosamente", "ha sido guardado", "info");
            document.getElementById('lblnumliqui').innerText = row["Correlativo"];
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

function Mostrardatosliquidacion() {
    try {
        var obj = {
        numeroliquidacion: document.getElementById('lblnumliqui').innerText

    }

    $.ajax({
        type: "POST",
        url: "LiquidacionViatico.aspx/Showdatosliquidacion",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: Mostrardatosliquidacion1,
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

function Mostrardatosliquidacion1(response) {
    try {
    var xmlDoc = $.parseXML(response.d);
    var xml = $(xmlDoc);
    var customers = xml.find("Customers");



    $(customers).each(function () {




        if ($(this).find("IDCALCULO").text() == "1") {
            var ddl1 = $('#DropDownList1');
            var tope = $(this).find("TOTAL_DIAS").text();
            $('#Monto_1').val($(this).find("MONTO").text());
            $('#Total_1').val($(this).find("TOTAL_LINEA").text());
            for (var item = 0; item <= tope; item++) {
                $(ddl1).append($("<option>" + item + "</option>"))
            }

            $('#DropDownList1').val(tope);

        }


        if ($(this).find("IDCALCULO").text() == "2") {
            var ddl2 = $('#DropDownList3');
            var tope2 = $(this).find("TOTAL_DIAS").text();
            $('#Monto_3').val($(this).find("BONO_EMBARQUE").text());
            $('#Total_3').val($(this).find("TOTAL_LINEA").text());
            for (var item = 0; item <= tope2; item++) {
                $(ddl2).append($("<option>" + item + "</option>"))
            }

            $('#DropDownList3').val(tope2);

        }




        if ($(this).find("IDCALCULO").text() == "3") {
            var ddl3 = $('#DropDownList2');
            var tope3 = $(this).find("TOTAL_DIAS").text();
            $('#Monto_2').val($(this).find("MONTO").text());
            $('#Total_2').val($(this).find("TOTAL_LINEA").text());
            for (var item = 0; item <= tope3; item++) {
                $(ddl3).append($("<option>" + item + "</option>"))
            }

            $('#DropDownList2').val(tope3);

        }


    });
    }
    catch (err) {
        alert(err);
    }
}

function MostrarCalculosLiquidacion() {
    try {
    var obj = {
        numeroliquidacion: document.getElementById('lblnumliqui').innerText
    }
    $.ajax({
        type: "POST",
        url: "/LiquidacionViatico.aspx/MostrarCalculosLiquidacion",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var display_results = $("#tblcalliqui");
            display_results.empty();

            var jsonObj = data.d; 
            var strHTML = '';
            $(jsonObj).each(function () {
                var row = $(this)[0]; 
                strHTML += '<div>'
                    + '<div class="form-group"><label class="col-sm-3 control-label">Valor total</label><div class="col-sm-9"><input id="txt_valortotal"  class="form-control" type="text" value="' + row["valortotal"] + '" readonly="readonly" ></input></div></div>'
                    + '<div class="form-group"><label class="col-sm-3 control-label">Gasto total </label><div class="col-sm-9"><input id="txt_gastototal" class="form-control" type="text" value="' + row["Gastototal"] + '" readonly="readonly" ></input></div></div>'
                    + '<div class="form-group"><label class="col-sm-3 control-label">Subtotal </label><div class="col-sm-9"><input id="txt_subtotal" class="form-control" type="text" value="' + row["Subtotal"] + '" readonly="readonly" ></input></div></div>'
                    + '<div class="form-group"><label class="col-sm-3 control-label">Anticipo </label><div class="col-sm-9"><input id="txt_anticipo" class="form-control" type="text" value="' + row["Anticipo"] + '" readonly="readonly" ></input></div></div>'
                    + '<div class="form-group"><label class="col-sm-3 control-label">Saldo </label><div class="col-sm-9"><input id="txt_saldo" class="form-control" type="text" value="' + row["Saldo"] + '" readonly="readonly" ></input></div></div></div>';
            });
            $('#tblcalliqui').append(strHTML);               
        },
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

function MostrarItinerario() {
    try {
    var obj = {
        numeroliquidacion: document.getElementById('lblnumliqui').innerText,
        usuario: $("#txt_usuario").val()
    }

    $.ajax({
        type: "POST",
        url: "/LiquidacionViatico.aspx/MostrarItinerario",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var display_results = $("#tblItinerario");
            display_results.empty();
            var jsonObj = data.d;                                
            $(jsonObj).each(function () {
                var row = $(this)[0]; 

                $.ajax({
                    type: "POST",
                    url: "/LiquidacionViatico.aspx/ListaPaises",
                    data: '{}',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        var jsonObj = response.d;
                        var strHTML = '<tr id="fila_' + row["IdViaje"] + '">'
                            + '<td><select id="Paise_' + row["IdViaje"] + '"  class="form-control"  onchange="CambiarPais(this.id,value)" >';

                        $(jsonObj).each(function () {
                            var roww = $(this)[0];

                            if (row["Pais"] == roww["IDPAIS"]) {
                                strHTML += '<option value= "' + roww["IDPAIS"] + '" selected>' + roww["PAISDESCRIPCION"] + '</option>';
                            }
                            else {
                                strHTML += '<option value= "' + roww["IDPAIS"] + '" >' + roww["PAISDESCRIPCION"] + '</option>';
                            }

                        });




                        $.ajax({
                            type: "POST",
                            url: "/LiquidacionViatico.aspx/CiudadesCombox",
                            data: '{}',
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (response) {
                                var jsonObj = response.d;
                                strHTML += '</select></td></select></td><td><select id="Lugar_' + row["IdViaje"] + '"  class="form-control"  onchange="GrabarFilaItinerario(this.id,value)" >';

                                $(jsonObj).each(function () {
                                    var roww = $(this)[0]; 

                                    if (row["Lugar"] == roww["IDCIUDAD"]) {
                                        strHTML += '<option value= "' + roww["IDCIUDAD"] + '" selected>' + roww["DESCRIPCION"] + '</option>';
                                    }
                                    else {
                                        strHTML += '<option value= "' + roww["IDCIUDAD"] + '" >' + roww["DESCRIPCION"] + '</option>';
                                    }

                                });



                                $.ajax({
                                    type: "POST",
                                    url: "/LiquidacionViatico.aspx/TransporteCombox",
                                    data: '{}',
                                    contentType: "application/json; charset=utf-8",
                                    dataType: "json",
                                    success: function (response) {
                                        var jsonObj = response.d;
                                        strHTML += '</select></td><td><select id="Medio_' + row["IdViaje"] + '" class="form-control"  onchange="GrabarFilaItinerario(this.id,value)" >';
                                        $(jsonObj).each(function () {
                                            var roww = $(this)[0]; 

                                            if (row["Medio"] == roww["IDTRANSPORTE"]) {
                                                strHTML += '<option value= "' + roww["IDTRANSPORTE"] + '" selected>' + roww["DESCRIPCION"] + '</option>';
                                            }
                                            else {
                                                strHTML += '<option value= "' + roww["IDTRANSPORTE"] + '" >' + roww["DESCRIPCION"] + '</option>';
                                            }

                                        });
                                        strHTML += '</select></td><td><input  id="Fecll_' + row["IdViaje"] + '"  value="' + row["Fecha_Llegada"] + '"  class="form-control" onchange="GrabarFilaItinerario(this.id,value)" maxlength="10" onkeypress="return camposletnum(event)"  type="text" readonly   /> </td>'
                                            + '<td><input id="horll_' + row["IdViaje"] + '"  value= "' + row["Hora_Llegada"] + '"  class="form-control" maxlength="5" onchange= "GrabarFilaItinerario(this.id,value)"   type= "text"  /> </td > '
                                            + '<td><input  id="fecsa_' + row["IdViaje"] + '"  value="' + row["Fecha_Salida"] + '"  class="form-control"  onchange="GrabarFilaItinerario(this.id,value)" maxlength="11" onkeypress="return camposletnum(event)" type="text" readonly  /> </td>'
                                            + '<td><input id="horsa_' + row["IdViaje"] + '"   value= "' + row["Hora_Salida"] + '"  class="form-control" maxlength="5" onchange= "GrabarFilaItinerario(this.id,value)"  type= "text"  /> </td > '
                                            + '<td> <button id="btn_mostrar" onclick="AgregarFilaItinerario(); return false;"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-primary"><i class="fa fa-plus"></i> Agregar</button></td>'
                                            + '<td> <button onclick="EliminarFilaItinerario(' + row["IdViaje"] + '); return false;"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-danger"><i class="fa fa-trash-o"></i> Eliminar</button></td>'
                                            + '</tr>';

                                        var h = row["IdViaje"];
                                        $('#tblItinerario').append(strHTML); 
                                        calendar(h);
                                        $('#horll_' + h).bind("cut copy paste", function (e) {
                                            e.preventDefault();
                                        });
                                        $('#horsa_' + h).bind("cut copy paste", function (e) {
                                            e.preventDefault();
                                        });


                                    }
                                });

                            }
                        });
                    }
                });


            });

        },
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


function MostrarFilaGasto() {
    try {
    var obj = {
        numeroliquidacion: document.getElementById('lblnumliqui').innerText,
        usuario: $("#txt_usuario").val(),
    }
    $.ajax({
        type: "POST",
        url: "/LiquidacionViatico.aspx/MostrarFilaGasto",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var jsonObj = data.d; 
            var strHTML = '';
            $(jsonObj).each(function () {
                var row = $(this)[0]; 
                strHTML +=
                    '<tr>'
                + '<td><input id="fecha_' + row["IdGasto"] + '" value="' + row["Fecha"] + '" class="form-control"  onfocusout="GrabarFilaGasto(this.id,value)" type="text" Readonly /></td>'
                + '<td><input id="ndocu_' + row["IdGasto"] + '"    value="' + row["ndoc"] + '"       class="form-control" onchange="GrabarFilaGasto(this.id,value)" type="text"  /></td>'
                + '<td><input  id="conga_' + row["IdGasto"] + '"  value="' + row["concepto"] + '"  class="form-control" onchange="GrabarFilaGasto(this.id,value)"  type="text"  /> </td>' 
                + '<td><input  id="valor_' + row["IdGasto"] + '"  value="' + row["valor"] + '"  class="form-control"  onchange="GrabarFilaGasto(this.id,value)"  onKeyPress="return soloNumeros(event)"  type="text"  /> </td>'
                    + '<td> <button onclick="AgregarFilaGasto(); return false;"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-primary"><i class="fa fa-plus"></i> Agregar</button></td>'
                    + '<td> <button onclick="EliminarFilaGasto(' + row["IdViaje"] + '); return false;"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-danger"><i class="fa fa-trash-o"></i> Eliminar</button></td>'
                    + '</tr>';
            });
            $('#filagasto').append(strHTML);
        },
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


function AnularLiquidacion() {
    try {

    var obj = {

        numeroliquidacion: document.getElementById('lblnumliqui').innerText,
        usuario: $("#txt_usuario").val()
    }
    $.ajax({
        type: "POST",
        url: "/LiquidacionViatico.aspx/AnularLiquidacion",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: SucessAnularv3,
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

function SucessAnularv3(response) {
    var mensaje = response.d;
    sweetAlert("Anulada", mensaje, "success");
    document.getElementById('lblnumliqui').innerText = document.getElementById('Label4').innerText;

}

function soloNumeros(e) {
    var key = window.Event ? e.which : e.keyCode
    return ((key >= 48 && key <= 57) || (key == 8))
}

function ocultarfundamento() {
    try {
        document.getElementById("summernote").value = "";
    }
    catch (err) {
        alert(err);
    }
}

function camposletnum(key) {
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

function prueba() {

    document.getElementById("txtCodigo_1").disabled = true;

}


function cambiarcolor() {
    var element1 = document.getElementById("ver_1");
    element1.classList.remove("panel-success");
    element1.classList.add("panel-quartenary");
    var element2 = document.getElementById("ver_2");
    element2.classList.remove("panel-success");
    element2.classList.add("panel-quartenary");
    var element3 = document.getElementById("ver_3");
    element3.classList.remove("panel-success");
    element3.classList.add("panel-quartenary");
    var element4 = document.getElementById("ver_4");
    element4.classList.remove("panel-success");
    element4.classList.add("panel-quartenary");
    var element5 = document.getElementById("ver_5");
    element5.classList.remove("panel-success");
    element5.classList.add("panel-quartenary");
    var element6 = document.getElementById("liqn");
    element6.classList.add("bg-primary");
    var element7 = document.getElementById("liqn");
    element7.classList.add("bg-primary");
    document.getElementById("txt_edicion").value = "1";
    $("#ContentPlaceHolder1_guardardiv").show();
    $("#ContentPlaceHolder1_h").show();
    edicionliquidacion();
}


function edicionliquidacion() {
    try {
        var obj = {
            numeroliquidacion: document.getElementById('lblnumliqui').innerText,
            numeroresolucion: document.getElementById('lblnumresol').innerText,
            usuario: $("#txt_usuario").val()          
        }
        $.ajax({
            type: "POST",
            url: "/LiquidacionViatico.aspx/EditarLiquidacion",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: SucessEdicionv1,
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


function SucessEdicionv1(response) {
    var respuesta = response.d;

    var idviaje = respuesta[0];
    var idgasto = respuesta[1];
    var usuario = respuesta[2];
    

    if (idviaje == 0) {
        AgregarFilaItinerario();
    }

    if (idgasto == 0) {
        AgregarFilaGasto();
    }

    //console.log(respuesta[0]);
    document.getElementById('contadoritinerario').innerText = idviaje;
    document.getElementById('contador').innerText = idgasto;
    document.getElementById('lblusereditar').innerText = usuario;
    Cambiardias2();
}



