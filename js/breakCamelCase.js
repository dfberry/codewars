/*

Complete the solution so that the function will break up camel casing, using a space between words.

Example

solution('camelCasing') // => should return 'camel Casing'


*/
function solution(str) {

  if(!str)return;

  let oldString = str.split('');
  let newString = [];

    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0,max=str.length;i<max;i++){
      if(oldString[i]===oldString[i].toUpperCase()) {
        newString.push(' ');
      }
      newString.push(oldString[i]);
    }
    return newString.join('');
}
console.log(solution('camelCasing'));