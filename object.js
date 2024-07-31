const Person1 = function (name, birthyr) {
    this.username = name;
    this.birthYear = birthyr;
    //  const age=20
    return 2024 - this.birthYear < 58
     ? console.log('He is still working...')
     : console.log('He enjoying his retirement..');
   };
   const obj1 = new Person1('Jonas', 1946);
   const obj2 = new Person1('John', 1971);
   console.log(obj1 instanceof Person1);
   // // working of new keyword behind the scence
   // //1] New {} empty object is get created
   // //2] Newly created object get linked to this keyword
   // //3] It also get linked to its prototype.
   // //4] After that function returns.
   // // console.log(obj1);
   
   const Car = function (speed, brand) {
    this.speed = speed;
    this.model = brand;
   
    this.km_hr = function () {
     console.log(`${this.model} covers the distance at ${this.speed} km/hr`);
    };
   };
   const car = new Car(120, 'BMW');
   car.km_hr();
   
   // //// It's not a good practice
   // /// If we create multiple object of person class then this method also get created multiple
   // /// times with slow our code so rather than this we can create this method on the
   // // constructure prototype due to that it can be accessed by all the object of construture function
   // // and prevent the duplication of method
   
   Car.prototype.meter_second = function () {
    console.log(
     `${this.model} covers the distance at ${(this.speed / 3.6).toFixed(2)} m/s`
    );
   };
   car.meter_second();
   
   // // building the method which going to remove unwanted space/trim the space
   // // and available on every object
   
   Object.prototype.trueLength = function () {
    console.log(this.trim().length);
    return this.trim().length;
   };
   
   // const str = 'ABDCE  ';
   // console.log(str.length);
   // str.trueLength();
   
   function RemoveSpace(first_name, last_name) {
    this.firstName = first_name;
    this.lastName = last_name;
    console.log(this.firstName.length, this.lastName.length);
   }
   
   const space = new RemoveSpace('John ', ' Smith   ');
   console.log(space);
   space.firstName.trueLength();
   space.lastName.trueLength();
   
   console.log(space instanceof RemoveSpace);
   console.log(space.__proto__ === RemoveSpace.prototype);
   console.log(RemoveSpace.prototype.isPrototypeOf(space));
   
   // //// Also we can add properties on constructure function prototype
   RemoveSpace.prototype.species = 'Added New property';
   console.log(space.species);
   console.log(space.hasOwnProperty('firstName'));
   console.log(space.hasOwnProperty('species'));
   
   console.log(space.__proto__); // point to the newly
   // created object.i,e constructure function
   console.log(space.__proto__.__proto__ === Object.prototype);
   console.log(RemoveSpace.prototype.constructor === RemoveSpace);
   
   // //// Creating a function remove duplicate and return only
   // /// unique values
   
   Array.prototype.unique = function () {
    return [...new Set(this)];
   };
   
   function Unique(arr) {
    console.log(arr);
    const val = arr.unique();
    console.log(val);
   }
   
   const arr = new Unique([2, 5, 7, 8, 5, 2, 7]);
   
   //// Object.create()
   
   const PersonObj = {
    calcAge: function (birthyr) {
     return 2024 - birthyr;
    },
   };
   
   const person = Object.create(PersonObj);
   console.log(person.calcAge(1995));
   console.log(person);
   console.log(person.__proto__ === PersonObj);
   console.log(person.__proto__.__proto__ === Object.prototype);
   console.log(Object.prototype.__proto__ === null);