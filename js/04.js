// Tasc 1
// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// console.log(makePizza());
// console.log(makePizza);

// Tasc 2
// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

// Tasc 3
// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
// });

// Tasc 4
// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, makePizza, onOrderError) {
//         if (pizzaPalace.pizzas.includes(pizzaName)) {
//         return makePizza(pizzaName);
//     }
//         const error = `There is no pizza with a name ${pizzaName} in the assortment.`
//         return onOrderError(error);
// }

// };
// // Change code above this line


// // Callback for onSuccess
// function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//     return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));

// Tasc 5
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     //     totalPrice += orderedItems[i];
//     // }

//     orderedItems.forEach(orderedItems => {
//         totalPrice += orderedItems;
//     });

//     // Change code above this line
//     return totalPrice;
// }
// console.log(calculateTotalPrice([164, 48, 291]))

// Tasc 6 (refactoring forEach)

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line

//     numbers.forEach((number) => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     // for (let i = 0; i < numbers.length; i += 1) {
//     //     if (numbers[i] > value) {
//     //         filteredNumbers.push(numbers[i]);
//     //     }
//     // }

//     // Change code above this line
//     return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// Tasc 7
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line

//     // for (let i = 0; i < firstArray.length; i += 1) {
//     //     if (secondArray.includes(firstArray[i])) {
//     //         commonElements.push(firstArray[i]);
//     //     }
//     // }

//     firstArray.forEach(element => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });
//     return commonElements;
//     // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements(["a", "m", "t"], ["k", "a", "o", "t"]));

// Tasc 8
// Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {
//     // Change code above this line
//     return quantity * pricePerItem;
// }
// console.log(calculateTotalPrice(5, 100));

// Tasc 9 (неявне повернення стрілкової функції)
// Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) =>
//     quantity * pricePerItem;

// // Change code above this line
// console.log(calculateTotalPrice(5, 100));

// Tasc 10
// Change code below this line

// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;

//     orderedItems.forEach((item) => {
//         totalPrice += item;
//     });

//     return totalPrice;
// }
// // Change code above this line
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// Tasc 11
// Change code below this line
// const filterArray = (numbers, value) =>{
//     const filteredNumbers = [];

//     numbers.forEach((number) => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     // Change code above this line
//     return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 5));

// Tasc 12
// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach((element) => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });

//     // Change code above this line
//     return commonElements;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// Tasc 13
// function changeEven(numbers, value) {
//     // Change code below this line
//     const newArray = [];
//     numbers.forEach((element) => {
//         if (element % 2 === 0) {
//             element = element + value;
//             newArray.push(element);
//             }
//         else newArray.push(element);
        
//     });
//     return newArray;
    
//     // for (let i = 0; i < numbers.length; i += 1) {
//     //     if (numbers[i] % 2 === 0) {
//     //         numbers[i] = numbers[i] + value;
//     //     }
//     // }
//     // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

// Tasc 14
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths);

// Tasc 15
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism"],
//     },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log(genres);

// Tasc 17
// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         skills: ["ipsum", "lorem"],
//         gender: "male",
//         age: 37,
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//         gender: "female",
//         age: 34,
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//         gender: "male",
//         age: 24,
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         skills: ["adipisicing", "irure", "velit"],
//         gender: "female",
//         age: 21,
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         skills: ["ex", "culpa", "nostrud"],
//         gender: "male",
//         age: 27,
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         skills: ["non", "amet", "ipsum"],
//         gender: "male",
//         age: 38,
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         skills: ["lorem", "veniam", "culpa"],
//         gender: "female",
//         age: 39,
//     },
// ];
// // const getUserNames = users.map(user => user.name);
// const getUserNames = users => users.map(user => user.name);

// console.log(getUserNames(users));

// Tasc 18
// const getUserEmails = users.map(user => user.email);

// const getUserEmails = users => {
//     return users.map(user => user.email);
// };

// console.log(getUserEmails(users));

// Tasc 19
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// Tasc 20
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction", "mysticism"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism", "adventure"],
//     },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//     (genre, index, array) => array.indexOf(genre) === index
// );
// console.log(allGenres);
// console.log(uniqueGenres);

// Tasc 21
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// Tasc 22

// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ]
// Change code below this line
// const getUsersWithEyeColor = users.filter((user, color) =>
//     user.eyeColor === color);
// console.log(users);

// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
// //

// // Change code above this line
// console.log(getUsersWithEyeColor(users, "blue"));

// Tasc 23
// const getUsersWithAge = (users, minAge, maxAge) =>
//     users.filter(user => user.age < maxAge && user.age > minAge);

// console.log(getUsersWithAge(users, 20, 30));

// Tasc 24
// Change code below this line
// const getUsersWithFriend = (users, friendName) =>
//     users.filter(user => user.friends.includes(friendName));

// // Change code above this line
// console.log(getUsersWithFriend(users, "Briana Decker"));

// Tasc 25
// Change code below this line
// const getFriends = users => {
//     return users.flatMap(user => user.friends).filter(
//     (friend, index, array) => array.indexOf(friend) === index
// );
// }
// Change code above this line

//
// Tasc 26
// const getActiveUsers = (users) => {
//     return users.filter(user => user.isActive === true);
// };

// console.log(getActiveUsers(users));

// Tasc 27
// Change code below this line
// const getInactiveUsers = (users) => {
//     return users.filter(user => user.isActive !== true);
// };
// Change code above this line
// console.log(getInactiveUsers(users));

// Tasc 28
// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         rating: 8.38,
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         rating: 8.51,
//     },
//     {
//         title: 'The Dream of a Ridiculous Man',
//         author: 'Fyodor Dostoevsky',
//         rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

// Tasc 29

// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male"
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female"
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male"
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female"
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male"
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male"
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female"
//     }
// ]
// // Change code below this line
// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email);
// };
// // Change code above this line
// console.log(getUserWithEmail(users, "shereeanthony@kog.com"))

// Tasc 30
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);
// const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);
// const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);

// console.log(eachElementInFirstIsOdd);

// Tasc 31
// Change code below this line
// const isEveryUserActive = (users) => {
//     return users.every(user => user.isActive);
// }

// // Change code above this line
// console.log(isEveryUserActive(users));

// Tasc 33
// Change code below this line
// const isAnyUserActive = users => {
//     return users.some(user => user.isActive);
// };
// // Change code above this line
// console.log(isAnyUserActive(users));

// Tasc 34
// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//     return previousValue + number;
// }, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(totalPlayTime);
// console.log(averagePlayTime);

// Tasc 35
// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.map(player =>
//     player.playtime / player.gamesPlayed)
//     .reduce((previousValue, number) => {
//     return previousValue + number;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// Tasc 36
// Change code below this line
// const calculateTotalBalance = users.map(user => user.balance)
// .reduce((previousValue, number) => {
//     return previousValue + number;
// }, 0);

// const calculateTotalBalance = users => users.reduce((total, user) => {
//     return total + user.balance;
// }, 0);
// Change code above this line
// console.log(calculateTotalBalance(users));

// Tasc 37
// Change code below this line
// const getTotalFriendCount = users => {
//     const allFriends = users.flatMap(user => user.friends.length);
//     return allFriends.reduce((total, number) => {
//         return total + number;
//     }, 0);
    
// }
// // Change code above this line
// console.log(getTotalFriendCount(users));

// Tasc 38
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();
// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// Tasc 39
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// Tasc 40
// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//     "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInReversedOrder);

// Tasc 41
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) =>
// a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//     b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByAscendingRating);

// Tasc 42
// Change code below this line
// const sortByAscendingBalance = users => {
//     return users.sort((a, b) => a.balance - b.balance);
// }
// // Change code above this line
// console.log(sortByAscendingBalance(users));

// Tasc 43
// Change code below this line
// const sortByDescendingFriendCount = users => {
//     return [...users].sort((a, b) =>
//         b.friends.length - a.friends.length);
// };
// // Change code above this line
// console.log(sortByDescendingFriendCount(users));

// Tasc 44
// Change code below this line
// const sortByName = users => {
//     return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };
// // Change code above this line
// console.log(sortByName(users));

// Tasc 45
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//     .filter(book => book.rating >= MIN_BOOK_RATING)
//     .sort((a, b) => a.author.localeCompare(b.author))
//     .map(book => book.author);
//     console.log(names)

// Tasc 46
// Change code below this line
// const getNamesSortedByFriendCount = users => {
    // return [...users]
    // .sort((a, b) => a.friends.length - b.friends.length)
    // .map(({name}) => name);
// };

// // Change code above this line
// console.log(getNamesSortedByFriendCount(users))

// Tasc 47
// Change code below this line
// const getSortedFriends = users => {
//     return [...users]
//         .flatMap((users) => users.friends)
//         .filter((friend, index, array) => array.indexOf(friend) === index)
//         .sort((a, b) => a.localeCompare(b))
// };
// // Change code above this line
// console.log(getSortedFriends(users));

// Tasc 48
// Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//     return [...users].filter(user => user.gender === gender)
//         .reduce((previousValue, user) => {
//             return previousValue + user.balance;
//         }, 0);
// };
// // Change code above this line
// console.log(getTotalBalanceByGender(users, "female"));

