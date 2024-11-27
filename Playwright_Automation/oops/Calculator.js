class Calculator{

    calculate(a, b, c){
        if(c!==undefined){
            return a+b+c; // Three arguments
        }else if(b!==undefined){
            return a*b; // Two arguments
        }else{
            return a*a; // One argument
        }
    }

}

const cal = new Calculator();
console.log(cal.calculate(1,2,3));
console.log(cal.calculate(1,2));
console.log(cal.calculate(3));
