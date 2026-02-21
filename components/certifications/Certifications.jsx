import React from 'react';
import './certifications.css';

const Certifications = () => {
  return (
    <div className='App'>
      <div className='gradient__bg section__padding'>
        <div className='cert__container'>
          <div className='education__section'>
            <h2 className='gradient__text'>Education</h2>
            <div className='education__timeline'>
              <div className='education__item'>
                <div className='education__year'>2021 - 2025</div>
                <div className='education__details'>
                  <h3>B.E. in Computer Science and Engineering</h3>
                  <p className='institution'>NMAM Institute of Technology</p>
                  <p className='location'>Nitte, Karkala</p>
                </div>
              </div>

              <div className='education__item'>
                <div className='education__year'>2007 - 2021</div>
                <div className='education__details'>
                  <h3>Schooling</h3>
                  <p className='institution'>Indian School Wadi Kabir</p>
                  <p className='location'>Muscat, Oman</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className='certifications__section'>
            <h2 className='gradient__text'>Certifications</h2>
            <div className='certifications__grid'>
              <div className='cert__card'>
                <h3>Data Visualisation Virtual Experience Program Participant</h3>
                <p className='cert__issuer'>Tata Group</p>
                <p className='cert__date'>Skills: Power BI, Data Visualization</p>
              </div>
              <div className='cert__card'>
                <h3>
                  MTA: Introduction to Programming Using Python</h3>
                <p className='cert__issuer'>Microsoft</p>
                <p className='cert__date'>Skills: Python</p>
              </div>
              <div className='cert__card'>
                <h3>Level 3 GenAI: Prompt Engineering</h3>
                <p className='cert__issuer'>Google Cloud Skills Boost</p>
                <p className='cert__date'>Skills: Generative AI, Prompt Engineering</p>
              </div>
              <div className='cert__card'>
                <h3>Tensorflow Deep Learning Solutions for Images</h3>
                <p className='cert__issuer'>Infosys Springboard</p>
                <p className='cert__date'>Skills: Data Science, Neural Networks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certifications
