function tripleThreat(a) {
    if (!a || a.length<3) return 0;
    
    for(let i = 0, max = (a.length-2); i<max;i++){
        let currentNum = a[i];
        console.log(currentNum);
        if(a[i+2]===currentNum+2 && a[i+1]===currentNum+1){
            return 1;
        }
    }
    return 0;
}
test1 = [0, 5, 11,12,13, 22, 25];
console.log(tripleThreat(test1));