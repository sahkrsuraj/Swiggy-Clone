## How do we configure tailwind?

1. Install Tailwind CSS: To install tailwindcss and its peer dependencies via npm, we run the command
```bash
  npm install -D tailwindcss postcss
```
and then run the init command to generate "tailwind.config.js".
```bash
  npx tailwindcss init
```

2. Configure PostCSS: We create a ".postcssrc" file in the project root, and enable the "tailwindcss" plugin.

```js
{
  "plugins": {
    "tailwindcss": {}
  }
}
```

3. Configure your template paths: Add the paths to all of the template files in the "tailwind.config.js" file.
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Add the Tailwind directives to your CSS: In the main css file like index.css add the @tailwind directives for each of Tailwind’s layers.
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Start the Development Server: With everything set up, start the development server and use Tailwind CSS classes within your HTML/JSX.

## In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?

1. "content": This key is used to configure the content that Tailwind should scan for classes. It tells Tailwind to scan HTML, JavaScript, and JSX files within the src directory for classes.

2. "theme": The "theme" key is used to customize Tailwind's default design system such as colors,font, etc. Default values can overriden or add new ones under this key.
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#ff0000',
        secondary: '#00ff00',
      },
    },
  },
};
```

3. "extend": The "extend" key allows to extend Tailwind's default utility classes with custom utility classes.
```js
module.exports = {
  extend: {
    spacing: {
      '72': '18rem',
      '84': '21rem',
    },
  },
};
```

4. "plugin": The "plugins" key is used to enable or configure Tailwind plugins. Plugins extend Tailwind's functionality by adding new utility classes or customizing existing ones.
```js
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
    // Other plugins...
  ],
};
```

## Why do we have .postcssrc file?

The .postcssrc file is a configuration file used to specify options for PostCSS, which is a tool for transforming CSS with JavaScript plugins. PostCSS is often used alongside Tailwind CSS to process Tailwind's utility classes and generate the final CSS output.
