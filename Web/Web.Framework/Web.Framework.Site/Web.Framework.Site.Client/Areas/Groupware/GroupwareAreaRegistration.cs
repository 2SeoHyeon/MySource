using System.Web.Mvc;

namespace Web.Framework.Site.Client.Areas.Groupware
{
    public class GroupwareAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Groupware";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Groupware",
                "Groupware/{controller}/{action}/{id}",
                new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}