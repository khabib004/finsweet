import { NavLink } from "react-router-dom"
import logo from "../assets/Pageimage/Logo.png"
import "./Header.css";

export const Header = () => {
  return (
    <>
      <div className="container header-page">
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <nav>
          <NavLink>Home</NavLink>
          <NavLink>Blok</NavLink>
          <NavLink>Pricing</NavLink>
          <NavLink>Cantact</NavLink>
        </nav>
        <button>button</button>
      </div>
    </>
  )
}

export default Header
