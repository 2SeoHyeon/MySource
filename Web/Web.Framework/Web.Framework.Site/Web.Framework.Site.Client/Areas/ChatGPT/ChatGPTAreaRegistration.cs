using System.Web.Mvc;

namespace Web.Framework.Site.Client.Areas.ChatGPT
{
    public class ChatGPTAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "ChatGPT";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "ChatGPT_default",
                "ChatGPT/{controller}/{action}/{id}",
                new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}