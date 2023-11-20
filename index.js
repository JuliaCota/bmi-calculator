function calc() {
    let height = parseInt(document.getElementById("h1").value)
    let weight = parseInt(document.getElementById("w1").value)
    
    let square = height * height
    let divider = square / 10000
    
    let bmiResult = weight / divider
    document.getElementById("result").value = bmiResult
    
    if(bmiResult < 18.5){
        document.getElementById("message").textContent = "Underweight"
    }
    else if (bmiResult >= 18.5 && bmiResult <= 24.9){
        document.getElementById("message").textContent = "Normal Weight"
    }
    else if(bmiResult > 24.9 && bmiResult <= 29.9){
        document.getElementById("message").textContent = "Overweight"
    }
    else if(bmiResult > 29.9 && bmiResult < 35){
        document.getElementById("message").textContent = "Obesity"
    }
    else if(bmiResult > 35){
        document.getElementById("message").textContent = "Morbid Obesity"
    }
    else {
        document.getElementById("message").textContent =  "Not Defined, try again."
    }
}