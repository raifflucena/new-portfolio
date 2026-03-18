import Image from "next/image";
import { Badge } from "./ui/badge";

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-gray-100 px-8 md:px-12 xl:px-52">
      <div className="flex flex-col mx-auto max-w-screen-xl gap-16">
        <div className="w-full">
          <h3 className="text-xl font-bold mb-2 text-blue-500">PROJECTS</h3>
          <h4 className="text-xl font-bold">
            Each project is a unique piece of development 🧩
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 items-center mb-4">
          <div className="w-3/4 lg:w-1/2 mb-8 md:mb-0">
            <a
              href="https://www.xtradecar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                src="/xtradecar_project.png"
                alt="Xtradecar Project Image"
                width={700}
                height={500}
                className="rounded-3xl"
              />
            </a>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center justify-center text-center">
              <a
                href="https://www.xtradecar.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-base font-bold mb-2 text-blue-500">
                  Xtradecar Car Dealership
                </h3>
              </a>
              <p className="text-base text-gray-500">
                Website still under development using Next.js, as the client
                requested maximum performance. I chose this technology for its
                high page loading speed and scalability, considering the
                client&apos;s plans to expand the project.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-10 items-center mb-4">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center justify-center text-center">
              <a
                href="https://placas.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-base font-bold mb-2 text-blue-500">
                  PLACASAPP (UNDER DEVELOPMENT)
                </h3>
              </a>
              <p className="text-base text-gray-500">
                Website that allows users to quickly and easily look up vehicle
                information by license plate. It is built with Next.js, TypeScript,
                and Tailwind. Users can view basic data for free and pay via Mercado Pago
                to unlock a more detailed report, including information such as debts,
                fines, and restrictions, as well as download or share the results.
              </p>
            </div>
          </div>
          <div className="w-3/4 lg:w-1/2 mb-8 md:mb-0">
            <a
              href="https://placas.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/placasapp.png"
                alt="Placasapp Project Image"
                width={700}
                height={500}
                className="rounded-3xl"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
