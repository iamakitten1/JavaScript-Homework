
function expo(number, power, callback) {
    //
    if (power === 0) {
      return callback(1);
    }
    // 
    return expo(number, power - 1, function(result) {
      return callback(number * result);
    });
  }
  
  // 
  expo(5, 3, function(result) {
    console.log(result); // გამოიტანს 125
  });
  










// const age =30; 


// const user = {
//     name: 'Maia',
//     lastNmae: 'Kost',
//     username: '007',

// }
// const newUser = user;
// newUser.username = 'Agent 007';
// console.log(user.username);


// let A = 30
// let B = A

// A = 45
// console.log(A)
// console.log(B)



// const A = {
//         name: 'Maia',
//         lastNmae: 'Kost',
//         username: '007',
//     }

//     const B = A

//     A.lastNmae = 'kostanashvili'

//     console.log(A);
//     console.log(B);


// const arr = ['maia', 'giga', 'gio', 'nino']

// const A = {
//             name: 'Maia',
//             lastNmae: 'Kost',
//             username: '007',
//         }
// console.log(arr.length);
// console.log(arr[3]);


// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for(const name in arr){
//     console.log(name);
// }
// for(const names in A){
//     console.log(A[names]);
// }

// function randomNumber(){
//     return parseInt(Math.random() * 10)
// }

// const result = randomNumber()
// console.log(result)

// let message = 'kargad iyavi!';
 
// const angerLevel = 50;
 
// for(let i = 0; i <= angerLevel; i++) {
//     message =  '!' + message ;
// }

// console.log(message);

// const technologies = [ 'HTML', 'CSS', 'JavaScript', 'React'];
// let search = 'CSS';

// for (let i = 0; i < technologies.length; i++) {
//     console.log(`Looking for ${technologies[i]}`);

//     if (technologies[i] == search) {
//        console.log(`${search} Found!`);
//        break;    
// }
// }





// const people = [
//     {name: 'Temo', age: '25'},
//     {name: 'Lasha', age: '21'},
//     {name: 'Ana',   age: '28'}
// ]
// function forYongestUser(people) {

//     if (people.length === 0) return null;

//     let yongestUser = people[0];
   
//     for (let i = 1; i < people.length; i++) {
//         if (parseInt(people[i].age) > parseInt(yongestUser.age)) 
//             {
//              yongestUser = people[i]
              
//             }
//         }
//         return yongestUser.name     
//     }
//     const yongestUserName = forYongestUser(people);
//     console.log(yongestUserName);


// const person = {
//        name: 'Ana',
//        age: '28'
//     }

//     function copyPerson(person){
//         const newUser ={};
//         Object.entries(person). forEach(entry => newUser[entry[0]]= entry[1]);
        
//         return newUser
//     }

//    const userCopy = copyPerson(person);
//    console.log(userCopy);


//    person.name = 'maia';
//    console.log(person);
//    console.log(userCopy);
    



// const car = {
//     manufacturer: 'porsche',
//     brand: 'cayanne',
//     year: '2024',
//     color: 'red'
// }
// const manufacturer = car.manufacturer;
// const brand = car.brand;
// const year = car.year;
// const color = car.color;

// console.log(manufacturer, brand, year,color);

// const car = {
//     manufacturer: 'porsche',
//     brand: 'cayanne',
//     year: '2024',
//     color: 'red' 
// }

// const {manufacturer, brand, year, color} = car;

// console.log(manufacturer, brand, year, color);


// const user = {
//     firstName: 'Jmaes',
//     lastName: 'Bond',
//     profile: {
//         nickName: '007',
//         age: '40',
//         address: {
//             street: 'CimarosaN5',
//         }
//     }
// }

// const{firstName, lastName, profile: {nickName, age, address:{street}  }} = user;


// console.log(street);



// const car = {
//      manfacturer: 'porsche',
//      brand: 'cayanne',
//      owner: {
//         fullName: 'James Bond',
//      }
// }
// function printCar({manfacturer, brand, owner:{fullName}}) {
//     return manfacturer + ' ' + brand + ' ' + fullName;
    
// }
// console.log(printCar(car));

// const calculateSum = (a, b) => {
//      return a -b;
//     }

//     console.log(calculateSum(4, 5));


//     const calculateSum1 = (a, b) =>{
//         return a + b;
//     }
//     console.log(calculateSum1(4,10));

// const sayHello = (fullName, secondNmae) => 'Hello,' + fullName +' ' +secondNmae;
// console.log(sayHello('mk','Maia'));

// const newUser1 =(username) => {
//     return `hello ${username}`
// }
// console.log(newUser1('maia'));