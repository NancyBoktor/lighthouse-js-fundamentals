// use some_array.push(some_value)
// creat array of the even numbers 

function range (start, end, step){             
// Declare variable to collect the even numbers.
    let evenNo = [];                          
// We have two conditions that will return the evenNo variable = [] empty array.
    if ((start > end) || (step <= 0)){           

     return evenNo;
    }
// Using for loop to check every element in the array between start & end number.
// The start no will increase by step no every time the loop round until reach the end no.
    for (let i = start; i <= end; i+= step){
// To know if the no is even or odd, we use %.
       if (i % 2 === 0){
// if the no is even, we will push it to the evenNo variable.
             evenNo.push(i);
        }
    }
    return evenNo;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
