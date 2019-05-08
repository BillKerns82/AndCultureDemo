using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AndCultureDemo.Services.MongoPersistence
{
    public interface IMongoDB<T>
    {

        Boolean Create(T brewery);

        List<T> Get(int id);

    }
}
