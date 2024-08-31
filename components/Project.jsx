import Image from "next/image";

const Project = () => {
  return (
    <section id="hero" className="flex flex-col md:flex-row items-center">
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
            AI YOUTUBE SUMMARY GENERATOR
          </h3>
          <p className="text-base text-gray-500">
            Hey, my name is Raiff, and I&apos;m a Frontend Developer. My passion is
            to create and develop a clean UI/UX.
            <br />
            <br />
            My main stack currently is React/Next.js in combination with
            Tailwind CSS and TypeScript.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;