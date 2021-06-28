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
    public partial class PanelAgregar : System.Web.UI.Page
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

        protected void InsertarUsuario(object sender, EventArgs e)
        {
            
            try
            {
                string mensaje = "";
                 // variable de retorno msg base de datos
                //Cadena de Conexion desde el archivo Web.config
                String cadenaconexion = ConfigurationManager.ConnectionStrings["taller_asp"].ConnectionString;
                //ocupamos cadena de conexion
                SqlConnection sql_conexion = new SqlConnection(cadenaconexion);
                //declaramos variables para almacenar los campos texbox creados
                int Id = Convert.ToInt32(TextBox1.Text);
                string Rut = Convert.ToString(TextBox2.Text);
                string Nombre = Convert.ToString(TextBox3.Text);
                string ApellidoP = Convert.ToString(TextBox4.Text);
                string ApellidoM = Convert.ToString(TextBox5.Text);
                string Fecha = Convert.ToString(TextBox6.Text);
                string Direccion = Convert.ToString(TextBox7.Text);
                string Telefono = Convert.ToString(TextBox8.Text);
                string Cargo = Convert.ToString(DropDownList1.SelectedValue);
                string Vigente = Convert.ToString(DropDownList2.SelectedValue);
                string Contraseña = Convert.ToString(TextBox11.Text);
                string Email = Convert.ToString(TextBox12.Text);

                sql_conexion.Open();

                //ocumaos la conexion
                using (SqlConnection conexion = new SqlConnection(cadenaconexion))
                {
                    //ejecutamos el commando y llamado a procedimiento almacenado ocupando conexion web.config
                    SqlCommand cmd4 = new SqlCommand("InsertarUsuario", sql_conexion);
                    //indicamos que es de tipo store procedure
                    cmd4.CommandType = CommandType.StoredProcedure;
                    //indicamos los parametros de entrada
                    cmd4.Parameters.AddWithValue("Id", Id);
                    cmd4.Parameters.AddWithValue("rut", Rut);
                    cmd4.Parameters.AddWithValue("nombre", Nombre);
                    cmd4.Parameters.AddWithValue("apellidopaterno", ApellidoP);
                    cmd4.Parameters.AddWithValue("apellidomaterno", ApellidoM);
                    cmd4.Parameters.AddWithValue("fechanacimiento", Fecha);
                    cmd4.Parameters.AddWithValue("direccion", Direccion);
                    cmd4.Parameters.AddWithValue("telefono", Telefono);
                    cmd4.Parameters.AddWithValue("cargo", Cargo);
                    cmd4.Parameters.AddWithValue("vigente", Vigente);
                    cmd4.Parameters.AddWithValue("contraseña", Contraseña);
                    cmd4.Parameters.AddWithValue("email", Email);
                    //agregamos el parametro de salida y el tipo declarado en sql server bd
                    // ejecutamos la instruccion
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
                    sbMensaje.AppendFormat("alert('{0}');",  mensaje);
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
                sbMensaje.AppendFormat("alert('{0}');", "Por favor ingresar todos los datos correctamente");
                //Cerramos el Script
                sbMensaje.Append("</script>");
                //Registramos el Script escrito en el StringBuilder
                ClientScript.RegisterClientScriptBlock(this.GetType(), "mensaje", sbMensaje.ToString());

            }

        }
    }
}