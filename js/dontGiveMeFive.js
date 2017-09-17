function dontGiveMeFive(start, end)
{
  let max=end-(start-1);
  for (var i = start; i <= end; i++){
    if(i.toString().indexOf('5') !== -1 ){
      max--;
    } 
  }
  return max;
}
console.log(dontGiveMeFive(1,9));
console.log(dontGiveMeFive(4,17));