class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, i am ${this.name} !`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation = "nowhere") {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` i\'m visiting from ${this.homeLocation}`;
    }

    return greeting;
  }
}

const me = new Student("Minh Giang", 12, "Computer science");
const other = new Student();
const mi = new Traveler("Vinh", 19, "Hanoi");

console.log(me.getDescription());
console.log(other.getDescription());
console.log(mi.getGreeting());
