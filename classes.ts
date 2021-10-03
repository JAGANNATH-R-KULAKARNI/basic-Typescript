class Vehicle{
  public drive():void{
    console.log('ponk ponk');
  }

  protected honk():void{
    console.log('beep beep');
  }
};

class Car extends Vehicle{
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

const vehicle=new Vehicle();
vehicle.drive();
//vehicle.honk(); (protected modifier : only accessible by child classes)

const car=new Car();
car.drive();//vroom vroom
//car.drive2(); (we cant call this)