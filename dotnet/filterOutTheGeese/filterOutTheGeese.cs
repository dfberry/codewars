using System;
using System.Collections.Generic;
using System.Linq;

namespace CodeWars
{
  public static class Filter
  {
    public static IEnumerable<string> GooseFilter(IEnumerable<string> birds)
    {
      // return IEnumerable of string containing all of the strings in the input collection, except those that match strings in geese
      string[] geese = new string[] { "African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher" };

      List<string> list = new List<string>(geese);
      
      //List<string> onlyGeese = birds.Intersect(list).ToList();
      //List<string> noGeese = birds.Except(list).ToList();

      IEnumerable<string> fromCodeWars = birds.Where(bird => !geese.Contains(bird));

      return fromCodeWars;
    }
  }
}