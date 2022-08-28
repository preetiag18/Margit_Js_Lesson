const pizzaOrder = () =>{
    const userName = document.querySelector("#Uname").value;
    const pizzaSize = document.querySelector('input[name="size"]:checked');
    const pizzaPrice = pizzaSize.value;
    const pizzaContent = pizzaSize.labels[0].innerText;

    let nameOfUser = document.querySelector("#userName");
    let priceOfPizza = document.querySelector("#PizzaPrice");
    let contentOfPizza = document.querySelector("#PizzaContent");
    let toppingOfPizza = document.querySelector('#PizzaTopping');
    let extraToppingPrice = document.querySelector("#PizzaToppingPrice");
    let methodDelivery = document.querySelector("#PizzaDeliveyType");
    let methodDeliveryPrice = document.querySelector("#PizzaDeliveyPrice");
    let totalAmount = document.querySelector("#totalPrice");

    

    nameOfUser.textContent = userName;
    priceOfPizza.textContent = pizzaPrice;
    contentOfPizza.textContent = pizzaContent;
// javascript code for checked box.

    let toppings = document.querySelectorAll('input[name="topping"]:checked');
    let lablesTopping = "";
    let toppingPrice = "";
    for(let i=0;i<toppings.length;i++) {
       let nameOfToppings = toppings[i].labels[0].innerText;
       lablesTopping = lablesTopping + "," + nameOfToppings;
       let price = toppings[i].value;
       toppingPrice = Number(toppingPrice)+Number(price);
    }
    toppingOfPizza.textContent = lablesTopping;
    extraToppingPrice.textContent = toppingPrice;  

    // code for select and option value

    let selectId = document.querySelector("#delivery_method")
    let selectValue = selectId.value;
    let selectedText = selectId.options[selectId.selectedIndex].text;

    methodDelivery.textContent = selectedText;
    methodDeliveryPrice.textContent = selectValue;

    let totalBillAmount = Number(pizzaPrice) +Number(toppingPrice) + Number(selectValue);
    totalAmount.textContent = totalBillAmount;


    return false;
}