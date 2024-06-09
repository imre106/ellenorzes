using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace WpfAutoEladasok
{
    public class AutoAdatok
    {
        public string Country { get; set; }
        public double Sales_2005 { get; set; }
        public double Sales_2006 { get; set; }
        public double Sales_2007 { get; set; }
        public double Sales_2008 { get; set; }
        public double Sales_2009 { get; set; }
        public double Sales_2010 { get; set; }
        public double Sales_2011 { get; set; }
        public double Sales_2012 { get; set; }
        public double Sales_2013 { get; set; }
        public double Sales_2014 { get; set; }
        public double Sales_2015 { get; set; }
        public double Sales_2016 { get; set; }
        public double Sales_2017 { get; set; }
        public double Sales_2018 { get; set; }
        public double Sales_2019 { get; set; }
        public double Sales_2020 { get; set; }
        public double Sales_2021 { get; set; }
        public double Sales_2022 { get; set; }

        public AutoAdatok(string sor, char hatarolo)
        {
            var adatok = sor.Split(hatarolo);

            Country = adatok[0];
            Sales_2005 = ConvertToDouble(adatok[1].Replace(",", ""));
            Sales_2006 = ConvertToDouble(adatok[2].Replace(",", ""));
            Sales_2007 = ConvertToDouble(adatok[3].Replace(",", ""));
            Sales_2008 = ConvertToDouble(adatok[4].Replace(",", ""));
            Sales_2009 = ConvertToDouble(adatok[5].Replace(",", ""));
            Sales_2010 = ConvertToDouble(adatok[6].Replace(",", ""));
            Sales_2011 = ConvertToDouble(adatok[7].Replace(",", ""));
            Sales_2012 = ConvertToDouble(adatok[8].Replace(",", ""));
            Sales_2013 = ConvertToDouble(adatok[9].Replace(",", ""));
            Sales_2014 = ConvertToDouble(adatok[10].Replace(",", ""));
            Sales_2015 = ConvertToDouble(adatok[11].Replace(",", ""));
            Sales_2016 = ConvertToDouble(adatok[12].Replace(",", ""));
            Sales_2017 = ConvertToDouble(adatok[13].Replace(",", ""));
            Sales_2018 = ConvertToDouble(adatok[14].Replace(",", ""));
            Sales_2019 = ConvertToDouble(adatok[15].Replace(",", ""));
            Sales_2020 = ConvertToDouble(adatok[16].Replace(",", ""));
            Sales_2021 = ConvertToDouble(adatok[17].Replace(",", ""));
            Sales_2022 = ConvertToDouble(adatok[18].Replace(",", ""));

        }
        private double ConvertToDouble(string value)
        {
            if (string.IsNullOrEmpty(value))
            {
                return 0;
            }

            return double.Parse(value);
        }
    }
}
