import React from 'react'
import Hero from './Hero';
import ProblemSolution from './ProblemSolution';
import HowItWorks from './HowItWorks';
import Features from './Features';
import FAQ from './FAQ';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <FAQ />
      <Contact />
      <Footer/>
      </div>
  )
}

export default Home