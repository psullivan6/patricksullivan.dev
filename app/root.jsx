import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
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

export default function App() {
  let isDarkMode;
  try {
    isDarkMode = getIsDarkMode();
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
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
