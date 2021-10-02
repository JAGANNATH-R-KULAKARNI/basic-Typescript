const drink={
  color : 'brown',
  carbonated : true,
  sugar : 40
};

const pepsi : [string,boolean,number] = ['brown',true,40];
// this is a tuple(order cannot be changed)

// OR

type Drink = [string,boolean,number];

const cococola : Drink=['green',false,30];