// we will write a function that determines someone's age, given their date of birth.

function ageCalculator (name , yearOfBirth , currentYear){
    let age = currentYear - yearOfBirth;
    return (name + " is " + age + " years old.");
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

