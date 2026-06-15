'use client';
import Courses from "@/components/sections/Courses";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Register from "@/components/sections/Register";
import WhyOurCourses from "@/components/sections/WhyOurCourses";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  return (
    <>
      <Hero 
        title={<span> Află nivelul tău de<br />engleză în doar 5 minute</span>}
        subtitle={<span> Programează-te la o consultație gratuită<br />
              și află ce curs ți se potrivește.</span>}
      />
      <Courses />
      <WhyUs />
      <WhyOurCourses />
      <Register 
        img='/assets/register/register-girl.png'
        title='Înscrie-te pentru o testare gratuită'
        desc='Evaluăm nivelul tău de engleză și îți oferim toate detaliile despre curs, program și preț după testare.'
      />
      <Testimonials testimonials={testimonials} />
      <Gallery />
    </>
  );
}
