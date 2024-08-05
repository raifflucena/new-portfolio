import Image from "next/image";

const About = () => {
  return (

    <div className="flex py-36 mx-96">
      <div className="flex mx-10 max-w-6xl">
        <div className="w-1/2 pr-6">
          <Image
            src="/img-side.webp"
            alt="side-image"
            width={500}
            height={500}
            className="rounded-3xl w-full h-auto"
          />
        </div>

        <div className="flex flex-col justify-center w-1/2 pl-6">
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