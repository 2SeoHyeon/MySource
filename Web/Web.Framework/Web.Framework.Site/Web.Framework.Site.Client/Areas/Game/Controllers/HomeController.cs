using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web.Framework.Site.Client.Areas.Game.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Lottie = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";

            return View();
        }

        public ActionResult Game()
        {
            return View();
        }
    }
}