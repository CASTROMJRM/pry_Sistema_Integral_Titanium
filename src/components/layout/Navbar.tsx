import { Link } from "react-router-dom";
import Logo from "../../assets/LogoP.png";
import {
  FaHome,
  FaDumbbell,
  FaIdCard,
  FaInfoCircle,
  FaUserPlus,
  FaSignInAlt,
} from "react-icons/fa";

interface Props {
  scrolled: boolean;
  onToggleMobile: () => void;
}

const Navbar = ({ scrolled, onToggleMobile }: Props) => {
  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-content">
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} alt="Titanium Sport Gym" className="logo-image" />
          </Link>
        </div>

        <nav className="nav-desktop">
          <div className="nav-main-links">
            <Link to="/" className="nav-link">
              <FaHome className="nav-icon" />
              INICIO
              <span className="nav-underline" />
            </Link>

            <Link to="/catalogue" className="nav-link">
              <FaDumbbell className="nav-icon" />
              PRODUCTOS
              <span className="nav-underline" />
            </Link>

            <Link to="/suscripciones" className="nav-link">
              <FaIdCard className="nav-icon" />
              SUSCRIPCIONES
              <span className="nav-underline" />
            </Link>

            <Link to="/AboutePage" className="nav-link">
              <FaInfoCircle className="nav-icon" />
              ACERCA DE NOSOTROS
              <span className="nav-underline" />
            </Link>
          </div>

          <div className="nav-action-links">
            <div className="nav-divider" />
            <Link to="/register" className="slider-btn-outline">
              <FaUserPlus /> SUSCRÍBETE
            </Link>
            <Link to="/login" className="slider-btn-solid">
              <FaSignInAlt /> INICIA SESIÓN
            </Link>
          </div>
        </nav>

        <button onClick={onToggleMobile} className="mobile-menu-btn">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
