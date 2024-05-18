console.log("This is working")

// let myName = 'Maia'

// const myNumber = 10
// const myStrNumber = "10"
// const myBoolean = true

// console.log( typeof myNumber)
// console.log( typeof myStrNumber)
// console.log( typeof myBoolean)

// console.log(myNumber === myStrNumber)



//  - 1 

const a = 5
const b = 1
if(a + b === 15){
    console.log(true)
}else{
    console.log(false)

}


//  -2 
// first version

function toCelsius(f) {
    return (5/9) * (f-32);
  }
  console.log (toCelsius ("77")); 


// second verson

function fahrenheitToCelsius(fahrenheit) {
    if (typeof fahrenheit !== 'number') {
        return false;
    }

    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

// 
console.log(fahrenheitToCelsius(32));  
console.log(fahrenheitToCelsius(212)); 
console.log(fahrenheitToCelsius('100')); 
console.log(fahrenheitToCelsius(null)); 
console.log(fahrenheitToCelsius(98.6)); 




//   -3

function calculate(a, b, operation) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return false;
    }

    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b !== 0) {
                return a / b;
            } else {
                return false; // Division by zero case
            }
        default:
            return false; // Invalid operation case
    }
}

// :
console.log(calculate(10, 5, '+'));  
console.log(calculate(10, 5, '-')); 
console.log(calculate(10, 5, '*'));  
console.log(calculate(10, 5, '/'));  
console.log(calculate(10, 0, '/')); 
console.log(calculate(10, '5', '+')); 
console.log(calculate(10, 5, '^')); 