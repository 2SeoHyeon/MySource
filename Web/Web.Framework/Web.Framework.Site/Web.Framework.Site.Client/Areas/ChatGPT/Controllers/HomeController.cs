using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web.Framework.Site.Client.Areas.ChatGPT.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            string Key = "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";

            ViewBag.Lottie = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";

            return View();
        }

        public ActionResult Game()
        {
            return View();
        }

        public ActionResult Test()
        {
            return View();
        }
    }
}