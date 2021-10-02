//These are annotations

let bananas:number=10;
let myName:String='jagannath';

let nothing:undefined=undefined;
let hmmm:null=null;

let colors:string[]=['red','blue','green'];
let arr:number[]=[1,2,3,4];

class Car{
  color:string;
}

let car:Car=new Car();


//Object literal

let point:{x:number; y:number}={
  x :10,
  y : 20
}


//Function

const logNumber : (i:number)=>number = (i:number)=>{
  console.log(i);
  return 0;
};


//When to use annotations?
// 1) Fuction that returns the 'any' type(below function does that) 

const json='{"x" : 10, "y" : 20}';
const coordinates=JSON.parse(json);
console.log(coordinates); // {x : 10,y : 20};

// 'any' means typescript has no idea what the type pf object is
// so give const coordinates : {x:number; y:number} =JSON.aprse(json);

// 2) when we declare a variable on one line and initialize it later

let words=['red','blue','green'];
let foundWord: boolean;

for(let i=0;i<words.length;i++){
  if(words[i] === 'green')
  foundWord=true;
}

// 3) Variable whose type cannot be inferred correctly

let numbers=[-10,-1,12];
let numbersAboveZero : boolean | number=false;

for(let i=0;i<numbers.length;i++){
  if(numbers[i] > 0)
  numbersAboveZero=numbers[i];
}