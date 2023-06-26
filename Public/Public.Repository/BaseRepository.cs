using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Public.Repository
{
    public class BaseRepository
    {
        private readonly IConfiguration _configuration;

        public BaseRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string GetConnectInfo()
        {
            string connectInfo = _configuration.GetConnectionString("ConnectionInfo");

            return connectInfo;
        }
    }
}
