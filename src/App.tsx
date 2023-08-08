import React from 'react';
import './App.css';
import About from './pages/About';
import Navbar from './shared/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <div className="App bg-orange-50 h-screen"> 
        <div className="flex flex-row flex-start">
          <div className="pt-12">
            <About />
            </div>
          </div>
     </div>
     </>
  );
}

export default App;
