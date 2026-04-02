# Internship Tracker

A React-based application for tracking internships, built with TypeScript and Vite.

## Features

- User authentication (Login/Register)
- Dashboard with task management
- Responsive UI inspired by LinkedIn

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Build for production: `npm run build`

## Tech Stack

- React
- TypeScript
- Vite
- CSS

## License

This project is licensed under the MIT License.

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
>>>>>>> 0884e33 (feat: add LinkedIn-style login/register UI, remove Microsoft button)
