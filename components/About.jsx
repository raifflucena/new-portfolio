import Image from "next/image";

const About = () => {
  return (
    <div className="py-12 sm:py-24 md:py-36 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-6">
          <Image
            src="/img-side.webp"
            alt="side-image"
            width={500}
            height={500}
            className="rounded-3xl w-full h-auto"
          />
        </div>

        <div className="flex flex-col justify-center w-full md:w-1/2 md:pl-6">
          <h3 className="text-xl font-bold mb-2 text-blue-500">
            ABOUT ME
          </h3>
          <h4 className="text-xl mb-4 font-bold">
            Front-end Developer <br /> based in Campina Grande, Brazil 📍
          </h4>
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

export default About;