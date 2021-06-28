using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace PaginaOldTekno
{
    public partial class Recuperar : System.Web.UI.Page
    {

        public static string hola1;
        public static string hola2;
        public static string res1;

        public static string res2;



        protected void Page_Load(object sender, EventArgs e)
        {
            hola1 = "display: none";
            hola2 = "display: none";

        }
        protected void volver(object sender, EventArgs e) {
            Response.Redirect("Inicio.aspx");


        }


        protected void SendEmail(object sender, EventArgs e)
        {
            string mensaje = "";

            try
            {
                String resolucion = (ConfigurationManager.ConnectionStrings["taller_asp"].ConnectionString);
                string cadenaconexion = (resolucion);

                using (SqlConnection conn = new SqlConnection(cadenaconexion))
                {
                    SqlCommand cmd3 = new SqlCommand("EnviarRecuperar", conn);
                    cmd3.CommandType = CommandType.StoredProcedure;
                    cmd3.Parameters.AddWithValue("rut", Convert.ToString(TextBox1.Text));
                    cmd3.Parameters.AddWithValue("motivo", Convert.ToString(txtSubject.Text));
                    cmd3.Parameters.AddWithValue("mensajecontacto", Convert.ToString(txtNombre.Text) + " " + "pregunta" + "<br>" + Convert.ToString(TxtMessage.Text));
                    SqlParameter paramId = new SqlParameter("mensaje", SqlDbType.VarChar, 1000);
                    paramId.Direction = ParameterDirection.Output;
                    cmd3.Parameters.Add(paramId);
                    // ejecutamos la instruccion
                    conn.Open();
                    cmd3.ExecuteNonQuery();

                    //obtenemos el mensaje de la base de datos y lo convertimos a string
                    mensaje = Convert.ToString(cmd3.Parameters["mensaje"].Value);


                    if (mensaje == "Ingresa un rut correcto")
                    {

                        hola2 = "display: inline";
                        res2 = mensaje;


                    }
                    else
                    {
                        hola1 = "display: inline";

                        res1 = mensaje;
                    }

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