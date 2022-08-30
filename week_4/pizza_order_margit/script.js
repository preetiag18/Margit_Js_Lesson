const form = document.querySelector('form');
const customer = document.querySelector('#name').value;
const size = document.querySelectorAll('[name="size"]');
const toppings = document.querySelectorAll('input[type= "checkbox"]');
const delivery = document.querySelector('#delivery');
const order = document.querySelector('#order');



const takeOrder = (event) => {
    event.preventDefault();

    let customerName = customer.value;
    let sizeResult = '';
    let toppingsResult = [];
    let deliveryResult = delivery.options[delivery.selectedIndex].value; 
    let price = 0;

    size.forEach((item) => {
        if(item.checked){
            sizeResult = item.value;
        }
    });

    switch(sizeResult){
        case 'two':
            price += 7.5;
            break;
        case 'four':
            price += 10.5;
            break;
        case 'six':
            price += 12.5;
            break;
        case 'six':
            price += 15.5;
            break;
        default:
        }
    

    toppings.forEach((item)=>{
        if(item.checked) {
            toppingsResult.push(item.value);
        }
    });

    if(toppingsResult.length > 4){
        price += (toppingsResult.length - 4) * 0.5;
    }

    if(deliveryResult == 'home'){
        price += 5;
    }

    order.textContent = `Name ${customerName}.
    Size: ${sizeResult}, Topping : ${toppingsResult.join(
        ','
    )} and delivery method is ${deliveryResult}.`
    console.log(customerName);
    console.log(sizeResult);
    console.log(toppingsResult);
    console.log(deliveryResult);
    console.log(price);
   

    
}


form.addEventListener('submit',takeOrder);


