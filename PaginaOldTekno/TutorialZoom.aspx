<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="TutorialZoom.aspx.cs" Inherits="PaginaOldTekno.TutorialZoom" %>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">    
    <title>OldTekno | Tutorial Word</title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="assets/MarkUps-Varsity/Varsity/assets/img/libro1.jpg" type="image/x-icon">

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

                        <div style="color: white;
                         padding: 15px 50px 5px 50px;
                      float: right;
                    font-size: 16px;"> &nbsp; 
                            <a style="<% =res %>" href="PanelControlPrincipal.aspx" class="btn btn-danger square-btn-adjust">Panel De Control</a>
                            <a href="Inicio.aspx" class="btn btn-danger square-btn-adjust">Cerrar sesion</a> 
                        </div>
                 
                                          
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
  <!-- Start menu -->
  <section id="mu-menu">
    <nav class="navbar navbar-default" role="navigation">  
      <div class="container">
        <div class="navbar-header">
          <!-- FOR MOBILE VIEW COLLAPSED BUTTON -->
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!-- LOGO -->              
          <!-- TEXT BASED LOGO -->
          <a class="navbar-brand" href="PaginaInicial.aspx"><i class="fa fa-book" aria-hidden="true"></i><span>OldTekno</span></a>
          <!-- IMG BASED LOGO  -->
          <!-- <a class="navbar-brand" href="index.html"><img src="assets/img/logo.png" alt="logo"></a> -->
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul id="top-menu" class="nav navbar-nav navbar-right main-nav">
            <li><a href="PaginaInicial.aspx">Inicio</a></li>            
            <li class="dropdown active">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Cursos <span class="fa fa-angle-down"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="Cursos.aspx">Lista de Cursos</a></li>                              
              </ul>
            </li>           
            <li><a href="Galeria.aspx">Galeria de imagenes</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Noticias<span class="fa fa-angle-down"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="PaginaNoticias.aspx">Actualizaciones</a></li>                           
              </ul>
            </li>            
            <li><a href="Contacto.aspx">Contacto</a></li>
                    
            <li><a href="#" id="mu-search-icon"><i class="fa fa-search"></i></a></li>
          </ul>                    
        </div><!--/.nav-collapse -->        
      </div>     
    </nav>
  </section>
  <!-- End menu -->
  <!-- Start search box -->
  <div id="mu-search">
    <div class="mu-search-area">      
      <button class="mu-search-close"><span class="fa fa-close"></span></button>
      <div class="container">
        <div class="row">
          <div class="col-md-12">            
            <form class="mu-search-form">
              <input type="search" placeholder="Type Your Keyword(s) & Hit Enter">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End search box -->
 <!-- Page breadcrumb -->
 <section id="mu-page-breadcrumb">
   <div class="container">
     <div class="row">
       <div class="col-md-12">
         <div class="mu-page-breadcrumb-area">
           <h2>Como aprender a usar Zoom</h2>
           <ol class="breadcrumb">
            <li><a href="PaginaInicial.aspx">Inicio</a></li>            
            <li class="active">Tutorial Zoom</li>
          </ol>
         </div>
       </div>
     </div>
   </div>
 </section>
 <!-- End breadcrumb -->
 <section id="mu-course-content" >
   <div class="container">
     <div class="row">
       <div class="col-md-12">
         <div class="mu-course-content-area">
            <div class="row">
              <div class="col-md-9">
                <!-- start course content container -->
                <div class="mu-course-container mu-course-details">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="mu-latest-course-single">
                        <figure class="mu-latest-course-img">
                          <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutozoom.jpg" alt="img"></a>
                          <figcaption class="mu-latest-course-imgcaption">
                            <a href="#"></a>
                           
                          </figcaption>
                        </figure>
                          
<form action="../../form-result.php" method="post" enctype="multipart/form-data" target="_blank">

 

</form>
                        <div class="mu-latest-course-single-content">
                          <h2><a href="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutozoom/Zoom.docx" download="Zoom.docx">Descarga aqui el documento</a></h2>
                            
                           <p align="justify" style="font-size:140%">Bienvenidos a este curso en donde vamos a aprender como instalar zoom, a crear nuestro usuario, aprenderemos como ingresar a uno reunión y a su vez como podemos organizar una reunión, acompáñennos a este curso sencillo y explicativo</p>
                            <p align="justify" style="font-size:140%">Para comenzar vamos a pinchar el siguiente link para poder descargar zoom.</p>
                              <h2> <a href="https://zoom.us/download">Link Zoom</a></h2>

                           
                          <p align="justify" style="font-size:140%">• Ahora vamos a pinchar el botón azul en donde dice “Descargar” como se muestra en la siguiente imagen.</p>
                          <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutozoom/1.jpg" alt="img"></a>
                        <p align="justify" style="font-size:140%">• De manera inmediata se nos va a descargar el instalador de zoom en donde solo debemos presionar “Ejecutar” una vez haya sido descargado, de esta forma la instalación comenzara de manera automática.</p>
                          <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutozoom/2.jpg" alt="img"></a>
                           
                          <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutozoom/3.jpg" alt="img"></a>
                           <p align="justify" style="font-size:140%">• Cuando este proceso termine, se nos abrirá la siguiente pestaña.</p>
                          <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutozoom/4.jpg" alt="img"></a>
                           <p align="justify" style="font-size:140%">• Aquí vamos a seleccionar “Ingresar” para poder crear nuestro usuario en zoom, al presionar ingresar se nos abrirá una pestaña en donde vamos a seleccionar “Ingresar con Google” como se muestra en la imagen.</p>
                          <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutozoom/5.jpg" alt="img"></a>
                          <p align="justify" style="font-size:140%">• Luego vamos a ingresar el correo electrónico correspondiente nuestro usuario, en este ejemplo se a ingresado el correo de Oldtekno como se muestra en la imagen.</p>
                          <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutozoom/6.jpg" alt="img"></a>
                           <p align="justify" style="font-size:140%">• Vamos a apretar “Siguiente” para proceder a introducir nuestra fecha de nacimiento en la siguiente pestaña</p>
                          <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutozoom/7.jpg" alt="img"></a>
                          <p align="justify" style="font-size:140%">• Luego vamos a seleccionar “Crear cuenta”, después de este paso vamos a conceder los permisos a zoom para poder acceder a la aplicación mediante los links.</p>
                          <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutozoom/8.jpg" alt="img"></a>
                          <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutozoom/9.jpg" alt="img"></a>
                          <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutozoom/10.jpg" alt="img"></a>
                          <p align="justify" style="font-size:140%">• Luego podemos crear una reunión nosotros mismos, seleccionando la opción “Nueva reunión”
En donde vamos a poder compartir el link de la reunión, así mismo podemos ver el “ID” y el código de acceso a la reunión para poder proporcionarlo a la gente que vamos a invitar.
</p>
                          <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutozoom/11.jpg" alt="img"></a>
                         <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutozoom/12.jpg" alt="img"></a>
                        <p align="justify" style="font-size:140%">• Ahora vamos a aprender a como unirnos a una reunión, para esto vamos a seleccionar la opción de “Entrar a una reunión”.</p>
                        <p align="justify" style="font-size:140%">• Luego de esto zoom nos va a solicitar el “ID” de la reunión, este nos lo va a proporcionar la persona que nos este invitando a esta reunión, una vez obtenido este “ID” lo vamos a digitar y también pondremos nuestro nombre en donde dice “Introducir su nombre” el cual en la imagen a continuación veremos que nosotros ya hemos puesto “Oldtekno”</p>
                         <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutozoom/13.jpg" alt="img"></a>
                        <p align="justify" style="font-size:140%">• A continuación, vamos a introducir el código de acceso a la reunión, que también es proporcionado por la persona que nos invitó a esta reunión.</p>
                          <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutozoom/14.jpg" alt="img"></a>
                        <p align="justify" style="font-size:140%">• Y luego de este paso ya hemos podido ingresar de manera correcta a una reunión.</p>
                         <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutozoom/15.jpg" alt="img"></a>
                        </div>
                      </div> 
                    </div>                                   
                  </div>
                </div>
                            
                  

                     
                          
                   
                        </div>
                      </div> 
                    </div>                                   
                  </div>
                </div>
    
              </div>
              <div class="col-md-3">
                <!-- start sidebar -->
                <aside class="mu-sidebar">
                  <!-- start single sidebar -->
                  <div class="mu-single-sidebar">
              
                  </div>
          
                </aside>
                <!-- / end sidebar -->
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>

  <!-- Start footer -->
  <footer id="mu-footer">
    <!-- start footer top -->
    <div class="mu-footer-top">
      <div class="container">
        <div class="mu-footer-top-area">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3">
              <div class="mu-footer-widget">
                   <h4>Informacion</h4>
                <ul>
                  <li><a href="#mu-about-us">Acerca de nosotros</a></li>
                  <li><a href="#mu-latest-courses">Cursos</a></li>
                  <li><a href="#mu-from-blog">Noticias</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3">
              <div class="mu-footer-widget">
             <h4>Ayuda estudiante</h4>
                <ul>
                  <li><a href="">Como empezar</a></li>
                  <li><a href="#">Preguntas frecuentes</a></li>
                  <li><a href="">Descargar cursos</a></li>                
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3">
              <div class="mu-footer-widget">
            <h4>Boletin informativo</h4>
                <p>Obtenga las últimas actualizaciones, noticias</p>
                <form class="mu-subscribe-form">
             
                </form>               
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3">
              <div class="mu-footer-widget">
                <h4>Contacto</h4>
                <address>
                <p>Direccion:</p>
                  <p>telefono:+56963419779</p>
                  <p>Correo: Oldtekno.soporte@gmail.com</p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end footer top -->
    <!-- start footer bottom -->
    <div class="mu-footer-bottom">
      <div class="container">
        <div class="mu-footer-bottom-area">
          <p>&copy; Diseñado por OldTekno</p>
        </div>
      </div>
    </div>
    <!-- end footer bottom -->
  </footer>
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
