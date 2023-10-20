import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { useRef } from 'react';

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Home ref={homeRef} home={homeRef} about={aboutRef} contact={contactRef}/>
      <About ref={aboutRef}/>
      <Contact ref={contactRef}/>
      <Footer />
    </div>
  );
}

// () => currentref.scrollIntoView({behavior: 'smooth'})

export default App;
