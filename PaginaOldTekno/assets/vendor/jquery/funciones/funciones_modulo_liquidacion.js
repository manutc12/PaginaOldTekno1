//Funciones Modulo de Pagina Liquidacion 


var cuenta = 0;
var cont = parseInt($("#contador_itinerario").val() ? $("#contador_itinerario").val() : 0);
var contadortablas = 0;
var contadoredicion = 0;
function AgregarFilaItinerario2() {
    try {


      

     

        var guardar = 0;
        var respuesta = "";
        var pais = $("#Paise_0").val();
        var lugar = $("#Lugar_0").val();
        var transporte = $("#Medio_0").val();
        var txtfechallegada = $("#Fecll_0").val();
        var txthorallegada = $("#horll_0").val();
        var txtfechasalida = $("#fecsa_0").val();
        var horasalida = $("#horsa_0").val();




        document.getElementById('Paise_0').style.borderColor = "";
        document.getElementById('Lugar_0').style.borderColor = "";
        document.getElementById('Medio_0').style.borderColor = "";
        document.getElementById('Fecll_0').style.borderColor = "";
        document.getElementById('horll_0').style.borderColor = "";
        document.getElementById('fecsa_0').style.borderColor = "";
        document.getElementById('horsa_0').style.borderColor = "";



        mensaje = '<div class="col-md-offset-4""><table style="width:50%;" class="table table-bordered"><tr>';

        img='<fa>............'


        if (!/^([0-9-:])*$/.test(txthorallegada)) {
            mensaje += "<tr><td class='text-left'><i class='fa fa-check-square-o'></i> Revisar valor hora de llegada <b> No debe contener letras</b></td></tr>";
            document.getElementById('horll_0').style.borderColor = "red";
            guardar = "1";
            respuesta = "false";
        }

        if (!/^([0-9-:])*$/.test(horasalida)) {
            mensaje += "<tr><td class='text-left'><i class='fa fa-check-square-o'></i> Revisar valor hora de salida <b> No debe contener letras</b></td></tr>";
            document.getElementById('horsa_0').style.borderColor = "red";
            guardar = "1";
            respuesta = "false";
        }


        if (pais == "0") {
            mensaje += "<td class='text-left'><i class='fa fa-check-square-o'></i>Debe ingresar <b> Pais</b></td></tr>";
            document.getElementById('Paise_0').style.borderColor = "red";
            respuesta = "false";
            guardar = "1";
        }

        if (lugar == "0") {
            mensaje += "<tr><td class='text-left'><i class='fa fa-check-square-o'></i>Debe ingresar  <b> Lugar</b></td></tr>";
            document.getElementById('Lugar_0').style.borderColor = "red";
            respuesta = "false";
            guardar = "1";
        }

        if (transporte == "0") {
            mensaje += "<tr><td class='text-left'><i class='fa fa-check-square-o'></i> Debe ingresar<b> Trasnporte</b></td></tr>";
            document.getElementById('Medio_0').style.borderColor = "red";
            guardar = "1";
            respuesta = "false";
        }


        if (txtfechallegada == "" && txtfechasalida == "" && horasalida == "" && txthorallegada == "") {
            mensaje += "<tr><td class='text-left'><i class='fa fa-check-square-o'></i> Debe ingresar <b> Fecha y hora de salida o llegada</b></td></tr>";
            document.getElementById('Fecll_0').style.borderColor = "red";
            document.getElementById('horll_0').style.borderColor = "red";
            document.getElementById('fecsa_0').style.borderColor = "red";
            document.getElementById('horsa_0').style.borderColor = "red";
            guardar = "1";
            respuesta = "false";
        }
        else {

            if (horasalida == "" && txthorallegada == "") {
                mensaje += "<tr><td class='text-left'><i class='fa fa-check-square-o'></i> Debe ingresar <b> Hora de salida o llegada</b></td></tr>";
                guardar = "1";
                respuesta = "false";
            }

            if (txtfechallegada == "" && txtfechasalida == "") {
                mensaje += "<tr><td class='text-left'><i class='fa fa-check-square-o'></i> Debe ingresar <b> Fecha de salida o llegada</b></td></tr>";
                guardar = "1";
                respuesta = "false";
            }

        }

 

        mensaje += '</table></div>';

        if (respuesta == "false") {
            sweetAlert("Verifique", "<b>Faltan datos por Completar:</b><br><br>" + mensaje, "info");

            guardar = "1";
            respuesta = "false";
        }




     


        if (guardar != 1) {

            cuenta++;
            cont = cont + 1;

            var comprobar = $("#txt_edicion").val();



            if (comprobar != 1) {

                var strHTML = '<tr class="eliminarfilas" id="fila_' + cont + '">'
                    + '<td style="width:20%;" ><center><select id="Paise_' + cont + '" class="form-control    combobox"   onchange="CambiarPais(this.id,value)">'
                    + '<option value= "' + pais + '" >' + pais + '</option>'
                    + '</select ></td></center>'
                    + '<td style="width:15%;"><center><select id="Lugar_' + cont + '" class="form-control   combobox"    onchange="CambiarPais(this.id,value)">'
                    + '<option value= "' + lugar + '" >' + lugar + '</option>'
                    + '</select ></td></center>'
                    + '<td style="width:15%;"> <center><select id="Medio_' + cont + '" class="form-control  combobox input-large"   style="margin-lef:50px" onchange="GrabarFilaItinerario(this.id,value)">'
                    + '<option value= "' + transporte + '" >' + transporte + '</option>'
                    + '</select ></td></center><td style="width: 10%;"><input   value="' + txtfechallegada + '"  id="Fecll_' + cont + '" class="form-control" onchange="GrabarFilaItinerario(this.id,value)" onfocusout="Cambiardias()" onkeypress="return soloLetras(event)"   type="text" ReadOnly /> </td>'
                    + '<td style="width: 10%;"><input   value="' + txthorallegada + '"  id="horll_' + cont + '" class="form-control " onchange="GrabarFilaItinerario(this.id,value)"  onfocusout="Cambiardias()"  type="text"  placeholder="00:00"  /> </td>'
                    + '<td style="width: 10%;"><input   value="' + txtfechasalida + '"  id="fecsa_' + cont + '" class="form-control " onchange="GrabarFilaItinerario(this.id,value)" onfocusout="Cambiardias()" onkeypress="return soloLetras(event)"  type="text" ReadOnly  /></td>'
                    + '<td style="width: 10%;"><input   value="' + horasalida + '"  id="horsa_' + cont + '" class="form-control " onchange="GrabarFilaItinerario(this.id,value)" onfocusout="Cambiardias()"  type="text" placeholder="00:00"   /></td>'
                    + '<td style="width: 10%;"> <button onclick="LimpiarItinerario(' + cont + '); return false;"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-warning" ><i class="fa fa-eraser"></i> Limpiar Todo</button>'
                    + ' <button onclick="EliminarFilaItinerario(' + cont + ')"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-danger" ><i class="fa fa-trash-o"></i> Eliminar</button></td>'
                    + '</tr>';


                $('#tblItinerario').append(strHTML);
                var count = $('#tblItinerario').children('tr').length;
                contadortablas = count;
                ListaPaises(cont);
                CiudadesCombox(cont);
                TransporteCombox(cont);
                $("#Fecll_0").val("");
                $("#horll_0").val("");
                $("#fecsa_0").val("");
                $("#horsa_0").val("");
                $("#Medio_0").val("0");
                $("#Lugar_0").val("0");
                $("#Paise_0").val("0");

                if (count >= 5) {

                    $("#scroll_itinerario").addClass("scroll-fix ");

                    $("#scroll_itinerario").animate({ scrollTop: $('#scroll_itinerario').prop("scrollHeight") }, 1);
                }



                $("#contador_itinerario").val(cont);
                $(".combobox").select2({
                    theme: "classic"
                });

                calendar(cont);

                $('#horll_' + cont).bind("cut copy paste", function (e) {
                    e.preventDefault();
                });
                $('#horsa_' + cont).bind("cut copy paste", function (e) {
                    e.preventDefault();
                });


            }

            else {

                contadoredicion = contadoredicion + 1;

                var strHTML = '<tr class="eliminarfilas" id="fila_' + contadoredicion + '">'
                    + '<td style="width:20%;" ><center><select id="Paise_' + contadoredicion + '" class="form-control    combobox"   onchange="CambiarPais(this.id,value)">'
                    + '<option value= "' + pais + '" >' + pais + '</option>'
                    + '</select ></td></center>'
                    + '<td style="width:15%;"><center><select id="Lugar_' + contadoredicion + '" class="form-control   combobox"    onchange="CambiarPais(this.id,value)">'
                    + '<option value= "' + lugar + '" >' + lugar + '</option>'
                    + '</select ></td></center>'
                    + '<td style="width:15%;"> <center><select id="Medio_' + contadoredicion + '" class="form-control  combobox input-large"   style="margin-lef:50px" onchange="GrabarFilaItinerario(this.id,value)">'
                    + '<option value= "' + transporte + '" >' + transporte + '</option>'
                    + '</select ></td></center><td style="width: 10%;"><input   value="' + txtfechallegada + '"  id="Fecll_' + contadoredicion + '" class="form-control" onchange="GrabarFilaItinerario(this.id,value)" onfocusout="Cambiardias()" onkeypress="return soloLetras(event)"   type="text" ReadOnly /> </td>'
                    + '<td style="width: 10%;"><input   value="' + txthorallegada + '"  id="horll_' + contadoredicion + '" class="form-control " onchange="GrabarFilaItinerario(this.id,value)"  onfocusout="Cambiardias()"  type="text"  placeholder="00:00"  /> </td>'
                    + '<td style="width: 10%;"><input   value="' + txtfechasalida + '"  id="fecsa_' + contadoredicion + '" class="form-control " onchange="GrabarFilaItinerario(this.id,value)" onfocusout="Cambiardias()" onkeypress="return soloLetras(event)"  type="text" ReadOnly  /></td>'
                    + '<td style="width: 10%;"><input   value="' + horasalida + '"  id="horsa_' + contadoredicion + '" class="form-control " onchange="GrabarFilaItinerario(this.id,value)" onfocusout="Cambiardias()"  type="text" placeholder="00:00"   /></td>'
                    + '<td style="width: 10%;"> <button onclick="LimpiarItinerario(' + contadoredicion + '); return false;"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-warning" ><i class="fa fa-eraser"></i> Limpiar Todo</button>'
                    + ' <button onclick="EliminarFilaItinerario(' + contadoredicion + ')"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-danger" ><i class="fa fa-trash-o"></i> Eliminar</button></td>'
                    + '</tr>';


                $('#tblItinerario').append(strHTML);
                var count = $('#tblItinerario').children('tr').length;
                contadortablas = count;
                ListaPaises(contadoredicion);
                CiudadesCombox(contadoredicion);
                TransporteCombox(contadoredicion);
                $("#Fecll_0").val("");
                $("#horll_0").val("");
                $("#fecsa_0").val("");
                $("#horsa_0").val("");
                $("#Medio_0").val("0");
                $("#Lugar_0").val("0");
                $("#Paise_0").val("0");

                if (count >= 5) {

                    $("#scroll_itinerario").addClass("scroll-fix ");

                    $("#scroll_itinerario").animate({ scrollTop: $('#scroll_itinerario').prop("scrollHeight") }, 1);
                }



                //$("#contador_itinerario").val(contadoredicion);
                $(".combobox").select2({
                    theme: "classic"
                });

                calendar(contadoredicion);

                $('#horll_' + contadoredicion).bind("cut copy paste", function (e) {
                    e.preventDefault();
                });
                $('#horsa_' + contadoredicion).bind("cut copy paste", function (e) {
                    e.preventDefault();
                });

            }




        }








        }

    catch (err) {
        alert(err);
    }

    

}



function format(input) {
    var num = input.value.replace(/\./g, '');
    if (!isNaN(num)) {
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        num = num.split('').reverse().join('').replace(/^[\.]/, '');
        input.value = num;
    }

    else {
   
        input.value = input.value.replace(/[^\d\.]*/g, '');
    }
}



function MostrarItinerario() {
    try {

        $("#Fecll_0").attr('disabled', 'disabled');
        $("#horll_0").attr('disabled', 'disabled');
        $("#fecsa_0").attr('disabled', 'disabled');
        $("#horsa_0").attr('disabled', 'disabled');

        $("#Paise_0").attr('disabled', 'disabled');
        $("#Lugar_0").attr('disabled', 'disabled');
        $("#Medio_0").attr('disabled', 'disabled');
        $("#btnAdd").attr('disabled', 'disabled');


        var edicion = $("#txteditar").val();
        var desabibilitar = "";


        if (edicion == 0 || edicion == 2) {
            desabibilitar = "disabled";
        }

        if (edicion == 1) {
            desabibilitar = "";
        }

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
                    var strHTML = '';
                    var h = parseInt(row["IdViaje"]);
                    strHTML += '<tr  id="fila_' + row["IdViaje"] + '">'
                        + '<td style="width:20%;"><center><select id="Paise_' + row["IdViaje"] + '"  class="form-control combobox"  onchange="CambiarPais(this.id,value)" ' + desabibilitar + '>'
                        + '<option value= "' + row["Pais"] + '" >' + row["Pais"] + '</option>'
                        + '</select ></td></center><td style="width:15%;"><center><select id="Lugar_' + row["IdViaje"] + '"  class="form-control combobox"  onchange="GrabarFilaItinerario(this.id,value)" ' + desabibilitar + '>'
                        + '<option value= "' + row["Lugar"] + '" >' + row["Lugar"] + '</option>'
                        + '</select></td></center><td style="width:15%;"><center><select id="Medio_' + row["IdViaje"] + '" class="form-control combobox"  onchange="GrabarFilaItinerario(this.id,value)" ' + desabibilitar + '>'
                        + '<option value= "' + row["Medio"] + '" >' + row["Medio"] + '</option>'
                        + '</select></td></center><td style="width: 10%;"><input  id="Fecll_' + row["IdViaje"] + '"  value="' + row["Fecha_Llegada"] + '"  class="form-control"  onchange="GrabarFilaItinerario(this.id,value)"  type="text" ReadOnly  ' + desabibilitar + ' /> </td>'
                        + '<td style="width: 10%;"><input id="horll_' + row["IdViaje"] + '"  value= "' + row["Hora_Llegada"] + '"  class="form-control"  onfocusout="Cambiardias()" onfocusin="veralerta()" onblur= "GrabarFilaItinerario(this.id,value)"   type= "text" ' + desabibilitar + ' /> </td > '
                        + '<td style="width: 10%;"><input  id="fecsa_' + row["IdViaje"] + '"  value="' + row["Fecha_Salida"] + '"  class="form-control"  onchange="GrabarFilaItinerario(this.id,value)" type="text" ReadOnly ' + desabibilitar + ' /> </td>'
                        + '<td style="width: 10%;"><input id="horsa_' + row["IdViaje"] + '"   value= "' + row["Hora_Salida"] + '"  class="form-control" onfocusout="Cambiardias()" onfocusin="veralerta()" onblur= "GrabarFilaItinerario(this.id,value)"  type= "text" ' + desabibilitar + '  /> </td > '
                        + '<td style="width: 10%;"> <button onclick="LimpiarItinerario('  + row["IdViaje"] + '); return false;"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-warning" ' + desabibilitar + '  ><i class="fa fa-eraser"></i> Limpiar Todo</button>'
                        + ' <button onclick="EliminarFilaItinerario(' + row["IdViaje"] + '); return false;" ' + desabibilitar + '   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-danger" ><i class="fa fa-trash-o" ></i> Eliminar</button></td>'
                        + '</tr>';

             
      
                    $('#tblItinerario').append(strHTML);
                    var count = $('#tblItinerario').children('tr').length;
                    contadortablas = count;
                    contadoredicion = h + 1;


                    $(".combobox").select2({
                        theme: "classic"
                    });

                    ListaPaises(h);
                    CiudadesCombox(h);
                    TransporteCombox(h);

                


                });

                var idviaje = $("#txtviaje").val();

                for (var i = 0; i <= idviaje; i++) {
                    calendar(i);
                    $('#horll_' + i).bind("cut copy paste", function (e) {
                        e.preventDefault();
                    });
                    $('#horsa_' + i).bind("cut copy paste", function (e) {
                        e.preventDefault();
                    });


                }

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


function LimpiarItinerario(valor) {





    $("#Fecll_" + valor).removeAttr('disabled');
    $("#horll_" + valor).removeAttr('disabled');
    $("#fecsa_" + valor).removeAttr('disabled');
    $("#horsa_" + valor).removeAttr('disabled');

    $("#Paise_" + valor).removeAttr('disabled');
    $("#Lugar_" + valor).removeAttr('disabled');
    $("#Medio_" + valor).removeAttr('disabled');


    $("#Fecll_" + valor).val("");
    $("#horll_" + valor).val("");
    $("#fecsa_" + valor).val("");
    $("#horsa_" + valor).val("");


    //$("#Paise_" + valor).select2('data', null);

    //$("#Paise_" + valor).remove();
    //$("#Paise_" + valor).val("0");


    $("#Paise_" + valor).val(null).trigger('change');
    ListaPaises(valor);
    $("#Medio_" + valor).val(null).trigger('change');
    TransporteCombox(valor);


} 



function LimpiarGasto(valor) {


    $("#fecha_" + valor).removeAttr('disabled');
    $("#ndocu_" + valor).removeAttr('disabled');
    $("#conga_" + valor).removeAttr('disabled');
    $("#valor_" + valor).removeAttr('disabled');


    $("#fecha_" + valor).val("");
    $("#ndocu_" + valor).val("");
    $("#conga_" + valor).val("");
    $("#valor_" + valor).val("");

    try {
        var obj = {
            valortext: valor,
            numerodocumento: document.getElementById('lblnumresol').innerText,
            idproyecto: $("#txtCodigo_1").val(),
            usuario: $("#txt_usuario").val()
        }
        $.ajax({
            type: "POST",
            url: "/LiquidacionViatico.aspx/EliminarFilaGasto",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: EliminarFilau,
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




    calculosliquidacion();


} 




function EditarFilaItenirario(valor) {





    $("#Fecll_" + valor).removeAttr('disabled');
    $("#horll_" + valor).removeAttr('disabled');
    $("#fecsa_" + valor).removeAttr('disabled');
    $("#horsa_" + valor).removeAttr('disabled');

    $("#Paise_" + valor).removeAttr('disabled');
    $("#Lugar_" + valor).removeAttr('disabled');
    $("#Medio_" + valor).removeAttr('disabled');




} 


//function AgregarFilaItinerario(u) {

//    try {

//        document.getElementById('contador_itinerario').innerText
//        var cont = Number(document.getElementById('contadoritinerario').innerText);
//        var desabilitar = "";
//        if (u == 0) {
//            $("#ContentPlaceHolder1_alerta_dia").show();
//        }     

//            cont = cont + 1;
//            document.getElementById('contadoritinerario').innerText = cont;


//            if (cont == 1) {
//                desabilitar = "";
//            }

//            if (cont != 1) {
//                desabilitar = "";
//            }


//        $.ajax({
//            type: "POST",
//            url: "/LiquidacionViatico.aspx/ListaPaises",
//            data: '{}',
//            contentType: "application/json; charset=utf-8",
//            dataType: "json",
//            success: function (data) {
//                var jsonObj = data.d;
//                var strHTML = '<tr id="fila_' + cont + '">'
//                    + '<td><select id="Paise_' + cont + '" class="form-control combobox"  onchange="CambiarPais(this.id,value)">';
//                $(jsonObj).each(function () {
//                    var row = $(this)[0]; 
//                    strHTML += '<option value= "' + row["IDPAIS"] + '" >' + row["PAISDESCRIPCION"] + '</option>';

//                });

//                strHTML += '</select ></td><td><select id="Lugar_' + cont + '" class="form-control combobox "  style="width:150px" onchange="GrabarFilaItinerario(this.id,value)">';

//                $.ajax({
//                    type: "POST",
//                    url: "/LiquidacionViatico.aspx/TransporteCombox",
//                    data: '{}',
//                    contentType: "application/json; charset=utf-8",
//                    dataType: "json",
//                    success: function (data) {
//                        var jsonObj = data.d; 
//                        strHTML += '</select ></td><td><select id= "Medio_' + cont + '" class="form-control combobox input-large" style="margin-lef:50px" onchange= "GrabarFilaItinerario(this.id,value)">';
//                        $(jsonObj).each(function () {
//                            var row = $(this)[0]; 
//                            strHTML += '<option value= "' + row["IDTRANSPORTE"] + '" >' + row["DESCRIPCION"] + '</option>';
//                        });


//                        strHTML += '</select ></td><td><input  id="Fecll_' + cont + '" class="form-control" onchange="GrabarFilaItinerario(this.id,value)" onfocusout="Cambiardias()" onkeypress="return soloLetras(event)"   type="text" ReadOnly /> </td>'
//                            + '<td><input id="horll_' + cont + '" class="form-control" onchange="GrabarFilaItinerario(this.id,value)"  onfocusout="Cambiardias()"  type="text"  placeholder="00:00"  /> </td>'
//                            + '<td><input  id="fecsa_' + cont + '" class="form-control" onchange="GrabarFilaItinerario(this.id,value)" onfocusout="Cambiardias()" onkeypress="return soloLetras(event)"  type="text" ReadOnly  /></td>'
//                            + '<td><input  id="horsa_' + cont + '" class="form-control" onchange="GrabarFilaItinerario(this.id,value)" onfocusout="Cambiardias()"  type="text" placeholder="00:00"   /></td>'
//                            + '<td> <button onclick="AgregarFilaItinerario(1); return false;"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-warning" ><i class="fa fa-plus"></i> Editar</button></td>'
//                            + '<td> <button onclick="EliminarFilaItinerario(' + cont + ')"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-danger" ' + desabilitar + '><i class="fa fa-trash-o"></i> Eliminar</button></td>'
//                            + '</tr>';


  
//                        $('#tblItinerario').append(strHTML);    
//                        $(".combobox").select2({
//                            theme: "classic"
//                        });

//                        calendar(cont);
//                        //$(".combobox").select2();
//                        $('#horll_' + cont).bind("cut copy paste", function (e) {
//                            e.preventDefault();
//                        });
//                        $('#horsa_' + cont).bind("cut copy paste", function (e) {
//                            e.preventDefault();
//                        });


//                    },
//                    failure: function (response) {
//                        alert(response.responseText);

//                    },
//                    error: function (response) {
//                        alert(response.responseText);

//                    }


//                });

//            }

//        });
//    }
//    catch (err) {
//        alert(err);
//    }

//    var objDiv = document.getElementById("scroll_itinerario");
//    objDiv.scrollTop = objDiv.scrollHeight;
    
//}

function veralerta() {
    $("#ContentPlaceHolder1_alerta_dia").show();

}

function cambio_pais(id, valor) {

    GrabarFilaItinerarioOne(id, valor);
    CambiarPais(id, valor);
}



function AlertproyCerrado() {
    try {
        swal({
            title: 'El proyecto se encuentra Cerrado',
            text: 'Cambiar por codigo de proyecto de continuidad',
            type: 'error'

        });

        $("#txtCodigo_1").val("");
        $("#txtProyecto_1").val("");
        $("#txtProcentaje_1").val("");
        $("#txtCodigo_1").removeAttr("readonly");
        $("#txtCodigo_1").removeClass("readOnly");
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

//var rowCount = $('#table_itinerario >tbody >tr').length;
var resto=1;
function EliminarFilaItinerario(valor) {

    var pais =  $("#Paise_" + valor +" option:selected").text();
    var Lugar = $("#Lugar_" + valor + " option:selected").text();
    var Medio = $("#Medio_" + valor + " option:selected").text();
    var Fechallegada = $("#Fecll_" + valor).val();
    var horallegada = $("#horll_" + valor).val();
    var fechasalida = $("#fecsa_" + valor).val();
    var horasalida = $("#horsa_" + valor).val();
    var mensaje_eliminado = "</br>";
    mensaje_eliminado += "<tr><th class='text-center'><h5>Pais</h5></th><th class='text-center'><h5>Lugar</h5></th><th class='text-center'><h5>Medio</h5></th><th class='text-center'><h5> Fecha Llegada<h5></th>";
    mensaje_eliminado += "<th class='text-center'><h5>Hora Llegada<h5></th><th class='text-center'><h5> Fecha Salida<h5></th><th class='text-center'><h5> Hora Salida<h5></th></tr><tr>";
    mensaje_eliminado += "<td class='text-center' > " + pais + "</td>";
    mensaje_eliminado += "<td class='text-center' > " + Lugar + "</td>";
    mensaje_eliminado += "<td class='text-center' > " + Medio + "</td>";
    mensaje_eliminado += "<td class='text-center' > " + Fechallegada + "</td>";
    mensaje_eliminado += "<td class='text-center' > " + horallegada + "</td>";
    mensaje_eliminado += "<td class='text-center' > " + fechasalida + "</td>";
    mensaje_eliminado += "<td class='text-center' > " + horasalida + "</td></tr>";


    swal({
        title: 'Esta seguro que desea eliminar la informacion?',
        type: 'info',
        html: '<div class= "col-xs-12"><table class="table table-bordered table-striped mb-none table-hover tablesorter mb-none">' + mensaje_eliminado + ' </table></div></br>',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        allowEscapeKey: false,
        allowOutsideClick: false
    }).then((result) => {
        if (result.value) {

            var cont = parseInt($("#contador_itinerario").val() ? $("#contador_itinerario").val() : 0);

            //if (valor != 1) {
            //    var resto = cont - 1;
            //    alert(resto);
            //    $("#contador_itinerario").val(resto);
            //    $("#fila_" + valor).remove();
            //}




            if (contadortablas > 5) {
                $("#fila_" + valor).remove();
                var count = $('#tblItinerario').children('tr').length;
                contadortablas = count;
                resto = cont - 1;

            }

            if (contadortablas <= 5) {
                $("#fila_" + valor).remove();
                var count = $('#tblItinerario').children('tr').length;
                contadortablas = count;
                resto = cont - 1;
                $("#scroll_itinerario").removeClass("scroll-fix ");
            }




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
                    success: EliminarFilaItinerariotop,
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
    })



}

function EliminarFilaItinerariotop(response) {

    var mensaje = response.d
    calculosliquidacion();
    var cont = parseInt($("#contador_itinerario").val() ? $("#contador_itinerario").val() : 0);
    if (cont != 0) {
        cont = cont - 1;
        //$("#contador_itinerario").val(cont);
        Cambiardias();
        veralerta();
    }

    Cambiardias();


    //if (cont == 0) {
    //    AgregarFilaItinerario(0);
    //}



    //if (mensaje == "") {
    //    AgregarFilaItinerario();
    //    Cambiardias();
    //    veralerta();
    //}
    //if (mensaje != "") {
    //    Cambiardias();
    //    veralerta();
    //}

}





var resultado ;
function GrabarFilaItinerarioOne(id, valor) {
    try {

        var cod = document.getElementById(id).value;
        var nombre = id.substring(0, 6);
        var cont = $("#contador_itinerario").val();



        if (cont == "0") {
            resultado = 1;

        }

        if (cont != "0") {
            resultado = (parseInt(cont) + parseInt(1));


        }
       

        id = nombre + resultado;



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
    //Cambiardias();
    calculosliquidacion();
}



var cuenta_gasto = 0;
var contador_gasto = Number(document.getElementById('contador').innerText);
var contadoredicion_gasto = 0;

function AgregarFilaGasto() {
    try {






        var guardar = 0;
        var respuesta = "";
        var fecha = $("#fecha_0").val();
        var numero_documento = $("#ndocu_0").val();
        var Concepto = $("#conga_0").val();
        var valor = $("#valor_0").val();





        document.getElementById('fecha_0').style.borderColor = "";
        document.getElementById('ndocu_0').style.borderColor = "";
        document.getElementById('conga_0').style.borderColor = "";
        document.getElementById('valor_0').style.borderColor = "";



        mensaje = '<div class="col-md-offset-4""><table style="width:50%;" class="table table-bordered"><tr>';



        if (fecha == "") {
            mensaje += "<td class='text-left'><i class='fa fa-check-square-o'></i>Debe ingresar <b> Fecha</b></td></tr>";
            document.getElementById('fecha_0').style.borderColor = "red";
            respuesta = "false";
            guardar = "1";
        }

        if (numero_documento == "") {
            mensaje += "<tr><td class='text-left'><i class='fa fa-check-square-o'></i>Debe ingresar  <b> Numero de Documento</b></td></tr>";
            document.getElementById('ndocu_0').style.borderColor = "red";
            respuesta = "false";
            guardar = "1";
        }

        if (Concepto == "") {
            mensaje += "<tr><td class='text-left'><i class='fa fa-check-square-o'></i> Debe ingresar<b> Concepto de Gasto</b></td></tr>";
            document.getElementById('conga_0').style.borderColor = "red";
            guardar = "1";
            respuesta = "false";
        }

        if (valor == "") {
            mensaje += "<tr><td class='text-left'><i class='fa fa-check-square-o'></i> Debe ingresar<b> Valor del Gasto</b></td></tr>";
            document.getElementById('valor_0').style.borderColor = "red";
            guardar = "1";
            respuesta = "false";
        }



        mensaje += '</table></div>';

        if (respuesta == "false") {
            sweetAlert("Verifique", "<b>Faltan datos por Completar:</b><br><br>" + mensaje, "info");

            guardar = "1";
            respuesta = "false";
        }




        if (guardar != 1) {

            cuenta_gasto++;
            contador_gasto = contador_gasto + 1;

            var comprobar_gasto = $("#txt_edicion").val();
            
       

            if (comprobar_gasto != 1) {



                var strHTML = '<tr id="filag_' + cuenta_gasto + '">'
                    + ' <td><input type="text"  class="form-control" id="fecha_' + cuenta_gasto + '"  value="' + fecha + '" onchange="GrabarFilaGasto(this.id,value)" onkeypress="return camposletnum(event)" ReadOnly /></td>'
                    + '<td><input id="ndocu_' + cuenta_gasto + '"   value="' + numero_documento + '" class="form-control" onchange="GrabarFilaGasto(this.id,value)" type="text" onkeypress="return soloNumeros(event)"  /></td>'
                    + '<td><input id="conga_' + cuenta_gasto + '"  value="' + Concepto + '" class="form-control"   onchange="GrabarFilaGasto(this.id,value)" type="text"  onkeypress="return camposletnum(event)" /></td>'
                    + '<td><input  id="valor_' + cuenta_gasto + '"  value="' + valor + '" class="form-control" onkeyup="format(this)"  onchange="GrabarFilaGasto(this.id,value)" type="text"  /> </td>'
                    + '<td><button onclick="EliminarFilaGasto(' + cuenta_gasto + '); return false;"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-danger"><i class="fa fa-trash-o"></i> Eliminar</button></td>'
                    + '</tr>';



                $('#filagasto').append(strHTML);

                $("#fecha_0").val("");
                $("#ndocu_0").val("");
                $("#conga_0").val("");
                $("#valor_0").val("");


                $('#ndocu_' + cuenta_gasto).bind("cut copy paste", function (e) {
                    e.preventDefault();
                });
                $('#conga_' + cuenta_gasto).bind("cut copy paste", function (e) {
                    e.preventDefault();
                });
                $('#valor_' + cuenta_gasto).bind("cut copy paste", function (e) {
                    e.preventDefault();
                });
                calendargasto(cuenta_gasto);


                document.getElementById('contador').innerText = cuenta_gasto;


            }

            else {

        

                contadoredicion_gasto = contadoredicion_gasto + 1;

                var strHTML = '<tr id="filag_' + contadoredicion_gasto + '">'
                    + ' <td><input type="text"  class="form-control" id="fecha_' + contadoredicion_gasto + '"  value="' + fecha + '" onchange="GrabarFilaGasto(this.id,value)" onkeypress="return camposletnum(event)" ReadOnly /></td>'
                    + '<td><input id="ndocu_' + contadoredicion_gasto + '"   value="' + numero_documento + '" class="form-control" onchange="GrabarFilaGasto(this.id,value)" type="text" onkeypress="return soloNumeros(event)"  /></td>'
                    + '<td><input id="conga_' + contadoredicion_gasto + '"  value="' + Concepto + '" class="form-control"   onchange="GrabarFilaGasto(this.id,value)" type="text"  onkeypress="return camposletnum(event)" /></td>'
                    + '<td><input  id="valor_' + contadoredicion_gasto + '"  value="' + valor + '" class="form-control" onkeyup="format(this)"  onchange="GrabarFilaGasto(this.id,value)" type="text"  /> </td>'
                    + '<td><button onclick="EliminarFilaGasto(' + contadoredicion_gasto + '); return false;"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-danger"><i class="fa fa-trash-o"></i> Eliminar</button></td>'
                    + '</tr>';



                $('#filagasto').append(strHTML);

                $("#fecha_0").val("");
                $("#ndocu_0").val("");
                $("#conga_0").val("");
                $("#valor_0").val("");


                $('#ndocu_' + contadoredicion_gasto).bind("cut copy paste", function (e) {
                    e.preventDefault();
                });
                $('#conga_' + contadoredicion_gasto).bind("cut copy paste", function (e) {
                    e.preventDefault();
                });
                $('#valor_' + contadoredicion_gasto).bind("cut copy paste", function (e) {
                    e.preventDefault();
                });
                calendargasto(contadoredicion_gasto);


               

            }




        }








    }

    catch (err) {
        alert(err);
    }



}



//function AgregarFilaGasto() {
//    try {
       
//        var cont = Number(document.getElementById('contador').innerText);
//            cont = cont + 1;
//            document.getElementById('contador').innerText = cont;
//            var desabilitar = "";
//            if (cont == 1) {
//                desabilitar = "disabled";
//            }

//            if (cont != 1) {
//                desabilitar = "";
//            }

//    var strHTML = '<tr id="filag_' + cont + '">'
//        + ' <td><input type="text"  class="form-control" id="fecha_' + cont + '"  onchange="GrabarFilaGasto(this.id,value)" onkeypress="return camposletnum(event)" ReadOnly /></td>'
//        + '<td><input id="ndocu_' + cont + '" class="form-control" onchange="GrabarFilaGasto(this.id,value)" type="text" onkeypress="return soloNumeros(event)"  /></td>'
//        + '<td><input id="conga_' + cont + '" class="form-control"   onchange="GrabarFilaGasto(this.id,value)" type="text"  onkeypress="return camposletnum(event)" /></td>'
//        + '<td><input  id="valor_' + cont + '" class="form-control" onkeyup="format(this)"  onchange="GrabarFilaGasto(this.id,value)" type="text"  /> </td>'
//        + '<td> <button onclick="AgregarFilaGasto(); return false;"  onchange="GrabarFilaGasto(this.id,value)"  type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-primary"><i class="fa fa-plus"></i> Agregar</button><button onclick="EliminarFilaGasto(' + cont + '); return false;"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-danger ' + desabilitar + '"><i class="fa fa-trash-o"></i> Eliminar</button></td>'
//        + '</tr>';
//    $('#filagasto').append(strHTML);

 
   
//    $('#ndocu_' + cont).bind("cut copy paste", function (e) {
//    e.preventDefault();
//    });
//    $('#conga_' + cont).bind("cut copy paste", function (e) {
//        e.preventDefault();
//    });
//    $('#valor_' + cont).bind("cut copy paste", function (e) {
//        e.preventDefault();
//    });
//    calendargasto(cont);
//    }
//    catch (err) {
//        alert(err);
//    }

//}


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



var resultado;
function GrabarFilaGastoOne(id, valor) {
    try {
     
        var cod = document.getElementById(id).value;
        var nombre = id.substring(0, 6);
        var cont = Number(document.getElementById('contador').innerText);



        var comprobar_gasto = $("#txt_edicion").val();



        if (comprobar_gasto != 1) {


            if (cont == "0") {
                resultado = 1;
             
            }

            if (cont != "0") {
                resultado = (parseInt(cont) + parseInt(1));
       

            }
        }

        else {

            if (contadoredicion_gasto == undefined) {
                contadoredicion_gasto = 0;
            }

            resultado = contadoredicion_gasto + 1; 

  

        }




        id = nombre + resultado;
        alert(id);



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
            success: SucessGrabarFilaGastoone,
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

function SucessGrabarFilaGastoone(response) {

    calculosliquidacion();

}







var resto_gasto = 1;
function EliminarFilaGasto(valor) {

    var fecha_elimina = $("#fecha_" + valor).val();
    var numerodoc_elimina = $("#ndocu_" + valor).val();
    var concep_elimina = $("#conga_" + valor).val();
    var valor_elimina = $("#valor_" + valor).val();
    var mensaje_eliminado = "</br>";
    mensaje_eliminado += "<tr><th class='text-center'><h5>Fecha</h5></th><th class='text-center'><h5>Numero de Documento</h5></th><th class='text-center'><h5> Concepto de Gasto</h5></th><th class='text-center'><h5> Valor<h5></th></tr><tr>";
    mensaje_eliminado += "<td class='text-center' > " + fecha_elimina + "</td>";
    mensaje_eliminado += "<td class='text-center' > " + numerodoc_elimina + "</td>";
    mensaje_eliminado += "<td class='text-center' > " + concep_elimina + "</td>";
    mensaje_eliminado += "<td class='text-center' > " + valor_elimina + "</td></tr>";


    swal({
        title: 'Esta seguro que desea eliminar la informacion?',
        type: 'info',
        html: '<div class= "col-xs-12"><table class="table table-bordered table-striped mb-none table-hover tablesorter mb-none">' + mensaje_eliminado + ' </table></div></br>',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        allowEscapeKey: false,
        allowOutsideClick: false
    }).then((result) => {
        if (result.value) {

            var cont = Number(document.getElementById('contador').innerText);


            var comprobar_gasto = $("#txt_edicion").val();



            if (comprobar_gasto != 1) {
                $("#filag_" + valor).remove();
                resto_gasto = cont - 1;
             
            }

            else {
                $("#filag_" + valor).remove();
  

            }
            


            try {
                var obj = {
                    valortext: valor,
                    numerodocumento: document.getElementById('lblnumresol').innerText,
                    idproyecto: $("#txtCodigo_1").val(),
                    usuario: $("#txt_usuario").val()
                }
                $.ajax({
                    type: "POST",
                    url: "/LiquidacionViatico.aspx/EliminarFilaGasto",
                    data: JSON.stringify(obj),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: EliminarFilau,
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
    })



}



function EliminarFilau(response) {
    var mensa = response.d;
    calculosliquidacion();
    var cont = Number(document.getElementById('contador').innerText);

    if (cont != 0) {
        cont = cont - 1;

    }


}


function Cambiardias() {
    try {

        var comprobar_gasto = $("#txt_edicion").val();
        var porcentaje1= parseInt($("#Porce_1").val() ? $("#Porce_1").val() : 0);
        var porcenaje2 =  parseInt($("#Porce_2").val() ? $("#Porce_2").val() : 0);
        var porcentaje3 = $("#Porce_3").val();
        var dias100 = parseInt($("#DropDownList1").val() ? $("#DropDownList1").val() : 0);
        var dias40 = parseInt($("#DropDownList2").val() ? $("#DropDownList2").val() : 0);
        var diasembar = parseInt($("#DropDownList3").val() ? $("#DropDownList3").val() : 0);
        var monto100 = parseInt($("#Monto_1").val() ? $("#Monto_1").val() : 0);
        var monto40 = parseInt($("#Monto_2").val() ? $("#Monto_2").val() : 0);
        var montoembar = parseInt($("#Monto_3").val() ? $("#Monto_3").val() : 0);
        var total100 = parseInt($("#Total_1").val() ? $("#Total_1").val() : 0);
        var total40 = parseInt($("#Total_2").val() ? $("#Total_2").val() : 0);
        var totalembar = parseInt($("#Total_3").val() ? $("#Total_3").val() : 0);

      

        var mensaje_eliminado = "</br>";
        mensaje_eliminado += "<tr><th class='text-center'><h5> % </h5></th><th class='text-center'><h5>Dias Liquidacion</h5></th><th class='text-center'><h5> Monto </h5></th><th class='text-center'><h5> Total Linea<h5></th></tr><tr>";
        mensaje_eliminado += "<td class='text-center' > " + porcentaje1 + "</td>";
        mensaje_eliminado += "<td class='text-center' > " + dias100 + "</td>";
        mensaje_eliminado += "<td class='text-center' > " + monto100 + "</td>";
        mensaje_eliminado += "<td class='text-center' > " + total100 + "</td></tr>";
        mensaje_eliminado += "<tr><td class='text-center' > " + porcenaje2 + "</td > ";
        mensaje_eliminado += "<td class='text-center' > " + dias40 + "</td>";
        mensaje_eliminado += "<td class='text-center' > " + monto40 + "</td>";
        mensaje_eliminado += "<td class='text-center' > " + total40 + "</td></tr>";
        mensaje_eliminado += "<tr><td class='text-center' > " + porcentaje3 + "</td > ";
        mensaje_eliminado += "<td class='text-center' > " + diasembar + "</td>";
        mensaje_eliminado += "<td class='text-center' > " + montoembar + "</td>";
        mensaje_eliminado += "<td class='text-center' > " + totalembar + "</td></tr>";


        if (comprobar_gasto == 1) {

            if (dias100 != 0 || dias40 != 0 || diasembar != 0) {
                swal({
                    title: 'Desea mantener los dias de la liquidacion?',
                    type: 'info',
                    html: '<div class= "col-xs-12"><table class="table table-bordered table-striped mb-none table-hover tablesorter mb-none">' + mensaje_eliminado + ' </table></div></br>',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si',
                    cancelButtonText: 'No',
                    allowEscapeKey: false,
                    allowOutsideClick: false
                }).then((result) => {
                    console.log(result);
                    if (result.value) {

                      




                    }
                    else {
                        var obj = {
                            usuario: $("#txt_usuario").val(),                            numerodocumento: document.getElementById('lblnumresol').innerText

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
                })

            }

        }

        else {

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


    }

    catch (err) {
        alert(err);
    }
}

function SucessDias(response) {
    try {
    var mensaje = response.d;


    $('#txttope').val(mensaje);


    if (mensaje == "0") {

        $("#DropDownList1 option").remove();
        $("#DropDownList2 option").remove();
        $("#DropDownList3 option").remove();

        var ddl1 = $('#DropDownList1');
        var ddl2 = $('#DropDownList2');
        var ddl3 = $('#DropDownList3');

        $('#Monto_1').val('0');
        $('#Monto_2').val('0');
        $('#Monto_3').val('0');

        $('#Total_1').val('0');
        $('#Total_2').val('0');
        $('#Total_3').val('0');

        calculosliquidacion();


        for (var item = 0; item <= 0; item++) {
            $(ddl1).append($("<option>" + item + "</option>"))
            $(ddl2).append($("<option>" + item + "</option>"))
            $(ddl3).append($("<option>" + item + "</option>"))

        }
    }

    if (mensaje != "") {

        $("#DropDownList1 option").remove();
        $("#DropDownList2 option").remove();
        $("#DropDownList3 option").remove();

        var ddl1 = $('#DropDownList1');
        var ddl2 = $('#DropDownList2');
        var ddl3 = $('#DropDownList3');

        $('#Monto_1').val('0');
        $('#Monto_2').val('0');
        $('#Monto_3').val('0');

        $('#Total_1').val('0');
        $('#Total_2').val('0');
        $('#Total_3').val('0');

        calculosliquidacion();


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
        nliqui: $("#txtliqui").val(),

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


function nombre() {
    try {
        var sacos = document.getElementById('txtCodigo_1').value;

        var resto = sacos.substr(9);

        document.getElementById('txtProyecto_1').value = resto;
        document.getElementById('txtCodigo_1').value = document.getElementById('txtCodigo_1').value.substr(0, 9);

        document.getElementById('txtProyecto_1').disabled = true;
        document.getElementById('txtProcentaje_1').value = 100;

    }
    catch (err) {
        alert(err);
    }
}

function alerta_adjunto() {

        swal(
            'El nombre del archivo no es valido',
            'No debe contener caracteres especiales, Por favor corrija e intente nuevamente',
            'error'
        );

    }


function validarguardarliquidacion() {
    try {
    var proyecto = $("#txtCodigo_1").val();
    var fundamento = $("#summernote").val();
    var descrip = $("#txtProyecto_1").val(); 
    var summer = $("#summernote").code();
    var edicion = $("#txt_edicion").val();
    var divoclt = $('#ContentPlaceHolder1_alerta_dia');
    var guardar;
    var dias1 = $("#DropDownList1").val(); 
    var dias2 = $("#DropDownList2").val(); 
    var dias3 = $("#DropDownList3").val(); 
    var mensaje = "";
    var respuesta = "";


  


    if (dias1 == 0 && dias2 == 0 && dias3 == 0) {

        swal({
            title: 'Esta seguro que desea guardar la informacion?',
            text: "No esta seleccionado los dias del itinerario",
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, deseo guardar!',
            cancelButtonText: 'Cancelar',
            allowEscapeKey: false,
            allowOutsideClick: false
        }).then((result) => {
            if (result.value) {


    var proyecto = $("#txtCodigo_1").val();
    var fundamento = $("#summernote").val();
    var descrip = $("#txtProyecto_1").val(); 
    var summer = $("#summernote").code();
    var edicion = $("#txt_edicion").val();
    var divoclt = $('#ContentPlaceHolder1_alerta_dia');
    var guardar;
    var dias1 = $("#DropDownList1").val(); 
    var dias2 = $("#DropDownList2").val(); 
    var dias3 = $("#DropDownList3").val(); 
    var mensaje = "";
    var respuesta = "";

mensaje = '<div class="col-md-offset-4""><table style="width:50%;" class="table table-bordered"><tr>';



        if (proyecto == "") {
            mensaje += "<td class='text-center'><i class='fa fa-check-square-o'></i>Debe ingresar <b>Codigo de Proyecto</b></td></tr>";
            respuesta = "false";
            guardar = "1";
        }

        if (descrip == "") {
            mensaje += "<tr><td class='text-center'><i class='fa fa-check-square-o'></i>Debe Corrigir  <b>Codigo de Proyecto</b></td></tr>";
            respuesta = "false";
            guardar = "1";
        }

        if (summer == "<p><br></p>") {
            mensaje += "<tr><td class='text-center'><i class='fa fa-check-square-o'></i> Debe ingresar <b>Fundamento</b></td></tr>";
            guardar = "1";
            respuesta = "false";
        }

        if (divoclt.is(':visible')) {
            mensaje += "<tr><td class='text-center'><i class='fa fa-check-square-o'></i>Tiene que seleccionar nuevamente los dias de liquidacion</td></tr>";
            respuesta = "false";
            guardar = "1";
        }

        mensaje += '</table></div>';

        if (respuesta == "false") {
            sweetAlert("Verifique", "<b>Faltan datos por Completar:</b><br><br>" + mensaje , "error");
            guardar = "1";
            respuesta = "false";
        }


    if (guardar != "1" && edicion != "1") {

            GuardarTodoLiquidacion();
        }

        if (guardar != "1" && edicion == "1") {


            GuardarPersonaEdicion();
        }


            }
        })

    }
    else {


        mensaje = '<div class="col-md-offset-4""><table style="width:50%;" class="table table-bordered"><tr>';



        if (proyecto == "") {
            mensaje += "<td class='text-center'><i class='fa fa-check-square-o'></i>Debe ingresar <b>Codigo de Proyecto</b></td></tr>";
            respuesta = "false";
            guardar = "1";
        }

        if (descrip == "") {
            mensaje += "<tr><td class='text-center'><i class='fa fa-check-square-o'></i>Debe Corrigir  <b>Codigo de Proyecto</b></td></tr>";
            respuesta = "false";
            guardar = "1";
        }

        if (summer == "<p><br></p>") {
            mensaje += "<tr><td class='text-center'><i class='fa fa-check-square-o'></i> Debe ingresar <b>Fundamento</b></td></tr>";
            guardar = "1";
            respuesta = "false";
        }

        if (divoclt.is(':visible')) {
            mensaje += "<tr><td class='text-center'><i class='fa fa-check-square-o'></i>Tiene que seleccionar nuevamente los dias de liquidacion</td></tr>";
            respuesta = "false";
            guardar = "1";
        }

        mensaje += '</table></div>';

        if (respuesta == "false") {
            sweetAlert("Verifique", "<b>Faltan datos por Completar:</b><br><br>" + mensaje , "error");
            guardar = "1";
            respuesta = "false";
        }




        if (guardar != "1" && edicion != "1") {

            GuardarTodoLiquidacion();
        }

        if (guardar != "1" && edicion == "1") {


            GuardarPersonaEdicion();
        }
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
    var edicion = $("#txteditar").val();


    if (edicion == 0 || edicion == 2) {
        document.getElementById('DropDownList1').disabled = true;
        document.getElementById('DropDownList2').disabled = true;
        document.getElementById('DropDownList3').disabled = true;
        document.getElementById('btnAdd').disabled = true;
        document.getElementById('Paise_0').disabled = true;
        document.getElementById('Lugar_0').disabled = true;
        document.getElementById('Medio_0').disabled = true;
        document.getElementById('Fecll_0').disabled = true;
        document.getElementById('horll_0').disabled = true;
        document.getElementById('fecsa_0').disabled = true;
        document.getElementById('horsa_0').disabled = true;
    }

    if (edicion == 1) {
        document.getElementById('DropDownList1').disabled = false;
        document.getElementById('DropDownList2').disabled = false;
        document.getElementById('DropDownList3').disabled = false;
        document.getElementById('btnAdd').disabled = false;
        document.getElementById('Paise_0').disabled = false;
        document.getElementById('Lugar_0').disabled = false;
        document.getElementById('Medio_0').disabled = false;
        document.getElementById('Fecll_0').disabled = false;
        document.getElementById('horll_0').disabled = false;
        document.getElementById('fecsa_0').disabled = false;
        document.getElementById('horsa_0').disabled = false;

    }



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
                    + '<div class="form-group"><label class="col-sm-6 control-label">Valor Viatico</label><div class="col-sm-6"><input id="txt_valortotal"  class="form-control" type="text" value="' + row["valorviatico"] + '" readonly="readonly" ></input></div></div>'
                    + '<div class="form-group"><label class="col-sm-6 control-label">Valor Embarque</label><div class="col-sm-6"><input id="txt_valoremb"  class="form-control" type="text" value="' + row["valoremb"] + '" readonly="readonly" ></input></div></div>'
                    + '<div class="form-group"><label class="col-sm-6 control-label">Gasto total </label><div class="col-sm-6"><input id="txt_gastototal" class="form-control" type="text" value="' + row["Gastototal"] + '" readonly="readonly" ></input></div></div>'
                    + '<div class="form-group"><label class="col-sm-6 control-label">Subtotal </label><div class="col-sm-6"><input id="txt_subtotal" class="form-control" type="text" value="' + row["Subtotal"] + '" readonly="readonly" ></input></div></div>'
                    + '<div class="form-group"><label class="col-sm-6 control-label">Anticipo Viatico </label><div class="col-sm-6"><input id="txt_antviati" class="form-control" type="text" value="' + row["AnticipoViatico"] + '" readonly="readonly" ></input></div></div>'
                    + '<div class="form-group"><label class="col-sm-6 control-label">Anticipo FXR </label><div class="col-sm-6"><input id="txt_antifxr" class="form-control" type="text" value="' + row["AnticipoFxr"] + '" readonly="readonly" ></input></div></div>'
                    + '<div class="form-group"><label class="col-sm-6 control-label">Anticipo Bono Emb </label><div class="col-sm-6"><input id="txt_antibemb" class="form-control" type="text" value="' + row["AnticipoEmb"] + '" readonly="readonly" ></input></div></div>'
                    + '<div class="form-group"><label class="col-sm-6 control-label">Saldo </label><div class="col-sm-6"><input id="txt_saldo" class="form-control" type="text" value="' + row["Saldo"] + '" readonly="readonly" ></input></div></div></div>';
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

//function MostrarItinerario() {
//    try {
//        var edicion = $("#txteditar").val();
//        var desabibilitar = "";


//        if (edicion == 0 || edicion == 2) {
//            desabibilitar = "disabled";
//        }

//        if (edicion == 1) {
//            desabibilitar = "";
//        }

//   var obj = {
//        numeroliquidacion: document.getElementById('lblnumliqui').innerText,
//        usuario: $("#txt_usuario").val()
//    }

//    $.ajax({
//        type: "POST",
//        url: "/LiquidacionViatico.aspx/MostrarItinerario",
//        data: JSON.stringify(obj),
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        success: function (data) {
//            var display_results = $("#tblItinerario");
//            display_results.empty();
//            var jsonObj = data.d;  
//            $(jsonObj).each(function () {
//                var row = $(this)[0]; 
//                var strHTML = '';
//                var h = row["IdViaje"];
//                strHTML += '<tr  id="fila_' + row["IdViaje"] + '">'
//                        + '<td><select id="Paise_' + row["IdViaje"] + '"  class="form-control"  onchange="CambiarPais(this.id,value)" ' + desabibilitar + '>'
//                        + '<option value= "' + row["Pais"] + '" >' + row["Pais"] + '</option>'
//                         + '</td></select ></td></select ></td><td><select id="Lugar_' + row["IdViaje"] + '"  class="form-control"  onchange="GrabarFilaItinerario(this.id,value)" ' + desabibilitar + '>'
//                        + '<option value= "' + row["Lugar"] + '" >' + row["Lugar"] + '</option>'
//                        + '</select></td><td><select id="Medio_' + row["IdViaje"] + '" class="form-control"  onchange="GrabarFilaItinerario(this.id,value)" ' + desabibilitar + '>'
//                        + '<option value= "' + row["Medio"] + '" >' + row["Medio"] + '</option>'
//                    + '</select></td><td><input  id="Fecll_' + row["IdViaje"] + '"  value="' + row["Fecha_Llegada"] + '"  class="form-control" onfocusout="Cambiardias()" onchange="GrabarFilaItinerario(this.id,value)"  type="text" ReadOnly  ' + desabibilitar + ' /> </td>'
//                    + '<td><input id="horll_' + row["IdViaje"] + '"  value= "' + row["Hora_Llegada"] + '"  class="form-control"  onfocusout="Cambiardias()" onfocusin="veralerta()" onblur= "GrabarFilaItinerario(this.id,value)"   type= "text" ' + desabibilitar +' /> </td > '
//                    + '<td><input  id="fecsa_' + row["IdViaje"] + '"  value="' + row["Fecha_Salida"] + '"  class="form-control" onfocusout="Cambiardias()"  onchange="GrabarFilaItinerario(this.id,value)" type="text" ReadOnly ' + desabibilitar +' /> </td>'
//                    + '<td><input id="horsa_' + row["IdViaje"] + '"   value= "' + row["Hora_Salida"] + '"  class="form-control" onfocusout="Cambiardias()" onfocusin="veralerta()" onblur= "GrabarFilaItinerario(this.id,value)"  type= "text" ' + desabibilitar +'  /> </td > '
//                        + '<td> <button onclick="AgregarFilaItinerario(0); return false;"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-primary" ' + desabibilitar +'><i class="fa fa-plus" ></i> Agregar</button></td>'
//                        + '<td> <button onclick="EliminarFilaItinerario(' + row["IdViaje"] + '); return false;"   type="button" class="mb-xs mt-xs mr-xs btn btn-xs btn btn-danger" ' + desabibilitar +'><i class="fa fa-trash-o" ></i> Eliminar</button></td>'
//                        + '</tr>';

//                ListaPaises(h);
//                CiudadesCombox(h);
//                TransporteCombox(h);
                                                            
//                                        $('#tblItinerario').append(strHTML);

//                                });

//            var idviaje = $("#txtviaje").val();

//            for (var i = 0; i <= idviaje; i++) {
//                calendar(i);
//                $('#horll_' + i).bind("cut copy paste", function (e) {
//                    e.preventDefault();
//                });
//                $('#horsa_' + i).bind("cut copy paste", function (e) {
//                    e.preventDefault();
//                });


//            }

//        },
//        failure: function (response) {
//            alert(response.responseText);

//        },
//        error: function (response) {
//            alert(response.responseText);

//        }
//    });
//    }
//    catch (err) {
//        alert(err);
//    }

//}    



function ListaPaises(valor) {
    try {
                $.ajax({
                    type: "POST",
                    url: "/LiquidacionViatico.aspx/ListaPaises",
                    data: '{}',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        var jsonObj = response.d;
                        var pais = $('#Paise_' + valor);
                        var valorpais = $('#Paise_' + valor).val();
                        pais.empty();
                        $(jsonObj).each(function () {
                            var roww = $(this)[0];
                            if (valorpais == roww["IDPAIS"]) {
                                $(pais).append($( '<option value= "' + roww["IDPAIS"] + '" selected>' + roww["PAISDESCRIPCION"] + '</option>'));
                            }
                            else {
                                $(pais).append($( '<option value= "' + roww["IDPAIS"] + '" >' + roww["PAISDESCRIPCION"] + '</option>'));
                            }

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


function CiudadesCombox(valor) {
    try {
        $.ajax({
            type: "POST",
            url: "/LiquidacionViatico.aspx/CiudadesCombox",
            data: '{}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var jsonObj = response.d;
                var lugar = $('#Lugar_' + valor);
                var valorlugar = $('#Lugar_' + valor).val();
                lugar.empty();
                $(jsonObj).each(function () {
                    var roww = $(this)[0];
                    if (valorlugar == roww["IDCIUDAD"]) {
                        $(lugar).append($('<option value= "' + roww["IDCIUDAD"] + '" selected>' + roww["DESCRIPCION"] + '</option>'));
                    }
                    else {
                        $(lugar).append($('<option value= "' + roww["IDCIUDAD"] + '" >' + roww["DESCRIPCION"] + '</option>'));
                    }

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


function TransporteCombox(valor) {
    try {
        $.ajax({
            type: "POST",
            url: "/LiquidacionViatico.aspx/TransporteCombox",
            data: '{}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var jsonObj = response.d;
                var transp = $('#Medio_' + valor);
                var valortransp = $('#Medio_' + valor).val();
                transp.empty();
                $(jsonObj).each(function () {
                    var roww = $(this)[0];
                    if (valortransp == roww["IDTRANSPORTE"]) {
                        $(transp).append($('<option value= "' + roww["IDTRANSPORTE"] + '" selected>' + roww["DESCRIPCION"] + '</option>'));
                    }
                    else {
                        $(transp).append($('<option value= "' + roww["IDTRANSPORTE"] + '" >' + roww["DESCRIPCION"] + '</option>'));
                    }

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
        //$("#table_itinerario").tablesorter({ sortList: [[0, 0]] }); 
        var edicion = $("#txteditar").val();
        var desabibilitar = "";


        if (edicion == 0) {
            desabibilitar = "disabled";

            $("#fecha_0").attr('disabled', 'disabled');
            $("#ndocu_0").attr('disabled', 'disabled');
            $("#conga_0").attr('disabled', 'disabled');
            $("#valor_0").attr('disabled', 'disabled');
            $("#btn_agre_gasto_0").attr('disabled', 'disabled');



        }

        if (edicion == 1) {
            desabibilitar = "";
            $("#fecha_0").removeAttr('disabled');
            $("#ndocu_0").removeAttr('disabled');
            $("#conga_0").removeAttr('disabled');
            $("#valor_0").removeAttr('disabled');
            $("#btn_agre_gasto_0").removeAttr('disabled');
        }

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
            var display_results = $("#filagasto");
            display_results.empty();
            var jsonObj = data.d; 
      
            $(jsonObj).each(function () {
                var row = $(this)[0]; 
                var h = parseInt(row["IdGasto"]);
                strHTML =
                    '<tr id= "filag_' + row["IdGasto"] + '">'
                + '<td><input id="fecha_' + row["IdGasto"] + '" value="' + row["Fecha"] + '" class="form-control" onfocusin="calendargasto(' + row["IdGasto"] + ')"  onfocusout="GrabarFilaGasto(this.id,value)" type="text" ReadOnly ' + desabibilitar +' /></td>'
                + '<td><input id="ndocu_' + row["IdGasto"] + '"    value="' + row["ndoc"] + '"       class="form-control" onchange="GrabarFilaGasto(this.id,value)" type="text" ' + desabibilitar +' /></td>'
                + '<td><input  id="conga_' + row["IdGasto"] + '"  value="' + row["concepto"] + '"  class="form-control" onchange="GrabarFilaGasto(this.id,value)"  type="text" ' + desabibilitar +' /> </td>' 
                + '<td><input  id="valor_' + row["IdGasto"] + '"  value="' + row["valor"] + '"  class="form-control"  onchange="GrabarFilaGasto(this.id,value)"  onkeyup="format(this)"  type="text" ' + desabibilitar +' /> </td>'
                + '<td><button onclick="EliminarFilaGasto(' + row["IdGasto"] + '); return false;"   type="button" ' + desabibilitar +' class="mb-xs mt-xs mr-xs btn btn-xs btn btn-danger"><i class="fa fa-trash-o"></i> Eliminar</button></td>'
                    + '</tr>';

                
                $('#filagasto').append(strHTML);
                contadoredicion_gasto = h ;

            });


            var idgasto = $("#txtgasto").val();
            for (var i = 0; i <= idgasto; i++) {
                calendargasto(i);

            }
  
          

  
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
    $("#btn_editar").hide();
    $("#ContentPlaceHolder1_anular").hide();
    edicionliquidacion();
    var txtpaso = $("#txtpaso").val();
    $("#txteditar").val(txtpaso);

    var gasto = $("#txtgasto").val();

    if (gasto != 0) {
        MostrarFilaGasto();
    }
    if (gasto == 0) {
        $("#fecha_0").removeAttr('disabled');
        $("#ndocu_0").removeAttr('disabled');
        $("#conga_0").removeAttr('disabled');
        $("#valor_0").removeAttr('disabled');
        $("#btn_agre_gasto_0").removeAttr('disabled');
    }


    MostrarItinerario();
    Mostrardatosliquidacion();
    //verfundamento();


}

function verfundamento() {

    var edicion = $("#txteditar").val();

    if (edicion == 0) {
        document.getElementById("summernote").disabled = true;
    }

    if (edicion != 0) {
       
        //document.getElementById('note-editable').disabled = false;
        //$('#note-editable').removeProp('disabled'); document.getElementById("note-editable").contentEditable = false;
        //var x = document.getElementById("note-editable").contentEditable;
        //if (x.contentEditable == "true") {
        //    x.contentEditable = "false";
           
        //} else {
        //    x.contentEditable = "true";
           
        //}
       





      
    }

}

function ocultarmens() {

    $("#ContentPlaceHolder1_alerta_dia").hide();
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
            async: false,
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
    var mensaje = respuesta[3];


    if (mensaje != "") {
        sweetAlert("Error", mensaje, "warning");
    }

    if (idviaje == "0") {
        document.getElementById('contadoritinerario').innerText = idviaje;
        $("#txtviaje").val(idviaje);
        AgregarFilaItinerario(1);
    }

    if (idgasto == "0") {
        document.getElementById('contador').innerText = idgasto;
        $("#txtgasto").val(idgasto);
        //AgregarFilaGasto();

    }


    if (idviaje != "0") {
        document.getElementById('contadoritinerario').innerText = idviaje;
        $("#txtviaje").val(idviaje);

    }

    if (idgasto != "0") {
        document.getElementById('contador').innerText = idgasto;
        $("#txtgasto").val(idgasto);

    }



    Cambiardias2();
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
                $("#DropDownList2 option").remove();
                $("#DropDownList3 option").remove();
                for (var item = 0; item <= mensaje; item++) {
                    $(ddl1).append($("<option>" + item + "</option>"))
                }
                for (var item = 0; item <= mensaje; item++) {
                    $(ddl2).append($("<option>" + item + "</option>"))
                    $("#DropDownList2").val(drop2);
                }
                for (var item = 0; item <= mensaje; item++) {
                    $(ddl3).append($("<option>" + item + "</option>"))
                    $("#DropDownList3").val(drop3);
                }



            }

            if (drop2 == null && drop1 != null && drop3 != null) {

                $("#DropDownList1 option").remove();
                $("#DropDownList2 option").remove();
                $("#DropDownList3 option").remove();
                for (var item = 0; item <= mensaje; item++) {
                    $(ddl2).append($("<option>" + item + "</option>"))
                }
                for (var item = 0; item <= mensaje; item++) {
                    $(ddl1).append($("<option>" + item + "</option>"))
                    $("#DropDownList1").val(drop1);
                }
                for (var item = 0; item <= mensaje; item++) {
                    $(ddl3).append($("<option>" + item + "</option>"))
                    $("#DropDownList3").val(drop3);
                }




            }

            if (drop3 == null && drop1 != null && drop2 != null) {

                $("#DropDownList1 option").remove();
                $("#DropDownList2 option").remove();
                $("#DropDownList3 option").remove();
                for (var item = 0; item <= mensaje; item++) {
                    $(ddl3).append($("<option>" + item + "</option>"))
                }
                for (var item = 0; item <= mensaje; item++) {
                    $(ddl1).append($("<option>" + item + "</option>"))
                    $("#DropDownList1").val(drop1);
                }
                for (var item = 0; item <= mensaje; item++) {
                    $(ddl2).append($("<option>" + item + "</option>"))
                    $("#DropDownList2").val(drop2);
                }

            }



            if (drop1 != null && drop2 == null && drop3 == null) {

                $("#DropDownList1 option").remove();
                $("#DropDownList2 option").remove();
                $("#DropDownList3 option").remove();
                for (var item = 0; item <= mensaje; item++) {
                    $(ddl2).append($("<option>" + item + "</option>"))
                    $(ddl3).append($("<option>" + item + "</option>"))
                }
                for (var item = 0; item <= mensaje; item++) {
                    $(ddl1).append($("<option>" + item + "</option>"))
                    $("#DropDownList1").val(drop1);
                }

            }

            if (drop2 != null && drop1 == null && drop2 == null) {
                $("#DropDownList1 option").remove();
                $("#DropDownList3 option").remove();
                $("#DropDownList2 option").remove();
                for (var item = 0; item <= mensaje; item++) {
                    $(ddl1).append($("<option>" + item + "</option>"))
                    $(ddl3).append($("<option>" + item + "</option>"))
                }

                for (var item = 0; item <= mensaje; item++) {
                    $(ddl2).append($("<option>" + item + "</option>"))
                    $("#DropDownList2").val(drop2);
                }

            }

            if (drop3 != null && drop1 == null && drop2 == null) {
                $("#DropDownList1 option").remove();
                $("#DropDownList2 option").remove();
                $("#DropDownList3 option").remove();
                for (var item = 0; item <= mensaje; item++) {
                    $(ddl1).append($("<option>" + item + "</option>"))
                    $(ddl2).append($("<option>" + item + "</option>"))
                }

                for (var item = 0; item <= mensaje; item++) {
                    $(ddl3).append($("<option>" + item + "</option>"))
                    $("#DropDownList3").val(drop3);
                }

            }

            if (drop1 != null && drop2 != null && drop3 != null) {

                $("#DropDownList1 option").remove();
                $("#DropDownList2 option").remove();
                $("#DropDownList3 option").remove();

                for (var item = 0; item <= mensaje; item++) {
                    $(ddl1).append($("<option>" + item + "</option>"))
                    $("#DropDownList1").val(drop1);
                }

                for (var item = 0; item <= mensaje; item++) {
                    $(ddl2).append($("<option>" + item + "</option>"))
                    $("#DropDownList2").val(drop2);
                }

                for (var item = 0; item <= mensaje; item++) {
                    $(ddl3).append($("<option>" + item + "</option>"))
                    $("#DropDownList3").val(drop3);
                }

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
   

function calculosliquidacion() {
    try {
        var obj = {
            numerodocumento: document.getElementById('lblnumresol').innerText,
            fecharesolucion: document.getElementById('lblfecharesol').innerText,
            usuario: $("#txt_usuario").val()
        }
        $.ajax({
            type: "POST",
            url: "/LiquidacionViatico.aspx/calculosliquidacion",
            data: JSON.stringify(obj),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                var strHTML = '';
                var display_results = $("#tblcalliqui");
                display_results.empty();
                var jsonObj = data.d;
                $(jsonObj).each(function () {
                    var row = $(this)[0];
                    var gasto = row["Gastototal"];
                    strHTML += '<div>'
                        + '<div class="form-group"><label class="col-sm-3 control-label">Valor Viatico</label><div class="col-sm-9"><input id="txt_valortotal"  class="form-control" type="text" value="' + row["valorviatico"] + '" readonly="readonly" ></input></div></div>'
                        + '<div class="form-group"><label class="col-sm-3 control-label">Valor Embarque</label><div class="col-sm-9"><input id="txt_valoremb"  class="form-control" type="text" value="' + row["valoremb"] + '" readonly="readonly" ></input></div></div>'
                        + '<div class="form-group"><label class="col-sm-3 control-label">Gasto total </label><div class="col-sm-9"><input id="txt_gastototal" class="form-control" type="text" value="' + row["Gastototal"] + '" readonly="readonly" ></input></div></div>'
                        + '<div class="form-group"><label class="col-sm-3 control-label">Subtotal </label><div class="col-sm-9"><input id="txt_subtotal" class="form-control" type="text" value="' + row["Subtotal"] + '" readonly="readonly" ></input></div></div>'
                        + '<div class="form-group"><label class="col-sm-3 control-label">Anticipo Viatico </label><div class="col-sm-9"><input id="txt_antviati" class="form-control" type="text" value="' + row["AnticipoViatico"] + '" readonly="readonly" ></input></div></div>'
                        + '<div class="form-group"><label class="col-sm-3 control-label">Anticipo FXR </label><div class="col-sm-9"><input id="txt_antifxr" class="form-control" type="text" value="' + row["AnticipoFxr"] + '" readonly="readonly" ></input></div></div>'
                        + '<div class="form-group"><label class="col-sm-3 control-label">Anticipo Bono Emb </label><div class="col-sm-9"><input id="txt_antibemb" class="form-control" type="text" value="' + row["AnticipoEmb"] + '" readonly="readonly" ></input></div></div>'
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


function successalertliquidadacion(usuario) {
    try {
        swal({
            title: 'No se Encuentra Liquidacion',
            text: 'Reintente nuevamente',
            type: 'error'
        }
        ).then(
            function (isConfirm) {
                if (isConfirm) {
                    location.href = "http://autoservicio.ifop.cl/LiquidacionViatico.aspx?v1.9&IUAC=" + usuario;
                }
            },
            function () {
                location.href = "http://autoservicio.ifop.cl/LiquidacionViatico.aspx?v1.9&IUAC=" + usuario;
            }
            );


    }
    catch (err) {
        alert(err);
    }
}



