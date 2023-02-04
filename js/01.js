// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line

//     for (let i = 0; i < order.length; i += 1){
        
//         total += order[i];
//     }
//     // Change code above this line
//     return total;
// }
// console.log(calculateTotalPrice([164, 48, 291]));

// Task 21
// function findLongestWord(string) {
//     // Change code below this line

//     const arr = string.split(" ");
//     let word = arr[0];
//     for (let i = 1; i < arr.length - 1; i += 1) {
//         if (word.length < arr[i].length) {
//             word = arr[i];
            
//         }

// }
//     return word;
//     // Change code above this line
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

// Task 22
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     // Change code below this line
//     for (let i = min; i <= max; i += 1){
//         numbers.push(i);
//     }
//     // Change code above this line
//     return numbers;
// }
// console.log(createArrayOfNumbers(29, 34))

// Task 23
// function filterArray(numbers, value) {
//     // Change code below this line
//     const arr = [];
//     for (let i = 0; i < numbers.length; i += 1){
//         if (numbers[i] > value) {
//             arr.push(numbers[i]);
//         }
//     }
//     return arr;
//     // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 5));

// Task 24
// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
    
//     return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit("Pear"));

// Task 25
// function getCommonElements(array1, array2) {
//     // Change code below this line
//     const newArr = [];
//     for (let i = 0; i < array1.length; i += 1) {
//         if (array2.includes(array1[i])) {
//             newArr.push(array1[i]);
//         }
//     }
//     return newArr;
//     // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// // Task 26
// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line

//     for (let price of order) {
//         total += price;
//     }

//     // Change code above this line
//     return total;
// }
// console.log(calculateTotalPrice([164, 48, 291]));

// Tasc 27
// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];

//     for (let number of numbers) {
        
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     }

//     return filteredNumbers;
//     // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 5));

// Tasc 29
// function getEvenNumbers(start, end) {
//     // Change code below this line
//     const evenNumbers = [];
//     let number;

//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0)
//             evenNumbers.push(i);
//     }

//     return evenNumbers;
//     // Change code above this line
// }
// console.log(getEvenNumbers(7, 7));

// Tasc 32
// function includes(array, value) {
//     // Change code below this line
    
//     for (let i = 0; i <= array.length; i += 1) {
//         if (array[i] === value) {
//             return true;
//         }   
        
//     }
//     return false;
//     // Change code above this line
// }
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));