
# Terraglow 🌱✨

**Terraglow** is an earth-inspired skincare shop built with React. It features a soft, minimalist aesthetic and a clean user experience. Built as a final project for school, the app demonstrates full CRUD functionality, modern component-based design, and responsive styling.

## 💻 Tech Stack

- React + Vite
- React Router
- TypeScript
- Bootstrap (custom + utility classes)
- CSS3
- JSON Server (Mock API)

## 🚀 Features

✅ Multi-page layout using React Router  
✅ At least 10 custom components  
✅ Full CRUD operations via API  
✅ Product listing & detail views  
✅ Interactive cart with add/remove/update  
✅ Custom skin type quiz  
✅ Ingredient spotlight section  
✅ Mobile responsive  
✅ Newsletter sign-up form  
✅ Clean, commented, and modular code

## 📁 Folder Structure (Simplified)

```
/src
  /components
    - ProductList.tsx
    - ProductDetails.tsx
    - CartList.tsx
    - CartItemRow.tsx
    - NewsletterSignup.tsx
    - IngredientSpotlight.tsx
    - SkinTypeQuiz.tsx
    - AboutUs.tsx
    - ErrorPage.tsx
  - Root.tsx
  - main.tsx
  - index.css
  - types.ts
/assets
  - model.png
  - skincare.png
  - makeup.png
```

## 🧪 API Notes

All product and cart data is served from a local Mock API (using `json-server`) at `http://localhost:3001`.

Example endpoints:
- `GET /products`
- `GET /cart`
- `POST /cart`
- `PUT /cart/:id`
- `DELETE /cart/:id`

## 🎯 Purpose

This project was created as a final project submission for a front-end development course. It demonstrates practical use of React concepts, API interaction, and responsive design.

---

## 📸 Screenshots

```
![Homepage Screenshot](https://raw.githubusercontent.com/oliviaalarsen/terraglow-site/main/src/assets/screenshot.png)

```

## 🧪 Development Info & Disclaimer

This is a local student project built for educational purposes.

All images used are placeholders or demo visuals found online and are not intended for commercial use or redistribution.
