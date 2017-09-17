function bouncingBall(h,  bounce,  window) {
  // your code here
  let timesViewedInWindow = 0;
  
  if (h <= 0 ) return -1;
  if (0 >= bounce || bounce >= 1) return -1;
  if (window > h) return -1;
  
  console.log("initial tests passed");

  while(h >= window){
    //console.log("h = "+ h);
    //console.log("windows = " + window);
    //console.log("bounce = " + bounce);

    h = h * bounce;

    // count fall
    timesViewedInWindow++;

    // count bounce
    if (h >= window){
      timesViewedInWindow++;
    }
  }
  return timesViewedInWindow;
}
//console.log(bouncingBall(3.0, 1, 1.5));
//console.log(bouncingBall(3.0, 0.66, 1.5));
//console.log(bouncingBall(30.0, 0.66, 1.5));
function bouncingBall2(h,  bounce,  window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
  return rebounds;
}
console.log(bouncingBall2(3.0, 1, 1.5));
console.log(bouncingBall2(3.0, 0.66, 1.5));
console.log(bouncingBall2(30.0, 0.66, 1.5));