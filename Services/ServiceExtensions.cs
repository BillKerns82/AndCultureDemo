using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AndCultureDemo.Services
{
    public static class ServiceExtensions
    {
        public static void CloseAndDispose(this IDisposable disposable)
        {
            if(disposable != null)
            {
                disposable.Dispose();
            }
        }
    }
}
