import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import PageLoading from './components/page-comp/PageLoading'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fake yuklanish jarayonini simulyatsiya qilish
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 2 soniyadan keyin yuklanishni tugatish

    return () => clearTimeout(timer); // Tozalash
  }, []);
  return (
    <div className='font-raly font-medium'>
      <Header />
      <div className="min-h-[calc(100vh-61px)] max-h-[calc(100vh-61px)] overflow-y-auto">
        <Home />
      </div>
      {isLoading&& <PageLoading/>}
    </div>
  )
}

export default App
