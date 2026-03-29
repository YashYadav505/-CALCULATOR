const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".key");

let expression = "";



function handleInput(value) {
    let lastChar = expression.slice(-1);

    if (value === "AC") {
        expression = "";
        screen.value = "";
        return;
    }

    if (value === "⌫") {
        expression = expression.slice(0, -1);
        screen.value = expression;
        return;
    }
    if (value === "=") {
        try {
            let result = eval(expression);

            if (!isFinite(result) || isNaN(result)) {
                screen.value = "ERROR";
                expression = "";
            } else {
                expression = result.toString();
                screen.value = expression;
            }
        } catch {
            screen.value = "ERROR";
            expression = "";
        }
        return;
    }


    if (value === "(") {
        if (expression !== "" && !["+", "-", "*", "/", "("].includes(lastChar)) {
            expression += "*(";
        } else {
            expression += "(";
        }
        screen.value = expression;
        return;
    }

    if (value === ")") {
        let open = (expression.match(/\(/g) || []).length;
        let close = (expression.match(/\)/g) || []).length;

        if (open > close && !["+", "-", "*", "/", "("].includes(lastChar)) {
            expression += ")";
        }
        screen.value = expression;
        return;
    }

    if (["+", "-", "*", "/"].includes(value)) {

      
        if (value === "-") {
            expression += "-";
        } 
        else {
            if (expression === "" || ["+", "-", "*", "/", "("].includes(lastChar)) {
                return;
            }
            expression += value;
        }

        screen.value = expression;
        return;
    }

    if (lastChar === ")") {
        expression += "*" + value; 
    } else {
        expression += value;
    }

    screen.value = expression;
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        handleInput(button.innerText);
    });
});


//keyboard input from user
document.addEventListener("keydown", (e) => {
    let key = e.key;

    if (/^[0-9]$/.test(key)) handleInput(key);
    else if (["+", "-", "*", "/"].includes(key)) handleInput(key);
    else if (key === "Enter") handleInput("=");
    else if (key === "Backspace") handleInput("⌫");
    else if (key === "Escape") handleInput("AC");
    else if (key === ".") handleInput(".");
    else if (key === "(") handleInput("(");
    else if (key === ")") handleInput(")");
});