<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="PaginaInicial.aspx.cs" Inherits="ManuelTorres_WEBFORMS_ACTIVIDAD1.PaginaInicial" %>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">    
    <title>OldTekno| Inicio</title>

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
            <li class="active"><a href="PaginaInicial.aspx">Inicio</a></li>            
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Cursos <span class="fa fa-angle-down"></span></a>
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
  <!-- Start Slider -->
  <section id="mu-slider">
    <!-- Start single slider item -->
    <div class="mu-slider-single">
      <div class="mu-slider-img">
        <figure>
          <img src="assets/MarkUps-Varsity/Varsity/assets/img/slider/abuelo-ayuda-pc-computacióm.png" alt="img">
        </figure>
      </div>
      <div class="mu-slider-content">
        <h4>Bienvenido a OldTekno</h4>
        <span></span>
        <h2>Nosotros te ayudamos a aprender</h2>

      </div>
    </div>
    <!-- Start single slider item -->
    <!-- Start single slider item -->
    <div class="mu-slider-single">
      <div class="mu-slider-img">
        <figure>
          <img src="assets/MarkUps-Varsity/Varsity/assets/img/slider/abuelo-meme-930x600.png" alt="img">
        </figure>
      </div>
      <div class="mu-slider-content">
        <h4></h4>
        <span></span>
        <h2>Variedad de cursos</h2>
        
        <a href="Cursos.aspx" class="mu-read-more-btn">Ver lista de cursos</a>
      </div>
    </div>
    <!-- Start single slider item -->
    <!-- Start single slider item -->
    <div class="mu-slider-single">
      <div class="mu-slider-img">
        <figure>
          <img src="assets/MarkUps-Varsity/Varsity/assets/img/slider/senior-computer.png" alt="img">
        </figure>
      </div>
      <div class="mu-slider-content">
        <h4></h4>
        <span></span>
        <h2>Si deseas contactarte por alguna duda consulta o duda </h2>
        
        <a href="Contacto.aspx" class="mu-read-more-btn">Contactar</a>
      </div>
    </div>
    <!-- Start single slider item -->    
  </section>
  <!-- End Slider -->
  <!-- Start service  -->
  <section id="mu-service">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="mu-service-area">
            <!-- Start single service -->
            <div class="mu-service-single">
              <span class="fa fa-book"></span>
              <h3>Aprende Online</h3>
              <p>Aprende de manera Online con nuestro material de apoyo y videos explicativos,solo necesitaras una conexion a internet</p>
            </div>
            <!-- Start single service -->
            <!-- Start single service -->
            <div class="mu-service-single">
              <span class="fa fa-users"></span>
              <h3>Equipo de trabajo disponible 24/7</h3>
              <p>Si posee alguna duda o problema que desea resolver entre al formulario de contacto</p>
            </div>
            <!-- Start single service -->
            <!-- Start single service -->
            <div class="mu-service-single">
              <span class="fa fa-table"></span>
              <h3>Recursos Offline</h3>
              <p>No sera necesario que este 100% online podra descargar el material para aprender sin una conexion a internet.</p>
            </div>
            <!-- Start single service -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End service  -->

  <!-- Start about us -->
  <section id="mu-about-us">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="mu-about-us-area">           
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="mu-about-us-left">
                  <!-- Start Title -->
                  <div class="mu-title">
                    <h2>Acerca de nosotros</h2>              
                  </div>
                  <!-- End Title -->
                   
                      <p align="justify" style="font-size:130%">Somos Oldtekno, un grupo de estudiantes de ingenieria y tecnico en informatica, que tienen como objetivo crear un lugar de aprendizaje para los adultos mayores en Chile.
                      
                  </p>
                     
                    <p align="justify" style="font-size:130%">Nosotros como equipo hemos visto la complejidad que tienen los adultos mayores para aprender funcionalidades basicas de la computacion. </p>
               
                    <p align="justify" style="font-size:130%">Por ello ha nacido esta propuesta inovadora que busca dar solucion a ese problema, brindando las herramientas basicas necesarias para que nuestros queridos adultos mayores puedan una experiencia más amena con la computacion.</p>
                   <p align="justify" style="font-size:130%"><b>Entre nuestros objetivos estan:</b></p> 
                 
                    <p align="justify" style="font-size:130%">- Capacitar a las personas de tercera edad en el uso de la tecnología actual.</p>
                    <p align="justify" style="font-size:130%">- Brindar una interfaz de facil usabilidad</p>
                    <p align="justify" style="font-size:130%">- Brindar un servicio de facil acceso</p>
                    <p align="justify" style="font-size:130%">- Tener cercania con el usuario</p>
                      
                      
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="mu-about-us-right">                            
                  <img src="assets/MarkUps-Varsity/Varsity/assets/img/nosotros.jpg" width="600" height="500" alt="img">
                </a>                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End about us -->

  <!-- Start about us counter -->
 
  <!-- End about us counter -->

  <!-- Start features section -->
 
  <!-- End features section -->

  <!-- Start latest course section -->
  <section id="mu-latest-courses">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <div class="mu-latest-courses-area">
            <!-- Start Title -->
            <div class="mu-title">
              <h2>Lista de cursos</h2>
              <p></p>
            </div>
            <!-- End Title -->
            <!-- Start latest course content -->
            <div id="mu-latest-course-slide" class="mu-latest-courses-content">
              <div class="col-lg-4 col-md-4 col-xs-12">
                <div class="mu-latest-course-single">
                  <figure class="mu-latest-course-img">
                    <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/harsof.jpg" alt="img"></a>
                    <figcaption class="mu-latest-course-imgcaption">
                      <a href="#">Que es Hardware y Software</a>
                      <span><i class="fa fa-clock-o"></i></span>
                    </figcaption>
                  </figure>
                  <div class="mu-latest-course-single-content">
                    <h4><a href="#">Resumen</a></h4>
                    <p>En este curso aprenderas que el concepto de Hardware y el Software,y en como se dividen ambos en grupos juntos con sus diferencias.</p>
                    <div class="mu-latest-course-single-contbottom">
                      
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-xs-12">
                <div class="mu-latest-course-single">
                  <figure class="mu-latest-course-img">
                    <a href="TutorialYoutube.aspx"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutoyoutube.jpg" alt="img"></a>
                    <figcaption class="mu-latest-course-imgcaption">
                      <a href="TutorialYoutube.aspx">Como guardar videos musicales en YouTube</a>
                      <span><i class="fa fa-clock-o"></i></span>
                    </figcaption>
                  </figure>
                  <div class="mu-latest-course-single-content">
                    <h4><a href="#">Resumen</a></h4>
                        <p>En este curso aprenderas como guardar tus videos musicales preferidos en una lista para reproducirlos cuando puedas.</p>
                    <div class="mu-latest-course-single-contbottom">
                 
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-xs-12">
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
                   
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-xs-12">
                <div class="mu-latest-course-single">
                  <figure class="mu-latest-course-img">
                    <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutozoom.jpg" alt="img"></a>
                    <figcaption class="mu-latest-course-imgcaption">
                      <a href="#">Como hacer videollamada con Zoom</a>
                      <span><i class="fa fa-clock-o"></i></span>
                    </figcaption>
                  </figure>
                  <div class="mu-latest-course-single-content">
                    <h4><a href="#">Resumen</a></h4>
                        <p>En este curso aprenderas como hacer llamadas por la aplicacion Zoom con tus familiares y amigos</p>
                    <div class="mu-latest-course-single-contbottom">
                      
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-xs-12">
                <div class="mu-latest-course-single">
                  <figure class="mu-latest-course-img">
                    <a href="TutorialWord.aspx"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutoword.jpg" alt="img"></a>
                    <figcaption class="mu-latest-course-imgcaption">
                      <a href="TutorialWord.aspx">Como aprender a usar Word </a>
                      <span><i class="fa fa-clock-o"></i></span>
                    </figcaption>
                  </figure>
                  <div class="mu-latest-course-single-content">
                    <h4><a href="#">Resumen</a></h4>
                    <p>En este curso aprenderas a como crear un documento en Word, subir imagenes, cambiar tamaño de letra, cambiar el margen, interlineado, crear tablas, entre otras.</p>
                    <div class="mu-latest-course-single-contbottom">
                    
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <!-- End latest course content -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End latest course section -->

  <!-- Start our teacher -->
  <section id="mu-our-teacher">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="mu-our-teacher-area">
            <!-- begain title -->
            <div class="mu-title">
              <h2>Equipo de trabajo</h2>
              <p></p>
            </div>
            <!-- end title -->
            <!-- begain our teacher content -->
            <div class="mu-our-teacher-content">
              <div class="row">
                <div class="col-lg-3 col-md-3  col-sm-6">
                  <div class="mu-our-teacher-single">
                    <figure class="mu-our-teacher-img">
                      <img src="assets/MarkUps-Varsity/Varsity/assets/img/teachers/0.png" alt="teacher img">
                      <div class="mu-our-teacher-social">
                        <a href="#"><span class="fa fa-facebook"></span></a>
                        <a href="#"><span class="fa fa-twitter"></span></a>
                        <a href="https://www.linkedin.com/in/daniel-calquin-2727a3185/"><span class="fa fa-linkedin"></span></a>
                        <a href="#"><span class="fa fa-google-plus"></span></a>
                      </div>
                    </figure>                    
                    <div class="mu-ourteacher-single-content">
                        <style>
                       #equipo { color: #000000; }
                       </style>
                      <h4 id="equipo" >Daniel Calquin</h4>
                      <span>Analista ,Co-Fundador, Certificado en Scrum Fundation</span>
                      <p></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6">
                  <div class="mu-our-teacher-single">
                    <figure class="mu-our-teacher-img">
                      <img src="assets/MarkUps-Varsity/Varsity/assets/img/teachers/2.png" alt="teacher img">
                      <div class="mu-our-teacher-social">
                        <a href="#"><span class="fa fa-facebook"></span></a>
                        <a href="#"><span class="fa fa-twitter"></span></a>
                        <a href="#"><span class="fa fa-linkedin"></span></a>
                        <a href="#"><span class="fa fa-google-plus"></span></a>
                      </div>
                    </figure>                    
                    <div class="mu-ourteacher-single-content">
                      <h4 id="equipo">George Jaramillo</h4>
                      <span>Estudiante de Ingeniera en informática, Co-Fundador, Certificado en Scrum Fundation</span>
                      <p></p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6">
                  <div class="mu-our-teacher-single">
                    <figure class="mu-our-teacher-img">
                      <img src="assets/MarkUps-Varsity/Varsity/assets/img/teachers/1.png" alt="teacher img">
                      <div class="mu-our-teacher-social">
                        <a href="#"><span class="fa fa-facebook"></span></a>
                        <a href="#"><span class="fa fa-twitter"></span></a>
                        <a href="https://www.linkedin.com/in/iv%C3%A1n-tapia-pastenes-20b2401a8/"><span class="fa fa-linkedin"></span></a>
                        <a href="#"><span class="fa fa-google-plus"></span></a>
                      </div>
                    </figure>                    
                    <div class="mu-ourteacher-single-content">
                      <h4 id="equipo">Ivan Tapia</h4>
                      <span>Estudiante de programación computacional y actualmente desarrollador cloud,Certificado en Scrum Fundation,Co-Fundador de Oldtekno.</span>
                      <p id="equipo">Me gusta hacer deporte, juego basquet y futbol varias veces a la semana.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6">
                  <div class="mu-our-teacher-single">
                    <figure class="mu-our-teacher-img">
                      <img src="assets/MarkUps-Varsity/Varsity/assets/img/teachers/3.png" alt="teacher img">
                      <div class="mu-our-teacher-social">
                        <a href="#"><span class="fa fa-facebook"></span></a>
                        <a href="#"><span class="fa fa-twitter"></span></a>
                        <a href="#"><span class="fa fa-linkedin"></span></a>
                        <a href="#"><span class="fa fa-google-plus"></span></a>
                      </div>
                    </figure>                    
                    <div class="mu-ourteacher-single-content">
                      <h4 id="equipo">Manuel Torres</h4>
                      <span>Estudiante en ingenieria en informatica,Certificado en Scrum Fundation, Co-Fundador de OldTekno y diseñador del sitio web. </span>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            <!-- End our teacher content -->           
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End our teacher -->

  <!-- Start testimonial -->
  
  <!-- End testimonial -->

  <!-- Start from blog -->
  <section id="mu-from-blog">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="mu-from-blog-area">
            <!-- start title -->
            <div class="mu-title">
              <h2>Noticias</h2>
            
            </div>
            <!-- end title -->  
            <!-- start from blog content   -->
            <div class="mu-from-blog-content">
              <div class="row">
                <div class="col-md-4 col-sm-4">
                  <article class="mu-blog-single-item">
                    <figure class="mu-blog-single-img">
                      <a href="Noticia1.aspx"><img src="assets/MarkUps-Varsity/Varsity/assets/img/blog/noti1.jpg" alt="img"></a>
                      <figcaption class="mu-blog-caption">
                        <h3><a href="Noticia1.aspx">Actualizacion 05/06/2021</a></h3>
                      </figcaption>                      
                    </figure>
                    <div class="mu-blog-meta">
                      <a href="#">Administrador Manuel Torres</a>
                      <a href="#">05/06/2021</a>
                      
                    </div>
                    <div class="mu-blog-description">
                          <p>Estimados, hemos agregado nuevos cursos y opciones para los administradores en el panel de control</p>
                      <a class="mu-read-more-btn" href="Noticia1.aspx">Leer más</a>
                    </div>
                  </article>
                </div>
    
         
              </div>
            </div>     
            <!-- end from blog content   -->   
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End from blog -->

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
