using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ManuelTorres_WEBFORMS_ACTIVIDAD1
{
    public partial class Inicio : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
            if (!IsPostBack)
            {
                Response.Cache.SetCacheability(HttpCacheability.ServerAndNoCache);
                Response.Cache.SetAllowResponseInBrowserHistory(false);
                Response.Cache.SetNoStore();
            }


        }

        protected void Grabar(object sender, EventArgs e)
        {
            //TxtRut.Text = "176069321-7";
            //TxtNombre.Text = "Camilo Antonion";
            Response.Write("<span style=color:red;>Se cambio Rut</span></br>");
            Response.Write("<span style=color:red;>Se cambio Nombre</span></br>");

        }

        protected void GrabarHtml(object sender, EventArgs e)
        {
            //redireccionamos a una pagina web
            Response.Redirect("https://www.aiep.cl/");
        }

        protected void Ingresar(object sender, EventArgs e)
        {
            try
            {

                string mensaje = ""; // variable de retorno msg base de datos
                //Cadena de Conexion desde el archivo Web.config
                String cadenaconexion = ConfigurationManager.ConnectionStrings["taller_asp"].ConnectionString;
                //ocupamos cadena de conexion
                SqlConnection sql_conexion = new SqlConnection(cadenaconexion);
                //declaramos variables para almacenar los campos texbox creados
                string Usuario = Txtusuario.Text;
                string Password = Txtcontraseña.Text;
                //iniciamos la conexion
                sql_conexion.Open();

                //ocumaos la conexion
                using (SqlConnection conexion = new SqlConnection(cadenaconexion))
                {
                    //ejecutamos el commando y llamado a procedimiento almacenado ocupando conexion web.config
                    SqlCommand cmd4 = new SqlCommand("login_OldTekno", sql_conexion);
                    //indicamos que es de tipo store procedure
                    cmd4.CommandType = CommandType.StoredProcedure;
                    //indicamos los parametros de entrada
                    cmd4.Parameters.AddWithValue("rut", Usuario);
                    cmd4.Parameters.AddWithValue("webpassin", Password);
                    //agregamos el parametro de salida y el tipo declarado en sql server bd
                    SqlParameter paramId = new SqlParameter("mensaje", SqlDbType.VarChar, 1000);
                    paramId.Direction = ParameterDirection.Output;
                    cmd4.Parameters.Add(paramId);
                    // ejecutamos la instruccion
                    cmd4.ExecuteNonQuery();

                    //obtenemos el mensaje de la base de datos y lo convertimos a string
                    mensaje = Convert.ToString(cmd4.Parameters["mensaje"].Value);

                    //cerramos la conexion
                    sql_conexion.Close();
                }

                // indiciamos si el mensaje contiene un . ya que el formato es usuario.apellido

                if (mensaje.IndexOf(".") < 0)
                {
                    
                    //si no lo encuentra mostramos un mensaje 
                    //instruccion para llamar codigo js desde c# , funcion alerta que se encuentra en mensajeria.js
                    ScriptManager.RegisterStartupScript(this, GetType(), "Aviso", "Alerta('" + mensaje + "');", true);
                }

                else
                {
                    //creamos una variable de session con el usuario.apellido
                    Session["Usuario"] = mensaje;
                    Session["rutcontacto"] = Usuario;
                    Session["EsAdmin"] = "no";
                    //redireccionamos a la pagina main
                    Response.Redirect("PaginaInicial.aspx");

                    //otro camino es ocupar parametros en las url pero debemos encapsularlos para tener mayor seguridad
                    //Response.Redirect("Main.aspx?v2.6&USUARIO=" + mensaje, false);

                }

            }


            catch (Exception ex)
            {
                string i;
                i = ex.ToString();

            }


        }
    }
}