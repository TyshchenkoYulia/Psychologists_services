import css from "./NotFound.module.css";
import { FaPeoplePulling } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className={css.container}>
      <p className={css.text}>Opps! Page not found! Sorry!</p>
      <p className={css.message}>
        Please, visit
        <Link className={css.link} to="/">
          home page
        </Link>
      </p>
      <FaPeoplePulling className={css.icon} size={80} />
    </div>
  );
}
