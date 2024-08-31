import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="flex flex-wrap sm:flex-nowrap py-24 px-8 md:px-12 xl:px-52 2xl:mx-72 justify-center">
      <div className="flex justify-between gap-8 flex-wrap md:flex-nowrap 2xl:mx-60 2xl:px-8">
        <div className="w-full">
          <div>
            <Image
              src="/img-side.webp"
              alt="side-image"
              width={410}
              height={350}
              className="rounded-3xl w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center w-full items-center md:items-start">
          <h3 className="text-xl font-bold mb-2 text-blue-500">ABOUT ME</h3>
          <h4 className="text-xl mb-4 font-bold">
            Front-end Developer <br /> based in Campina Grande, Brazil 📍
          </h4>
          <p className="text-base text-gray-500">
            Hey, my name is Raiff, and I&apos;m a Frontend Developer. My passion
            is to create and develop a clean UI/UX.
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

export default About;
