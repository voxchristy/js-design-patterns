// This is a class-based creational design pattern. 
// Constructors are special functions that can be used to instantiate 
// new objects with methods and properties defined by that function.

function Hero(name, ability){
    // props
    this.name=name;
    this.ability=ability;

    // method
    this.getDetails = function(){
        return "I am "+this.name + ", and I can "+this.ability;
    };
}

//object creation
const ironman=new Hero("Iron Man", "Fly");
console.log(ironman.getDetails());