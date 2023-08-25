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
const openParentheses = document.getElementById("(")
const closedPerentheses = document.getElementById(")")

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
let operand = 0
mult.addEventListener("click", () => {
    if (result.textContent != "0" && !(result.textContent.endsWith("+") || result.textContent.endsWith("-") || result.textContent.endsWith("×") || result.textContent.endsWith("÷"))) {
        result.textContent += " × "
    }
})
divide.addEventListener("click", () => {
    if (result.textContent != "0" && !(result.textContent.endsWith("+") || result.textContent.endsWith("-") || result.textContent.endsWith("×") || result.textContent.endsWith("÷"))) {
        result.textContent += " ÷ "
    }
})
plus.addEventListener("click", () => {
    if (result.textContent != "0" && !(result.textContent.endsWith("+") || result.textContent.endsWith("-") || result.textContent.endsWith("×") || result.textContent.endsWith("÷"))) {
        result.textContent += " + "
    }
})
minus.addEventListener("click", () => {
    if (result.textContent != "0" && !(result.textContent.endsWith("+") || result.textContent.endsWith("-") || result.textContent.endsWith("×") || result.textContent.endsWith("÷"))) {
        result.textContent += " - "
    }
})
exponent.addEventListener("click", () => {
    if (result.textContent != "0" && !(result.textContent.endsWith("+") || result.textContent.endsWith("-") || result.textContent.endsWith("×") || result.textContent.endsWith("÷"))) {
        result.textContent += " ^ "
    }
})

// Adding click event lsiteners to the clear button
clear.addEventListener("click", () => {
    result.textContent = 0
})
allClear.addEventListener("click", () => {
    operand = 0
    result.textContent = 0
})

