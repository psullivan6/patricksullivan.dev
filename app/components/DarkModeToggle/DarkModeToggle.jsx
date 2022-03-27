const DarkModeToggle = () => {
  const handleToggle = (event) => {
    document.documentElement.classList[event.target.checked ? 'add' : 'remove'](
      'dark'
    );
    sessionStorage.setItem(
      'darkModePreference',
      event.target.checked ? 'dark' : 'light'
    );
  };

  let isChecked;
  try {
    isChecked = document.documentElement.classList.contains('dark');
  } catch (error) {}

  return (
    <div className="fixed top-3 right-3 flex items-center z-10">
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
        className="box-content p-1 w-8 h-4 rounded-full bg-zinc-700 relative inline-block before:w-4 before:h-4 before:bg-zinc-50 before:absolute before:rounded-full peer-checked:bg-slate-900 peer-checked:before:translate-x-4 before:transition-transform cursor-pointer"
      />
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-36 -top-12 -right-9 -z-10"
      >
        <path
          className="fill-blue-500 dark:fill-stone-700"
          d="M45.1,-77.6C58.3,-70.5,68.6,-58,77.2,-44.2C85.8,-30.4,92.7,-15.2,93.6,0.5C94.4,16.2,89.2,32.3,80.1,45.3C71,58.3,58,68.2,44,76.2C30.1,84.2,15,90.4,0.1,90.1C-14.7,89.9,-29.5,83.2,-42.2,74.5C-54.9,65.8,-65.6,54.9,-74,42.2C-82.3,29.4,-88.3,14.7,-88.4,-0.1C-88.5,-14.8,-82.8,-29.7,-74.6,-42.6C-66.3,-55.5,-55.5,-66.4,-42.6,-73.6C-29.8,-80.8,-14.9,-84.2,0.5,-85.2C16,-86.1,32,-84.6,45.1,-77.6Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default DarkModeToggle;
