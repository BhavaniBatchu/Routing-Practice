import {Link} from ' react-router-dom'

import './index.css'

const Header = () => {
  ;<div className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="wave"
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="title">Wave</h1>
    </div>

    <ul className="nav-items-list">
      <li className="link-item">
        <link className="route-link" to="/">
          Home
        </link>
      </li>
      <li className="link-item">
        <link className="route-link" to="/about">
          About
        </link>
      </li>
      <li className="link-item">
        <link className="route-link" to="/contact">
          Contact
        </link>
      </li>
    </ul>
  </div>
}

export default Header
