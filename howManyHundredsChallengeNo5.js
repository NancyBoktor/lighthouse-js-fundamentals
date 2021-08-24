function howManyHundreds (bottleNo){let containerNo = 0;
    if (bottleNo % 100 === 0){

         containerNo += (bottleNo/=100);

 }  else { let bottleLift = bottleNo % 100;

         bottleNo -= bottleLift;

         containerNo = (bottleNo/=100);

 }  return containerNo;
}
console.log(howManyHundreds (0));



