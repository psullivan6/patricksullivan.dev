import { useState } from 'react';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import KeyPressAlert, {
  links as KeyPressAlertLinks,
} from './components/KeyPressAlert/KeyPressAlert';
import styles from './styles/app.css';

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Titillium+Web:wght@900&display=swap',
    },
    ...KeyPressAlertLinks(),
  ];
}

export function meta() {
  return { title: 'Patrick Sullivan - Dev' };
}

const getIsDarkMode = () => {
  if (sessionStorage.getItem('darkModePreference') != null) {
    return sessionStorage.getItem('darkModePreference') === 'dark';
  }

  const isDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;

  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  }

  return false;
};

const keyColors = {
  r: 'red',
  g: 'green',
  b: 'blue',
};

export default function App() {
  const [colorKeyPress, setColorKeyPress] = useState('b');
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  let isDarkMode;
  try {
    isDarkMode = getIsDarkMode();
  } catch (error) {}

  const handleKeyDown = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return false;
    }

    const { key } = event;

    if (['r', 'g', 'b'].includes(key)) {
      const nodes = document.querySelectorAll('[data-themed]');
      nodes.forEach((node) => {
        node.classList.replace(`bg-${keyColors[colorKeyPress]}`, `bg-${keyColors[key]}`);
        node.classList.replace(`fill-${keyColors[colorKeyPress]}`, `fill-${keyColors[key]}`);
        node.classList.replace(
          `fill-${keyColors[colorKeyPress]}-accent`,
          `fill-${keyColors[key]}-accent`
        );
        node.classList.replace(
          `fill-${keyColors[colorKeyPress]}-highlight`,
          `fill-${keyColors[key]}-highlight`
        );
        node.classList.replace(
          `fill-${keyColors[colorKeyPress]}-text`,
          `fill-${keyColors[key]}-text`
        );
      });
      setColorKeyPress(key);
      setIsAlertOpen(true);
    }
  };

  try {
    document.documentElement.addEventListener('keydown', handleKeyDown);
  } catch (error) {}

  return (
    <html lang="en" {...(isDarkMode ? { className: 'dark' } : {})}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        {isAlertOpen && (
          <KeyPressAlert pressedKey={colorKeyPress} onClose={() => setIsAlertOpen(false)} />
        )}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
