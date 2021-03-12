# Dark Mode Toggle for React and Next.JS apps using Tailwind

With tailwindCSS becoming more popular and dark-mode being an essential part of many users web experience I needed an easy way to integrate dark mode into my apps.

With this simple package you will be ale to detect the users preferred theme (dark or light), set a key into localStorage and wrap your app into a context provider.

## Getting Started

### Installation

```bash
npm install tailwind-darkmode-toggle
# or
yarn add tailwind-darkmode-toggle
```

## Next.js

### Setting up your \_document.js file

In order to load and create the keys directly into local storage we need to add a small component to our \_document.js file.

```diff
import Document, { Head, Html, Main, NextScript } from 'next/document';
+import { ThemeScriptTag } from 'tailwind-darkmode-toggle';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
+          <ThemeScriptTag />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

This will add the necessary script tag and call the function to add the initial key to the local storage.

### Wrapping your APP in the ThemeProvider

We are using the context api to pass the prop to the necessary component (in this case our APP and the toggle)

You want to change your \_app.js file to look similar to this

```diff
+import { ThemeProvider } from 'tailwind-darkmode-toggle';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
+    <ThemeProvider>
      <Component {...pageProps} />
+    </ThemeProvider>
  );
}

export default MyApp;

```

### Adding the toggle to your page/component

Lastly we implement the toggle.
Import the DarkModeToggle into your component or page and create the jsx component.

You can style this via Tailwinds utility classes as you choose.

```js
import { DarkModeToggle } from 'tailwind-darkmode-toggle';
```

```jsx
<DarkModeToggle className='w-10 h-10 text-gray-800 dark:text-gray-300' />
```

### Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
