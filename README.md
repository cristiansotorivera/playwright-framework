# Playwright Automation Framework (JavaScript)

![Playwright Tests](https://github.com/cristiansotorivera/playwright-framework/actions/workflows/playwright.yml/badge.svg)

A scalable end-to-end test automation framework built with **Playwright** and **JavaScript**.

---

## 🚀 Features

* Playwright Test runner
* Page Object Model (POM)
* Fixtures for reusable setup
* Environment variables with `.env`
* Auth session reuse (fast tests ⚡)
* Test tagging (`@smoke`, `@auth`)
* GitHub Actions CI integration

---

## 📁 Project Structure

```
playwright-framework/
├─ src/
│  ├─ pages/
│  ├─ data/
│  └─ fixtures/
├─ tests/
│  ├─ auth/
│  ├─ smoke/
│  └─ setup/
├─ playwright.config.js
├─ .env.example
└─ .github/workflows/
```

---

## ⚙️ Setup

```bash
npm install
npx playwright install
```

Create your environment file:

```bash
cp .env.example .env
```

---

## ▶️ Run Tests

Run all tests:

```bash
npm test
```

Run smoke tests:

```bash
npx playwright test --grep "@smoke"
```

Run auth tests:

```bash
npx playwright test --grep "@auth"
```

Run with UI:

```bash
npm run test:ui
```

---

## 🔐 Environment Variables

Defined in `.env`:

```env
BASE_URL=
VALID_USERNAME=
VALID_PASSWORD=
INVALID_USERNAME=
INVALID_PASSWORD=
```

---

## ⚡ CI/CD

GitHub Actions automatically runs tests on:

* push to `main`
* pull requests

---

## 📌 Notes

* `.env` is ignored (contains secrets)
* `.env.example` provides required variables
* Auth state is stored in `playwright/.auth/`

---

## 🧪 Covered Test Flows

- Valid login
- Invalid login validation
- Logged-in inventory access
- Add item to cart
- Checkout validation when required fields are missing
- Complete checkout flow through order confirmation

---

## 👨‍💻 Author

Cristian Soto
