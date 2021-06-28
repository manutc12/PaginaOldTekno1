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
    public partial class PanelEliminar : System.Web.UI.Page
    {
        public static string hola1;
        protected void Page_Load(object sender, EventArgs e)
        {
            hola1 = "display: none";

        }

        protected void MenuAccion(object sender, EventArgs e)
        {


            hola1 = "display: inline";



        }
        protected void EliminarUsuario(object sender, EventArgs e)
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



                sql_conexion.Open();

                //ocumaos la conexion
                using (SqlConnection conexion = new SqlConnection(cadenaconexion))
                {
                    //ejecutamos el commando y llamado a procedimiento almacenado ocupando conexion web.config
                    SqlCommand cmd4 = new SqlCommand("Eliminar_usuario", sql_conexion);
                    //indicamos que es de tipo store procedure
                    cmd4.CommandType = CommandType.StoredProcedure;
                    //indicamos los parametros de entrada
                    cmd4.Parameters.AddWithValue("rut", rut);

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


            }





        }
    }
}