// Declares variables for all of the buttons in the calculator
const result = document.getElementById("result")

const plus = document.getElementById("+")
const minus = document.getElementById("-")
const mult = document.getElementById("x")
const divide = document.getElementById("/")
const exponent = document.getElementById("^")
const equals = document.getElementById("=")

const clear = document.getElementById("C")
const allClear = document.getElementById("AC")
const answer = document.getElementById("Ans")

const history = document.getElementById("history")

let numberButtons = []

for (let i = 0; i <= 9; i++) {
    numberButtons[i] = document.getElementById(String(i));
}
console.log(numberButtons)

// Adding click event listeners to all of the number buttons
for (let i = 0; i <= 9; i++) {
    numberButtons[i].addEventListener("click", () => {
        if (result.textContent === "0"){
            result.textContent = numberButtons[i].textContent
            // console.log(result.textContent)
        } else {
            result.textContent += numberButtons[i].textContent
            // console.log(result.textContent)
        }
    })
}

// Adding click event listeners to the operator buttons
let operator = ""
mult.addEventListener("click", () => {
    if (operator != "") {
        result.textContent = evaluate() + " × "
        operator = "*"
    } else if (result.textContent != "0" && !(result.textContent.endsWith("+") || result.textContent.endsWith("-") || result.textContent.endsWith("×") || result.textContent.endsWith("÷"))) {
        result.textContent += " × "
        operator = "*"
    }
})
divide.addEventListener("click", () => {
    if (operator != "") {
        result.textContent = evaluate() + " ÷ "
        operator = "/"
    } else if (result.textContent != "0" && !(result.textContent.endsWith("+") || result.textContent.endsWith("-") || result.textContent.endsWith("×") || result.textContent.endsWith("÷"))) {
        result.textContent += " ÷ "
        operator = "/"
    }
})
plus.addEventListener("click", () => {
    if (operator != "") {
        result.textContent = evaluate() + " + "
        operator = "+"
    } else if (result.textContent != "0" && !(result.textContent.endsWith("+") || result.textContent.endsWith("-") || result.textContent.endsWith("×") || result.textContent.endsWith("÷"))) {
        result.textContent += " + "
        operator = "+"
    }
})
minus.addEventListener("click", () => {
    if (operator != "") {
        result.textContent = evaluate() + " - "
        operator = "-"
    } else if (result.textContent != "0" && !(result.textContent.endsWith("+") || result.textContent.endsWith("-") || result.textContent.endsWith("×") || result.textContent.endsWith("÷"))) {
        result.textContent += " - "
        operator = "-"
    }
})
exponent.addEventListener("click", () => {
    if (operator != "") {
        result.textContent = evaluate() + " ^ "
        operator = "^"
    } else if (result.textContent != "0" && !(result.textContent.endsWith("+") || result.textContent.endsWith("-") || result.textContent.endsWith("×") || result.textContent.endsWith("÷"))) {
        result.textContent += " ^ "
        operator = "^"
    }
})

// Adding click event lsiteners to the clear button
clear.addEventListener("click", () => {
    let newResult = result.textContent.split(" ")
    newResult.pop()
    result.textContent = newResult.toString().replaceAll(",", " ")
})  
allClear.addEventListener("click", () => {
    result.textContent = "0"
})

/*
// Adding event listener to the answer button
let answerNum = undefined;
answer.addEventListener("click", () => {
    if (answerNum === undefined) {
        alert("No previous answer")
    } else {
        result.textContent += answerNum
    }
})
*/
// Adding click event listener to the equals button
equals.addEventListener("click", () => {
    const equation = result.textContent.split(" ")
    if (equation.length == 3) {
        result.textContent = evaluate()
    }
})

function evaluate() {
    const equation = result.textContent.split(" ")
    const operand1 = Number(equation[0])
    const operand2 = Number(equation[2])
    
    let answer
    switch (operator) {
        case "+":
            answer = operand1 + operand2
            history.innerHTML += ("<p>" + result.innerText + " = " + answer + "</p>")
            return answer
        case "-":
            answer = operand1 - operand2
            history.innerHTML += ("<p>" + result.innerText + " = " + answer + "</p>")
            return answer
        case "*":
            answer = operand1 * operand2
            history.innerHTML += ("<p>" + result.innerText + " = " + answer + "</p>")
            return answer
        case "/":
            ranswer = operand1 / operand2
            history.innerHTML += ("<p>" + result.innerText + " = " + answer + "</p>")
            return answer
        case "^":
            answer = operand1 ** operand2
            history.innerHTML += ("<p>" + result.innerText + " = " + answer + "</p>")
            return answer
        default:
            return
    }

}