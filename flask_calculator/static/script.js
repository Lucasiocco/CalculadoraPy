function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    const expression = document.getElementById("display").value;
    fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expression }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("display").value = data.result;
    })
    .catch(error => {
        document.getElementById("display").value = "Error";
    });
}

function appendSqrt() {
    const display = document.getElementById("display");
    const currentValue = display.value;
    
    // Si ya hay un valor, envolver ese valor en sqrt()
    if (currentValue) {
        display.value = `sqrt(${currentValue})`;
    } else {
        display.value = "sqrt(";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}