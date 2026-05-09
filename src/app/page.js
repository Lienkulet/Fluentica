import Courses from "@/components/sections/Courses";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Courses />
      <WhyUs />
      <Testimonials />
      <Gallery />
    </>
  );
}
