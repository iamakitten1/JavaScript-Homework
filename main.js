// console.log("This is working")

// // let myName = 'Maia'

// // const myNumber = 10
// // const myStrNumber = "10"
// // const myBoolean = true

// // console.log( typeof myNumber)
// // console.log( typeof myStrNumber)
// // console.log( typeof myBoolean)

// // console.log(myNumber === myStrNumber)



// // //  - 1 

// const a = 5
// const b = 1
// if(a + b === 15){
//     console.log(true)
// }else{
//     console.log(false)

// }


// // //  -2 
// // // first version

// function toCelsius(f) {
//     return (5/9) * (f-32);
//   }
//   console.log (toCelsius ("77")); 




// function fahrenheitToCelsius(fahrenheit) {
//     if (typeof fahrenheit !== 'number') {
//         return false;
//     }

//     let celsius = (fahrenheit - 32) * 5 / 9;
//     return celsius;
// }

// // 
// console.log(fahrenheitToCelsius(32));  
// console.log(fahrenheitToCelsius(212)); 
// console.log(fahrenheitToCelsius('100')); 
// console.log(fahrenheitToCelsius(null)); 
// console.log(fahrenheitToCelsius(98.6)); 




// // //   -3

// function calculate(a, b, operation) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return false;
//     }

//     switch (operation) {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             if (b !== 0) {
//                 return a / b;
//             } else {
//                 return false; // Division by zero case
//             }
//         default:
//             return false; // Invalid operation case
//     }
// }

// // // :
// console.log(calculate(10, 5, '+'));  
// console.log(calculate(10, 5, '-')); 
// console.log(calculate(10, 5, '*'));  
// console.log(calculate(10, 5, '/'));  
// console.log(calculate(10, 0, '/')); 
// console.log(calculate(10, '5', '+')); 
// console.log(calculate(10, 5, '^')); 


// //  davaleba-2 

// // 1
// const people = [
//     { name: 'Temo', age: 25 },
//     { name: 'Lasha', age: 21 },
//     { name: 'Ana', age: 28 }
// ];

// // function, for iangest user 

// function findYoungestPerson(people) {
//     if (people.length === 0) return null;

//     let youngest = people[0];

//     for (let i = 1; i < people.length; i++) {
//         if (people[i].age < youngest.age) {
//             youngest = people[i];
//         }
//     }

//     return youngest.name;
// }

// const youngestPersonName = findYoungestPerson(people);
// console.log(`The youngest person is: ${youngestPersonName}`);

// // 2
// // const userObject = (people) [0];
// // console.log(userObject);
   
// const person = { name: 'Ana', age: 28 };

// const newPerson = { ...person };

// function compareObjects(oldObj, newObj) {
//   console.log(oldObj === newObj); 
//   console.log(oldObj); 
//   console.log(newObj); 
// }

// compareObjects(person, newPerson);



// //3
// function rollDice() {
//     return Math.floor(Math.random() * 6) + 1;
// }

// function playGame() {
//     let aRolls = 0;
//     let bRolls = 0;

//     let aResult = 0;
//     let bResult = 0;

//     // User A rolls the dice until they get a 3
//     while (aResult !== 3) {
//         aResult = rollDice();
//         aRolls++;
//     }

//     // User B rolls the dice until they get a 3
//     while (bResult !== 3) {
//         bResult = rollDice();
//         bRolls++;
//     }

//     // Determine the winner
//     if (aRolls < bRolls) {
//         console.log(`User A wins! They rolled a 3 in ${aRolls} rolls.`);
//     } else if (bRolls < aRolls) {
//         console.log(`User B wins! They rolled a 3 in ${bRolls} rolls.`);
//     } else {
//         console.log(`It's a tie! Both users rolled a 3 in ${aRolls} rolls.`);
//     }
// }

// // Run the game
// playGame();


// დავალება 3 -1


function processNumbers(...numbers) {
    if (numbers.length <= 2) {
        throw new Error("Number of arguments must be greater than 2");
    }
    
    // Calculate the sum of the first two numbers
    const sum = numbers[0] + numbers[1];
    
    // Calculate the product of all numbers starting from the third one
    let product = 1;
    for (let i = 2; i < numbers.length; i++) {
        product *= numbers[i];
    }
    
    // Return the result as a 2-element array
    return [sum, product];
}

// Example usage:
const result = processNumbers(1, 2, 3, 4, 5);
console.log(result); // Output: [3, 60]



///-2
function getCity(user) {
    const { banks = [] } = user;
    const { address: { city } = {} } = banks[2] || {};
    return city;
  }
  
  
  const user = {
    name: "John Doe",
    banks: [
      { address: { city: "New York" } },
      { address: { city: "Los Angeles" } },
      { address: { city: "Chicago" } }
    ]
  };
  
  console.log(getCity(user)); // "Chicago"
  console.log(getCity({})); // undefined
  console.log(getCity({ banks: [] })); // undefined
  console.log(getCity({ banks: [{}, {}, {}] })); // undefined

  



  //-3 

  function deepClone(obj) {
   
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
   
    if (Array.isArray(obj)) {
      return obj.map(item => deepClone(item));
    }
  
    
    return Object.keys(obj).reduce((acc, key) => {
      acc[key] = deepClone(obj[key]);
      return acc;
    }, {});
  }
  
 
  const original = {
    a: 1,
    b: {
      c: 2,
      d: [3, 4, { e: 5 }]
    }
  };
  
  const copy = deepClone(original);
  console.log(copy); 
  console.log(copy !== original); 
  console.log(copy.b !== original.b); 
  console.log(copy.b.d !== original.b.d); 
  console.log(copy.b.d[2] !== original.b.d[2]); 
  





