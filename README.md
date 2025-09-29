
---

### **React + Vite Setup Fix for JSX Parsing**

If you encounter `[PARSE_ERROR] Unexpected token` errors when running the dev server, follow these steps:

1. **Install the React plugin for Vite**

```bash
npm install @vitejs/plugin-react
```

2. **Update `vite.config.js` to include the plugin**

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

3. **Rename React component files to `.jsx` (recommended)**

* `Navbar.js` → `Navbar.jsx`
* `About.js` → `About.jsx`
* `Contact.js` → `Contact.jsx`
* `Home.js` → `Home.jsx`

> Update any imports accordingly, e.g.:

```js
import Navbar from './components/Navbar.jsx';
```

4. **Restart the dev server**

```bash
npm run dev
```

This ensures Vite can properly parse JSX and your React components work without errors.
