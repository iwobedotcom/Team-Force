# Team Force

Welcome to Team Force - a modern, responsive website built with React and Vite.

## Table of Contents

- [Team Force](#team-force)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
  - [Component Documentation](#component-documentation)
  - [Code Style and Linting](#code-style-and-linting)
  - [Sitemap Generation](#sitemap-generation)
  - [Key Packages](#key-packages)

## Features

- Built with React 18 and TypeScript
- Fast development and building with Vite
- Responsive design using Tailwind CSS
- Animations with AOS (Animate on Scroll)
- SEO optimization with react-helmet-async
- Routing with react-router-dom
- Automatic sitemap generation

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   pnpm install
   ```
3. Start the development server:
   ```
   pnpm dev
   ```
4. Build for production:
   ```
   pnpm build
   ```

## Project Structure

```
team-force/
├── src/
│   ├── components/
│   ├── pages/
|   ├── assets/
│   ├── hooks/
│   ├── layout/
│   ├── types/
│   ├── routes/
│   ├── providers/
│   ├── config/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── .eslintrc.js
├── .prettierrc
├── generate.sitemap.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.js
└── package.json
```

## Component Documentation

Our components are located in the `src/components` directory. Each component is thoroughly documented with PropTypes and JSDoc comments. For example:

```jsx
/**
 * Button component
 * @param {Object} props - Component props
 * @param {string} props.label - Button label
 * @param {function} props.onClick - Click handler
 * @param {'primary' | 'secondary'} [props.variant='primary'] - Button variant
 */
const Button = ({ label, onClick, variant = 'primary' }) => {
  // Component logic
};
```

## Code Style and Linting

We use ESLint and Prettier to maintain code quality and consistency. Our configuration files are:

- `.eslintrc.js`: ESLint configuration
- `.prettierrc`: Prettier configuration

Key rules and settings include:

- Use of TypeScript-specific ESLint rules
- React Hooks linting
- Prettier integration with ESLint
- Tailwind CSS class sorting

To run the linter:

```
pnpm lint
```

## Sitemap Generation

We automatically generate a sitemap using the `sitemap` package. The generation script is located in `generate.sitemap.js`. It's run as part of the build process:

```json
"scripts": {
  "build": "tsc -b && vite build && pnpm generate:sitemap",
  "generate:sitemap": "node generate.sitemap.js"
}
```

The sitemap generator crawls your built site and creates a `sitemap.xml` file in the `dist` directory.

## Key Packages

- **React** (v18.3.1): Core UI library
- **Vite** (v5.4.1): Next-generation frontend tooling
- **TypeScript** (v5.5.3): Static type checking
- **Tailwind CSS** (v3.4.13): Utility-first CSS framework
- **React Router** (v6.26.2): Declarative routing for React
- **AOS** (v2.3.4): Animate On Scroll library
- **Keen Slider** (v6.8.6): Touch slider for mobile and desktop
- **React Helmet Async** (v2.0.5): Document head manager for React
- **ESLint** (v9.9.0) & **Prettier** (via eslint-config-prettier): Code quality and formatting
- **Sitemap** (v8.0.0): Sitemap generator

For a complete list of dependencies and their versions, please refer to the `package.json` file.

---

We hope this README helps you get started with Team Force. If you have any questions or need further clarification, please don't hesitate to reach out to the development team.
