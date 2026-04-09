import { GiChessBishop, GiFountainPen, GiLoveSong, GiOpenBook, GiPhotoCamera, GiScooter, GiWalk } from "react-icons/gi";
import mee from '../../assets/mee.jpg'
import './about.css';

const About = () => {
  return (
    <div className='App'>
      <div className='gradient__bg section__padding'>
        <div className='about__container'>
          <h1 className='gradient__text'>About Me</h1>
          <div className='about__content'>
            <div>
              <p>
                Hey there! I am Akshitha, a passionate computer science student dedicated to creating meaningful impact through technology.
              </p>
              <p>
                I specialise in web and mobile app development, and also machine learning and AI.
                My goal is to leverage technology to solve real-world problems and contribute to positive change.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies and continuously learning to improve my skills.
                Apart from this, I am into singing. I find driving my two-wheeler refreshing as I see the fleeting natural scenery around me.
              </p>
            </div>
            <div className="myself__img">
              <img src={mee} width="70%" />
            </div>
          </div>

          <div className='about__interests'>
            <h2 className='gradient__text'>My Professional Interests</h2>
            <div className='interests__grid'>
              <div className='interest__card'>
                <h3>Web Development</h3>
                <p>I design and create user friendly websites, both frontend and backend of it.</p>
              </div>
              <div className='interest__card'>
                <h3>Mobile App Development</h3>
                <p>I can develop Android apps, lightweight as paper!</p>
              </div>
              <div className='interest__card'>
                <h3>Machine Learning</h3>
                <p>Transform your data into insights real quick.</p>
              </div>
              <div className='interest__card'>
                <h3>Gen AI</h3>
                <p>Have tried RAG, reduced hallucinations by 60%</p>
              </div>
            </div>
          </div>

          <div className='about__interests'>
            <h2 className='gradient__text'>My Hobbies</h2>
            <div className='interests__grid'>
              <div className='interest__card interest__card-hobbies'>
                <p><GiLoveSong size={17} /> Singing</p>
              </div>
              <div className='interest__card interest__card-hobbies'>
                <p><GiScooter size={17} /> Driving</p>
              </div>
              <div className='interest__card interest__card-hobbies'>
                <p><GiFountainPen size={17} /> Writing</p>
              </div>
              <div className='interest__card interest__card-hobbies'>
                <p><GiWalk size={17} /> Walking</p>
              </div>
              <div className='interest__card interest__card-hobbies'>
                <p><GiPhotoCamera size={17} /> Photography</p>
              </div>
              <div className='interest__card interest__card-hobbies'>
                <p><GiOpenBook size={17} /> Reading</p>
              </div>
              <div className='interest__card interest__card-hobbies'>
                <p><GiChessBishop size={17} /> Playing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
