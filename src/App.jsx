import React from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Contact from './components/Contact';

import {Toaster} from 'react-hot-toast';

export default function App() {
  return (
    <>
    <div>
    <Navbar></Navbar>
    <Home/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    <Footer/>

    </div>

    <Toaster/>

    </>
  ) 
}
