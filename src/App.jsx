import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Contact from './components/Contact';

import {Toaster} from 'react-hot-toast';
import Projects from './components/Projects';

export default function App() {
  return (
    <>
    <div>
    <Navbar></Navbar>
    <Home/>
    <About/>
    <Projects/>
    <Experience/>
    <Contact/>
    <Footer/>

    </div>

    <Toaster/>

    </>
  ) 
}
