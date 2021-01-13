function PizzaOrder(address){
  this.address = address;
  this.pizzas =[];
}

function Pizza(pizzaSizeName,pizzaSizePrice, crustTypeName,crustTypePrice,toppingNames, toppingNamesPrices){
  this.pizzaSizeName = pizzaSizeName;
  this.pizzaSizePrice = pizzaSizePrice;
  this.crustTypeName = crustTypeName;
  this.crustTypePrice = crustTypePrice;
  this.toppingNames = toppingNames;
  this.toppingNamesPrices = toppingNamesPrices;

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
var small = new PizzaSize("small", 550);
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

function resetFields(){
  //work on it
  $("#isDeliveredRadio").val("");
  $("#deliveryDetails").val("");
  $("select.size").val("");
  $("input[name='crust']").val("");
  $('input[name="toppings"]').val("");
  
}
//display menu
document.getElementById("menu").innerHTML = '<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center" id="green-menu">'+
                                              '<h3>Sizes</h3>'+
                                              '<p>'+small.pizzaName.toUpperCase()+'</br>'+small.pizzaPrice+'</p>'+
                                              '<p>'+medium.pizzaName.toUpperCase()+'</br>'+medium.pizzaPrice+'</p>'+
                                              '<p>'+large.pizzaName.toUpperCase()+'</br>'+large.pizzaPrice+'</p>'+
                                              '<p>'+mega.pizzaName.toUpperCase()+'</br>'+mega.pizzaPrice+'</p>'+
                                            '</div>'+
                                            '<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center" id="white-menu">'+
                                              '<h3>Crusts</h3>'+
                                              '<p>'+thinCrust.crustName.toUpperCase()+'</br>'+thinCrust.crustPrice+'</p>'+
                                              '<p>'+mediumCrust.crustName.toUpperCase()+'</br>'+mediumCrust.crustPrice+'</p>'+
                                              '<p>'+thickCrust.crustName.toUpperCase()+'</br>'+thickCrust.crustPrice+'</p>'+
                                              '<p>'+glutenFreeCrust.crustName.toUpperCase()+'</br>'+glutenFreeCrust.crustPrice+'</p>'+
                                            '</div>'+
                                            '<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center" id="red-menu">'+
                                              '<div class="col-12 text-center">'+
                                                '<h3>Toppings</h3>'+
                                              '</div>'+
                                              '<div class="row">'+  
                                                '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">'+
                                                  '<p>'+
                                                    vegeterian.toppingName.toUpperCase()+'</br>'+
                                                    '<span>Small</span>'+ vegeterian.toppingPrice[0]+'</br>'+
                                                    '<span>medium</span>'+ vegeterian.toppingPrice[1]+'</br>'+
                                                    '<span>Large</span>'+ vegeterian.toppingPrice[2]+'</br>'+
                                                    '<span>Mega</span>'+ vegeterian.toppingPrice[3]+'</br>'+
                                                  '</p>'+
                                                '</div>'+
                                                '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">'+
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
                                                 '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">'+
                                                    '<p>'+
                                                      hawaiian.toppingName.toUpperCase()+'</br>'+
                                                      '<span>Small</span>'+ hawaiian.toppingPrice[0]+'</br>'+
                                                      '<span>medium</span>'+ hawaiian.toppingPrice[1]+'</br>'+
                                                      '<span>Large</span>'+ hawaiian.toppingPrice[2]+'</br>'+
                                                      '<span>Mega</span>'+ hawaiian.toppingPrice[3]+'</br>'+
                                                    '</p>'+
                                                  '</div>'+
                                                  '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">'+
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
$(document).ready(function() {
  $("#isDelivered").change(function() {
    $("#deliveryDetails").toggle()
  });
});

$(document).ready(function(){
  $("#add-pizza").click(function(){
    $("#new-pizzas").append('<div class="new-pizza">'+
                            '<div class="form-group">'+
                                '<label for="size">Size</label>'+
                                '<select class="form-control size" name="size" id="size" form="order">'+
                                  '<option value="550">small</option>'+
                                  '<option value="830">medium</option>'+
                                  '<option value="1050">large</option>'+
                                  '<option value="1270">mega</option>'+
                                '</select>'+
                              '</div>'+
                              '<div class="form-group">'+
                                '<fieldset>'+
                                  '<legend>Preferred Toppings</legend>'+
                                  '<input type="checkbox" name="toppings" value="70,100,140,200">'+
                                  '<label>vegan</label><br>'+
                                  '<input type="checkbox" name="toppings" value="100,150,200,250">'+
                                  '<label>pepperoni</label><br>'+
                                  '<input type="checkbox" name="toppings" value="70,90,110,130">'+
                                  '<label>hawaiian</label><br>'+
                                  '<input type="checkbox" name="toppings" value="170,200,230,270">'+
                                  '<label>bbq</label><br>'+
                                  '<input type="checkbox" name="toppings" value="200,230,260,300">'+
                                  '<label>prawn</label><br>'+
                                '</fieldset>'+
                              '</div>'+
                              '<div class="form-group">'+
                                '<label for="crust">Crust</label>'+
                                '<select class="form-control crust" name="crust" id="crust" form="order">'+
                                  '<option value="100">thin</option>'+
                                  '<option value="110">medium</option>'+
                                  '<option value="120">thick</option>'+
                                  '<option value="140">gluten free</option>'+
                                '</select>'+
                              '</div>'+
                            '</div>'

    )
  });
  
  $("form#new-order").submit(function(event){
    event.preventDefault();
    var inputtedAddressDetails=$("#addressDetails").val();
    console.log(inputtedAddressDetails)
    var newPizzaOrder = new PizzaOrder(inputtedAddressDetails);
    console.log(newPizzaOrder)
    var total=0;
    var delivery =100;
    if(inputtedAddressDetails!==''){
      total+=delivery;
      console.log(total);
      var deliveryOutput="<tr><td>" + "Delivery Charges" +
              "</td><td>"+ delivery+
              "</td></tr>"
    }
    $("#orders").append(deliveryOutput);
    console.log(total)
    $(".new-pizza").each(function(){
      var inputtedSizeName = $(this).find("select.size option:selected").text();
      var inputtedSizePrice = $(this).find("select.size option:selected").val();  
      var inputtedCrustName = $(this).find("select.crust option:selected").text();
      var inputtedCrustPrice = $(this).find("select.crust option:selected").val();
      
      var inputtedToppingsPricesRaw =[]; //initialization
      inputtedToppingsPricesRaw=$(this).find('input[name="toppings"]:checked').map(function(){
        return $(this).val();
      }).get();
      console.log(inputtedToppingsPricesRaw);
      
      var inputtedToppingPricesArray=[];
      for (var i =0; i<inputtedToppingsPricesRaw.length; i++){
        var arrItem=inputtedToppingsPricesRaw[i].split(',');
        inputtedToppingPricesArray.push(arrItem);
      }
        
      var inputtedToppingNamesArray=[];
      var inputtedToppingNamesArray=$(this).find('input[name="toppings"]:checked').map(function(){
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
      
      var newPizza  = new Pizza(inputtedSizeName,inputtedSizePrice, inputtedCrustName,inputtedCrustPrice,inputtedToppingNamesArray, inputtedToppingPriceArray);
      newPizzaOrder.pizzas.push(newPizza)
    
      //output pizza
      var orderItem="<tr><td>" + newPizza.pizzaSizeName +" Pizza" +
      "</td><td>"+ newPizza.pizzaSizePrice+
      "</td></tr>"+
      "<tr><td>" + newPizza.crustTypeName +" Crust" +
      "</td><td>"+ newPizza.crustTypePrice+
      "</td></tr>";
      
      
      total += parseInt(newPizza.pizzaSizePrice)+parseInt(newPizza.crustTypePrice)
      // pizzaSizeName,pizzaSizePrice, crustTypeName,crustTypePrice,toppingNames, toppingNamesPrices)

      for (var i=0; i<newPizza.toppingNames.length; i++){
        orderItem += "<tr><td>" + newPizza.toppingNames[i] + " Topping" +
            "</td><td>"+ newPizza.toppingNamesPrices[i]+
            "</td></tr>";
  
        total +=parseInt(newPizza.toppingNamesPrices[i])
      }
    $("#orders").append(orderItem);    

    }); 
    $("#total").append("Your total is <strong>"+ total+"</strong>. Thank you.")
                        
  });
  resetFields();
});
/*  


function Pizza(pizzaSizeName,pizzaSizePrice, crustTypeName,crustTypePrice,toppingNames, toppingNamesPrices){
  this.pizzaSizeName = pizzaSizeName;
  this.pizzaSizePrice = pizzaSizePrice;
  this.crustTypeName = crustTypeName;
  this.crustTypePrice = crustTypePrice;
  this.toppingNames = toppingNames;
  this.toppingNamesPrices = toppingNamesPrices;
}

Pizza.prototype.pizzaOrderName = function() {
  return this.pizzaSizeName + " " + this.crustTypeName+" Pizza";
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
var small = new PizzaSize("small", 550);
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
document.getElementById("menu").innerHTML = '<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center" id="green-menu">'+
                                              '<h3>Sizes</h3>'+
                                              '<p>'+small.pizzaName.toUpperCase()+'</br>'+small.pizzaPrice+'</p>'+
                                              '<p>'+medium.pizzaName.toUpperCase()+'</br>'+medium.pizzaPrice+'</p>'+
                                              '<p>'+large.pizzaName.toUpperCase()+'</br>'+large.pizzaPrice+'</p>'+
                                              '<p>'+mega.pizzaName.toUpperCase()+'</br>'+mega.pizzaPrice+'</p>'+
                                            '</div>'+
                                            '<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center" id="white-menu">'+
                                              '<h3>Crusts</h3>'+
                                              '<p>'+thinCrust.crustName.toUpperCase()+'</br>'+thinCrust.crustPrice+'</p>'+
                                              '<p>'+mediumCrust.crustName.toUpperCase()+'</br>'+mediumCrust.crustPrice+'</p>'+
                                              '<p>'+thickCrust.crustName.toUpperCase()+'</br>'+thickCrust.crustPrice+'</p>'+
                                              '<p>'+glutenFreeCrust.crustName.toUpperCase()+'</br>'+glutenFreeCrust.crustPrice+'</p>'+
                                            '</div>'+
                                            '<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center" id="red-menu">'+
                                              '<div class="col-12 text-center">'+
                                                '<h3>Toppings</h3>'+
                                              '</div>'+
                                              '<div class="row">'+  
                                                '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">'+
                                                  '<p>'+
                                                    vegeterian.toppingName.toUpperCase()+'</br>'+
                                                    '<span>Small</span>'+ vegeterian.toppingPrice[0]+'</br>'+
                                                    '<span>medium</span>'+ vegeterian.toppingPrice[1]+'</br>'+
                                                    '<span>Large</span>'+ vegeterian.toppingPrice[2]+'</br>'+
                                                    '<span>Mega</span>'+ vegeterian.toppingPrice[3]+'</br>'+
                                                  '</p>'+
                                                '</div>'+
                                                '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">'+
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
                                                 '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">'+
                                                    '<p>'+
                                                      hawaiian.toppingName.toUpperCase()+'</br>'+
                                                      '<span>Small</span>'+ hawaiian.toppingPrice[0]+'</br>'+
                                                      '<span>medium</span>'+ hawaiian.toppingPrice[1]+'</br>'+
                                                      '<span>Large</span>'+ hawaiian.toppingPrice[2]+'</br>'+
                                                      '<span>Mega</span>'+ hawaiian.toppingPrice[3]+'</br>'+
                                                    '</p>'+
                                                  '</div>'+
                                                  '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">'+
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

//form for new pizza
$(document).ready(function() {
  $("#add-pizza").click(function() {
    var inputtedSizeName = $("select#size option:selected").text();
    console.log("Pizza size Name "+ inputtedSizeName);
    var inputtedSizePrice = $("select#size").val();
    console.log("Pizza size Price "+ inputtedSizePrice);

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
    var inputtedToppingNamesArray=[];
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
  //reset values;
  $("select#size").text("");
  $("select#size").val("");
  
  $("#new-pizzas").append(
    '<div class="new-pizza">'+
              '<div class="form-group">'+
                '<label for="size">Size</label>'+
                '<select class="form-control" name="size" id="size" form="new-pizza-order">'+
                  '<option value="550">small</option>'+
                  '<option value="830">medium</option>'+
                  '<option value="1050">large</option>'+
                  '<option value="1270">mega</option>'+
                '</select>'+
              '</div>'+
              '<div class="form-group">'+
                '<fieldset>'+
                  '<legend>Preferred Toppings</legend>'+
                  '<input type="checkbox" name="toppings" value="70,100,140,200">'+
                  '<label>vegan</label><br>'+
                  '<input type="checkbox" name="toppings" value="100,150,200,250">'+
                  '<label>pepperoni</label><br>'+
                  '<input type="checkbox" name="toppings" value="70,90,110,130">'+
                  '<label>hawaiian</label><br>'+
                  '<input type="checkbox" name="toppings" value="170,200,230,270">'+
                  '<label>bbq</label><br>'+
                  '<input type="checkbox" name="toppings" value="200,230,260,300">'+
                  '<label>prawn</label><br>'+
                '</fieldset>'+
              '</div>'+
              '<div class="form-group">'+
                '<fieldset>'+
                  '<legend>Preferred Crust</legend>'+
                  '<input type="radio" id="thin" name="crust" value="100" checked="">'+
                  '<label for="thin">thin</label><br>'+
                  '<input type="radio" id="medium" name="crust" value="110">'+
                  '<label for="medium">medium</label><br>'+
                  '<input type="radio" id="thick" name="crust" value="120">'+
                  '<label for="thick">thick</label><br>'+
                  '<input type="radio" id="gluten free" name="crust" value="140">'+
                  '<label for="gluten free">gluten free</label><br>'+
                '</fieldset>'+
              '</div>'+
            '</div>'
  )                          
    
  });
});
   $(document).ready(function() {
    $("form#new-pizza-order").submit(function(event) {
      event.preventDefault();


    });

  }); 

  /*                
  <tr><td>Larry</td><td>Hunja</td></tr>

 $(document).ready(function() {
  $("#isDeliveredRadio").change(function() {
    $("#deliveryDetails").toggle()
  });
});
  */
 //click to hide or remove form for delivery
