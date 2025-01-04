import React, { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import PageLoading from './components/page-comp/PageLoading'
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhyUs from './pages/WhyUs';
import Services from './pages/Services';
import WorkProcess from './pages/WorkProcess';
import Comments from './pages/Comments';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      AOS.init({
        delay: 0,
        duration: 800,
        once: true,
      });
    }, 4000);

    return () => {
      clearTimeout(timer);
      AOS.refresh()
    };
  }, []);

  return (
    <div className='font-raly font-medium overflow-y-hidden'>
      <Header />
      <div data-aos="fade-up" className={`min-h-[calc(100vh-62px)] max-h-[calc(100vh-62px)] overflow-y-scroll overflow-x-hidden scroll-smooth duration-500`}>
        <Home />
        <WhyUs />
        <Services />
        <WorkProcess />
        <Comments />
      </div>
      {isLoading && <PageLoading />}
    </div>
  )
}

export default App
