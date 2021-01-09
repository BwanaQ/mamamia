/*
function Pizza(size, crust) {
  this.size = size;
  this.crust = crust;
  this.toppings= [];
}
Pizza.prototype.total = function() {
  return this.firstName + " " + this.lastName;
}
*/
//create empty order
var order = [];
//create all Pizza constructors
function PizzaSize(pizzaName, pizzaPrice) {
  this.pizzaName = pizzaName;
  this.pizzaPrice = pizzaPrice;
}

function CrustType(crustName, crustPrice){
  this.crustName = crustName;
  this.crustPrice = crustPrice;
}

function Topping(toppingName, toppingPrice){
  this.toppingName=toppingName;
  this.toppingPrice = toppingPrice;
}
//create Pizzas
var small = new PizzaSize("small", 550);
var medium = new PizzaSize("medium", 830);
var large = new PizzaSize("large",1050);
var mega = new PizzaSize("mega", 1270);

// create Crusts
var thinCrust = new PizzaSize("thin", 100);
var mediumCrust = new PizzaSize("medium", 110);
var thickCrust = new PizzaSize("thick",120);

//create toppings
var vegeterian = new Topping("vegan" , [70,100,140,200]);
var pepperoni = new Topping("pepperoni", [100,150,200,250]);
var hawaiian = new Topping("hawaiian" , [70,90,110,130]);
var bbq = new Topping("bbq" , [170,200,230,270]);

//create delivery boolean and delivery charge within nairobi
var isDelivered = false;
var deliveryCharge = 100;


