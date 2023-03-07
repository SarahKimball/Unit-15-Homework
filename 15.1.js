1. 

class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    honk() {
      return "Beep.";
    }
  
    toString() {
      return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
  }
  
//   new instance of "Vehicle" and call its methods and access its properties like this:

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
console.log(myFirstVehicle.honk()); // "Beep."
console.log(myFirstVehicle.toString()); // "The vehicle is a Honda Monster Truck from 1999."



2. 
class Car extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 4;
    }
  }

//    new instance of "Car" and call its methods and access its properties like this:

let myFirstCar = new Car("Toyota", "Corolla", 2005);
console.log(myFirstCar.toString()); // "The vehicle is a Toyota Corolla from 2005."
console.log(myFirstCar.honk());     // "Beep."
console.log(myFirstCar.numWheels);  // 4

3. 
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 2;
    }
  
    revEngine() {
      return "VROOM!!!";
    }
  }

  //    new instance of "motocycle" and call its methods and access its properties like this:
  
  let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

  console.log(myFirstMotorcycle.toString()); // "The vehicle is a Honda Nighthawk from 2000."
  console.log(myFirstMotorcycle.honk());     // "Beep."
  console.log(myFirstMotorcycle.revEngine()); // "VROOM!!!"
  console.log(myFirstMotorcycle.numWheels);  // 2


  4. 

  class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(vehicle) {
      if (!(vehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length === this.capacity) {
        return "Sorry, we’re full.";
      }
      this.vehicles.push(vehicle);
      return "Vehicle added!";
    }
  }

//   You can create a new instance of Garage and call its methods like this:

  let garage = new Garage(2);
console.log(garage.vehicles); // []

console.log(garage.add(new Car("Hyundai", "Elantra", 2015))); // "Vehicle added!"
console.log(garage.vehicles); // [Car]

console.log(garage.add("Taco")); // "Only vehicles are allowed in here!"

console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2000))); // "Vehicle added!"
console.log(garage.vehicles); // [Car, Motorcycle]

console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2001))); // "Sorry, we're full."

  