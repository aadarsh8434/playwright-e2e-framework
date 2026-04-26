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

### 📝 Form Handling & Validation

* Mandatory field validation
* Valid form submission
* Dropdown handling
* Date field validation
* Error message verification

### 📁 File Handling

* File upload automation
* File download automation
* Download event handling
* File name validation

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
* Locator strategies practice

---

## 📂 Project Structure

```bash id="jlwm129"
playwright-e2e-framework/
│── tests/
│   ├── login.spec.ts
│   ├── register.spec.ts
│   ├── forgot-password.spec.ts
│   ├── otp-login.spec.ts
│   ├── form-validation.spec.ts
│   ├── file-upload.spec.ts
│   ├── file-download.spec.ts
│   ├── dynamic-table.spec.ts
│   ├── pagination.spec.ts
│   ├── drag-drop.spec.ts
│   └── saucedemo.spec.ts
│
│── tests/test-data/
│   └── sample.txt
│
│── playwright.config.ts
│── package.json
│── README.md
```

---

## ⚙️ Installation

```bash id="jlwm130"
npm install
npx playwright install
```

---

## ▶️ Run Tests

### Run all tests

```bash id="jlwm131"
npx playwright test
```

### Run only Chromium

```bash id="jlwm132"
npx playwright test --project=chromium
```

### Run specific test file

```bash id="jlwm133"
npx playwright test tests/file-download.spec.ts --project=chromium
```

### Run in headed mode

```bash id="jlwm134"
npx playwright test --headed
```

### Run debug mode

```bash id="jlwm135"
npx playwright test --debug
```

---

## 📈 Reports

```bash id="jlwm136"
npx playwright show-report
```

---

## 💼 Why This Project?

This framework demonstrates:

* Real-world automation scenarios
* Strong Playwright locator strategies
* End-to-end UI testing
* Form validation coverage
* File upload/download handling
* Dynamic element handling
* Scalable automation structure

---

## 👨‍💻 Author

**Aadarsh Ranjan**

GitHub: https://github.com/aadarsh8434
