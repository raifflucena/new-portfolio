import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-gray-100 px-8 md:px-12 xl:px-52">
      <div className="flex flex-col mx-auto max-w-screen-xl gap-16">
        <div className="w-full">
          <h3 className="text-xl font-bold mb-2 text-blue-500">PROJECTS</h3>
          <h4 className="text-xl font-bold">
            Each project is a unique piece of development 🧩
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-3/4 lg:w-1/2 mb-8 md:mb-0">
            <a
              href="https://ai-summary-red.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/project1.png"
                alt="Project 1 Image"
                width={700}
                height={500}
                className="rounded-3xl"
              />
            </a>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center justify-center text-center">
            <a
              href="https://ai-summary-red.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-base font-bold mb-2 text-blue-500">
                Instant AI-Powered YouTube Summaries
              </h3>
            </a>
              <p className="text-base text-gray-500">
                Transform lengthy YouTube videos into quick, digestible text
                summaries with our cutting-edge web app. Simply paste a video
                link, and within seconds, our AI delivers a concise overview of
                the content. Save time, grasp key points, and enhance your video
                consumption efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
