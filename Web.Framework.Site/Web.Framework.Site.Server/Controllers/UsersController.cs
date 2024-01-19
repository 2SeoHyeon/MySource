using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace Web.Framework.Site.Server.Controllers
{
    public class UsersController : ApiController
    {
        // GET api/vi/users
        public List<string> Get()
        {
            return new List<string> { "value1", "value2" };
        }

        // GET api/vi/users/5
        public string Get(int UserId)
        {
            return "value";
        }

        // POST api/vi/users
        public void Post([FromBody] string value)
        {
        }

        // PUT api/vi/users/5
        public void Put(int id, [FromBody] string value)
        {
        }

        //// DELETE api/vi/users/5
        //public void Delete(int UserId)
        //{
        //}
    }
}
