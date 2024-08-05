import About from "@/components/About";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ProjectsSection />
    </>
  );
}
