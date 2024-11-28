/*
Abstraction: Showing only the functionality to the user by hiding its implementation/internal details is called as an abstraction
e.g mobile: sms, calling, bluetooth turn/off, connect, disconnect, wifi connect/disconnect, install app from the app/play store
*/
class Vehicle{

    start(){
        console.log("Vehicle is starting..!")
    }

    drive(){
        throw new Error("Drive method must be implemented by the subclasses...!")
    }

    rpm(){
        throw new Error("RPM method must be implemented by the subclasses...!")
    }

}

//const v = new Vehicle();
//v.drive(); // Error: Drive method must be implemented by the subclasses...!

class Car extends Vehicle{

    drive(){
        console.log("Car is driving..!");
    }

}

const myCar = new Car();
myCar.start();
myCar.drive();

class Mercedes extends Vehicle{
  
    rpm(speed){
        console.log("rpm is " + speed + " kmph..!")
    }

    rpm(){
      console.log("rpm is 220 kmph..!")
    }

    rpmCondition(speed){
        if (speed!==undefined) {
            console.log("rpm is " + speed + " kmph..!")
        } else {
            console.log("rpm is 220 kmph..!")
        }
    }

}

const merc = new Mercedes();
merc.start();
merc.rpm();
merc.rpm(250);
merc.rpmCondition();
merc.rpmCondition(300);
