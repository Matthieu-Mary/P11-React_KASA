import { NavLink } from 'react-router-dom';
import Logo from "../assets/images/LOGO.svg"

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo KASA" />
      <ul>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </ul>
    </header>
  )
}
