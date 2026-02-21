import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Footer, About, Projects } from '../containers';
import { Techstack, ExpButton } from '../components';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Header />
        <Techstack />
        <Link to="/experience">
          <ExpButton heading="Experience" description="I have experience in AI/ML, web and mobile app development and have also volunteered in conduction of events by technical clubs in college. Read about my experience here." id="experience" />
        </Link>
        <Link to="/education">
          <ExpButton heading="Education and Certifications" description="I am currently a final year CS student passionate about learning more and applying that knowledge. I've also done certifications. View more about my education and certifications here." id="education" />
        </Link>
      </div>
      {/* <About />
      <Projects />
      <Certifications /> */}
      
    </div>
  );
};

export default App
