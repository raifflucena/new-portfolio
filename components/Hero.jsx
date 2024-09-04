import Image from "next/image";

export const Hero = () => {
  return (
    <section id="home" className="flex flex-wrap">
      <div className="flex flex-col bg-base-200 gap-20 pt-28 lg:pt-44 w-full pb-20 sm:h-screen">
        <div className="flex flex-row justify-center px-6 lg:px-24">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex flex-row flex-wrap-reverse lg:flex-nowrap justify-center gap-12 md:gap-0 lg:gap-12">
              {/* HERO TEXT */}
              <div className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start">
                <div className="mb-2">
                  <h1 className="text-5xl sm:text-6xl font-bold">
                    Front-End React Developer 👋🏼
                  </h1>
                  <p className="py-6 text-lg">
                    Hi, I&apos;m Raiff Lucena. A passionate Front-end React
                    Developer based in Brazil. 📍
                  </p>
                  {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
                <div className="mb-16 flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/raifflucena"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-current hover:text-blue-500 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/raifflucena"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-current hover:text-blue-500 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="box"></div>
            </div>

            <div className="flex flex-col lg:flex-row lg:mt-20 items-center">
              <div className="mb-10 lg:mb-0 lg:mr-20">
                <p
                  className="underline font-bold"
                  style={{ textUnderlineOffset: "12px" }}
                >
                  Tech Stack
                </p>
              </div>
              <div>
                <ul
                  className="flex flex-wrap justify-center px-2 gap-8"
                  align="center"
                >
                  <li href="https://skillicons.dev">
                    <Image src="/html_css.svg" width={110} height={50} />
                  </li>
                  <li href="https://skillicons.dev">
                    <Image src="/js_ts.svg" width={110} height={50} />
                  </li>
                  <li href="https://skillicons.dev">
                    <Image src="/react_next.svg" width={110} height={50} />
                  </li>
                  <li href="https://skillicons.dev">
                    <Image src="/tailwind_sass.svg" width={110} height={50} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
