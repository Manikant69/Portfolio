import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { ThemeProvider } from './contexts/ThemeContext';

import {Toaster} from 'react-hot-toast';

export default function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  ) 
}
