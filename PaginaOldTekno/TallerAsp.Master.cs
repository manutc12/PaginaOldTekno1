using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace johanacosta_taller1_tallerasp
{
    public partial class TallerAsp : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string usuariosession = Convert.ToString(Session["Usuario"]);
            lblUsername.Text = usuariosession;



        }

        protected void mamahuevo(object sender, EventArgs e)
        {
            Response.Redirect("Principal.aspx");
        }
        protected void mamahuevo1(object sender, EventArgs e)
        {
            Response.Redirect("Unidad1.aspx");


        }
    }
}