import DarkModeToggle from '~/components/DarkModeToggle/DarkModeToggle';

export default function Index() {
  return (
    <>
      <DarkModeToggle />
      <main className="flex flex-col lg:flex-row">
        <section className="flex flex-col justify-center items-center w-full lg:w-[38.197097%] h-[38.197097%] lg:h-full shrink-0 relative">
          <div className="relative w-56 h-56 z-0">
            <svg
              viewBox="0 0 75 96"
              xmlns="http://www.w3.org/2000/svg"
              className="z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-2 w-12 fill-blue-text"
              data-themed
            >
              <path d="M24 96L0 84V0h33c23.2 0 42 18.8 42 42S56.2 84 33 84h-9V96zM24 60h9c9.9 0 18-8.1 18-18s-8.1-18-18-18h-9V60z" />
            </svg>

            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-full mix-blend-multiply"
            >
              <path
                className="fill-blue dark:fill-sky-900"
                d="M39.7,-69.8C49.8,-63,55.2,-49,63.8,-36.2C72.4,-23.3,84.1,-11.7,87.7,2.1C91.3,15.8,86.7,31.6,76.8,42.2C66.9,52.7,51.8,58.1,38.1,62C24.4,66,12.2,68.6,-0.8,69.9C-13.7,71.2,-27.5,71.3,-41.5,67.5C-55.4,63.7,-69.6,56.1,-73.3,44.2C-77,32.3,-70.1,16.1,-65.8,2.5C-61.5,-11.1,-59.7,-22.3,-56.4,-34.8C-53.1,-47.4,-48.3,-61.4,-38.6,-68.4C-29,-75.5,-14.5,-75.6,0.2,-75.9C14.8,-76.2,29.6,-76.6,39.7,-69.8Z"
                transform="translate(100 100)"
                data-themed
              />
            </svg>

            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-full mix-blend-multiply z-10"
            >
              <path
                className="fill-blue-accent dark:fill-blue-900"
                d="M41.8,-75.1C53.6,-65.5,62.2,-53.2,69.8,-40.3C77.3,-27.3,83.7,-13.6,81.7,-1.1C79.7,11.3,69.3,22.7,61.6,35.4C53.9,48,48.9,62,39.1,72.3C29.3,82.5,14.6,89.1,0.4,88.4C-13.8,87.7,-27.6,79.7,-37.8,69.7C-48,59.6,-54.6,47.5,-64,35.5C-73.5,23.5,-85.9,11.8,-89.8,-2.3C-93.8,-16.3,-89.3,-32.7,-78.3,-41.9C-67.2,-51.1,-49.6,-53.3,-35.5,-61.5C-21.3,-69.7,-10.7,-83.9,2.2,-87.7C15,-91.4,30,-84.6,41.8,-75.1Z"
                transform="translate(100 100)"
                data-themed
              />
            </svg>
          </div>
        </section>

        <section
          className="flex flex-col justify-center items-center w-full lg:w-full h-full bg-blue dark:bg-zinc-800 p-16 md:p-28 xl:p-32 2xl:p-40"
          data-themed
        >
          <div>
            <span className="block font-mono font-thin text-base leading-8 tracking-widest">
              Hey, I&rsquo;m
            </span>
            <h1 className="text-6xl z-10 mb-12">
              <span className="block font-thicc uppercase">Patrick Sullivan</span>
            </h1>
            <p className="font-mono leading-8 tracking-widest mb-4">
              a front-end focused engineer passionate about building engaging experiences and
              thriving teams.
            </p>
            <p className="font-mono leading-8 tracking-widest">
              My work includes interactive sites and applications for Jack in the Box, undisclosed
              Winston-Salem brand, Lowe's, and many more. I started my career on the West coast and
              proudly support my alma mater, the Oregon Ducks and my
              always-close-to-Super-Bowl-bound 49ers.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
