import React from 'react';
import NavBar from '../components/NavBar';
import PagesImg from '../components/PagesImg';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <PagesImg heading="ABOUT." text="Meet Hermon Gebrehiwot: Crafting Inspiring Full Stack Development Experiences."/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default AboutPage;