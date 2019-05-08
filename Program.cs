﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace AndCultureDemo
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                 .ConfigureAppConfiguration((builderContext, config) =>
                 {
                     IHostingEnvironment env = builderContext.HostingEnvironment;

                     config.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                     .Build();

                    //config.SetBasePath(Directory.GetCurrentDirectory())
                 })
                .UseIISIntegration()
                .UseKestrel()
                .UseStartup<Startup>()
                .Build();
    }
}