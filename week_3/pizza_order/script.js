const pizzaOrder = () =>{
    const userName = document.querySelector("#Uname").value;
    const pizzaSize = document.querySelector('input[name="size"]:checked');
    const toppings = document.querySelectorAll('input[name="topping"]:checked');
    let deliveryMethod = document.querySelector("#delivery_method");
    const totalAmount = document.querySelector("#totalAmount");
    
// javascript code for checked box.
    let pizzaPrice = pizzaSize.value;
    let pizzaContent = pizzaSize.labels[0].innerText;
    
    let deliveryValue = deliveryMethod.value;
    let deliveryText = deliveryMethod.options [deliveryMethod.selectedIndex].text;

    let toppingPrice = 0;
    let toppingsNameArray = [];
    
    toppings.forEach((item) =>{
        toppingsNameArray.push(item.labels[0].innerText);
    });
    
    if(toppings.length > 4){
        toppingPrice+=(toppings.length - 4)* 0.5
    }
    console.log(toppingPrice);
    
    // code for select and option value
    let totalBillAmount = Number(pizzaPrice) +Number(toppingPrice) + Number(deliveryValue);
    totalAmount.innerHTML = `Hello <span class="highlight">${userName}</span>,Your pizza is <span class="highlight">${pizzaContent}</span> and your selected toppings are  ${toppingsNameArray.join(', ')} so price for toppings are ${toppingPrice}€ your selected delivery method is <span class = "highlight">${deliveryText}</span> so your total bill amount ${totalBillAmount}`;


    return false;
}