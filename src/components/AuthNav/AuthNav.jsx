import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AuthNav() {
  return (
    <div className={css.container}>
      <p className={css.logo}>
        <span className={css.logoSpan}>psychologists.</span>services
      </p>
      <nav className={css.nav}>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/psychologists" className={getNavLinkClass}>
          Psychologists
        </NavLink>
        <NavLink to="/favorites" className={getNavLinkClass}>
          Favorites
        </NavLink>
      </nav>
    </div>
  );
}
