using Public.Repository.NewFolder1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI.WebControls.WebParts;

namespace Web.Framework.Site.Client.Controllers
{
    public class MainController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Detail(string Type)
        {
            ViewBag.Type = Type;

            return View();
        }

        [HttpPost]
        public JsonResult Solution()
        {
            test t = new test();

            dynamic d = t.solution();

            return Json(d);
        }

        [HttpPost]
        public JsonResult Testing()
        {
            Random random = new Random();

            int Count = random.Next(500, 100000);
            double OverCount = Math.Ceiling(Count + (Count * 0.05));
            int Part = 1;

            for (int i = 1; i < OverCount.ToString().Length; i++)
            {
                Part *= 10;
            }

            Part = Part / 10;

            double MaxCount = OverCount + Part - (OverCount % Part);

            return Json(new { Count, OverCount, Part, MaxCount });
        }
    }
}