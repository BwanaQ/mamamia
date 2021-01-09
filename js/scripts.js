
//create empty order
function Orders(pizzaSize,crustType,toppings){
  this.order = [];
}

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
var small = new PizzaSize("small", 551);
var medium = new PizzaSize("medium", 830);
var large = new PizzaSize("large",1050);
var mega = new PizzaSize("mega", 1270);

// create Crusts
var thinCrust = new CrustType("thin", 100);
var mediumCrust = new CrustType("medium", 110);
var thickCrust = new CrustType("thick",120);

//create toppings
var vegeterian = new Topping("vegan" , [70,100,140,200]);
var pepperoni = new Topping("pepperoni", [100,150,200,250]);
var hawaiian = new Topping("hawaiian" , [70,90,110,130]);
var bbq = new Topping("bbq" , [170,200,230,270]);

//create delivery boolean and delivery charge within nairobi
var isDelivered = false;
var deliveryCharge = 100;


//display menu
document.getElementById("menu").innerHTML = '<h2>Menu</h2>'+
                                            '<h3>SIZES</h3>'+
                                            '<p>'+small.pizzaName.toUpperCase()+'</br>'+small.pizzaPrice+'</p>'+
                                            '<p>'+medium.pizzaName.toUpperCase()+'</br>'+medium.pizzaPrice+'</p>'+
                                            '<p>'+large.pizzaName.toUpperCase()+'</br>'+large.pizzaPrice+'</p>'+
                                            '<p>'+mega.pizzaName.toUpperCase()+'</br>'+mega.pizzaPrice+'</p>'+
                                            '<h3>CRUST TYPE</h3>'+
                                            '<p>'+thinCrust.crustName.toUpperCase()+'</br>'+thinCrust.crustPrice+'</p>'+
                                            '<p>'+mediumCrust.crustName.toUpperCase()+'</br>'+mediumCrust.crustPrice+'</p>'+
                                            '<p>'+thickCrust.crustName.toUpperCase()+'</br>'+thickCrust.crustPrice+'</p>'+
                                            '<h3>TOPPINGS</h3>'+
                                            '<p>'+
                                              vegeterian.toppingName.toUpperCase()+'</br>'+
                                              '<span>Small</span>'+ vegeterian.toppingPrice[0]+'</br>'+
                                              '<span>medium</span>'+ vegeterian.toppingPrice[1]+'</br>'+
                                              '<span>Large</span>'+ vegeterian.toppingPrice[2]+'</br>'+
                                              '<span>Mega</span>'+ vegeterian.toppingPrice[3]+'</br>'+
                                            '</p>'+
                                            '<p>'+
                                              pepperoni.toppingName.toUpperCase()+'</br>'+
                                              '<span>Small</span>'+ pepperoni.toppingPrice[0]+'</br>'+
                                              '<span>medium</span>'+ pepperoni.toppingPrice[1]+'</br>'+
                                              '<span>Large</span>'+ pepperoni.toppingPrice[2]+'</br>'+
                                              '<span>Mega</span>'+ pepperoni.toppingPrice[3]+'</br>'+
                                            '</p>'+
                                            '<p>'+
                                              hawaiian.toppingName.toUpperCase()+'</br>'+
                                              '<span>Small</span>'+ hawaiian.toppingPrice[0]+'</br>'+
                                              '<span>medium</span>'+ hawaiian.toppingPrice[1]+'</br>'+
                                              '<span>Large</span>'+ hawaiian.toppingPrice[2]+'</br>'+
                                              '<span>Mega</span>'+ hawaiian.toppingPrice[3]+'</br>'+
                                            '</p>'+
                                            '<p>'+
                                              bbq.toppingName.toUpperCase()+'</br>'+
                                              '<span>Small</span>'+ bbq.toppingPrice[0]+'</br>'+
                                              '<span>medium</span>'+ bbq.toppingPrice[1]+'</br>'+
                                              '<span>Large</span>'+ bbq.toppingPrice[2]+'</br>'+
                                              '<span>Mega</span>'+ bbq.toppingPrice[3]+'</br>'+
                                            '</p>'


//create form via jQuery
/*
<form id="new-pizza-order">
      <div class="form-group">
        <label for="size">Size</label>
        <select name="size" id="size" form="new-pizza-order">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="mega">Mega</option>
        </select>
      </div>
      <div class="form-group">
        <fieldset>      
          <legend>Preferred Toppings</legend>      
          <input type="checkbox" name="toppings" value="pepperonni">Pepperonni<br>      
          <input type="checkbox" name="toppings" value="supreme">Supreme<br>      
          <input type="checkbox" name="toppings" value="hawaiian">Hawaiian<br>      
          <input type="checkbox" name="toppings" value="bbq">BBQ<br>      
          <input type="checkbox" name="toppings" value="prawn">Prawn<br>      
        </fieldset> 
      </div>
      <div class="form-group">
        <fieldset>
          <legend>Preferred Crust</legend>      
          <input type="radio" id="thin" name="crust" value="thin">
          <label for="thin">Thin</label><br>
          <input type="radio" id="medium" name="crust" value="medium">
          <label for="medium">Medium</label><br>
          <input type="radio" id="thick" name="crust" value="thick">
          <label for="thick">Thick</label>
        </fieldset>   
      </div>
      <div class="form-group">
      <button type="submit" class="btn btn-success ">Proceed to checkout</button>
    </form>
    */