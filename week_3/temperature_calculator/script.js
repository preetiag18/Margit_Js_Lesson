function changeTemp(id,val){
    console.log(id,val);
    val = parseFloat(val);

    const inputCelsius= document.querySelector("#celsius");
    const inputFahrenheit= document.querySelector("#fahrenheit");
     const inputKelvin= document.querySelector("#kelvin");

     if(id == "fahrenheit"){
        inputCelsius.value = ((val-32)/1.8).toFixed(2);
        inputKelvin.value = (((val-32)/1.8)+273.15).toFixed(2);
     }
     if(id == "celsius"){
        inputFahrenheit.value = ((val*18 + 32)).toFixed(2);
        inputKelvin.value = (val +273.15).toFixed(2);
     }
     if(id == "kelvin"){
        inputFahrenheit.value = (((val-273.15)*1.8)+32).toFixed(2);
        inputCelsius.value = (val-273.15).toFixed(2);
     }

    // fahrenheit.textContent = (num*1.8)+32;

    // kelvin.textContent = (num+273.15);

}