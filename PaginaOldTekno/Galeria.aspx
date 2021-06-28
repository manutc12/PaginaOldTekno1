﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Galeria.aspx.cs" Inherits="PaginaOldTekno.Galeria" %>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">    
    <title>OldTekno | Galeria De Imagenes</title>

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
            <li ><a href="PaginaInicial.aspx">Inicio</a></li>            
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Cursos <span class="fa fa-angle-down"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="Cursos.aspx">Lista de Cursos</a></li>                              
              </ul>
            </li>           
            <li class="active"><a href="Galeria.aspx">Galeria de imagenes</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Noticias <span class="fa fa-angle-down"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="PaginaNoticias.aspx">Actualizaciones</a></li>                
                               
              </ul>
            </li>            
            <li><a href="Contacto.aspx">Contacto</a></li>
             
             

            <li><a href="#" id="mu-search-icon"><i class="fa fa-search"></i></a></li>
          </ul>                     
        </div>
 <!--/.nav-collapse -->        
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
           <h2>Galeria de imagenes</h2>
           <ol class="breadcrumb">
            <li><a href="PaginaInicial.aspx">Inicio</a></li>            
            <li class="active">Galeria</li>
          </ol>
         </div>
       </div>
     </div>
   </div>
 </section>
 <!-- End breadcrumb -->
 <!-- Start gallery  -->
 <section id="mu-gallery">
   <div class="container">
     <div class="row">
       <div class="col-md-12">
         <div class="mu-gallery-area">
          <!-- start title -->
          <div class="mu-title">
            <%--<h2>Some Moments</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ut laboriosam corporis doloribus, officia, accusamus illo nam tempore totam alias!</p>--%>
          </div>
          <!-- end title -->
          <!-- start gallery content -->
          <div class="mu-gallery-content">
            <!-- Start gallery menu -->
            <div class="mu-gallery-top">              
              <ul>
                <li class="filter active" data-filter="all">Todo</li>
                <li class="filter" data-filter=".lab">Hogar</li>
           
              </ul>
            </div>
            <!-- End gallery menu -->
            <div class="mu-gallery-body">
              <ul id="mixit-container" class="row">
                <!-- start single gallery image -->
                <li class="col-md-4 col-sm-6 col-xs-12 mix lab">
                  <div class="mu-single-gallery">                  
                    <div class="mu-single-gallery-item">
                      <div class="mu-single-gallery-img">
                        <a href="#"><img alt="img" src="assets/MarkUps-Varsity/Varsity/assets/img/gallery/small/img1.png"></a>
                      </div>
                      <div class="mu-single-gallery-info">
                        <div class="mu-single-gallery-info-inner">
     
                          <a href="assets/MarkUps-Varsity/Varsity/assets/img/gallery/big/img1.png" data-fancybox-group="gallery" class="fancybox"><span class="fa fa-eye"></span></a>
                          <a href="#" class="aa-link"><span class="fa fa-link"></span></a>
                        </div>
                      </div>                  
                    </div>
                  </div>
                </li>
                <!-- start single gallery image -->
               <li class="col-md-4 col-sm-6 col-xs-12 mix lab">
                  <div class="mu-single-gallery">                  
                    <div class="mu-single-gallery-item">
                      <div class="mu-single-gallery-img">
                        <a href="#"><img alt="img" src="assets/MarkUps-Varsity/Varsity/assets/img/gallery/small/img2.png"></a>
                      </div>
                       <div class="mu-single-gallery-info">
                        <div class="mu-single-gallery-info-inner">
                       
                          <a href="assets/MarkUps-Varsity/Varsity/assets/img/gallery/big/img2.png" data-fancybox-group="gallery" class="fancybox"><span class="fa fa-eye"></span></a>
                          <a href="#" class="aa-link"><span class="fa fa-link"></span></a>
                        </div>
                      </div> 
                    </div>
                  </div>
               </li>
                <!-- start single gallery image -->
               
                <!-- start single gallery image -->
         
                <!-- start single gallery image -->
           
                <!-- start single gallery image -->
           
                <!-- start single gallery image -->
         
                 <!-- start single gallery image -->
              
                <!-- start single gallery image -->
          
              </ul>            
            </div>
          </div>
          <!-- end gallery content -->
         </div>
       </div>
     </div>
   </div>
 </section>
 <!-- End gallery  -->
 

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
