function largestOfFour(arr) {

  let largarr = [];

  arr.forEach(element => {
    let maxval = - Infinity;
    for(let i =0; i< element.length; i++){
      if(element[i] > maxval)
      {
        maxval = element[i]
      }}
    largarr.push(maxval);

  })
  console.log(largarr);
  return largarr;
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);