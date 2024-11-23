import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AuthNav() {
  return (
    <nav className={css.container}>
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
  );
}
