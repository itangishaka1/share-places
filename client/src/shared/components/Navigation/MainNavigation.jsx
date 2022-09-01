import { Link } from 'react-router-dom'
import MainHeader from './MainHeader'
import './MainNavigation.scss'

const MainNavigation = () => {
  return (
    <MainHeader className='main-navigation'>
      <button className='main-navigation__menu-btn'>
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">My places</Link>
      </h1>
      <nav>...links</nav>
    </MainHeader>
  )
}

export default MainNavigation