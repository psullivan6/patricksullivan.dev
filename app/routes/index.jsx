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
    <main className="flex flex-col lg:flex-row">
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

      <section className="flex flex-col justify-center w-full lg:w-1/2 relative pl-40">
        <h1 className="text-7xl z-10">
          <span className="block font-mono font-thin tracking-[-0.25rem] text-5xl -mb-3">
            Patrick
          </span>
          <span className="block font-thicc uppercase">Sullivan</span>
        </h1>
        {/* <img
          src="https://www.gravatar.com/avatar/cae1b92f2cd3749c13884375ae2712b5?s=600"
          alt="Patrick Sullivan profile"
          className="absolute left-0 z-10 w-80"
        /> */}

        <div className="absolute w-56 h-56 top-1/2 left-40 -translate-y-1/2 -translate-x-20">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-full mix-blend-multiply"
          >
            <path
              className="fill-cyan-300 dark:fill-sky-900"
              d="M39.7,-69.8C49.8,-63,55.2,-49,63.8,-36.2C72.4,-23.3,84.1,-11.7,87.7,2.1C91.3,15.8,86.7,31.6,76.8,42.2C66.9,52.7,51.8,58.1,38.1,62C24.4,66,12.2,68.6,-0.8,69.9C-13.7,71.2,-27.5,71.3,-41.5,67.5C-55.4,63.7,-69.6,56.1,-73.3,44.2C-77,32.3,-70.1,16.1,-65.8,2.5C-61.5,-11.1,-59.7,-22.3,-56.4,-34.8C-53.1,-47.4,-48.3,-61.4,-38.6,-68.4C-29,-75.5,-14.5,-75.6,0.2,-75.9C14.8,-76.2,29.6,-76.6,39.7,-69.8Z"
              transform="translate(100 100)"
            />
          </svg>

          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-full mix-blend-multiply z-10"
          >
            <path
              className="fill-blue-200 dark:fill-blue-900"
              d="M41.8,-75.1C53.6,-65.5,62.2,-53.2,69.8,-40.3C77.3,-27.3,83.7,-13.6,81.7,-1.1C79.7,11.3,69.3,22.7,61.6,35.4C53.9,48,48.9,62,39.1,72.3C29.3,82.5,14.6,89.1,0.4,88.4C-13.8,87.7,-27.6,79.7,-37.8,69.7C-48,59.6,-54.6,47.5,-64,35.5C-73.5,23.5,-85.9,11.8,-89.8,-2.3C-93.8,-16.3,-89.3,-32.7,-78.3,-41.9C-67.2,-51.1,-49.6,-53.3,-35.5,-61.5C-21.3,-69.7,-10.7,-83.9,2.2,-87.7C15,-91.4,30,-84.6,41.8,-75.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </section>

      <section className="flex flex-col w-full py-24 pr-40 lg:w-1/2 overflow-auto relative">
        <div className="my-auto">
          <article className="max-w-lg dark:font-extralight">
            <h1 className="text-3xl mb-6 lowercase font-mono">About.</h1>

            <p className="mb-4 leading-8 tracking-widest text-justify">
              I&rsquo;m Patrick Sullivan, a front-end focused engineer
              passionate about building engaging experiences and thriving teams.
              My work includes interactive sites and applications for Jack in
              the Box, Nickelodeon, Lowe's, and many more. I started my career
              on the West coast and proudly support my alma mater, the Oregon
              Ducks and my always-close-to-Super-Bowl-bound 49ers.
            </p>
            <p className="leading-8 tracking-widest text-justify">
              When not working, I enjoy walking with my dog Rosie, hiking with
              my wife, and generally spending time outdoors.
            </p>
          </article>

          <article className="dark:font-extralight relative hidden">
            {/* <h1 className="font-serif text-3xl mb-4"> */}
            <h1 className="text-3xl mb-4 font-mono uppercase after:block after:mt-4 after:border-4 after:border-blue-900">
              Brands I&rsquo;ve worked for || with
            </h1>

            <ul>
              <li>University of Oregon</li>
              <li>Pac-12 Conference</li>
              <li>The Register-Guard</li>
              <li>
                Jack in the Box:
                <ul>
                  <li>
                    <a href="https://medium.com/experienceaffinity/tear-it-down-build-it-back-up-d7977dc27474">
                      Medium Article
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/p/j94jZNsQ81/">
                      Bacon Insider
                    </a>
                  </li>
                </ul>
              </li>
              <li>Utah Office of Tourism</li>
              <li>Nickelodeon Animation Studio</li>
              <li>The Grand America Hotel</li>
              <li>Lennar</li>
              <li>
                <a href="https://www.instagram.com/p/BEzYAArsQzE/">
                  Nepal, I Love You
                </a>
              </li>
              <li>
                <a href="https://medium.com/experienceaffinity/the-new-struck-com-35d33053c6f4">
                  Struck
                </a>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
