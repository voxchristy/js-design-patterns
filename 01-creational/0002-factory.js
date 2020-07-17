// Factory pattern is another class-based creational pattern. 
// In this, we provide a generic interface that delegates the responsibility of object instantiation to its subclasses.
// This pattern is frequently used when we need to manage or manipulate collections of objects that are different 
// yet have many similar characteristics.

// Dynamic object creation: It can be used in cases where the type of the object is decided at runtime.
// Abstraction: The user never really has to access the actual object’s constructor.
// Reusability/Maintenance: Same factories can be used for similar objects and it allows us to add/remove new object classes easily without changing a lot of code.

class BallFactory {
    constructor() {
        this.createBall = function(ballType) {
            
            let ball;

            if(ballType == 'basketball') { ball = new Basketball(); }
            else if(ballType == 'football') { ball = new Football(); } 

            ball.roll = function() {

                return 'The ' + this.ballType + ' is rolling.';
            }

            return ball;
        }
    }
}

class Football {
    constructor() {
        this.ballType='football';
        this.kick=function(){
            return 'You kicked the ball';
        }
    }

}

class Basketball {
    constructor() {
        this.ballType='basketball';
        this.kick=function(){
            return 'You dunked the ball';
        }
    }

}


/// object creation

const factory = new BallFactory();

const niviaFootball=factory.createBall('football');
const spadlBasketball=factory.createBall('basketball');



console.log(niviaFootball.kick());
console.log(niviaFootball.roll());

console.log(spadlBasketball.kick());
console.log(spadlBasketball.roll());



