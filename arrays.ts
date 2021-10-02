const carMakers=['ford','toyoto','suzuki'];
const dates=[new Date(),new Date()];

const carsByMake : string[][]=[];

//Help with inference when extracting values

const car=carMakers[0]; // type is string
const myCar=carMakers.pop(); // type is string

// prevent incompatibel values
//carMakers.push(100); //error

//Help with map
carMakers.map((car : string):string=>{
  return car.toUpperCase();
});

//Flexible types
const importantDates : (Date | string)[] = [new Date(),'2021-10-10'];