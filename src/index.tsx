import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Photos from './pages/Photos';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
