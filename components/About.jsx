import Image from "next/image";

const About = () => {
  return (
    <div className="py-32">
      <div className="flex mx-auto max-w-screen-lg">
        <div className="w-full">
          <div className="w-[410px] h-[350px]">
            <Image
              src="/img-side.webp"
              alt="side-image"
              width={410}
              height={350}
              className="rounded-3xl w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center w-full">
          <h3 className="text-xl font-bold mb-2 text-blue-500">ABOUT ME</h3>
          <h4 className="text-xl mb-4 font-bold">
            Front-end Developer <br /> based in Campina Grande, Brazil 📍
          </h4>
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
    </div>
  );
};

export default About;
