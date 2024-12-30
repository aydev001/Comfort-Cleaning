import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import PageLoading from './components/page-comp/PageLoading'
import AOS from 'aos';
import 'aos/dist/aos.css';


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

    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    if (!isLoading) {
      AOS.refresh(); 
    }
  }, [isLoading]);
  return (
    <div className='font-raly font-medium'>
      <Header />
      <div className="min-h-[calc(100vh-61px)] max-h-[calc(100vh-61px)] overflow-y-auto">
        <Home />
      </div>
      {isLoading && <PageLoading />}
    </div>
  )
}

export default App
