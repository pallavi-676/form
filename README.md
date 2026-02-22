# 📝 Registration Form Validator

A responsive and user-friendly **Registration Form Validator** built using **HTML, CSS, and JavaScript**.
This project validates user input on the client side before allowing form submission, improving user experience and preventing incorrect data entry.

---

## 🚀 Project Overview

The purpose of this project is to simulate how real websites verify user information before sending it to the server.
The form checks whether the user has entered valid details such as name, email, phone number, and password. If any field is incorrect, an error message is displayed immediately.

This project demonstrates fundamental **front-end development concepts**, including DOM manipulation, event handling, and form validation.

---

## ✨ Features

* Input validation before submission
* Error messages displayed below each field
* Password confirmation matching
* Phone number verification (10 digits)
* Email format validation
* Prevents empty form submission
* Responsive and clean UI design
* Smooth input focus effects
* Modern color theme

---

## 🧠 Validations Implemented

The form checks:

* Name cannot be empty
* Name must be at least 3 characters
* Email must be in correct format ([example@email.com](mailto:example@email.com))
* Phone number must be exactly 10 digits
* Password must contain at least 6 characters
* Confirm password must match password

---

## 🛠️ Technologies Used

* **HTML5** – Structure of the form
* **CSS3** – Styling, layout, and visual design
* **JavaScript (Vanilla JS)** – Validation logic and DOM manipulation

---

## 📂 Project Structure

```
Form-Validator/
│
├── index.html      # Form structure
├── style.css       # Styling and layout
├── script.js       # Validation logic
└── README.md       # Project documentation
```

---

## ⚙️ How It Works

1. User fills the registration form.
2. When the Register button is clicked, JavaScript stops the default submission.
3. Each field is checked using validation rules.
4. If an error is found → error message is displayed.
5. If all inputs are correct → success message appears.

---

## 💡 What I Learned

Through this project I learned:

* How forms work in HTML
* How to access elements using JavaScript
* Event listeners and `preventDefault()`
* DOM manipulation
* Client-side validation
* Improving user experience with UI feedback

---

## 📌 Future Improvements

* Live validation while typing
* Show password / hide password toggle
* Strength indicator for password
* Backend connection (PHP / Node.js)
* Database storage for user accounts

---

## 👩‍💻 Author

**Pallavi Sarovar**

---

## 📜 License

This project is for educational and learning purposes.
