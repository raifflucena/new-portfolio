import Project from "./Project";

const Projects = () => {
  return (

    <div className="flex flex-col py-36 mx-96">
        <div className="w-1/2 mx-10 mb-16">
          <h3 className="text-xl font-bold mb-2 text-blue-500">
            PROJECTS
          </h3>
          <h4 className="text-xl mb-4 font-bold">
            Each project is a unique piece of development 🧩
          </h4>
        </div>
        <Project />
    </div>
  );
};

export default Projects;