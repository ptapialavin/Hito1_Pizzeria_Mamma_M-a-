# Pizzería Mamma Mía

#Link del Deploy: https://hito1-pizzeria-mamma-m-a.vercel.app

Landing page de una pizzería ficticia, hecha con React y Vite. Muestra un header de bienvenida, un catálogo de pizzas con nombre, precio e ingredientes, y una barra de navegación que simula el estado de sesión de un usuario (logueado / no logueado).

Proyecto correspondiente al Hito 1 del módulo de Introducción a React de Desafío Latam.

## Cómo usarlo

Navega por la página: revisa el header, el menú de navegación (con el total de compra formateado) y el catálogo de pizzas con sus ingredientes y precios.

## Tecnologías

React · Vite · Bootstrap 5 · JavaScript (props, componentes funcionales, operador ternario)

## Estructura

Hito1_Pizzeria_Mamma_Mía/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── CardPizza.jsx
│   │   └── Footer.jsx
│   ├── utils/
│   │   └── formatNumber.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── README.md

## Ejecutar

npm install
npm run dev

## Requerimientos de la prueba

| # | Requerimiento | Dónde se cumple |
|---|---|---|
| 1 | Navbar, Home y Footer en App.jsx | App.jsx |
| 2 | Header con título y descripción, llamado en Home | Header.jsx → Home.jsx |
| 3 | Navbar con menú, variables total y token | Navbar.jsx |
| 4 | Botones Home y Total siempre visibles | Navbar.jsx |
| 5 | CardPizza recibe props y se llama 3 veces desde Home | CardPizza.jsx → Home.jsx |
| 6 | Footer con copyright, llamado en App.jsx | Footer.jsx |

## Autor

Patricio Tapia L. — Proyecto desarrollado para el módulo de Introducción a React del curso Desarrollo Full Stack de Desafío Latam.