import css from "./AuthNav.module.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Authorization from "../Authorization/Authorization";

export default function AuthNav() {
  return (
    <div className={css.container}>
      <Logo />
      <Navigation />
      <Authorization />
    </div>
  );
}
