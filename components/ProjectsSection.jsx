import Project from "./Project";

const Projects = () => {
  return (
    <div className="flex flex-col py-12 sm:py-24 md:py-36 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
      <div className="w-full md:w-2/3 lg:w-1/2 mb-8 sm:mb-16">
        <h3 className="text-xl font-bold mb-2 text-blue-500">
          PROJECTS
        </h3>
        <h4 className="text-lg sm:text-xl mb-4 font-bold">
          Each project is a unique piece of development 🧩
        </h4>
      </div>
      <Project />
    </div>
  );
};

export default Projects;