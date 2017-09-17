    using System;


using System.Collections.Generic;
using System.Linq;

    namespace squareEveryDigit
    {
        class Program
        {
            /*
            Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out.

Note: The function accepts an integer and returns an integer
             */
            public static int SquareDigits(int n)
            {
                // convert int to string
                string myNumberAsString = n.ToString();

                // convert string to array of strings - each string is of a single char
                List<string> myCharArray = myNumberAsString.Select(x => x.ToString()).ToList();
                
                // convert each string to an int - still in a list
                List<int> myIntArray = myCharArray.Select(x => Int32.Parse(x)).ToList();

                // square each int
                List<int> mySquareArray = myIntArray.Select(x => x * x).ToList();

                // convert each int back into string
                List<string> mySquareStringArray = mySquareArray.Select(x => x.ToString()).ToList();

                // squash string[] into string
                string mySquareString = String.Join("",mySquareStringArray);

                // convert string into int
                int mySquareInt = Int32.Parse(mySquareString);
                
                return mySquareInt;
            }
    
            static void Main(string[] args)
            {
                Console.WriteLine(Program.SquareDigits(9119));
            }
        }
    }
