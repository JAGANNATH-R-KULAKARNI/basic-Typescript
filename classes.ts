class Vehicle{
  color : string;
  
  constructor(color : string){
    this.color=color;
  }
  //OR

  //constructor(public color:string){}
  //This constructor is equivelent to above constructor
 //An instance of color will be created by itself

  public drive():void{
    console.log('ponk ponk');
  }

  protected honk():void{
    console.log('beep beep');
  }
};

class Car extends Vehicle{

  constructor(public wheels :number, color : string){
    super(color);
  }
 public drive():void{
   console.log('vroom vroom');
 }
 
 private drive2():void{
   console.log('vroom vroom 2');
 }

 private startDriving():void{
   this.drive2();
   this.honk();
 }
}

const vehicle=new Vehicle('red');
vehicle.drive();
//vehicle.honk(); (protected modifier : only accessible by child classes)

const car=new Car(10,'blue');
car.drive();//vroom vroom
//car.drive2(); (we cant call this)