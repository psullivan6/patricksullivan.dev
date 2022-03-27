export default function AboutContent() {
  return (
    <section className="flex flex-col w-full py-24 pr-40 lg:w-1/2 overflow-auto relative">
      <div className="my-auto">
        <article className="max-w-lg dark:font-extralight">
          <h1 className="text-3xl mb-6 lowercase font-mono">About.</h1>

          <p className="mb-4 leading-8 tracking-widest text-justify">
            I&rsquo;m Patrick Sullivan, a front-end focused engineer passionate
            about building engaging experiences and thriving teams. My work
            includes interactive sites and applications for Jack in the Box,
            Nickelodeon, Lowe's, and many more. I started my career on the West
            coast and proudly support my alma mater, the Oregon Ducks and my
            always-close-to-Super-Bowl-bound 49ers.
          </p>
          <p className="leading-8 tracking-widest text-justify">
            When not working, I enjoy walking with my dog Rosie, hiking with my
            wife, and generally spending time outdoors.
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
  );
}
