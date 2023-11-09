using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace Public.Repository.NewFolder1
{
    public class test
    {
        public dynamic solution()
        {
            List<int> pricelist = new List<int>();

            Random r = new Random();

            for (int i = 0; i < r.Next(2, 100); i++)
            {
                int a = r.Next(1, 20);

                pricelist.Add(a);
            }

            List<int> list = new List<int>();

            for (int i = 0; i < pricelist.Count; i++)
            {
                int price = pricelist[i];
                int rtn = 0;

                foreach (var p in pricelist.Skip(i + 1))
                {
                    if(price <= p)
                    {
                        rtn += 1;
                    }
                    else
                    {
                        break;
                    }
                }

                list.Add(rtn);
            }

            return new { pricelist, list };
        }
    }
}