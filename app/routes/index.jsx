import { Link } from 'remix';

export default function Index() {
  const handleToggle = (event) => {
    document.documentElement.classList[event.target.checked ? 'add' : 'remove'](
      'dark'
    );
  };

  let isChecked;
  try {
    isChecked = document.documentElement.classList.contains('dark');
  } catch (error) {}

  return (
    <div>
      <h1 className="m-9 text-4xl text-center font-bold text-blue-600 dark:text-blue-400">
        Patrick Sullivan dot dev
      </h1>

      <Link to="/posts">Posts</Link>

      <div className="absolute top-4 right-4 flex align-middle">
        <input
          type="checkbox"
          name="darkModeToggle"
          id="darkModeToggle"
          // onChange={handleToggle}
          onClick={handleToggle}
          className="peer block opacity-0 w-0 h-0"
          defaultChecked={isChecked}
        />
        <span
          dark="Turn Dark Mode On"
          light="Turn Dark Mode Off"
          className="block opacity-0 peer-hover:opacity-100 before:content-[attr(dark)] dark:before:content-[attr(light)] mr-2 transition-opacity"
        />
        <label
          htmlFor="darkModeToggle"
          className="box-content p-1 w-8 h-4 rounded-full bg-slate-600 relative inline-block before:w-4 before:h-4 before:bg-slate-50 before:absolute before:rounded-full peer-checked:bg-blue-400 peer-checked:before:translate-x-4 before:transition-transform cursor-pointer"
        />
      </div>

      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
