import Courses from "@/components/sections/Courses";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Register from "@/components/sections/Register";

export default function Home() {
  return (
    <>
      <Hero />
      <Courses />
      <WhyUs />
      <Register />
      <Testimonials />
      <Gallery />
    </>
  );
}
