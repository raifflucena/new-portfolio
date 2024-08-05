import Image from "next/image";

const Project = () => {
  return (
    <div className="flex mx-16">
      <div className="w-2/3">
        <Image
          src="/project1.png"
          alt="Project 1 Image"
          width={500}
          height={500}
          className="rounded-2xl w-full h-auto"
        />
      </div>
      <div>
        <div className="flex flex-col justify-center w-1/2 pl-6">
          <h3 className="text-xl font-bold mb-2 text-blue-500">AI YOUTUBE SUMMARY GENERATOR</h3>
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
