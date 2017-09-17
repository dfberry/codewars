using System;
using CodeWars;
using System.Collections.Generic;
using System.Linq;

namespace filterOutTheGeese
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] noGeese = new string[] {"Mallard", "Hook Bill", "Crested", "Blue Swedish"};
            string[] onlyGeese =  {"Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"};

            //List<string> onlyGeese1 = Filter.GooseFilter(noGeese).ToList();
            //Console.WriteLine(String.Join(", ", onlyGeese1));

            List<string> onlyGeese2 = Filter.GooseFilter(onlyGeese).ToList();
            Console.WriteLine(String.Join(", ", onlyGeese2));


            
            
        }
    }
}
