import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Menu = () => (
  <>
  <p>
    <Link to="/">Home</Link>
  </p>
  <p>
    <Link to='/education'>Education</Link>
  </p>
  <p>
    <Link to='/experience'>Experience</Link>
  </p>
  <p>
    <a href="https://github.com/AkshithaRao123" target="_blank" rel="noopener noreferrer">Projects</a>
  </p>
  </>
)

const Navbar = () => {
  return (
    <div className='pf__navbar'>
      <div className='pf__navbar_links'>
        <div className='pf__navbar_links_logo'>
          <img src={logo} alt='logo' width='30' height='30' />
        </div>
        <div className='pf__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='pf__navbar-sign'>
        <button type='button'>Contact me</button>
      </div>
      {/* <div className='pf__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="$fff" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="$fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='pf__navbar-menu_container scale-up-center'>
            <div className='pf__navbar-menu_container-links'>
              <Menu />
              <div className='pf__navbar-menu_container-links-sign'>
                <button type='button'>Contact me</button>
              </div>
            </div>
          </div>
        )}
      </div> */}
    </div>
  )
}

export default Navbar
