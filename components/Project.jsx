import Image from "next/image";

const Project = () => {
  return (
    <div className="flex flex-col md:flex-row mb-14">
      <div className="w-full md:w-2/3 mb-6 md:mb-0 md:pr-6">
        <Image
          src="/project1.png"
          alt="Project 1 Image"
          width={500}
          height={500}
          className="rounded-2xl w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/3 flex items-center">
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-2 text-blue-500">AI YOUTUBE SUMMARY GENERATOR</h3>
          <p className="text-base text-gray-500">
            Hey, my name is Raiff, and I'm a Frontend Developer. My passion is
            to create and develop a clean UI/UX.
            <br />
            <br />
            My main stack currently is React/Next.js in combination with
            Tailwind CSS and TypeScript.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;