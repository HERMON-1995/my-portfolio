import React from 'react';
import NavBar from '../components/NavBar';
import PagesImg from '../components/PagesImg';
import Work from '../components/Work';
import PricingCards from '../components/PricingCards';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  return (
    <div>
      <NavBar />
      <PagesImg heading="PROJECTS." text="Explore some of my Projects: Unleashing the Power of Innovation."/>
      <Work />
      <PricingCards />
      <Footer />
    </div>
  )
}

export default ProjectsPage;