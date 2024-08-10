// App.js
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Homepage from './components/Homepage';
import './App.css';

function App() {
  const [headerDone, setHeaderDone] = useState(false);
  useEffect(() => {
      document.title = "Nick Tarallo - Personal Site"
  }, []);
  return (
    <HashRouter>
      <div className="App">
        <Header setDone={setHeaderDone} />
        <Routes>
          {headerDone && <Route path="/experience" element={<Experience />} />}
          {headerDone && <Route path="/projects" element={<Projects />} />}
          {headerDone && <Route path="/" element={<Homepage />} />}
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
