import css from "./Logo.module.css";

export default function Logo() {
  return (
    <>
      <p className={css.logo}>
        <span className={css.logoSpan}>psychologists.</span>services
      </p>
    </>
  );
}
