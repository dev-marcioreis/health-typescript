import Navbar from '@/scenes/navbar'
import Home from '@/scenes/home'
import { useEffect, useState } from 'react'
import { SelectedPage } from '@/shared/types';

 
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [topPage, setTopPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setTopPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !== 0) setTopPage(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-bg-color">
      <Navbar topPage={topPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
