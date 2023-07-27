import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <img src="https://www.seekpng.com/png/detail/360-3606647_physical-fitness-clipart-physical-fitness-logo-png.png" alt="" />
      <nav>
        <ul>
          <Link to={'/'}>
          <li>Home</li>
          </Link>
          <Link to={'/about '}>
          <li>About Us</li>
          </Link>
        </ul>
      </nav>

    </header>
  )
}

export default Header