//Object Literal
var patrick= {
    firstName: opio,
    lastName: avant,
    age:24,
    gender:male,
}

var jerome = {
    firstName: jerome,
    lastName: M,
    age: 40,
    gender:male,
}

//2. Object Factory
function Student(givenFirstName, givenLastName, givenLastName, givenage, givengender,){
    return {
        firstName: givenFirstName,
        lastName: givenLastName,
        age: givenage,
        gender: givengender,
    }
};

let opio = Student('jerome','tumwesigwe','40','Male');
let jerome = Student('opio', 'avant', '24', 'Male');
console.log(jerome);





// constractor function
function car(givenSpeed, givenColor, givenFuelType, givenBrand) {
        this.brand = givenBrand;
        this.speed=givenSpeed;
        this.color=givenColor;
        this.fueltype=givenFuelType; 
}
const myFord = new car(180,"Grey","Petrol","Ford");
const TX = new car(180, "White", "Petrol", "TX");
const V8 = new car(180, "Black", "Petrol", "V8");


