// In this, we use a sort of a “skeleton” of an existing object to create or instantiate new objects.
// This pattern is specifically important and beneficial to JavaScript because it utilizes 
// prototypal inheritance instead of a classic object-oriented inheritance. 
// Hence, it plays to JavaScript’s strength and has native support.

const car = {
    noOfWheels: 4,
    start() {      return 'started';    },
    stop() {      return 'stopped';    },
  };

  // created my car with all props of 'Car' plus its own props as well
  const myCar = Object.create(car, {owner:{value: 'john'}});

  console.log(myCar);
  console.log('--------------------')
  const typeOfVehicle = myCar.__proto__;
  console.log(typeOfVehicle)  
  console.log('--------------------')
  console.log(myCar.start())
  console.log('--------------------')
  console.log(myCar.stop())
  console.log('--------------------')


  console.log(myCar.__proto__ === car); //true

