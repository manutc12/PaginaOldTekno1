<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Cursos.aspx.cs" Inherits="ManuelTorres_WEBFORMS_ACTIVIDAD1.Cursos" %>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">    
    <title>OldTekno | Cursos</title>

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
              <a href="#" class="dropdown-toggle active" data-toggle="dropdown">Cursos <span class="fa fa-angle-down"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="Cursos.aspx">Lista de Cursos</a></li>                               
              </ul>
            </li>           
            <li><a href="Galeria.aspx">Galeria de imagenes</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Noticias <span class="fa fa-angle-down"></span></a>
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
           <h2>Cursos</h2>
           <ol class="breadcrumb">
            <li><a href="PaginaInicial">Inicio</a></li>            
            <li class="active">Cursos</li>
          </ol>
         </div>
       </div>
     </div>
   </div>
 </section>
 <!-- End breadcrumb -->
 <section id="mu-course-content">
   <div class="container">
     <div class="row">
       <div class="col-md-12">
         <div class="mu-course-content-area">
            <div class="row">
              <div class="col-md-9">
                <!-- start course content container -->
                <div class="mu-course-container">
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                    <div class="mu-latest-course-single">
                      <figure class="mu-latest-course-img">
                        <a href="Tutorialhs.aspx"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/harsof.jpg" alt="img"></a>
                        <figcaption class="mu-latest-course-imgcaption">
                          <a href="Tutorialhs.aspx">Que es Hardware y Software</a>
                          <span><i class="fa fa-clock-o"></i></span>
                        </figcaption>
                      </figure>
                      <div class="mu-latest-course-single-content">
                        <h4><a href="#">Resumen</a></h4>
                        <p>En este curso aprenderas que el concepto de Hardware y el Software,y en como se dividen ambos en grupos juntos con sus diferencias.</p>
                        <div class="mu-latest-course-single-contbottom">
                          <a class="mu-course-details" href="#"></a>
                          <span class="mu-course-price" href="#"></span>
                        </div>
                      </div>
                    </div> 
                  </div>                  
                  <div class="col-md-6 col-sm-6">
                    <div class="mu-latest-course-single">
                      <figure class="mu-latest-course-img">
                        <a href="TutorialYouTube.aspx"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutoyoutube.jpg" alt="img"></a>
                        <figcaption class="mu-latest-course-imgcaption">
                          <a href="TutorialYouTube.aspx">Como guardar videos musicales en YouTube</a>
                          <span><i class="fa fa-clock-o"></i></span>
                        </figcaption>
                      </figure>
                      <div class="mu-latest-course-single-content">
                        <h4><a href="#">Resumen</a></h4>
                        <p>En este curso aprenderas como guardar tus videos musicales preferidos en una lista para reproducirlos cuando puedas.</p>
                        <div class="mu-latest-course-single-contbottom">
                          <a class="mu-course-details" href="#"></a>
                          <span class="mu-course-price" href="#"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6">
                    <div class="mu-latest-course-single">
                      <figure class="mu-latest-course-img">
                        <a href="TutorialCorreo.aspx"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/correotuto.jpg" alt="img"></a>
                        <figcaption class="mu-latest-course-imgcaption">
                          <a href="TutorialCorreo.aspx">Como aprender a usar el correo electronico</a>
                          <span><i class="fa fa-clock-o"></i></span>
                        </figcaption>
                      </figure>
                      <div class="mu-latest-course-single-content">
                        <h4><a href="#">Resumen</a></h4>
                        <p>En este curso aprenderas a como crear una cuenta de GMAIL desde cero, enviar un correo electronico a otra persona y adjuntar archivos.</p>
                        <div class="mu-latest-course-single-contbottom">
                          <a class="mu-course-details" href="#"></a>
                          <span class="mu-course-price" href="#"></span>
                        </div>
                      </div>
                    </div> 
                  </div>                  
                  <div class="col-md-6 col-sm-6">
                    <div class="mu-latest-course-single">
                      <figure class="mu-latest-course-img">
                        <a href="TutorialWord.aspx"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutoword.jpg" alt="img"></a>
                        <figcaption class="mu-latest-course-imgcaption">
                          <a href="TutorialWord.aspx">Como aprender a usar Word</a>
                          <span><i class="fa fa-clock-o"></i></span>
                        </figcaption>
                      </figure>
                      <div class="mu-latest-course-single-content">
                        <h4><a href="#">Resumen</a></h4>
                        <p>En este curso aprenderas a como crear un documento en Word, subir imagenes, cambiar tamaño de letra, cambiar el margen, interlineado, crear tablas, entre otras.</p>
                        <div class="mu-latest-course-single-contbottom">
                          <a class="mu-course-details" href="#"></a>
                          <span class="mu-course-price" href="#"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6">
                    <div class="mu-latest-course-single">
                      <figure class="mu-latest-course-img">
                        <a href="TutorialZoom.aspx"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutozoom.jpg" alt="img"></a>
                        <figcaption class="mu-latest-course-imgcaption">
                          <a href="TutorialZoom.aspx">Como hacer videollamada con Zoom</a>
                          <span><i class="fa fa-clock-o"></i></span>
                        </figcaption>
                      </figure>
                      <div class="mu-latest-course-single-content">
                        <h4><a href="#">Resumen</a></h4>
                        <p>En este curso aprenderas como hacer llamadas por la aplicacion Zoom con tus familiares y amigos</p>
                        <div class="mu-latest-course-single-contbottom">
                          <a class="mu-course-details" href="#"></a>
                          <span class="mu-course-price" href="#"></span>
                        </div>
                      </div>
                    </div> 
                  </div>                  
               
                  </div>
                </div>
                <!-- end course content container -->
                <!-- start course pagination -->
                <div class="mu-pagination">
                  <nav>
                    <ul class="pagination">
                      <li>
                        <a href="#" aria-label="Previous">
                          <span class="fa fa-angle-left"></span> Atras
                        </a>
                      </li>
                      <li class="active"><a href="Cursos.aspx">1</a></li>
                      <li><a href="#">2</a></li>
                      <li>
                        <a href="#" aria-label="Next">
                         Siguiente <span class="fa fa-angle-right"></span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <!-- end course pagination -->
              </div>
              <div class="col-md-3">
                <!-- start sidebar -->
                <aside class="mu-sidebar">
                  <!-- start single sidebar -->
                  <!-- end single sidebar -->
                  <!-- start single sidebar -->
             
                  <!-- end single sidebar -->
                  <!-- start single sidebar -->
                  <div class="mu-single-sidebar">
                    <h3>Fecha de publicacion</h3>
                    <ul class="mu-sidebar-catg mu-sidebar-archives">
                      <li><a href="">Julio <span></span></a></li>
                        <a>1. Como descargar musica</a>
                        <br />
                        <a>2. Como recuperar contraseña de gmail</a>
                        <br />
                      <li><a href="">Agosto <span></span></a></li>
                        <a>1. Como utilizar meet</a>
                        <br />
                        <a>2. Como crear cuenta en Facebook</a>
                      <li><a href="">Septiembre <span></span></a></li>
                        <a>1. Como personalizar tu perfil de Facebook</a>
                        <br />
                      <li><a href="">Octubre <span></span></a></li>
                      <li><a href="">Noviembre <span></span></a></li>
                      <li><a href="">Diciembre<span></span></a></li>
                    </ul>
                  </div>
                  <!-- end single sidebar -->
                  <!-- start single sidebar -->
                  <div class="mu-single-sidebar">
                    <h3>Tags</h3>
                    <div class="tag-cloud">
                      <a href="#">Youtube</a>
                      <a href="#">Gmail</a>
                      <a href="#">Word</a>
                      <a href="#">Zoom</a>
                      <a href="#">Hardware</a>
                      <a href="#">Software</a>
                     
                    </div>
                  </div>
                  <!-- end single sidebar -->
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
