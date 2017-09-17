function createPackage(small, big, goal) {
    // goal / big bags
    // get remainer
    // remaining goal / small bags
    // return count of small bags
    if (!goal) return 0;
    if (!big){
        if (goal<small) return goal;
        if (small<goal) return small;
    }  
    
    
    let currentGoal = goal; 
    let totalBigBagWeight = (big * 5);     
    
    if (small<(currentGoal - totalBigBagWeight)) return small;
    if (small>=(currentGoal - totalBigBagWeight)) return currentGoal - totalBigBagWeight

    //return currentGoal - totalBigBagWeight;
}
console.log(createPackage(4,1,12));
