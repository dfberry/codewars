/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 
letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be 
returned as they are. Only letters from the latin/english alphabet should be shifted, 
like in the original Rot13 "implementation".

Please note that using "encode" in Python is considered cheating.

Test.describe("Rot13", function(){
  Test.it("test", function(){
    Test.expect("grfg" == rot13("test"), "Input: test , Expected Output: grfg , Actual Output: " + rot13("test"))
  })    
  Test.it("Test", function(){
    Test.expect("Grfg" == rot13("Test"), "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test"))    
  })
})

*/
/*
function rot13(message){

  const rot = 13;
  const upperA = 'A'.charCodeAt(0);
  const upperZ = 'Z'.charCodeAt(0);
  const lowerA = 'a'.charCodeAt(0);
  const lowerZ = 'z'.charCodeAt(0);

  let charArray = message.split("");

  // rot the char
  function change(beginning, end, characterCode){
    // no wrap around
    if((characterCode + rot) <= end) {
      return String.fromCharCode(characterCode + rot);
    } else {
      // wrap around
      let wrapAround = (rot - (end - characterCode))-1;
      return String.fromCharCode(beginning + wrapAround);
    }
  }
  
  for(let i = 0, max = charArray.length; i < max; i++){

    if( lowerA >= charArray[i].charCodeAt(0) <= lowerZ ) {
       charArray[i] = change(lowerA, lowerZ, charArray[i].charCodeAt(0));
    } else if ( upperA >= charArray[i].charCodeAt(0) <= upperZ ) {
      charArray[i] = change(upperA, upperZ, charArray[i].charCodeAt(0));
    } else {}
  };

  return charArray.join('');
}
*/
function rot13(message){
  const rot = 13;
  const upperA = 'A'.charCodeAt(0);
  const upperZ = 'Z'.charCodeAt(0);

  const lowerA = 'a'.charCodeAt(0);
  const lowerZ = 'z'.charCodeAt(0);

  let charArray = message.split("");

  console.log(charArray);


  // rot the char
  function change(beginning, end, characterCode){

    //console.log("char code = " + characterCode);

    // no wrap around
    if((characterCode + rot) <= end) {
      return String.fromCharCode(characterCode + rot);
    } else {
      // wrap around
      let wrapAround = (rot - (end - characterCode))-1;
      return String.fromCharCode(beginning + wrapAround);
    }
  }
  
  for(let i = 0, max = charArray.length; i < max; i++){

    console.log(charArray[i].charCodeAt(0));

  console.log(lowerA + " <= " + charArray[i].charCodeAt(0) + " <=" + lowerZ);
  //console.log(lowerZ);
  console.log(lowerA <= charArray[i].charCodeAt(0) <= lowerZ);
  //console.log(upperZ)

    if( (lowerA <= charArray[i].charCodeAt(0)) && (charArray[i].charCodeAt(0) <= lowerZ )) {
      console.log("lower");
       charArray[i] = change(lowerA, lowerZ, charArray[i].charCodeAt(0));
    } else if ( (upperA <= charArray[i].charCodeAt(0)) && (charArray[i].charCodeAt(0) <= upperZ ) ) {
      console.log("upper");
      
      charArray[i] = change(upperA, upperZ, charArray[i].charCodeAt(0));
    } else {}
  };

  return charArray.join('');
}
//console.log(rot13('grfg'));
//console.log(rot13('Grfg'));
console.log(rot13('TEST')=='GRFG');
//console.log(rot13('oooo'));