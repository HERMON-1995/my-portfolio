import React from 'react';
import NavBar from '../components/NavBar';
import PagesImg from '../components/PagesImg';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <PagesImg heading="ABOUT." text="Meet Hermon Gebre bridging Sales and Full-Stack Development: Creating a Seamless Experience."/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default AboutPage;