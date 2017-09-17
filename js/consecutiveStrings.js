function longestConsec(strarr, k) {
    // your code
    let list = new Array(k);
    let found=false

    for(let i =0;i<strarr.length;i+k){

      // fill up comparison array
      for (let m=0;m<k;m++){
        list[m] = strarr[m];
      }

      let thisSetFound = null;

      for(let j=0;j<strarr.length;j+k){
        thisSetFound = areSameItems(list, strarr.slice(0,k)) ? strarr.slice(0,k) : null;
        if (thisSetFound) break;
      }
      if (thisSetFound) {
        found = thisSetFound;
      }
    }
}
function areSameItems(findlist, nextset){
  let areSame = findlist.every(val => nextset.indexOf(val) > -1);
  console.log("findlist = " + JSON.stringify(findlist) + " " + "nextset = " + JSON.stringify(nextset));
  console.log("areSame = " + areSame );
  return areSame;
}
function singleLoopComparison(findList,fullArray){
    for(let j=0;j<fullArray.length;j++){
      //console.log("j = " + j);
      thisSetFound = areSameItems(findList, fullArray.slice(j,findList.length)) ? fullArray.slice(j,findList.length) : null;
      if (thisSetFound) return thisSetFound;
    }  
}

//console.log(areSameItems([1],[1]));
//console.log(areSameItems([1,2],[2,1]));
//console.log(areSameItems([1,2,3],[2,1,4]));

console.log(singleLoopComparison([1,2],[1,2,3,4]));
console.log("done 1");
console.log(singleLoopComparison([1,2],[3,2,1,4]));