import { useEffect, useState } from 'react';
import DarkModeToggle from '~/components/DarkModeToggle/DarkModeToggle';
import FooterLink from '~/components/FooterLink/FooterLink';

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 600);
    return () => {
      clearTimeout(loadTimeout);
    };
  }, []);

  return (
    <>
      <DarkModeToggle />
      <main
        className={
          isLoaded ? 'flex flex-col lg:flex-row' : 'flex flex-col lg:flex-row overflow-hidden'
        }
      >
        <section
          className={`relative flex flex-col w-full ${
            isLoaded ? 'lg:w-[38.197097%]' : ''
          } h-[38.197097%] lg:h-full shrink-0 transition-all delay-100 duration-700`}
        >
          <article
            className={`flex justify-center items-center h-full ${
              isLoaded ? 'lg:h-[61.802903%]' : ''
            } shrink-0 transition-all duration-500`}
          >
            <div className="relative block w-56 h-56 z-0">
              <svg
                viewBox="0 0 75 96"
                xmlns="http://www.w3.org/2000/svg"
                className="z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-2 w-12"
                data-themed="fill-text"
              >
                <path d="M24 96L0 84V0h33c23.2 0 42 18.8 42 42S56.2 84 33 84h-9V96zM24 60h9c9.9 0 18-8.1 18-18s-8.1-18-18-18h-9V60z" />
              </svg>

              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0 w-full mix-blend-multiply"
              >
                <path
                  d="M39.7,-69.8C49.8,-63,55.2,-49,63.8,-36.2C72.4,-23.3,84.1,-11.7,87.7,2.1C91.3,15.8,86.7,31.6,76.8,42.2C66.9,52.7,51.8,58.1,38.1,62C24.4,66,12.2,68.6,-0.8,69.9C-13.7,71.2,-27.5,71.3,-41.5,67.5C-55.4,63.7,-69.6,56.1,-73.3,44.2C-77,32.3,-70.1,16.1,-65.8,2.5C-61.5,-11.1,-59.7,-22.3,-56.4,-34.8C-53.1,-47.4,-48.3,-61.4,-38.6,-68.4C-29,-75.5,-14.5,-75.6,0.2,-75.9C14.8,-76.2,29.6,-76.6,39.7,-69.8Z"
                  transform="translate(100 100)"
                  data-themed="fill-primary"
                />
              </svg>

              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0 w-full mix-blend-multiply z-10"
              >
                <path
                  d="M41.8,-75.1C53.6,-65.5,62.2,-53.2,69.8,-40.3C77.3,-27.3,83.7,-13.6,81.7,-1.1C79.7,11.3,69.3,22.7,61.6,35.4C53.9,48,48.9,62,39.1,72.3C29.3,82.5,14.6,89.1,0.4,88.4C-13.8,87.7,-27.6,79.7,-37.8,69.7C-48,59.6,-54.6,47.5,-64,35.5C-73.5,23.5,-85.9,11.8,-89.8,-2.3C-93.8,-16.3,-89.3,-32.7,-78.3,-41.9C-67.2,-51.1,-49.6,-53.3,-35.5,-61.5C-21.3,-69.7,-10.7,-83.9,2.2,-87.7C15,-91.4,30,-84.6,41.8,-75.1Z"
                  transform="translate(100 100)"
                  data-themed="fill-accent"
                />
              </svg>
            </div>
          </article>

          <footer
            className="overflow-hidden relative flex flex-wrap justify-center items-center w-full h-[38.197097%] shrink-0 transition-all font-mono text-center"
            data-themed="bg-accent"
          >
            <ul>
              <FooterLink href="https://psullivan6.com/resume" highlight>
                Résumé
              </FooterLink>

              <FooterLink href="https://twitter.com/psullivan6" target="_blank">
                Twitter
              </FooterLink>

              <FooterLink href="mailto:psullivan6@gmail.com" target="_blank">
                Email
              </FooterLink>

              <FooterLink href="https://www.linkedin.com/in/psullivan6/" target="_blank">
                LinkedIn
              </FooterLink>
            </ul>
          </footer>
        </section>

        <section
          className={`relative flex flex-col justify-center items-center shrink-0 w-full lg:w-[61.802903%] h-full p-16 md:p-28 xl:p-32 2xl:p-40 transition-all duration-500`}
          data-themed="bg-primary"
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
