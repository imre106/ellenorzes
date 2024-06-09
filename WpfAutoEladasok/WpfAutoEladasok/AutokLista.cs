using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfAutoEladasok
{
    public class AutokLista
    {
        private List<AutoAdatok> autoAdatok;
        public List<AutoAdatok> AutoAdatok { get { return autoAdatok; } }

        public AutokLista(string fajl, char hatarolo, int start = 1)
        {
            autoAdatok = new List<AutoAdatok>();

            var sorok = File.ReadAllLines(fajl, Encoding.Default);

            for (int i = start; i < sorok.Length; i++)
            {
                autoAdatok.Add(new AutoAdatok(sorok[i], hatarolo));
            }
        }
    }
}
