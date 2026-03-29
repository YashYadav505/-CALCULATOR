# 🧮 Smart Calculator Web App

A modern, responsive calculator built using **HTML, CSS, and JavaScript** with smart input handling and clean UI.

---

## 🚀 Features

* ➕ Basic arithmetic operations (+, −, ×, ÷)
* ⚡ Real-time calculation
* 🧠 Smart input validation (prevents invalid expressions)
* 🎯 Handles negative numbers correctly
* ❌ Prevents multiple operators (like ++, **, etc.)
* 🖥️ Responsive design (works on desktop & mobile)
* 🎨 Clean and minimal UI

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Logic:** Vanilla JavaScript (no libraries)

---

## 📸 Demo

(Add screenshot here)

```
![Calculator UI](screenshot.png)
```

---

## 📂 Project Structure

```
calculator-project/
│── index.html
│── style.css
│── script.js
│── README.md
```

---
## 📸 Project Preview

![Calculator Poster](https://github.com/YashYadav505/-CALCULATOR/blob/main/images/Smart%20Calculator%20Web%20App.png?raw=true)


## ⚙️ How It Works

* Captures user input via buttons
* Builds a mathematical expression as a string
* Validates input to avoid invalid operations
* Uses `eval()` (or custom logic) to compute results
* Displays output dynamically on screen

---

## 🧠 Smart Logic Example

```javascript
// Prevent double operators
if (["+", "-", "*", "/"].includes(value)) {
    if (expression === "" || ["+", "-", "*", "/"].includes(lastChar)) {
        return;
    }
}
```

---

## ▶️ Run Locally

1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/calculator-project.git
```

2. Open the project

```bash
cd calculator-project
```

3. Run in browser
   Just open `index.html`

---

## 🔥 Future Improvements

* 🧮 Scientific calculator mode
* 🌙 Dark / Light theme toggle
* ⌨️ Keyboard input support
* 📜 Calculation history
* 🧠 Replace `eval()` with safer parser

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

---

## 📜 License

This project is open-source and available under the MIT License.

---

⭐ *If you like this project, give it a star!*
