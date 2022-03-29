export default function FooterLink({ highlight, href, children, ...props }) {
  return (
    <li className="mb-2 last:mb-0 text-sm">
      <a
        className={`block px-9 py-3 hover:bg-green-300 focus:border-white focus:bg-green-300 outline-none border-2 rounded-lg ${
          highlight ? 'border-slate-900' : 'border-transparent'
        }`}
        href={href}
        rel="noreferrer"
      >
        {children}
      </a>
    </li>
  );
}
