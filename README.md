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
## 📁 Project Structure

```text
playwright-framework/
├─ .github/
│  └─ workflows/
│     └─ playwright.yml
├─ playwright/
│  └─ .auth/
├─ src/
│  ├─ api/
│  │  ├─ apiAssertions.js
│  │  └─ postsApi.js
│  ├─ data/
│  │  ├─ apiData.js
│  │  ├─ checkoutData.js
│  │  └─ users.js
│  ├─ fixtures/
│  │  └─ test-fixtures.js
│  └─ pages/
│     ├─ CartPage.js
│     ├─ CheckoutPage.js
│     ├─ LoginPage.js
│     └─ ProductsPage.js
├─ tests/
│  ├─ api/
│  │  ├─ create-post.spec.js
│  │  ├─ get-post-by-id.spec.js
│  │  ├─ not-found.spec.js
│  │  └─ posts.spec.js
│  ├─ auth/
│  │  └─ login.spec.js
│  ├─ setup/
│  │  └─ auth.setup.spec.js
│  └─ smoke/
│     ├─ cart.spec.js
│     ├─ checkout-negative.spec.js
│     ├─ checkout.spec.js
│     ├─ example.spec.js
│     └─ inventory.spec.js
├─ .env.example
├─ .gitignore
├─ package.json
├─ package-lock.json
├─ playwright.config.js
└─ README.md

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

### UI Flows
- Valid login
- Invalid login validation
- Logged-in inventory access
- Add item to cart
- Checkout validation when required fields are missing
- Complete checkout flow through order confirmation

## 🔌 API Test Design

The API layer is organized to keep tests clean and maintainable:

- `src/api/postsApi.js` contains endpoint methods
- `src/api/apiAssertions.js` contains shared API assertions
- `src/data/apiData.js` contains reusable request payloads
- `tests/api/` contains API test cases

This keeps:
- request logic out of test files
- assertions reusable
- payloads easy to update

### API Flows
- GET posts list
- GET post by ID
- POST create a post
- PUT update a post
- DELETE a post
- GET non-existent post returns 404
---

## 👨‍💻 Author

Cristian Soto
