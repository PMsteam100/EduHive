import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './Components/Hero';
import './App.css'
import Header from './Components/Header';
import ChoosWorks from './Components/ChoosWorks';
import WorksCard from './Components/WorksCard';
import Administrator from './Components/Administrator';
import BlogSection from './Components/BlogSection';
import TestimonialsCarousel from './Components/TestimonialsCarousel';
import Footer from './Components/Footer';
import Partner from './Components/Partner';
import BackToTopButton from './Components/BackToTopButton';
import StudentDashboard from './Dashboard/StudentDashboad';
import AdminDash from './AdminDashboard/AdminDash';


gsap.registerPlugin(ScrollTrigger);
function App() {


  const components = [
    { component: <Hero />, id: 'hero' },
    { component: <ChoosWorks />, id: 'sectors' },
    { component: <WorksCard />, id: 'chart' },
    { component: <Administrator />, id: 'choice' },
    { component: <BlogSection />, id: 'resources' },
    { component: <Partner />, id: 'actions' },
    { component: <TestimonialsCarousel />, id: 'get' },
    { component: <Footer />, id: 'footer' },
    // { component: <StudentDashboard />, id: 'student-dashboard' },
    // { component: <AdminDash />, id: 'student-dashboard' },
  ];


  useEffect(() => {
    components.forEach(({ id }) => {
      gsap.to(`#${id}`, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: `#${id}`,
          start: 'top 80%',
          end: 'bottom top',
          toggleActions: 'play none none reverse',
          markers: false,
        },
        stagger: 0.1,
      });
    });
  }, []);






  return (

    <>
    {/* Header stays on top with higher z-index */}
    <div className='relative z-10'>
      <Header />
      <BackToTopButton />
    </div>

    {/* Wrap other components in a lower z-index container */}
    <div>
      {components.map(({ component, id }) => (
        <div
          key={id}
          id={id}
          className='animated-section opacity-0 translate-y-52'
        >
          {component}
        </div>
      ))}
    </div>

  </>








    // <div>
    //    <Header />
    //   <Hero />
    //   <ChoosWorks />
    //   <WorksCard />
    //   <Administrator />
    //   <BlogSection />
    //   <Partner />
    //   <TestimonialsCarousel />
    //   <Footer />
    //   {/* <StudentDashboard /> */}
    //   {/* <AdminDash /> */}
    //   {/* <AddNewDash /> */}
    //   {/* <Login /> */}
    // </div>
  );
};

export default App;
