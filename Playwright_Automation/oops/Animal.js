class Animal{
    type="pet";

    constructor(name){
        this.name=name;
    }

    speak(){
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {

    // Characteristics
    age=5;
    breed = "German Shepard";
    
    // Behavior
    speak(){
        console.log(`${this.name} barks.`);
    }

    walk(){
        console.log(`${this.name} can walk.`);
    }

    run(){
        console.log(`${this.name} can run.`);
    }

}

const dog = new Dog("Jimmy");
dog.speak(); // Method overriding
dog.walk();
dog.run();
console.log(dog.age);
console.log(dog.breed);

dog.speak();
console.log(dog.type);



