using AndCultureDemo.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace AndCultureDemo.Services.OpenBreweryDB
{
    public class OpenBrewery : IOpenBrewery<Brewery>
    {
        
        private string _breweryWebApiUrl = String.Empty;

        public OpenBrewery(IConfiguration config)
        {
            try
            {
                _breweryWebApiUrl = config["Connections:OpenBreweryDB:ConnectionString"];

            }
            catch (Exception e)
            {

            }
            finally
            {

            }
        }



        public Task<List<Brewery>> GetResult(Object queryArgs)
        {

            return new Task<List<Brewery>>(() =>
            {

                HttpWebRequest breweryHttpWebRequest = null;
                HttpWebResponse breweryHttpWebResponse = null;
                try
                {



                    breweryHttpWebRequest = (HttpWebRequest)WebRequest.Create(_breweryWebApiUrl + queryArgs.ToString());

                    breweryHttpWebResponse = (HttpWebResponse)breweryHttpWebRequest.GetResponse();

                    JsonSerializer jsonSerializer = new JsonSerializer();
                    JsonTextReader textReader = new JsonTextReader(new StreamReader(breweryHttpWebResponse.GetResponseStream()));
                    List<Brewery> breweryToReturn = (List<Brewery>)jsonSerializer.Deserialize(textReader, typeof(List<Brewery>));

                    return breweryToReturn;
                    
                }
                catch (Exception e)
                {

                }
                finally
                {
                    breweryHttpWebResponse.CloseAndDispose();
                }
                

                return null;
            });

        }

    }
}
