<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="PanelControlPrincipal.aspx.cs" Inherits="ManuelTorres_WEBFORMS_ACTIVIDAD1.PanelControlPrincipal" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
      <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Panel De Control: OldTekno</title>
	<!-- BOOTSTRAP STYLES-->
    <link href="assets/bs-binary-admin/assets/css/bootstrap.css" rel="stylesheet" />
     <!-- FONTAWESOME STYLES-->
    <link href="assets/bs-binary-admin/assets/css/font-awesome.css" rel="stylesheet" />
     <!-- MORRIS CHART STYLES-->
    <link href="assets/bs-binary-admin/assets/js/morris/morris-0.4.3.min.css" rel="stylesheet" />
        <!-- CUSTOM STYLES-->
    <link href="assets/bs-binary-admin/assets/css/custom.css" rel="stylesheet" />
     <!-- GOOGLE FONTS-->
   <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
</head>
<body>
    <div id="wrapper">
        <nav class="navbar navbar-default navbar-cls-top " role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="PanelControlPrincipal.aspx">Panel De Control</a> 
            </div>
  <div style="color: white;
padding: 15px 50px 5px 50px;
float: right;
font-size: 16px;"> Ultimo acceso : 05 Junio 2021 &nbsp; <a href="Inicio.aspx" class="btn btn-danger square-btn-adjust">Cerrar sesion</a> </div>
        </nav>   
           <!-- /. NAV TOP  -->
                <nav class="navbar-default navbar-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav" id="main-menu">
				<li class="text-center">
                    <img src="assets/bs-binary-admin/assets/img/find_user.png" class="user-image img-responsive"/>
					</li>
				
					
                    <li>
                        <a  class="active-menu" href="PanelControlPrincipal.aspx"><i class="fa fa-dashboard fa-3x"></i> Informacion</a>
                    </li>
                    
                    
						
                   
                    <li  >
                        <a   href="PanelAgregar.aspx"><i class="fa fa-dashboard fa-3x"></i>Agregar</a>
                    </li>				
					
					   <li  >
                        <a   href="PanelModificar.aspx"><i class="fa fa-dashboard fa-3x"></i>Modificar</a>
                    </li>	                 
                   <li  >
                        <a   href="PanelEliminar.aspx"><i class="fa fa-dashboard fa-3x"></i>Eliminar</a>
                    </li>	
                   	        
                 
                
                </ul>
               
            </div>
            
        </nav>  
        <!-- /. NAV SIDE  -->
        <div id="page-wrapper" >
            <div id="page-inner">
                <div class="row">
                    <div class="col-md-12">
                     <h2>Admin</h2>   
                        <h5>Bienvenido al panel de informacion</h5>
                    </div>
                </div>              
                 <!-- /. ROW  -->
                  <hr />
                
                 <!-- /. ROW  -->
                <hr />                
                                                   <form role="form" runat="server">
                                                       <h2>Tabla UserLog</h2>
                                                         <asp:GridView ID="GridView1"  class="table table-striped table-bordered table-hover" runat="server" AutoGenerateColumns="false">
                                               <Columns>
                                                   <asp:BoundField DataField="Alias" HeaderText="Alias" />
                                                   <asp:BoundField DataField="Nombre" HeaderText="Nombre" />
                                                   <asp:BoundField DataField="EMAIL" HeaderText="EMAIL" />
                                                   <asp:BoundField DataField="RUT" HeaderText="RUT" />
                                               </Columns>


                                           </asp:GridView>
                                                <h2>Tabla Usuario</h2>

                                                       <asp:GridView ID="GridView2"  class="table table-striped table-bordered table-hover" runat="server" AutoGenerateColumns="false">
                                               <Columns>
                                                   <asp:BoundField DataField="rut" HeaderText="Rut" />
                                                   <asp:BoundField DataField="Nombre" HeaderText="Nombre" />
                                                   <asp:BoundField DataField="APELLIDOPATERNO" HeaderText="Apellido paterno" />
                                                   <asp:BoundField DataField="APELLIDOMATERNO" HeaderText="Apellido Materno" />
                                                   <asp:BoundField DataField="VIGENTE_IND" HeaderText="Vigencia" />
                                                   <asp:BoundField DataField="WEB_PASSWORD" HeaderText="Contraseña" />


                                               </Columns>


                                           </asp:GridView>

                                                       </form>

                 <!-- /. ROW  -->
          
                 <!-- /. ROW  -->
             
                 <!-- /. ROW  -->
             
                 <!-- /. ROW  -->           
    </div>
             <!-- /. PAGE INNER  -->
            </div>
         <!-- /. PAGE WRAPPER  -->
        </div>
     <!-- /. WRAPPER  -->
    <!-- SCRIPTS -AT THE BOTOM TO REDUCE THE LOAD TIME-->
    <!-- JQUERY SCRIPTS -->
    <script src="assets/bs-binary-admin/assets/js/jquery-1.10.2.js"></script>
      <!-- BOOTSTRAP SCRIPTS -->
    <script src="assets/bs-binary-admin/assets/js/bootstrap.min.js"></script>
    <!-- METISMENU SCRIPTS -->
    <script src="assets/bs-binary-admin/assets/js/jquery.metisMenu.js"></script>
     <!-- MORRIS CHART SCRIPTS -->
     <script src="assets/bs-binary-admin/assets/js/morris/raphael-2.1.0.min.js"></script>
    <script src="assets/bs-binary-admin/assets/js/morris/morris.js"></script>
      <!-- CUSTOM SCRIPTS -->
    <script src="assets/bs-binary-admin/assets/js/custom.js"></script>
    
   
</body>
</html>

