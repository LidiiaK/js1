// Tasc 1
// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     // Change code below this line
//     checkPizza(pizzaName) {
//         return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//         const isPizzaAvailable = this.checkPizza(pizzaName);

//         if (!isPizzaAvailable) {
//             return `Sorry, there is no pizza named «${pizzaName}»`;
//         }

//         return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//     // Change code above this line
// };
// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Big Mike"));

// Tasc 2
// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//         return this.balance;
//     },
//     getDiscount() {
//         return this.discount;
//     },
//     setDiscount(value) {
//         this.discount = value;
//     },
//     getOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost - cost * this.discount;
//         this.orders.push(order);
//     },
//     // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// Tasc 3
// const historyService = {
//     orders: [
//         { email: "jacob@hotmail.com", dish: "Burrito" },
//         { email: "solomon@topmail.net", dish: "Burger" },
//         { email: "artemis@coldmail.net", dish: "Pizza" },
//         { email: "solomon@topmail.net", dish: "Apple pie" },
//         { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
//     // Change code below this line
//     getOrdersLog() {
//         return this.orders
//             .map(order => `email: ${order.email} dish: ${order.dish}`)
//             .join(" - ");
//     },
//     getEmails() {
//         const emails = this.orders.map(order => order.email);
//         const uniqueEmails = new Set(emails);
//         return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//         return this.orders.filter(order => order.email === email);
//     },
//     // Change code above this line
// };
// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));

// Tasc 4
// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;
// console.log(parent.hasOwnProperty("surname"));
// console.log(parent.hasOwnProperty("heritage"));
// console.log(child.name);
// console.log(child.hasOwnProperty("surname"));

// Tasc 5
// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line
// console.log(ancestor.isPrototypeOf(parent));
// console.log(parent.isPrototypeOf(child));
// console.log(ancestor.surname);
// console.log(child.hasOwnProperty("surname"));
// console.log(parent.heritage);

// Tasc 7
// class Car {
//     // Change code below this line
//     constructor(brand, model, price) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     };

//     // Change code above this line
// }
// console.log(new Car("Audi", "Q3", 36000));
// console.log(new Car("BMW", "X5", 58900));

// Tasc 8
// class Car {
//     // Change code below this line
//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//     // Change code above this line
// }
// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }))

// Tasc 9
// class Car {
//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//     // Change code below this line

//     getPrice() {
//         return this.price;
//     }

//     changePrice(newPrice) {
//         this.price = newPrice;
//     }

//     // Change code above this line
// }

// Tasc 10
// class Storage {
//     constructor(items) {
//         this.items = items;
//     }

//     getItems() {
//         return this.items;
//     }

//     addItem(newItem) {
//         this.items.push(newItem);
//     }

//     removeItem(itemToRemove) {
//             const i = this.items.indexOf(itemToRemove);
//             this.items.splice(i, 1);
//         }
//     };
    
    
// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// Tasc 11
// class StringBuilder {
//     constructor(value) {
//         this.value = value;
//     }
//     getValue() {
//         return this.value;
//     }
//     padStart(str) {
//         this.value = str + this.value;
//     }
//     padEnd(str) {
//         this.value += str;
//     }
//     padBoth(str) {
//         this.value = str + this.value + str;
//     }
// }
// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// Tasc 12

// class Car {
//     // Change code below this line
//     #brand;
//     model;
//     price;
//     constructor({ brand, model, price }) {
//         this.#brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//     getBrand() {
//         return this.#brand
//     }
//     changeBrand(newBrand) {
//         this.#brand = newBrand;
//     }
//     // Change code above this line
// }
// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
// console.log(new Car({ brand: "bmw", model: "X5", price: 58900 }));
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));
// console.log(getBrand())
// console.log(changeBrand("Honda"));

// Tasc 13
// class Storage {
//     // Change code below this line
//     #items;
//     constructor(items) {
//         this.#items = items;
//     }

//     getItems() {
//         return this.#items;
//     }

//     addItem(newItem) {
//         this.#items.push(newItem);
//     }

//     removeItem(itemToRemove) {
//         this.#items = this.#items.filter(item => item !== itemToRemove);
//     }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// Tasc 14
// class StringBuilder {
//     // Change code below this line
//     #value;
//     constructor(initialValue) {
//         this.#value = initialValue;
//     }

//     getValue() {
//         return this.#value;
//     }

//     padEnd(str) {
//         this.#value += str;
//     }

//     padStart(str) {
//         this.#value = str + this.#value;
//     }

//     padBoth(str) {
//         this.padStart(str);
//         this.padEnd(str);
//     }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// Tasc 16
// class Car {
//     // Change code below this line
//     static MAX_PRICE = 50000;
//     #price;
    
//     constructor({ price }) {
//         this.#price = price;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         if (newPrice > Car.MAX_PRICE){
//             return;
//         }
//         this.#price = newPrice;
//     }
//     // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// Tasc 17
// class Car {
//     static #MAX_PRICE = 50000;
//     price;
//     // Change code below this line
//     static checkPrice(price) {
//         if (price > Car.#MAX_PRICE) {
//             return "Error! Price exceeds the maximum";
//         }
//         return "Success! Price is within acceptable limits";
//         }
//         // Change code above this line
//         constructor({ price }) {
//             this.price = price;
//         }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// Tasc 18
// class User {
//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }
// // Change code below this line
// class Admin extends User {
//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser"
//     }
// }
// console.log(Admin.AccessLevel.BASIC);
// console.log(Admin.AccessLevel.SUPERUSER);

// Tasc 19
// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }

// class Admin extends User {
//     // Change code below this line
//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };
//     constructor({ email, accessLevel }) {
//         super(email);
//         this.accessLevel = accessLevel;
//     }
    
//     // Change code above this line
// }

// const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// Tasc 20
// class User {
//     email;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }
// class Admin extends User {
//     // Change code below this line
//     blacklistedEmails = [];
//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };

//     constructor({ email, accessLevel }) {
//         super(email);
//         this.accessLevel = accessLevel;
//     }
//     blacklist(email) {
//         this.blacklistedEmails.push(email);
//     }
//     isBlacklisted(email) {
//         return this.blacklistedEmails.includes(email);
//     }
//     // Change code above this line
// }

// const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
