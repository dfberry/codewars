/*

Implement the function unique_in_order which takes 
as argument a sequence and returns a 
list of items without any elements 
with the same value next to each other 
and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

if string, convert to array

*/
function uniqueInOrder(x){
  if(!x)return;
  if("string" === typeof x ) x = x.split('');
  if (x.length===1) return x;

  console.log(x);

  let i=0,current=0,next= current+1;
  while(current<(x.length-1)){
    while(x[current]===x[next]){
      x.splice(next,1);
      next;
    }
    current++;
    next = current+1;
}
  return x;
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log([ 'A', 'B', 'C', 'D', 'A', 'B' ]);
//console.log(uniqueInOrder('ABBCcAD')==['A', 'B', 'C', 'c', 'A', 'D']); 
//console.log(uniqueInOrder([1,2,2,3,3]== [1,2,3] ));
//console.log(uniqueInOrder([1,1]));
//console.log(uniqueInOrder("aa"));