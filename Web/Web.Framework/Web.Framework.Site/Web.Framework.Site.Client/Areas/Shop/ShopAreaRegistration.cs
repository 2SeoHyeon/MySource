﻿using System.Web.Mvc;

namespace Web.Framework.Site.Client.Areas.Shop
{
    public class ShopAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Shop";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Shop_default",
                "Shop/{controller}/{action}/{id}",
                new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}