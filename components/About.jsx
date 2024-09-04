import Image from "next/image";

const About = () => {

  return (
    <section id="about" className="py-32 bg-gray-100 px-8 md:px-12 xl:px-52">
      <div className="flex flex-col mx-auto max-w-screen-xl gap-16">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="flex justify-center w-3/4 lg:w-1/2 mb-8 md:mb-0">
            <Image
              src="/img-side.webp"
              alt="about-image"
              width={500}
              height={400}
              className="rounded-3xl"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start">
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
        </div>
      </div>
    </section>
  )
  return (
    <section id="about" className="py-32 bg-gray-100 px-8 md:px-12 xl:px-52">
      <div className="flex flex-col items-center lg:flex-row mx-auto max-w-screen-lg gap-16">
        <div className="w-full mb-8 md:mb-0 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full">
            <Image
              src="/img-side.webp"
              alt="side-image"
              layout="fixed"
              width={400}
              height={300}
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start">
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