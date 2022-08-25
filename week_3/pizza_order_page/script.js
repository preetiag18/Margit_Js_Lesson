const pizzaOrder = () =>{
    const userName = document.querySelector("#Uname").value;
    const pizzaSize = document.querySelector('input[name="size"]:checked');
    const pizzaPrice = pizzaSize.value;
    const pizzaContent = pizzaSize.labels[0].innerText;

    let nameOfUser = document.querySelector("#userName");
    let priceOfPizza = document.querySelector("#PizzaPrice");
    let contentOfPizza = document.querySelector("#PizzaContent");

    nameOfUser.textContent = userName;
    priceOfPizza.textContent = pizzaPrice;
    contentOfPizza.textContent = pizzaContent;
    return false;
}