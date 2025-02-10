const display = document.getElementById("display");
const display1 = document.getElementById("display1");

let isOff = false; 


const displayValue = (value) => {
    if (isOff) return; 
    return display.value += value;
}


const clrAll = () => {
    if (isOff) return; 
    return display.value = "";
}


const clrUp = () => {
    if (isOff) return; 
    display1.value = "";
}


const removeLast = () => {
    if (isOff) return; 
    return display.value = display.value.slice(0, -1);
}


const squareRoot = () => {
    if (isOff) return; 
    display1.value = Math.sqrt(Number(display.value)); 
}


const calculate = () => {
    if (isOff) return; 
    try {
        return display1.value = eval(display.value); 
    } catch (error) {
        display1.value = "syntax error"; 
    }
}

const turnOff = () => {
    isOff = true; 
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
    });
    display.value = "OFF"; 
    display1.value = ""; 
    document.getElementById("onOff").textContent = "ON"; 
}


const turnOn = () => {
    isOff = false; 
   
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = false;
    });
    clrAll(); 
    document.getElementById("onOff").textContent = "OFF"; 
}

document.getElementById("onOff").addEventListener("click", () => {
    if (isOff) {
        turnOn(); 
    } else {
        turnOff(); 
    }
});