# Playwright E2E Framework

A professional UI automation testing project built using **Playwright + TypeScript**.
This repository contains real-world end-to-end test scenarios for modern web applications.

---

## 🚀 Tech Stack

* Playwright
* TypeScript
* Node.js
* GitHub

---

## 📌 Covered Test Scenarios

### 🔐 Authentication Flows

* Login validation
* Invalid login scenarios
* Forgot password flow
* OTP login automation
* Register page testing

### 🛒 E-Commerce Flow

* Login to SauceDemo
* Add products to cart
* Checkout process
* Order completion

### 📊 Dynamic Web Elements

* Dynamic table validation
* Pagination table handling
* Radio button validation
* Drag and Drop
* Locators practice

---

## 📂 Project Structure

```bash
playwright-e2e-framework/
│── tests/
│   ├── login.spec.ts
│   ├── register.spec.ts
│   ├── forgot-password.spec.ts
│   ├── otp-login.spec.ts
│   ├── dynamic-table.spec.ts
│   ├── pagination.spec.ts
│   ├── dragdrop.spec.ts
│   └── saucedemo.spec.ts
│
│── playwright.config.ts
│── package.json
│── README.md
```

---

## ⚙️ Installation

```bash
npm install
npx playwright install
```

---

## ▶️ Run Tests

### Run all tests

```bash
npx playwright test
```

### Run only Chromium

```bash
npx playwright test --project=chromium
```

### Run specific test file

```bash
npx playwright test tests/login.spec.ts --project=chromium
```

### Run in headed mode

```bash
npx playwright test --headed
```

---

## 📈 Reports

```bash
npx playwright show-report
```

---

## 💼 Why This Project?

This framework demonstrates:

* Real-world automation scenarios
* Strong Playwright locator strategies
* End-to-end UI testing
* Dynamic element handling
* Scalable automation structure

---

## 👨‍💻 Author

**Aadarsh Ranjan**

GitHub: https://github.com/aadarsh8434
