// Tasc 3
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line
// console.log(aptRating);
// console.log(aptTags);

// Tasc 4
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Change code above this line

// console.log(lastTag);

// Tasc 6

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// console.table(apartment.tags);

// Tasc 9
// const emailInputName = "henry.carter@aptmail.com";
// const passwordInputName = "jqueryismyjam";

// const credentials = {
//     // Change code below this line
//     [ElementInternals]: "email",
//     [passwordInputName]: "password",

//     // Change code above this line
// };
// console.log(emailInputName);
// console.log(passwordInputName);

// Tasc 10
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// Tasc 11
// const keys = [];
// const values = [];
// const advert = {
//     service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     // Change code below this line
//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }
//     // Change code above this line
// }
// console.log(keys);
// console.log(values);

// Tasc 12
// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//     }
//     // Change code above this line
//     return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))

// Tasc 13
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//     values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// Tasc 14
// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
//     const keys = Object.keys(object);
    
//     for (const key of keys) {
//         propCount += 1;
//         }
    
//     return propCount;
//     // Change code above this line
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))

// Tasc 15
// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// Tasc 16
// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
    
//     const keys = Object.keys(salaries);

//     for (const key of keys) {
//         totalSalary += salaries[key];
//     }

//     return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }))

// Tasc 17
// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// Tasc 18
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     // Change code below this line
//     for (const product of products) {
//         if (productName === product.name) {
//             return product.price;
//         }
        
//     }
//     return null;
    // Change code above this line
// }
// console.log(getProductPrice("Scanner"));

// Tasc 19
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line
//     const arrProductsValues = [];
//     for (const product of products) {
//         if (product[propName]) {
//             arrProductsValues.push(product[propName])
//         }
//     }
//     return arrProductsValues;

    // Change code above this line
// }
// console.log(getAllPropValues("price"));

// Tasc 20
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     // Change code below this line
//     for (const product of products) {
//         if (productName === product.name) {
//          return product.price * product.quantity;
//         }
//     }
//     return 0;
//     // Change code above this line
// }
// console.log(calculateTotalPrice("Radar"));

// Tasc 21
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(tomorrow);

// Tasc 24
// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
    
//     hexColors.push(hex);
//     rgbColors.push(rgb);
// }
// console.table(hexColors);
// console.table(rgbColors);

// Tasc 25
// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };
// // Change code below this line

// const { today: { low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//     tomorrow: {
//         low: lowTomorrow,
//         high: highTomorrow,
//         icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
// } = forecast;
// console.table(forecast);
// console.log(highToday);

// Tasc 26
//  Change code below this line
// function calculateMeanTemperature(forecast) {
//     const { today: { low: todayLow,
//         high: todayHigh },
//         tomorrow: { low: tomorrowLow,
//             high: tomorrowHigh }
//     } = forecast;
    
//     // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }));
// console.log(calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } }));

// Tasc 27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = (Math.max(...scores));
// const worstScore = (Math.min(...scores));

// console.log(bestScore);
// console.log(worstScore);

// Tasc 28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = (Math.max(...allScores));
// const worstScore = (Math.min(...allScores));

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// Tasc 29
// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
// };
// const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// Tasc 30
// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line
//     const newTask = {
//         completed: false,
//         category: "General",
//         priority: "Normal",
//     }
//     return { ...newTask, ...data};
//     // Change code above this line
// }

// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));

// Tasc 31
// Change code below this line
// function add(...args) {
//     let summ = 0;
//     for (let i = 0; i < args.length; i += 1){
//     summ += args[i];
//     }
    
//     return summ;
//   // Change code above this line
// }

// console.log(add(12, 4, 11, 48));

// Tasc 32
// Change code below this line
// function addOverNum(firstNamber, ...args) {
//     let total = 0;

//     for (const arg of args) {
//         if (arg > firstNamber) {
//         total += arg;
//         }
        
//     }

//     return total;
//     // Change code above this line
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(50, 15, 27));

// Tasc 33
// Change code below this line
// function findMatches(firstArr, ...args) {
//     const matches = []; // Don't change this line
//     for (const arg of args) {
        
//         if (firstArr.includes(arg)) {
//             matches.push(arg);
//         }
//     }
//     // Change code above this line
//     return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

// Tasc 34
// const bookShelf = {
//     // Change code below this line
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//         return "Returning all books";
//     },
//     addBook(bookName) {
//         return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
        
//         return `Deleting book ${bookName}`;
//     },
//     updateBook(oldName, newName) {
        
//         return `Updating book ${oldName} to ${newName}`;
//     },
//     // Change code above this line
// };
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// Tasc 35
// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//         // Change code below this line
//         const bookIndex = this.books.indexOf(oldName);
//         this.books.splice(bookIndex, 1, newName);
//         return this.books;
//         // Change code above this line
//     },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

// Tasc 38
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//         // Change code below this line
//         this.potions.push(potionName);
//         return this.potions;
//         // Change code above this line
//     },
// };
// console.log(atTheOldToad.addPotion("Power potion"));

// Tasc 39
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//         // Change code below this line
//         const potionIndex = this.potions.indexOf(potionName);
//         this.potions.splice(potionIndex, 1);
//         return this.potions;
        
//         // Change code above this line
//     },
// };
// console.log(atTheOldToad.removePotion("Dragon breath"));

// Tasc 40
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//         // Change code below this line

//         const potionIndex = this.potions.indexOf(oldName);
//         this.potions.splice(potionIndex, 1, newName);
//         return this.potions;

//         // Change code above this line
//     },
// };
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

// Tasc 41
// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],

//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         for (const potion of this.potions) {
//             if (newPotion.name === potion.name) {
//                 // console.log(`Error! Potion  name: ${JSON.stringify(newPotion)} is already in your inventory!`)
//                 return `Error! Potion ${potion.name} is already in your inventory!`;
//             }
//         }
//         // if (this.potions.includes(newPotion)) {

//         //   return `Error! Potion ${newPotion} is already in your inventory!`;
//         // }
//         this.potions.push(newPotion);
//         // console.table(newPotion);
//         return this.potions;
//     },
//     removePotion(potionName) {
//         // деструктуруємо this:
//         const { potions } = this;
//         // було:
//         // for (let i = 0; i < this.potions.length; i += 1) {
//         // стало:
//         for (let i = 0; i < potions.length; i += 1) {
//             // деструктуризував this.potions[i].name в:
//             const { name } = potions[i];

//             if (potionName === name) {
//                 // console.log(name);
//                 // console.log(this.potions[i]);
//                 this.potions.splice(i, 1);
//                 return this.potions;
//             }
//         }
//         return `Potion ${potionName} is not in inventory!`;
//         // const potionIndex = this.potions.indexOf(potionName);
//         // if (potionIndex === -1) {
//         //   return `Potion ${potionName} is not in inventory!`;
//         // }

//         // this.potions.splice(potionIndex, 1);
//         // return this.potions;
//     },
//     updatePotionName(oldName, newName) {
//         for (let i = 0; i < this.potions.length; i += 1) {
//             let potion = this.potions[i]
//             if (oldName === potion.name) {
//                 potion.name = newName;
//                 return this.potions;
//             }
//         }
//         return `Potion ${oldName} is not in inventory!`;
//         // const potionIndex = this.potions.indexOf(oldName);

//         // if (potionIndex === -1) {
//         //   return `Potion ${oldName} is not in inventory!`;
//         // }

//         // this.potions.splice(potionIndex, 1, newName);
//         // return this.potions;
//     },
//     // Change code above this line
// };
