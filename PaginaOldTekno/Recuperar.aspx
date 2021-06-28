<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Recuperar.aspx.cs" Inherits="PaginaOldTekno.Recuperar" %>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">    
    <title>OldTekno| Contacto</title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="assets/MarkUps-Varsity/Varsity/assets/img/libro1.jpg" type="image/x-icon">
      <link rel="stylesheet" href="assets/vendor/css/sweetalert2.css" />
    <link href="assets/vendor/css/bootstrap.css" rel="stylesheet" />
    <link href="assets/vendor/css/default.css" rel="stylesheet" />
    <link href="assets/vendor/css/login.css" rel="stylesheet" />
    <link href="assets/vendor/css/vegas.css" rel="stylesheet" />
    <link href="assets/vendor/css/sweetalert2.css" rel="stylesheet" />
    <!-- JS -->
    <script src="assets/vendor/js/jquery-3.5.1.js"></script>
    <script src="assets/vendor/js/mensajeria.js"></script>
    <!-- Jquery -->
    <script src="assets/vendor/js/ajaxcore.js"></script>
    <!-- Ajax -->
    <script src="assets/vendor/js/sweetalert2.all.js"></script>
    <script src="assets/vendor/js/vegas.min.js"></script>
    <!-- Font awesome -->
    <link href="assets/MarkUps-Varsity/Varsity/assets/css/font-awesome.css" rel="stylesheet">
    <!-- Bootstrap -->
    <link href="assets/MarkUps-Varsity/Varsity/assets/css/bootstrap.css" rel="stylesheet">   
    <!-- Slick slider -->
    <link rel="stylesheet" type="text/css" href="assets/MarkUps-Varsity/Varsity/assets/css/slick.css">          
    <!-- Fancybox slider -->
    <link rel="stylesheet" href="assets/MarkUps-Varsity/Varsity/assets/css/jquery.fancybox.css" type="text/css" media="screen" /> 
    <!-- Theme color -->
    <link id="switcher" href="assets/MarkUps-Varsity/Varsity/assets/css/theme-color/default-theme.css" rel="stylesheet">    

    <!-- Main style sheet -->
    <link href="assets/MarkUps-Varsity/Varsity/assets/css/style.css" rel="stylesheet">    

   
    <!-- Google Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,400italic,300,300italic,500,700' rel='stylesheet' type='text/css'>
    

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

  </head>
  <body>
  
  <!--START SCROLL TOP BUTTON -->
    <a class="scrollToTop" href="#">
      <i class="fa fa-angle-up"></i>      
    </a>
  <!-- END SCROLL TOP BUTTON -->

  <!-- Start header  -->
  <header id="mu-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="mu-header-area">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div class="mu-header-top-left">
                  <div class="mu-top-email">
                    <i class="fa fa-envelope"></i>
                    <span>Old.Tekno.Soporte@gmail.com</span>
                  </div>
                  <div class="mu-top-phone">
                    <i class="fa fa-phone"></i>
                    <span>+56963419779</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <div class="mu-header-top-right">
                  <nav>
                    <ul class="mu-top-social-nav" >

                  
                 
                                          
                    </ul>
                     
                       
     
                  
                    
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- End header  -->


  <!-- End search box -->
 <!-- Page breadcrumb -->

 <!-- End breadcrumb -->

 <!-- Start contact  -->
 <section id="mu-contact">
   <div class="container">
     <div class="row">
       <div class="col-md-12">
         <div class="mu-contact-area">
          <!-- start title -->
          <div class="mu-title">
            <h2>Bienvenido al modulo de ayuda</h2>
            <h1>Use este formulario para recuperar su contraseña</h1>
          </div>
          <!-- end title -->
          <!-- start contact content -->
          <div class="mu-contact-content">           
            <div class="row">
              <div class="col-md-6">
                <div class="mu-contact-left">
                  <form  id="form1"   runat="server" class="contactform">                  
                   
                      <div   class="container">
                            <div class="row">
                           <div class="col-md-5">
                               <asp:Label ID="Label2" runat="server" Text="Rut:"></asp:Label>
                               <asp:TextBox ID="TextBox1"  class="form-control"  runat="server"></asp:TextBox>
                           </div>
                                  </div>
                             <div class="row">
                           <div class="col-md-5">
                               <asp:Label ID="Label1" runat="server" Text="Nombre:"></asp:Label>
                               <asp:TextBox ID="txtNombre"  class="form-control"  runat="server"></asp:TextBox>
                           </div>
                                  </div>
                            <div class="row">
                           <div class="col-md-5">
                               <asp:Label ID="Label3" runat="server" Text="Asunto"></asp:Label>
                               <asp:TextBox ID="txtSubject"  class="form-control"  runat="server"></asp:TextBox>
                           </div>

                          </div>
                           <div class="row">
                           <div class="col-md-5">
                               <asp:Label ID="Label4" runat="server" Text="Mensaje:"></asp:Label>
                               <asp:TextBox ID="TxtMessage"  class="form-control"  runat="server" TextMode="MultiLine"></asp:TextBox>
                           </div>

                          </div>
                            <div class="row">
                           <div class="col-md-5">
                               <asp:Button ID="Button1" runat="server" onclick="SendEmail" class="mu-post-btn" Text="Enviar" />
                                <asp:Button ID="Button2" runat="server" onclick="volver" class="mu-post-btn" Text="Volver" />

                           </div>

                          </div>

                      </div>
                  </form>

                </div>
              </div>
                             <div style ="<%=hola1%>" class="alert alert-success" role="alert"><%=res1%></div>
                <div style ="<%=hola2%>" class="alert alert-danger" role="alert"><%=res2%></div>
              <div class="col-md-6">
                <div class="mu-contact-right">
                </div>
              </div>
            </div>
          </div>
          <!-- end contact content -->
         </div>
       </div>
     </div>
   </div>
 </section>
 <!-- End contact  -->
 

  <!-- Start footer -->
 
  <!-- End footer -->





  
  <!-- jQuery library -->
  <script src="assets/MarkUps-Varsity/Varsity/assets/js/jquery.min.js"></script>  
  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <script src="assets/MarkUps-Varsity/Varsity/assets/js/bootstrap.js"></script>   
  <!-- Slick slider -->
  <script type="text/javascript" src="assets/MarkUps-Varsity/Varsity/assets/js/slick.js"></script>
  <!-- Counter -->
  <script type="text/javascript" src="assets/MarkUps-Varsity/Varsity/assets/js/waypoints.js"></script>
  <script type="text/javascript" src="assets/MarkUps-Varsity/Varsity/assets/js/jquery.counterup.js"></script>  
  <!-- Mixit slider -->
  <script type="text/javascript" src="assets/MarkUps-Varsity/Varsity/assets/js/jquery.mixitup.js"></script>
  <!-- Add fancyBox -->        
  <script type="text/javascript" src="assets/MarkUps-Varsity/Varsity/assets/js/jquery.fancybox.pack.js"></script>

  <!-- Custom js -->
  <script src="assets/MarkUps-Varsity/Varsity/assets/js/custom.js"></script> 

  </body>
</html>

