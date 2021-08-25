// range should be an array of 2 numbers representing the start and end values for the loop. 
function loopyLighthouse (range){
 // We will declare a new array contains all numbers from range[0] to [1].
 let newArray = [];
 // Using while loop to count from range[0]to[1].
    while (range[0] <= range[1]){
// Pushing all numbers to the newArray.
        newArray.push(range[0]);
// Increase the value of range[0] by one and starting a new around with while loop.
        range[0]++;
    } 
return newArray;
}











console.log (loopyLighthouse([15, 90]));