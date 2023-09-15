import React from 'react';
import NavbarDefault from './components/Navigation';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
// import Resume from './components/pages/Resume'; 


function App() {
  return (
    <main className='relative isolate overflow-y-auto overflow-x-hidden bg-gradient-to-r from-gray-200 via-white-100to-gray-100 ... py-4 h-screen'>
      <div className="flex flex-col items-center">
        <NavbarDefault />
        <div className="w-full max-w-screen-2xl">
          <About />
        </div>
        <div className="w-full max-w-screen-2xl">
          <Portfolio />
        </div>
        <div className="w-full max-w-screen-2xl">
          <Contact />
        </div>
      </div>
    </main>
  );
}

export default App;
