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

// ########## Part C #########
// ============6==========


