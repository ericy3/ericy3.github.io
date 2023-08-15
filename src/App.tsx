import React from 'react';
import './App.css';
import About from './pages/About';
import Navbar from './shared/Navbar';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <div className="fixed top-0 right-0 left-0 z-50" >
      <Navbar />
    </div>
    <div className="App h-screen selection:text-green-500"> 
          <About />
          <Experience />
          <Projects />
          <Contact />
     </div>
     </>
  );
}

export default App;
