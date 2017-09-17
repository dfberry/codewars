//https://www.codewars.com/kata/filter-out-the-geese

Write a function, gooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

var geese = new[] { "African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher" };
For example, if this array were passed as an argument:

new string[] {"Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"}
Your function would return the following array:

new string[] {"Mallard", "Hook Bill", "Crested", "Blue Swedish"}
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.


