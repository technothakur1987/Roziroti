
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Navbar1 from '../src/components/Navbar1'
import Venue from './Venue';
import Career from './Career';
import GetinTouch from './GetinTouch';
import UnderConstruction from './UnderConstrcution'
import Footer from './Footer';
import { useState , useEffect} from 'react';



function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  

  return (
    <>
    <BrowserRouter>
    <Navbar1/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/venue' element={<Venue/>}/>
      <Route path='/career' element={<Career/>}/>
      <Route path='/getintouch' element={<GetinTouch/>}/>
      <Route path='/underconstruction' element={<UnderConstruction/>}/>
    </Routes>
    <Footer/>
    {showScrollToTop && (
          <button className="scroll-to-top" onClick={scrollToTop}>
            
          </button>
        )}
    </BrowserRouter>
    
      
    </>
  )
}

export default App
