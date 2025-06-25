// ============1==========
// class Phone 
// {
//     constructor (brand,model)
//     {
//         this.brand = brand;
//         this.model = model;
//         this.details = function(){console.log(`Phone: ${brand} ${model}`);
//         }
//     }
// }
// const motiPhone = new Phone("iphone","16 Pro 😁")
// motiPhone.details()

// ============2==========
// class Rectangle
// {
//     constructor (width ,height)
//     {
//         this.width = width;
//         this.height = height;
//         this.area = function(){return `width = ${width} \nheight = ${height}\narea = ${width * height}`};
//     }
// }
// const coulcRectangle =new Rectangle(5,4);
// console.log(coulcRectangle.area());

// ============3==========
// class BankAccount
// {
//     constructor(owner ,balance)
//     {
//         this.owner =owner;
//         this.deposit = function(AmountOfMoneyToAdd){return balance + AmountOfMoneyToAdd, this.checkBalance()};
//         this.withdraw = function(AmountOfMoneyToSub){return balance - AmountOfMoneyToSub, this.checkBalance()};
//         this.checkBalance = function(){return `${owner} have ${balance} $`};
//     }
// }

// const motiBankAccount = new BankAccount("Moti",1000)
// console.log(motiBankAccount.checkBalance());

// ########## Part B #########
// ============4==========
// function Animal(name)
// {
//     this.name = name;
//     this.speak = function(){return `${this.name} makes a sound`};
// }

// function Dog()
// {
//     this.bark = function(){return `${this.name} makes a sound Vav Vav`};
// }

// const Ani1 =new Animal("Flafi");
// const motisDog = new Dog();
// Object.setPrototypeOf(motisDog, Ani1);
// console.log(motisDog.bark());
// console.log(motisDog.speak());

// ============5==========
// function Vehicle(type)
// {
//     this.type = type;
//     this.describe = function(){return `This is a ${this.type}`};
// }

// function Car(brand)
// {
//     this.info = function(){return `This is a ${brand} ${this.type}`};
// }
// const vaci = new Vehicle("car");
// const motiscar = new Car("Toyta")
// Object.setPrototypeOf(motiscar,vaci);
// console.log(motiscar.describe());
// console.log(motiscar.info());

// ============6==========
// function Shape()
// {
//     this.area =function(){return 0}
// }

// function Circle(radius)
// {
//     this.area =function(){return Math.PI * radius**2}
// }

// function Square(side)
// {
//     this.area =function(){return side**2}
// }

// const sidi = new Square(4)
// const radi = new Circle(3);
// console.log(radi.area());
// console.log(sidi.area());

// ########## Part C #########
// ============7==========
// class Book
// {
//     constructor(title, author)
//     {
//         this.title = title;
//         this.author = author;
//         this.info =function(){return`${this.title} by ${this.author}`};
//     }
// }

// const motisBook = new Book("JS", "Moti 😉")
// console.log(motisBook.info());

// ============8==========
// class Person
// {
//     constructor(name)
//     {
//         this.name = name;
//         this.greet = function(){return `Hello Im ${this.name}`}
//     }
// }

// class Student extends Person
// {
//     constructor(name, school)
//     {           super(name)
//         this.study = function(){return `${name} is studying at ${school}`}
//     }
// }

// const moti = new Student("Moti", "Oxford")
// console.log(moti.greet());
// console.log(moti.study());

// ============9==========
// class Employee
// {
//     #salary
//     constructor(salary)
//     {
//         this.#salary = salary
//         this.getSalary = function(){return `salary is: ${this.#salary}`};
//         this.work = function(){return `Employee is working`;}
//     }
// }
// class Manager extends Employee
// {
//     constructor(mangSalary)
//     {       super(mangSalary)
//         this.work = function(){return `Manager is managing`;}
//     }
// }

// const empli1 = new Employee(4000);
// const mangMoti = new Manager(5000);
// console.log(empli1.getSalary());
// console.log(empli1.work());
// console.log(mangMoti.getSalary());
// console.log(mangMoti.work());

