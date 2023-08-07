import React from 'react';
import './App.css';
import NameSection from './shared/NameSection';

function App() {
  return (
    <div className="App">
        <div className="flex flex-row flex-start">
          <div>
            <NameSection />
            </div>
          </div>
     </div>
  );
}

export default App;
