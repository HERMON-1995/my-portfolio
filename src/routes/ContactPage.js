import React from 'react';
import NavBar from '../components/NavBar';
import PagesImg from '../components/PagesImg';
import Form from '../components/Form';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <NavBar />
      <PagesImg heading="CONTACT." text="Whether you're looking to collaborate on an exciting project or just want to connect over shared interests, I'm always excited to make new connections. Reach out to me, and let's explore the possibilities of crafting innovative solutions that make a real impact."/>
      <Form />
      <Footer />
    </div>
  )
}

export default ContactPage;