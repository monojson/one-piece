---
title: How to build your own blog with Vitepress and TailwindCSS
description: some steps to build your own blog with Vitepress and TailwindCSS
---


# Vitepress with Tailwind

1. Install Tailwind
```bash
npm install -D tailwindcss postcss autoprefixer
```

2. Config postcss
::: code-group
```json [package.json]
{
  "devDependencies": {
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "vitepress": "^1.2.2"
  },
  "postcss": {             // [!code focus]
    "plugins": {           // [!code focus]
      "tailwindcss": {},   // [!code focus]
      "autoprefixer": {}   // [!code focus]
    }                      // [!code focus]
  }                        // [!code focus]
}
```
:::

3. Create `tailwind.config.js` file in the root directory
```js
module.exports = {
  content: ['./docs/.vitepress/**/*.{js,ts,vue}', './docs/**/*.md']
}
```

4. Add `tailwind.postcss` file
::: code-group
```css [.vitepress/theme/tailwind.postcss]
@tailwind base;
@tailwind components;
@tailwind utilities;
```
:::

5. Create `index.ts` file to import `tailwind.postcss`
::: code-group
```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
import './tailwind.postcss'

export default { ...DefaultTheme }

```
:::

6. Use Tailwind in your markdown file
```md
# Vitepress with TailwindCSS
**This is a example:**
<div class="flex flex-col items-center mt-10 sm:flex-row">
  <p class="italic text-gray-500">
    hello world!
  </p>
</div>
```