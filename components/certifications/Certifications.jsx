import React from 'react';
import './certifications.css';

const Certifications = () => {
  return (
    <div className='App'>
      <div className='gradient__bg section__padding'>
        <h1 className='gradient__text' style={{fontSize: '3rem', marginBottom: '2rem'}}>Education and Certifications</h1>
        <div style={{color: 'var(--color-text)'}}>
          <p>I am currently a final year CS student passionate about learning more and applying that knowledge. I've also done certifications.</p>
          {/* Add your education and certifications details here */}
        </div>
      </div>
    </div>
  )
}

export default Certifications
