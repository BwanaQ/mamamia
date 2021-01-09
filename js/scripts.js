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

function Toppings(toppingName, toppingPrice){
  this.toppingName=toppingName;
  this.toppingPrice = toppingPrice
}

var small = new PizzaSize("Small", 550)

