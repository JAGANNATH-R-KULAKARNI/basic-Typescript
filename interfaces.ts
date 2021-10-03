const oldCivic={
  name : 'civic',
  year : 2000,
  broken : true
};

const printVehicle = (vehicle : {name:string; year:number; broken: boolean}):void=>{
  console.log(`Name : ${vehicle.name}`);
  console.log(`Year : ${vehicle.year}`);
  console.log(`Broken : ${vehicle.broken}`);
};

printVehicle(oldCivic);

interface Vehicle{
  name:string;
   year:number; 
   broken: boolean;
   summary() : string;
}

const oldCivic2={
  name : 'civic',
  year : 2000,
  broken : true,
  summary(): string{
    return `Name : ${this.name}`;
  },
  extraVariable : 'possible no error occurs'
};


const printVehicle2 = (vehicle : Vehicle):void=>{
  console.log(`Name : ${vehicle.name}`);
  console.log(`Year : ${vehicle.year}`);
  console.log(`Broken : ${vehicle.broken}`);
  console.log(`Summary : ${vehicle.summary()}`);
};

printVehicle2(oldCivic2);