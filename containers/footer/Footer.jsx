import { MdEmail } from "react-icons/md";
import { FaBehance, FaGithub, FaInstagram, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import './footer.css';

const Footer = () => {
  return (
    <div className='pf__footer'>
        <div className="pf__footer-icons"><a href="mailto:akshashw@gmail.com"><MdEmail size={25} /></a></div>
        <div className="pf__footer-icons"><a href='https://github.com/AkshithaRao123'><FaGithub size={25} /></a></div>
        <div className="pf__footer-icons"><a href='https://www.linkedin.com/in/akshitha-rao-69365b22a/'><FaLinkedin size={25} /></a></div>
        <div className="pf__footer-icons"><a href='https://www.instagram.com/akshithascreativechannel/'><FaInstagram size={25} /></a></div>
        <div className="pf__footer-icons"><a href='https://www.behance.net/akshitharao'><FaBehance size={25} /></a></div>
        <div className="pf__footer-icons"><a href='https://stackoverflow.com/users/18135949/akshitha-rao'><FaStackOverflow size={25} /></a></div>
    </div>
  )
}

export default Footer
