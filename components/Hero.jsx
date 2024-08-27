import Image from "next/image";

export const Hero = () => {
  return (
    <section id="hero" className="flex flex-wrap">
      <div className="flex flex-col bg-base-200 min-h-screen gap-20 pt-64">
        <div className="flex flex-col mx-auto max-w-screen-lg gap-20">
          <div className="flex flex-row flex-wrap gap-12 px-10">
        
            {/* HERO TEXT */}
            <div className="flex flex-col justify-center">
              <div className="mb-2">
                <h1 className="text-6xl font-bold">
                  Front-End React Developer 👋🏼
                </h1>
                <p className="py-6 text-lg">
                  Hi, I&apos;m Raiff Lucena. A passionate Front-end React Developer
                  based in Brazil. 📍
                </p>
                {/* <button className="btn btn-primary">Get Started</button> */}
              </div>
              <div className="mb-16 flex gap-4">
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
              </div>
            </div>

            <div className="box"></div>
          </div>

          <div className="flex flex-row items-center px-10">
            <div className="mr-14">
              <p className="underline" style={{ textUnderlineOffset: "12px" }}>
                Tech Stack
              </p>
            </div>
            <div>
              {/* <p className="flex-wrap px-2 gap-8 md:flex" align="center">
                <a href="https://skillicons.dev">
                  <Image src="https://skillicons.dev/icons?i=html,css" />
                </a>
                <a href="https://skillicons.dev">
                  <Image src="https://skillicons.dev/icons?i=js,ts" />
                </a>
                <a href="https://skillicons.dev">
                  <Image src="https://skillicons.dev/icons?i=react,nextjs" />
                </a>
                <a href="https://skillicons.dev">
                  <Image src="https://skillicons.dev/icons?i=tailwind,sass" />
                </a>
              </p> */}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
