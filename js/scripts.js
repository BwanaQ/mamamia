
//create empty order
order = [];

//create all Pizza constructors
``
function Pizza(pizzaSizeName,pizzaSizePrice, crustTypeName,crustTypePrice,toppingNames, toppingNamesPrices){
  this.pizzaSizeName = pizzaSizeName;
  this.pizzaSizePrice = pizzaSizePrice;
  this.crustTypeName = crustTypeName;
  this.crustTypePrice = crustTypePrice;
  this.toppingNames = toppingNames;
  this.toppingNamesPrices = toppingNamesPrices;
}

Pizza.prototype.pizzaOrderName = function() {
  return this.pizzaSizeName + " " + this.crustTypeName+" crust Pizza";
}

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
var glutenFreeCrust = new CrustType("gluten free",140);

//create toppings
var vegeterian = new Topping("vegan" , [70,100,140,200]);
var pepperoni = new Topping("pepperoni", [100,150,200,250]);
var hawaiian = new Topping("hawaiian" , [70,90,110,130]);
var bbq = new Topping("bbq" , [170,200,230,270]);
var prawn = new Topping("prawn" , [200,230,260,300]);

//create delivery boolean and delivery charge within nairobi
var isDelivered = false;
var deliveryCharge = 100;


//display menu
document.getElementById("menu").innerHTML = '<div class="col-4 text-center">'+
                                              '<h3>SIZES</h3>'+
                                              '<p>'+small.pizzaName.toUpperCase()+'</br>'+small.pizzaPrice+'</p>'+
                                              '<p>'+medium.pizzaName.toUpperCase()+'</br>'+medium.pizzaPrice+'</p>'+
                                              '<p>'+large.pizzaName.toUpperCase()+'</br>'+large.pizzaPrice+'</p>'+
                                              '<p>'+mega.pizzaName.toUpperCase()+'</br>'+mega.pizzaPrice+'</p>'+
                                            '</div>'+
                                            '<div class="col-4 text-center">'+
                                              '<h3>CRUST TYPE</h3>'+
                                              '<p>'+thinCrust.crustName.toUpperCase()+'</br>'+thinCrust.crustPrice+'</p>'+
                                              '<p>'+mediumCrust.crustName.toUpperCase()+'</br>'+mediumCrust.crustPrice+'</p>'+
                                              '<p>'+thickCrust.crustName.toUpperCase()+'</br>'+thickCrust.crustPrice+'</p>'+
                                              '<p>'+glutenFreeCrust.crustName.toUpperCase()+'</br>'+glutenFreeCrust.crustPrice+'</p>'+
                                            '</div>'+
                                            '<div class="col-4 text-center">'+
                                              '<div class="col-12 text-center">'+
                                                '<h3>TOPPINGS</h3>'+
                                              '</div>'+
                                              '<div class="row">'+  
                                                '<div class="col-6">'+
                                                  '<p>'+
                                                    vegeterian.toppingName.toUpperCase()+'</br>'+
                                                    '<span>Small</span>'+ vegeterian.toppingPrice[0]+'</br>'+
                                                    '<span>medium</span>'+ vegeterian.toppingPrice[1]+'</br>'+
                                                    '<span>Large</span>'+ vegeterian.toppingPrice[2]+'</br>'+
                                                    '<span>Mega</span>'+ vegeterian.toppingPrice[3]+'</br>'+
                                                  '</p>'+
                                                '</div>'+
                                                '<div class="col-6">'+
                                                  '<p>'+
                                                    pepperoni.toppingName.toUpperCase()+'</br>'+
                                                    '<span>Small</span>'+ pepperoni.toppingPrice[0]+'</br>'+
                                                    '<span>medium</span>'+ pepperoni.toppingPrice[1]+'</br>'+
                                                    '<span>Large</span>'+ pepperoni.toppingPrice[2]+'</br>'+
                                                    '<span>Mega</span>'+ pepperoni.toppingPrice[3]+'</br>'+
                                                  '</p>'+
                                                '</div>'+
                                              '</div>'+
                                              '<div class="row">'+  
                                                 '<div class="col-6">'+
                                                    '<p>'+
                                                      hawaiian.toppingName.toUpperCase()+'</br>'+
                                                      '<span>Small</span>'+ hawaiian.toppingPrice[0]+'</br>'+
                                                      '<span>medium</span>'+ hawaiian.toppingPrice[1]+'</br>'+
                                                      '<span>Large</span>'+ hawaiian.toppingPrice[2]+'</br>'+
                                                      '<span>Mega</span>'+ hawaiian.toppingPrice[3]+'</br>'+
                                                    '</p>'+
                                                  '</div>'+
                                                  '<div class="col-6">'+
                                                    '<p>'+
                                                      bbq.toppingName.toUpperCase()+'</br>'+
                                                      '<span>Small</span>'+ bbq.toppingPrice[0]+'</br>'+
                                                      '<span>medium</span>'+ bbq.toppingPrice[1]+'</br>'+
                                                      '<span>Large</span>'+ bbq.toppingPrice[2]+'</br>'+
                                                      '<span>Mega</span>'+ bbq.toppingPrice[3]+'</br>'+
                                                    '</p>'+
                                                  '</div>'+
                                                '</div>'
                                              '</div>'    

//create form via js
document.getElementById("new-pizzas").innerHTML = '<div class="new-pizza">' +
                                                    '<div class="form-group">' +
                                                      '<label for="size">Size</label>' +
                                                      '<select name="size" id="size" form="new-pizza-order">'+
                                                      '<option value="'+small.pizzaPrice+'">'+small.pizzaName+'</option>'+
                                                      '<option value="'+medium.pizzaPrice+'">'+medium.pizzaName+'</option>'+
                                                      '<option value="'+large.pizzaPrice+'">'+large.pizzaName+'</option>'+
                                                      '<option value="'+mega.pizzaPrice+'">'+mega.pizzaName+'</option>'+
                                                    '</select>'+

                                                    '</div>' +
                                                    '<div class="form-group">' +
                                                      '<fieldset>'+      
                                                        '<legend>Preferred Toppings</legend>'+      
                                                        '<input type="checkbox" name="toppings" value="'+vegeterian.toppingPrice+'"><label>'+vegeterian.toppingName+'</label><br>'+      
                                                        '<input type="checkbox" name="toppings" value="'+pepperoni.toppingPrice+'"><label>'+pepperoni.toppingName+'</label><br>'+      
                                                        '<input type="checkbox" name="toppings" value="'+hawaiian.toppingPrice+'"><label>'+hawaiian.toppingName+'</label><br>'+      
                                                        '<input type="checkbox" name="toppings" value="'+bbq.toppingPrice+'"><label>'+bbq.toppingName+'</label><br>'+      
                                                        '<input type="checkbox" name="toppings" value="'+prawn.toppingPrice+'"><label>'+prawn.toppingName+'</label><br>'+      
                                                      '</fieldset>'+ 
                                                    '</div>' +
                                                    '<div class="form-group">' +
                                                      '<fieldset>'+
                                                        '<legend>Preferred Crust</legend>'+      
                                                        '<input type="radio" id="'+thinCrust.crustName+'" name="crust" value="'+thinCrust.crustPrice+'"checked>'+
                                                        '<label for="'+thinCrust.crustName+'">'+thinCrust.crustName+'</label><br>'+
                                                        '<input type="radio" id="'+mediumCrust.crustName+'" name="crust" value="'+mediumCrust.crustPrice+'">'+
                                                        '<label for="'+mediumCrust.crustName+'">'+mediumCrust.crustName+'</label><br>'+
                                                        '<input type="radio" id="'+thickCrust.crustName+'" name="crust" value="'+thickCrust.crustPrice+'">'+
                                                        '<label for="'+thickCrust.crustName+'">'+thickCrust.crustName+'</label><br>'+
                                                        '<input type="radio" id="'+glutenFreeCrust.crustName+'" name="crust" value="'+glutenFreeCrust.crustPrice+'">'+
                                                        '<label for="'+glutenFreeCrust.crustName+'">'+glutenFreeCrust.crustName+'</label><br>'+
                                                      '</fieldset>'+   
                                                    '</div>' +
                                                  '</div>'

//form for new pizza
$(document).ready(function() {
  $("#add-pizza").click(function() {
    $("#new-pizzas").append('<div class="new-pizza">' +
                              '<div class="form-group">' +
                                '<label for="size">Size</label>' +
                                '<select name="size" id="size" form="new-pizza-order">'+
                                '<option value="'+small.pizzaPrice+'">'+small.pizzaName+'</option>'+
                                '<option value="'+medium.pizzaPrice+'">'+medium.pizzaName+'</option>'+
                                '<option value="'+large.pizzaPrice+'">'+large.pizzaName+'</option>'+
                                '<option value="'+mega.pizzaPrice+'">'+mega.pizzaName+'</option>'+
                              '</select>'+

                              '</div>' +
                              '<div class="form-group">' +
                                '<fieldset>'+      
                                  '<legend>Preferred Toppings</legend>'+      
                                  '<input type="checkbox" name="toppings" value="'+vegeterian.toppingPrice+'"><label>'+vegeterian.toppingName+'</label><br>'+      
                                  '<input type="checkbox" name="toppings" value="'+pepperoni.toppingPrice+'"><label>'+pepperoni.toppingName+'</label><br>'+      
                                  '<input type="checkbox" name="toppings" value="'+hawaiian.toppingPrice+'"><label>'+hawaiian.toppingName+'</label><br>'+      
                                  '<input type="checkbox" name="toppings" value="'+bbq.toppingPrice+'"><label>'+bbq.toppingName+'</label><br>'+      
                                  '<input type="checkbox" name="toppings" value="'+prawn.toppingPrice+'"><label>'+prawn.toppingName+'</label><br>'+      
                              '</fieldset>'+ 
                              '</div>' +
                              '<div class="form-group">' +
                                '<fieldset>'+
                                  '<legend>Preferred Crust</legend>'+      
                                  '<input type="radio" id="'+thinCrust.crustName+'" name="crust" value="'+thinCrust.crustPrice+'">'+
                                  '<label for="'+thinCrust.crustName+'">'+thinCrust.crustName+'</label><br>'+
                                  '<input type="radio" id="'+mediumCrust.crustName+'" name="crust" value="'+mediumCrust.crustPrice+'">'+
                                  '<label for="'+mediumCrust.crustName+'">'+mediumCrust.crustName+'</label><br>'+
                                  '<input type="radio" id="'+glutenFreeCrust.crustName+'" name="crust" value="'+glutenFreeCrust.crustPrice+'">'+
                                  '<label for="'+glutenFreeCrust.crustName+'">'+glutenFreeCrust.crustName+'</label><br>'+
                                '</fieldset>'+   
                              '</div>' +
                            '</div>')});
});
   $(document).ready(function() {
    $("form#new-pizza-order").submit(function(event) {
      event.preventDefault();

      var inputtedSizeName = $("select#size option:selected").text();
      var inputtedSizePrice = $("select#size").val();
      var inputtedCrustName = $("input[name='crust']:checked+label").text();
      var inputtedCrustPrice = $("input[name='crust']:checked").val();
      var inputtedToppingsPricesRaw=$('input[name="toppings"]:checked').map(function(){
        return $(this).val();
      }).get();
      var inputtedToppingPricesArray=[];
      for (var i =0; i<inputtedToppingsPricesRaw.length; i++){
        var arrItem=inputtedToppingsPricesRaw[i].split(',');
        inputtedToppingPricesArray.push(arrItem);
      }
      var inputtedToppingNamesArray=$('input[name="toppings"]:checked').map(function(){
        return $(this).next('label').text();
      }).get();
      //select array value based on size
      var inputtedToppingPriceArray=[];
  
      for(var j=0; j<inputtedToppingNamesArray.length;j++){
        if(inputtedSizeName==="small"){
          var arrItem2 = inputtedToppingPricesArray[j][0]
        } else if(inputtedSizeName==="medium"){
          var arrItem2 = inputtedToppingPricesArray[j][1]
        } else if(inputtedSizeName==="large"){
          var arrItem2 = inputtedToppingPricesArray[j][2]
        } else{
          var arrItem2 = inputtedToppingPricesArray[j][3]
        }
        inputtedToppingPriceArray.push(arrItem2);
      }
      var newPizza = new Pizza(inputtedSizeName,inputtedSizePrice, inputtedCrustName,inputtedCrustPrice,inputtedToppingNamesArray, inputtedToppingPriceArray);

      console.log(newPizza);
      var order="<tr><td>" + newPizza.pizzaSizeName +" Pizza" +
                "</td><td>"+ newPizza.pizzaSizePrice+
                "</td></tr>"+
                "<tr><td>" + newPizza.crustTypeName +" Crust" +
                "</td><td>"+ newPizza.crustTypePrice+
                "</td></tr>";

     // pizzaSizeName,pizzaSizePrice, crustTypeName,crustTypePrice,toppingNames, toppingNamesPrices)

        for (var i=0; i<newPizza.toppingNames.length; i++){
        order += "<tr><td>" + newPizza.toppingNames[i] + " Topping" +
                "</td><td>"+ newPizza.toppingNamesPrices[i]+
                "</td></tr>";
      }                                 

      $("#orders").append(order);
      console.log(order);

    });

  }); 

  /*                
  <tr><td>Larry</td><td>Hunja</td></tr>
  */
 //click to hide or remove form for delivery

 $(document).ready(function() {
  $("#isDeliveredRadio").change(function() {
    $("#deliveryDetails").toggle()
  });
});