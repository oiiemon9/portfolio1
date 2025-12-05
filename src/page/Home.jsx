import React from 'react';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutUs from '../components/AboutUs/AboutUs';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Education from '../components/Educatuon/Education';

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <AboutUs></AboutUs>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
