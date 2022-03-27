import { useEffect } from 'react';
import styles from './KeyPressAlert.css';

export const links = () => [{ rel: 'stylesheet', href: styles }];

// [TODO] Reset the animation every time the key is pressed ... i.e. every time the useEffect triggers
export default function KeyPressAlert({ onClose, pressedKey }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 2500);

    return () => {
      clearTimeout(timeout);
    };
  }, [onClose, pressedKey]);

  return (
    <div className="fixed top-12 left-12 w-16 h-16 flex justify-center items-center bg-slate-400 text-slate-900 rounded-lg shadow-md notify">
      <span className="text-2xl font-thicc uppercase">{pressedKey}</span>
    </div>
  );
}
