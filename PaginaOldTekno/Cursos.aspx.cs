using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ManuelTorres_WEBFORMS_ACTIVIDAD1
{
    public partial class Cursos : System.Web.UI.Page
    {
        public static string res;

        protected void Page_Load(object sender, EventArgs e)
        {
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
    }
}