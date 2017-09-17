using System;

namespace even_or_odd
{
  public class SolutionClass
  {
    public static string EvenOrOdd(int number)
    {
      return ((number % 2) == 0) ? "even" :"odd";
    }
  }
  
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(SolutionClass.EvenOrOdd(5));
        }
    }
}


