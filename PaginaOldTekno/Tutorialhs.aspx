<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Tutorialhs.aspx.cs" Inherits="PaginaOldTekno.Tutorialhs" %>

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
           <h2>Que es Hardware y Software</h2>
           <ol class="breadcrumb">
            <li><a href="PaginaInicial.aspx">Inicio</a></li>            
            <li class="active"> Tutorial Hardware y Software</li>
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
                          <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/harsof.jpg" alt="img"></a>
                          <figcaption class="mu-latest-course-imgcaption">
                            <a href="#"></a>
                           
                          </figcaption>
                        </figure>
                          
<form action="../../form-result.php" method="post" enctype="multipart/form-data" target="_blank">

 

</form>
                        <div class="mu-latest-course-single-content">
                          <h2><a href="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutoharsof/harsof.docx" download="harsof.docx">Descarga aqui el documento</a></h2>
                            <h3><b>Hardware y Software</b></h3>
                           <p align="justify" style="font-size:140%">Para comenzar con este curso nos hacemos la siguiente pregunta ¿Que es Hardware y Software? Los invito a introducirse en este pequeño curso para que podamos juntos aprender sus diferencias y sus definiciones básicas.</p>
                            
                           
                          <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutoharsof/1.jpg" alt="img"></a>
                        <p align="justify" style="font-size:140%">• Hardware es el conjunto de componentes físicos de los que está hecho el equipo y software es el conjunto de programas o aplicaciones, instrucciones y reglas informáticas que hacen posible el funcionamiento del equipo.</p>
                           
                           <p align="justify" style="font-size:140%">• Ahora bien, en palabras sencillas podemos entender que hardware son componentes físicos que acompañan a nuestro equipo, mientras que el software son programas e instrucciones que ayudan a que nuestro equipo pueda funcionar y realizar sus tareas de forma adecuada, pero para el correcto funcionamiento de un equipo ya sea PC de escritorio como un Notebook necesitamos que nuestro hardware y software se encuentren en óptimas condiciones.</p>
                            <h3><b>Hardware:</b></h3>
                           <p align="justify" style="font-size:140%">• Hardware es una palabra inglesa que hace referencia a las partes físicas tangibles de un sistema informático, es decir, todo aquello que podemos tocar con las manos. Dentro del hardware encontramos una gran variedad de componentes eléctricos, electrónicos, electromecánicos y mecánicos. El hardware es el chasis del ordenador, los cables, los ventiladores, los periféricos y todos los componentes que se pueden encontrar en un dispositivo electrónico. La Real Academia Española lo define como «Conjunto de los componentes que integran la parte material de una computadora».</p>
                          <p align="justify" style="font-size:140%">• El término no solamente se aplica a los ordenadores, ya que es a menudo utilizado en otras áreas de la vida diaria y la tecnología como robots, teléfonos móviles, cámaras fotográficas, reproductores digitales o cualquier otro dispositivo electrónico. El hardware representa un concepto contrario al Software, la parte intangible de un sistema informático, es decir todo aquello que no podemos tocar físicamente.</p>
                           <p align="justify" style="font-size:140%">• Una forma de clasificar el hardware es en dos categorías: el hardware principal, que abarca el conjunto de componentes indispensables necesarios para otorgar la funcionalidad mínima, y por otro lado, el hardware complementario, que es el utilizado para realizar funciones específicas más allá de las básicas, no estrictamente necesarias para el funcionamiento del sistema informático.</p>
                            <h3><b>Ejemplos de Hardware: </b></h3>
                          <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutoharsof/2.jpg" alt="img"></a>
                           <h3><b>Software:</b></h3>
                          <p align="justify" style="font-size:140%">• El software es el conjunto de instrucciones que una computadora debe seguir, es decir, todas aquellas indicaciones sobre lo que tiene que hacer y cómo.
                          <br />La palabra software proviene del inglés; significa "mercancía suave", en contraposición con hardware, que significa "mercancía dura". <br />Hoy en día, la palabra software se ha globalizado como sinónimo de las instrucciones de las computadoras.
                          Si comparamos una computadora con un ser humano, el software vendría a ser como las señales del sistema nervioso que controlan el funcionamiento del cuerpo.
                          </p>
                          <h3><b>Ejemplos de Software:</b></h3>
                          <a href="#"><img src="assets/MarkUps-Varsity/Varsity/assets/img/courses/tutoharsof/3.jpg" alt="img"></a>
                         
                          <p align="justify" style="font-size:140%"><b>Relación entre el Hardware y Software:</b><br />
                          •	Hardware y software son mutuamente dependientes el uno del otro. Los dos deben trabajar juntos para hacer una computadora producen una salida útil.<br />
                          •	Software no puede utilizarse sin soporte hardware.<br />
                          •	Hardware sin conjunto de programas para operar sobre no puede ser utilizada y es inútil.<br />
                          •	Para realizar un trabajo particular en el equipo, se debe cargar software relevante en el hardware<br />
                          •	Hardware es un gasto único.<br />
                          •	Desarrollo de software es muy caro y es un gasto continuo.<br />
                          •	Aplicaciones diferentes pueden ser cargadas en un hardware para ejecutar trabajos diferentes.<br />
                          •	Un software actúa como una interfaz entre el usuario y el hardware.<br />
                          •	Si el hardware es el 'corazón' de un sistema informático, a continuación, el software es su 'alma'. Ambos son gratuitos para el otro.<br />

                         </p>
                          
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

