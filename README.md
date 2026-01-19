# React Personal Website

Personal website built from scratch using **React**, **TypeScript**, and a **custom Webpack setup**.  
Designed to showcase projects, experience, and technical proficiency with modern frontend tooling.

🌐 **Live site:** https://www.miguelsietereales.com

---

## ✨ Features

- ⚛️ React 18 with TypeScript
- 🧭 Client-side routing via React Router
- 💅 Styled-components for component-level styling
- 🛠 Custom Webpack 5 configuration (no CRA/Vite)
- 🔥 Development server with hot reload
- 🧹 ESLint + Prettier for code quality and consistency
- 🚀 Express server for production hosting

---

## 🧱 Tech Stack

### Frontend

- React 18
- TypeScript
- React Router
- Styled-components

### Tooling

- Webpack 5
- Babel
- ESLint + Prettier
- GraphQL
- Firebase
- Flamelink CMS

### Backend / Server

- Node.js (18.x)
- Express 4

---

## 📦 Requirements

- **Node.js:** 18.x
- **npm** or **yarn**

---

## 🚀 Getting Started

### Project Structure

```
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page-level components
│ ├── routes/ # Route definitions
│ ├── styles/ # Global and shared styles
│ └── index.tsx # Application entry point
├── public/ # Static assets
├── webpack.config.js # Webpack configuration
├── server/ # Express Server / GraphQL Schema
├── package.json
└── README.md
```

### Install dependencies

```bash
npm install #Installs dependencies
```

### Development

#### Run development server

Starts the Webpack development server with hot reloading.

```bash
npm run dev
```

### Build

#### Build for production

Creates an optimized production build using Webpack.

```bash
npm run build
```

### Run Production Server

Serves the production build using an Express server.

```bash
npm start
```
