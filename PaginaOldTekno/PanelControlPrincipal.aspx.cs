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
    public partial class PanelControlPrincipal : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            String cadenaconexion = ConfigurationManager.ConnectionStrings["taller_asp"].ConnectionString;
            //ocupamos cadena de conexion
            SqlConnection sql_conexion = new SqlConnection(cadenaconexion);
            //declaramos variables para almacenar los campos texbox creados

            //iniciamos la conexion
            sql_conexion.Open();

            //ocumaos la conexion
            using (SqlConnection conexion = new SqlConnection(cadenaconexion))
            {
                //ejecutamos el commando y llamado a procedimiento almacenado ocupando conexion web.config
                SqlDataAdapter sqlDa = new SqlDataAdapter("select * from USERLOG", conexion);
                //indicamos que es de tipo store procedure

                //indicamos los parametros de entrada

                DataTable dtbl = new DataTable();
                {

                }
                sqlDa.Fill(dtbl);
                //agregamos el parametro de salida y el tipo declarado en sql server bd
                GridView1.DataSource = dtbl;
                GridView1.DataBind();
                GridView1.Visible = true;



                //obtenemos el mensaje de la base de datos y lo convertimos a string

            }
            using (SqlConnection conexion = new SqlConnection(cadenaconexion))
            {
                //ejecutamos el commando y llamado a procedimiento almacenado ocupando conexion web.config
                SqlDataAdapter sqlDa1 = new SqlDataAdapter("select rut,nombre,apellidopaterno,apellidomaterno,VIGENTE_IND,WEB_PASSWORD from USUARIO", conexion);


                //indicamos que es de tipo store procedure

                //indicamos los parametros de entrada

                DataTable dtb2 = new DataTable();
                {

                }
                sqlDa1.Fill(dtb2);
                //agregamos el parametro de salida y el tipo declarado en sql server bd
                GridView2.DataSource = dtb2;
                GridView2.DataBind();
                GridView2.Visible = true;



                //obtenemos el mensaje de la base de datos y lo convertimos a string

            }
        }
    }
}