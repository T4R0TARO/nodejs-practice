/** Class Declaration:
 *  provide a wat to create objects with similar properties and methods
 */

class Animal {
  // the `contructor` method is used to init obj properties
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

// You can create instances of a class using the `new` keyword
const cat = new Animal("Cat", "Nyah");
const dog = new Animal("Dog", "Bau Bau");

// cat.makeSound();

// Inheritance
// Allowing you to create a new class that is a modified version of an existing class

class Cat extends Animal {
  constructor(name, sound, breed) {
    super(name, sound);
    this.breed = breed;
  }

  purr() {
    console.log("Purring...");
  }
}

const Inyah = new Cat("Inyah", "Nyah Nyah");

// Inyah.makeSound();
// Inyah.purr();

const errorTesting = async () => {
  try {
    throw new Error("This is a custom error message...");
  } catch (error) {
    console.error(error.name);
    console.error(error.message);
    console.error(error.stack);
  }
};

// errorTesting();
