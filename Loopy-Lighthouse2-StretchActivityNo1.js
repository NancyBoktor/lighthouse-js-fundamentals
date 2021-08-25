// range should be an array of 2 numbers representing the start and end values for the loop. 
function loopyLighthouse (range, multiples){
 // We will declare a new array contains all numbers from range[0] to [1].
 let newArray = [];
 // Using while loop to count from range[0]to[1].
    while (range[0] <= range[1]){ 
// Pushing all numbers to the newArray.
     newArray.push(range[0]);
     let i = 0;
  if ((newArray[i] % multiples[0] === 0) && (newArray % multiples[1] === 0)){
     newArray[i] = "BattyBeacon";
    return newArray;
            
  } else if (newArray[i] % multiples[0] === 0){
     newArray[i] = "Batty";
    return newArray;
            
  } else if (newArray[i] % multiples[1] === 0){
     newArray[i] = "Beacon";
    return newArray;
    }
// Increase the value of range[0] by one and starting a new around with while loop.
    range[0]++;
    } 
return newArray;
} 

console.log (loopyLighthouse([15, 90], [2, 5]));