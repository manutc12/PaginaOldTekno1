<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="PanelEliminar.aspx.cs" Inherits="PaginaOldTekno.PanelEliminar" %>


<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

      <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Panel De Control: Editar</title>
	<!-- BOOTSTRAP STYLES-->
    <link href="assets/bs-binary-admin/assets/css/bootstrap.css" rel="stylesheet" />
     <!-- FONTAWESOME STYLES-->
    <link href="assets/bs-binary-admin/assets/css/font-awesome.css" rel="stylesheet" />
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
                        <a  href="PanelControlPrincipal.aspx"><i class="fa fa-dashboard fa-3x"></i> Informacion</a>
                    </li>
                    
                    
						
                   
                    <li  >
                        <a  href="PanelAgregar.aspx"><i class="fa fa-dashboard fa-3x"></i>Agregar</a>
                    </li>				
					
					   <li  >
                        <a   href="PanelModificar.aspx"><i class="fa fa-dashboard fa-3x"></i>Modificar</a>
                    </li>	                 
                   <li  >
                        <a   class="active-menu" href="PanelEliminar.aspx"><i class="fa fa-dashboard fa-3x"></i>Eliminar</a>
                    </li>	
                   	
                </ul>
               
            </div>
            
        </nav>  
        <!-- /. NAV SIDE  -->
        <div id="page-wrapper" >
            <div id="page-inner">
                <div class="row">
                    <div class="col-md-12">
                     <h2>Información</h2>   
                        <h5>Bienvenido al panel para eliminar, aqui podras eliminar un usuario.</h5>
                       
                    </div>
                </div>
                 <!-- /. ROW  -->
                 <hr />
               <div class="row">
                <div class="col-md-12">
                    <!-- Form Elements -->
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <form role="form" runat="server">
                                     
                                      
                                       
                                       
                                         <h2>Complete los datos requeridos:</h2>
                                               
                                        <button class="btn btn-primary" runat="server" onserverclick="MenuAccion"><i class="fa fa-edit "></i>Eliminar usuario</button>


                                        <div  style ="<%=hola1%>" class="form-group input-group" >
                                        <span class="input-group-addon" >Rut:</span>
                                            <asp:TextBox ID="TextBox1"  class="form-control" runat="server"></asp:TextBox>
                                                                         
                                               
                                            <asp:Button ID="Button3" OnClick="EliminarUsuario" runat="server"  Text="Eliminar" />
                                         </div>
                                 
                                        
                                        

                                   
                                            
                                        
                              


                                      

                                 
                                           


                                 
                                        <asp:Label ID="Label1" runat="server" Text=""></asp:Label>
                                        
                                         

                                   
                                      
                              
                                       
                                       
                                  
                                       
                                      
                                     

                                 
                                    </form>
                                    <br />
                                     

                                 
    </div>
                                
                            
                                    
                                
                                   
                                         
                                </div>
                            </div>
                        </div>
                    </div>
                     <!-- End Form Elements -->
                </div>
            </div>
                <!-- /. ROW  -->
                <div class="row">
                    <div class="col-md-12">
                        <h3>More Customization</h3>
                         <p>
                        For more customization for this template or its components please visit official bootstrap website i.e getbootstrap.com or <a href="http://getbootstrap.com/components/" target="_blank">click here</a> . We hope you will enjoy our template. This template is easy to use, light weight and made with love by binarycart.com 
                        </p>
                    </div>
                </div>
                <!-- /. ROW  -->
    </div>
             <!-- /. PAGE INNER  -->
            </div>
         <!-- /. PAGE WRAPPER  -->
        
     <!-- /. WRAPPER  -->
    <!-- SCRIPTS -AT THE BOTOM TO REDUCE THE LOAD TIME-->
    <!-- JQUERY SCRIPTS -->
    <script src="assets/bs-binary-admin/assets/js/jquery-1.10.2.js"></script>
      <!-- BOOTSTRAP SCRIPTS -->
    <script src="assets/bs-binary-admin/assets/js/bootstrap.min.js"></script>
    <!-- METISMENU SCRIPTS -->
    <script src="assets/bs-binary-admin/assets/js/jquery.metisMenu.js"></script>
      <!-- CUSTOM SCRIPTS -->
    <script src="assets/bs-binary-admin/assets/js/custom.js"></script>
    
   
</body>
</html>




