using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfAutoEladasok
{
    internal class Program
    {
        static void Main(string[] args)
        {
            AutokLista autokLista = null;
            try
            {
                autokLista = new AutokLista("car_sales_data_v2.csv", ';');
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.StackTrace);
            }

            // 1. Írassa ki, hogy hány ország adatait tartalmazza a fájl!
            Console.WriteLine($"1. A fájl {autokLista.AutoAdatok.Count} ország adatait tartalmazza.");

            // 2. Írassa ki az országok neveit, ABC sorrendben!
            List<string> orszagNevek = autokLista.AutoAdatok.Select(x => x.Country).OrderBy(x => x).ToList();
            Console.WriteLine("\n2. Az országok nevei ABC sorrendben:");
            foreach (var country in orszagNevek)
            {
                Console.WriteLine(country);
            }

            // 3. Melyik ország adta el a legtöbb autót 2010-ben?
            var maxSales2010 = autokLista.AutoAdatok.Max(x => x.Sales_2010);
            var countryWithMaxSales2010 = autokLista.AutoAdatok.FirstOrDefault(x => x.Sales_2010 == maxSales2010).Country;
            Console.WriteLine($"\n3. A legtöbb autót 2010-ben adta el: {countryWithMaxSales2010}");

            //4. Melyik ország adta el a legtöbb autót?

            var orszagokEladottAutoSzam = autokLista.AutoAdatok
                .Select(adatok => new { Orszag = adatok.Country, EladottAutokSzama = adatok.Sales_2005 + adatok.Sales_2006 + adatok.Sales_2007 + adatok.Sales_2008 + adatok.Sales_2009 + adatok.Sales_2010 + adatok.Sales_2011 + adatok.Sales_2012 + adatok.Sales_2013 + adatok.Sales_2014 + adatok.Sales_2015 + adatok.Sales_2016 + adatok.Sales_2017 + adatok.Sales_2018 + adatok.Sales_2019 + adatok.Sales_2020 + adatok.Sales_2021 + adatok.Sales_2022 })
                .OrderBy(adatok => adatok.EladottAutokSzama)
                .ToList();
            var legtöbbAutoEladoOrszag = orszagokEladottAutoSzam.Last();
            Console.WriteLine($"\n4. Melyik ország adta el a legtöbb autót? {legtöbbAutoEladoOrszag.Orszag}");

            // 5. Melyik ország adta el a legkevesebb autót (0 értékeket ne vegye figyelembe)?
            var legkevesebbAutoEladoOrszag = orszagokEladottAutoSzam.First();
            Console.WriteLine($"\n5. Melyik ország adta el a legkevesebb autót (0 értékeket nem számítva)? {legkevesebbAutoEladoOrszag.Orszag}");

            // 6. Melyik évben adták el a legtöbb autót?
            var evEladottAutoSzam = new Dictionary<int, double>();
            for (int ev = 2005; ev <= 2022; ev++)
            {
                var osszesEladasAdottEvben = autokLista.AutoAdatok.Sum(adatok => adatok.GetType().GetProperty($"Sales_{ev}").GetValue(adatok) as double ? ?? 0);
                evEladottAutoSzam.Add(ev, osszesEladasAdottEvben);
            }
            var legtobbAutoEladoEv = evEladottAutoSzam.OrderByDescending(kv => kv.Value).First();
            Console.WriteLine($"\n6. Melyik évben adták el a legtöbb autót? {legtobbAutoEladoEv.Key}");

            //7. Melyik évben adták el a legkevesebb autót(0 értékeket ne vegye figyelembe)?

            var evEladottAutoSzam1 = new Dictionary<int, double>();
            for (int ev = 2005; ev <= 2022; ev++)
            {
                var osszesEladasAdottEvben = autokLista.AutoAdatok.Sum(adatok => adatok.GetType().GetProperty($"Sales_{ev}").GetValue(adatok) as double? ?? 0);
                evEladottAutoSzam1.Add(ev, osszesEladasAdottEvben);
            }
            var legkevesebbAutoEladoEv = evEladottAutoSzam1.OrderByDescending(kv => kv.Value).Last();
            Console.WriteLine($"\n7. Melyik évben adták el a legkevesebb autót(0 értékeket ne vegye figyelembe)? {legkevesebbAutoEladoEv.Key}");


            //8. Írassa ki a fájl adatait úgy, hogy az output fájl sorának felépítése a következő legyen: country;year;sale
            using (StreamWriter writer = new StreamWriter("output.csv"))
            {
                writer.WriteLine("country;year;sale");

                foreach (var autoAdatok in autokLista.AutoAdatok)
                {
                    for (int ev = 2005; ev <= 2022; ev++)
                    {
                        double eladottAutok = (double)autoAdatok.GetType().GetProperty($"Sales_{ev}").GetValue(autoAdatok);
                        writer.WriteLine($"{autoAdatok.Country};{ev};{eladottAutok}");
                    }
                }
            }

            Console.WriteLine("\n8.Írassa ki a fájl adatait úgy, hogy az output fájl sorának felépítése a következő legyen: country; year; sale");
            Console.WriteLine("\nA fájl sikeresen létre lett hozva.");

            Console.ReadKey();
        }
    }
}
