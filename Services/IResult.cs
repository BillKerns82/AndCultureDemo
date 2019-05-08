using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AndCultureDemo.Services
{
    public interface ITaskResult<T>
    {
        Task<T> GetResult(Object queryParams);
    }
}
