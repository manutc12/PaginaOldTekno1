<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="PaginaAdmin.aspx.cs" Inherits="ManuelTorres_WEBFORMS_ACTIVIDAD1.PaginaAdmin" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">

 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <%--   Favoricon--%>
    <link rel="shortcut icon" href="assets/MarkUps-Varsity/Varsity/assets/img/libro1.jpg" />
    <!-- CSS -->
    <link rel="stylesheet" href="assets/vendor/css/sweetalert2.css" />
    <link href="assets/vendor/css/bootstrap.css" rel="stylesheet" />
    <link href="assets/vendor/css/default.css" rel="stylesheet" />
    <link href="assets/vendor/css/login.css" rel="stylesheet" />
    <link href="assets/vendor/css/vegas.css" rel="stylesheet" />
    <link href="assets/vendor/css/sweetalert2.css" rel="stylesheet" />
      <link rel="stylesheet" href="assets/pure-css3-login-form/dist/style3.css">
    <!-- JS -->
    <script src="assets/vendor/js/jquery-3.5.1.js"></script>
       <script src="assets/vendor/js/mensajelogin.js"></script>

    <!-- Jquery -->
    <script src="assets/vendor/js/ajaxcore.js"></script>
    <!-- Ajax -->
    <script src="assets/vendor/js/sweetalert2.all.js"></script>
    <script src="assets/vendor/js/vegas.min.js"></script>
    <script src="assets/vendor/js/FormatoRut.js"></script>
    <!-- Sweetalert -->
    <title>Login Administrador</title>
</head>
<body>
    <%--    Inclusion de libreria vegas transicion de imagenes a etiqueta body de fondo--%>
<script>
    //Array of images which you want to show: Use path you want.
    var images = new Array('assets/vendor/img/img1.jpg', 'assets/vendor/img/img2.jpg');
    var nextimage = 0;
    doSlideshow();

    function doSlideshow() {
        if (nextimage >= images.length) { nextimage = 0; }
        $('body')
            .css('background-image', 'url("' + images[nextimage++] + '")')
            .fadeIn("slow", function () {




                setTimeout(doSlideshow, 5000);
            });
    }
</script>

    <!-- partial:index.partial.html -->
<div class="wrapper fadeInDown">
  <div id="formContent">
    <!-- Tabs Titles -->
    <h2 class="active">Admin </h2>
    <h2 class="inactive underlineHover"  ><a href="Inicio.aspx">Usuario </a></h2>

    <!-- Icon -->
    <div class="fadeIn first">
<%--      <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" />--%>
    </div>

    <!-- Login Form -->
    <form runat="server">
        <asp:TextBox ID="Txtusuario" class="fadeIn second" runat="server" placeholder="Usuario"></asp:TextBox>
        <asp:TextBox ID="Txtcontraseña" type="password" class="fadeIn third" runat="server"  placeholder="Contraseña"></asp:TextBox>
     
       <asp:Button ID="Button1" runat="server" class="fadeIn fourth" onclick="Ingresar"  Text="Ingresar" />
      
    </form>

    <!-- Remind Passowrd -->
   

  </div>
</div>

<!-- partial -->
</body>
</html>
