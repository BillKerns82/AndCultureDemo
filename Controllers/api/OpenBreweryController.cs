using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using Microsoft.Extensions.DependencyInjection;
using AndCultureDemo.Services.OpenBreweryDB;
using Microsoft.Extensions.Configuration;
using System.IO;
using AndCultureDemo.Model;
using Newtonsoft.Json;
using System.Text;

namespace AndCultureDemo.Controllers.api
{
    [Route("api/OpenBrewery")]
    public class OpenBreweryController : Controller
    {


        public IServiceProvider ServiceProvider { get; set; }


        public OpenBreweryController(IServiceProvider provider,IConfiguration configuration)
        {
            ServiceProvider = provider;
        }


        // GET api/values
        [HttpGet]
        public ActionResult Get()
        {

		Task<List<Brewery>> toExecute = null;

            try
            {
                IOpenBrewery<Brewery> breweryService = ServiceProvider.GetService<IOpenBrewery<Brewery>>();
                toExecute = breweryService.GetResult(Request.QueryString.Value);
                toExecute.Start();
                Task<Stream>.WaitAll(toExecute);
                return Json(toExecute.Result);

            }
            catch (Exception e)
            {

            }
            finally
            {
		if(toExecute != null)
		{
			toExecute.Dispose();
		}
            }
            return new BadRequestResult();
        }
    }
}
