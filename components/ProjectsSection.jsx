import Image from "next/image";

const Projects = () => {
  return (
    <div className="py-32 bg-gray-100">
      <div className="flex flex-col mx-auto max-w-screen-lg gap-24">
        <div className="w-full">
          <h3 className="text-xl font-bold mb-2 text-blue-500">PROJECTS</h3>
          <h4 className="text-lg">
            Each project is a unique piece of development 🧩
          </h4>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/project1.png"
              alt="Project 1 Image"
              width={700}
              height={500}
              className="rounded-3xl"
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="max-w-sm flex flex-col items-center justify-center text-center">
              <h3 className="text-base font-bold mb-2 text-blue-500">
                Instant AI-Powered YouTube Summaries
              </h3>
              <p className="text-base text-gray-500">
                Transform lengthy YouTube videos into quick, digestible text summaries with our cutting-edge web app. Simply paste a video link, and within seconds, our AI delivers a concise overview of the content. Save time, grasp key points, and enhance your video consumption efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
