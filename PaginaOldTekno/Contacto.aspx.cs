using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Net;
using System.Net.Mail;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace ManuelTorres_WEBFORMS_ACTIVIDAD1
{
    public partial class Contacto : System.Web.UI.Page
    {

        public static string hola1;
        public static string hola2;
        public static string res1;

        public static string res2;
        public static string res;
        protected void Page_Load(object sender, EventArgs e)
        {

            hola1 = "display: none";
            hola2 = "display: none";
            string admin = Convert.ToString(Session["EsAdmin"]);

            if (admin == "si")
            {
                res = "display: inline";
            }
            else
            {
                res = "display: none";
            }
        }
        
        //protected void Button1_Click(object sender, EventArgs e)
        //{
        //    string body = "<body>" +
        //        "<h1>Bienvenido a OldTekno</h1>" +
        //        "<h4>Querido alumno</h4>" +
        //        "<span>wena compadre como estas ajajajaj kkkk</span>" +
        //        "<span> ven a estudiar</span>" +
        //        "<br/><br/><span>saludos</span>" +
        //        "</body>";

        //    SmtpClient smtp = new SmtpClient("smtp.gmail.com",587);
        //    smtp.Credentials = new NetworkCredential("manutc12@gmail.com","clonesvsdroides66");
        //    smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
        //    smtp.EnableSsl = true;
        //    smtp.UseDefaultCredentials = false;
        //    MailMessage mail = new MailMessage();
        //    mail.From = new MailAddress("manutc12@gmail.com","OldTekno");
        //    mail.To.Add(new MailAddress("juguerspartan92@gmail.com"));
        //    mail.Subject = "asunto compadre";
        //    mail.IsBodyHtml = true;
        //    mail.Body = body;
        //    smtp.Send(mail);
        //}

        protected void SendEmail(object sender, EventArgs e)
        {
            string rutc = Convert.ToString(Session["rutcontacto"]);
            try
            {
                String resolucion = (ConfigurationManager.ConnectionStrings["taller_asp"].ConnectionString);
                string cadenaconexion = (resolucion);
                string mensaje = "";

                using (SqlConnection conn = new SqlConnection(cadenaconexion))
                {
                    SqlCommand cmd3 = new SqlCommand("SendEmail", conn);
                    cmd3.CommandType = CommandType.StoredProcedure;

                    cmd3.Parameters.AddWithValue("rut", rutc);
                    cmd3.Parameters.AddWithValue("motivo", Convert.ToString(txtSubject.Text));
                    cmd3.Parameters.AddWithValue("mensajecontacto",Convert.ToString(TxtMessage.Text));
                    SqlParameter paramId = new SqlParameter("mensaje", SqlDbType.VarChar, 1000);
                    paramId.Direction = ParameterDirection.Output;
                    cmd3.Parameters.Add(paramId);
                    // ejecutamos la instruccion
                    conn.Open();
                    cmd3.ExecuteNonQuery();

                    //obtenemos el mensaje de la base de datos y lo convertimos a string
                    mensaje = Convert.ToString(cmd3.Parameters["mensaje"].Value);



                    if (mensaje == "Verifica los datos")
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