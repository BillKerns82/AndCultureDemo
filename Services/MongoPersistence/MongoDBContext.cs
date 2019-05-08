using AndCultureDemo.Model;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AndCultureDemo.Services.MongoPersistence
{
    public class MongoDBContext : IMongoDB<Brewery>
    {

        private String _mongoConnectionString = String.Empty;
        private readonly IMongoCollection<Brewery> _brewery;
        public MongoDBContext(IConfiguration config)
        {
            try
            {
                _mongoConnectionString = config["Connections:MongoDB:ConnectionString"];

                MongoClient client = new MongoClient(_mongoConnectionString);
                IMongoDatabase database = client.GetDatabase("AndCultureDemo");
                _brewery = database.GetCollection<Brewery>("AndCultureCollection");

            }
            catch (Exception e)
            {

            }
            finally
            {

            }
        }

        public bool Create(Brewery brewery)
        {


            try
            {
                _brewery.InsertOne(brewery);
                return true;
            }
            catch (Exception e)
            {

            }
            finally
            {

            }

            return false;

        }

        public List<Brewery> Get(int id)
        {


            try
            {
                return _brewery.Find((book) => book.id == id).ToList();

            }
            catch (Exception e)
            {

            }
            finally
            {

            }

            return new List<Brewery>();


        }
    }

}
