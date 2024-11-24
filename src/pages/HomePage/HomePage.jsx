import ImageContainerHome from "../../components/ImageContainerHome/ImageContainerHome";
import { GoArrowUpRight } from "react-icons/go";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h1 className={css.title}>
          The road to the
          <span className={css.titleSpan}> depths </span>of the human soul
        </h1>
        <p className={css.text}>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <button className={css.btn}>
          Get started
          <GoArrowUpRight size={18} />
        </button>
      </div>
      <ImageContainerHome />
    </div>
  );
}
