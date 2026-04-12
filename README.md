# Playwright Automation Framework (JavaScript)

A scalable end-to-end test automation framework built with **Playwright** and **JavaScript**.

## 🚀 Features

- Playwright Test runner
- Page Object Model (POM)
- Fixtures for reusable setup
- Environment variables with `.env`
- Auth session reuse (fast tests ⚡)
- Test tagging (`@smoke`, `@auth`)
- GitHub Actions CI integration

---

## 📁 Project Structure
playwright-framework/
├─ src/
│ ├─ pages/
│ ├─ data/
│ └─ fixtures/
├─ tests/
│ ├─ auth/
│ ├─ smoke/
│ └─ setup/
├─ playwright.config.js
├─ .env.example
└─ .github/workflows/

---

## ⚙️ Setup

```bash
npm install
npx playwright install
Create your environment file:
cp .env.example .env
▶️ Run Tests

Run all tests:

npm test

Run smoke tests:

npx playwright test --grep "@smoke"

Run auth tests:

npx playwright test --grep "@auth"

Run with UI:

npm run test:ui
🔐 Environment Variables

Defined in .env:

BASE_URL=
VALID_USERNAME=
VALID_PASSWORD=
INVALID_USERNAME=
INVALID_PASSWORD=
⚡ CI/CD

GitHub Actions automatically runs tests on:

push to main
pull requests
📌 Notes
.env is ignored (contains secrets)
.env.example provides required variables
Auth state is stored in playwright/.auth/
🧪 Example Tests
Login (valid & invalid)
Inventory page access
Add item to cart
👨‍💻 Author

Cristian Soto