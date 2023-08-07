import React from 'react';
import NavBar from '../components/NavBar';
import PagesImg from '../components/PagesImg';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  return (
    <div>
      <NavBar />
      <PagesImg heading="SKILLS." text="Mastering Skills: A Showcase of My Talents and Expertise."/>
      <Skills />
      <Footer />
    </div>
  )
}

export default ProjectsPage;