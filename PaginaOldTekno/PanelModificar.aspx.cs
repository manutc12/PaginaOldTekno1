using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace PaginaOldTekno
{
    
    public partial class PanelModificar : System.Web.UI.Page
    {
        public static string hola1;
        public static string hola2;
        protected void Page_Load(object sender, EventArgs e)
        {
            hola1 = "display: none";
            hola2 = "display: none";
        }
        protected void MenuAccion(object sender, EventArgs e)
        {


            hola1 = "display: inline";



        }
        protected void MenuAccion1(object sender, EventArgs e)
        {


            hola2 = "display: inline";



        }

        protected void CambiarContraseña(object sender, EventArgs e)
        {
            try
            {
                string mensaje = ""; // variable de retorno msg base de datos
                //Cadena de Conexion desde el archivo Web.config
                String cadenaconexion = ConfigurationManager.ConnectionStrings["taller_asp"].ConnectionString;
                //ocupamos cadena de conexion
                SqlConnection sql_conexion = new SqlConnection(cadenaconexion);
                //declaramos variables para almacenar los campos texbox creados
                string rut = Convert.ToString(TextBox1.Text);
                string contraseña = Convert.ToString(TextBox2.Text);
        

                sql_conexion.Open();

                //ocumaos la conexion
                using (SqlConnection conexion = new SqlConnection(cadenaconexion))
                {
                    //ejecutamos el commando y llamado a procedimiento almacenado ocupando conexion web.config
                    SqlCommand cmd4 = new SqlCommand("actualizar_contraseña", sql_conexion);
                    //indicamos que es de tipo store procedure
                    cmd4.CommandType = CommandType.StoredProcedure;
                    //indicamos los parametros de entrada
                    cmd4.Parameters.AddWithValue("rut", rut);
                    cmd4.Parameters.AddWithValue("contranueva", contraseña);
                    SqlParameter paramId = new SqlParameter("mensaje", SqlDbType.VarChar, 1000);
                    paramId.Direction = ParameterDirection.Output;
                    cmd4.Parameters.Add(paramId);
                    //agregamos el parametro de salida y el tipo declarado en sql server bd
                    // ejecutamos la instruccion
                    cmd4.ExecuteNonQuery();
                    mensaje = Convert.ToString(cmd4.Parameters["mensaje"].Value);

                    //obtenemos el mensaje de la base de datos y lo convertimos a string
                    //cerramos la conexion
                    sql_conexion.Close();
                    StringBuilder sbMensaje = new StringBuilder();
                    //Aperturamos la escritura de Javascript
                    sbMensaje.Append("<script type='text/javascript'>");
                    //Le indicamos al alert que mensaje va mostrar
                    sbMensaje.AppendFormat("alert('{0}');", mensaje);
                    //Cerramos el Script
                    sbMensaje.Append("</script>");
                    //Registramos el Script escrito en el StringBuilder
                    ClientScript.RegisterClientScriptBlock(this.GetType(), "mensaje", sbMensaje.ToString());
                }

                // indiciamos si el mensaje contiene un . ya que el formato es usuario.apellido



            }


            catch (Exception ex)
            {
                string i;
                i = ex.ToString();
                StringBuilder sbMensaje = new StringBuilder();
                //Aperturamos la escritura de Javascript
                sbMensaje.Append("<script type='text/javascript'>");
                //Le indicamos al alert que mensaje va mostrar
                sbMensaje.AppendFormat("alert('{0}');", Label1.Text = "Vuelve a intentar ingresar nuevamente");
                //Cerramos el Script
                sbMensaje.Append("</script>");
                //Registramos el Script escrito en el StringBuilder
                ClientScript.RegisterClientScriptBlock(this.GetType(), "mensaje", sbMensaje.ToString());
            }

        }
        protected void CambiarVigencia(object sender, EventArgs e)
        {
            try
            {
                string mensaje = ""; // variable de retorno msg base de datos
                //Cadena de Conexion desde el archivo Web.config
                String cadenaconexion = ConfigurationManager.ConnectionStrings["taller_asp"].ConnectionString;
                //ocupamos cadena de conexion
                SqlConnection sql_conexion = new SqlConnection(cadenaconexion);
                //declaramos variables para almacenar los campos texbox creados
                string rut = Convert.ToString(TextBox3.Text);
                string vigencia = Convert.ToString(DropDownList2.SelectedValue);


                sql_conexion.Open();

                //ocumaos la conexion
                using (SqlConnection conexion = new SqlConnection(cadenaconexion))
                {
                    //ejecutamos el commando y llamado a procedimiento almacenado ocupando conexion web.config
                    SqlCommand cmd4 = new SqlCommand("actualizar_vigencia", sql_conexion);
                    //indicamos que es de tipo store procedure
                    cmd4.CommandType = CommandType.StoredProcedure;
                    //indicamos los parametros de entrada
                    cmd4.Parameters.AddWithValue("rut", rut);
                    cmd4.Parameters.AddWithValue("vigencianueva", vigencia);
                    SqlParameter paramId = new SqlParameter("mensaje", SqlDbType.VarChar, 1000);
                    paramId.Direction = ParameterDirection.Output;
                    cmd4.Parameters.Add(paramId);
                    //agregamos el parametro de salida y el tipo declarado en sql server bd
                    // ejecutamos la instruccion
                    cmd4.ExecuteNonQuery();
                    mensaje = Convert.ToString(cmd4.Parameters["mensaje"].Value);
                    //agregamos el parametro de salida y el tipo declarado en sql server bd
                    // ejecutamos la instruccion
                  

                    //obtenemos el mensaje de la base de datos y lo convertimos a string
                    //cerramos la conexion
                    sql_conexion.Close();
                    StringBuilder sbMensaje = new StringBuilder();
                    //Aperturamos la escritura de Javascript
                    sbMensaje.Append("<script type='text/javascript'>");
                    //Le indicamos al alert que mensaje va mostrar
                    sbMensaje.AppendFormat("alert('{0}');", mensaje);
                    //Cerramos el Script
                    sbMensaje.Append("</script>");
                    //Registramos el Script escrito en el StringBuilder
                    ClientScript.RegisterClientScriptBlock(this.GetType(), "mensaje", sbMensaje.ToString());
                }

                // indiciamos si el mensaje contiene un . ya que el formato es usuario.apellido



            }


            catch (Exception ex)
            {
                string i;
                i = ex.ToString();
                StringBuilder sbMensaje = new StringBuilder();
                //Aperturamos la escritura de Javascript
                sbMensaje.Append("<script type='text/javascript'>");
                //Le indicamos al alert que mensaje va mostrar
                sbMensaje.AppendFormat("alert('{0}');", Label1.Text = "Vuelve a intentar ingresar nuevamente");
                //Cerramos el Script
                sbMensaje.Append("</script>");
                //Registramos el Script escrito en el StringBuilder
                ClientScript.RegisterClientScriptBlock(this.GetType(), "mensaje", sbMensaje.ToString());
            }

        }




    }
}