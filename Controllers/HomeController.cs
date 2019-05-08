using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AndCultureDemo.Controllers
{
    public class HomeController : Controller
    {
        [HttpPost]
        public IActionResult Index()
        {
            return View();
        }
    }
}