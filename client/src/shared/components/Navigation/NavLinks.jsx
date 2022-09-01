import { NavLink } from 'react-router-dom'
import './NavLinks.scss'

const NavLinks = () => {
  return (
    <ul className='navLinks'>
      <li><NavLink to="/" exact>ALL USERS</NavLink></li>
      <li><NavLink to="/u1/places">MY PLACES</NavLink></li>
      <li><NavLink to="/places/new">ADD PLACE</NavLink></li>
      <li><NavLink to="/auth">AUTHONTICATE</NavLink></li>
    </ul>
  )
}

export default NavLinks