using AndCultureDemo.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace AndCultureDemo.Services.OpenBreweryDB
{
    public interface IOpenBrewery<T>
    {
        Task<List<T>> GetResult(Object queryArgs);
    }
}
