const add = (a:number,b:number): number =>{
  return a+b;
}

function divide(a:number,b:number):number{
  return a/b;
}

const multiply=function(a:number,b:number):number{
  return a*b;
}

const logger=(message : string):void=>{
  console.log(message);
}

const throwError=(message : string):never =>{
  throw new Error(message);
}

// 'never' means we are never going to reach the end of function (we will throw an error)
//if we reach the end we need to write like this

const throwError2=(message : string):string |void =>{

  if(!message)
  throw new Error(message);

  return 'return value';
}

const todaysWeather={
 date : new Date(),
 weather : 'sunny'
};

const logWeather=(forecast : {date : Date,weather :string}):void =>{
  console.log(forecast.date);
  console.log(forecast.weather);
}

logWeather(todaysWeather);
// OR

// ES2015 syntax

//It does not work here

