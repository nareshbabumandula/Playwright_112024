class Shape{

 area(){
    return "Area is not defined";
 }

}

class Circle extends Shape{

    constructor(radius){
        super();
        this.radius = radius;
    }

    area(){
        return Math.PI * this.radius * this.radius;
    }

}

class Rectangle extends Shape{

    constructor(width, height){
        super();
        this.width=width;
        this.height=height;
    }

    area(){
        return this.width * this.height;
    }

}

const circle = new Circle(5);
console.log(circle.area());
const rect = new Rectangle(2,4);
console.log(rect.area());