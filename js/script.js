


function conversorCelsius(){
    let celsius = parseFloat(document.getElementById("celsius").value);
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value = ((celsius*1.8)+32));
    let kelvin = parseFloat(document.getElementById("kelvin").value = (celsius+273.15));
}

function conversorFah(){
    let fah = parseFloat(document.getElementById("fahrenheit").value);
    let celsius = parseFloat(document.getElementById("celsius").value = ((fah- 32) * 5/9));
    let kelvin = parseFloat(document.getElementById("kelvin").value = ((fah+ 459,67)* 5/9));
}

function conversorKelvin(){
    let kelvin = parseFloat(document.getElementById("kelvin").value);
    let celsius = parseFloat(document.getElementById("celsius").value = (kelvin - 273));
    let fahrenheit =parseFloat(document.getElementById("fahrenheit").value = ((kelvin-273,15)*9/5+32));
}

function limpar(){
    let celsius = parseFloat(document.getElementById("celsius").value = "");
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value = "");
    let kelvin = parseFloat(document.getElementById("kelvin").value = "");
}