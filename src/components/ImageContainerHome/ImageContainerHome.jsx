import { BsQuestion } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import img1x from "../../img/woman-white-shirt.jpg";
import img2x from "../../img/woman-white-shirt@2x.jpg";
import orangeIcon from "../../img/icon-people.png";
import greenIcon from "../../img/green-icon.png";
import css from "./ImageContainerHome.module.css";

export default function ImageContainerHome() {
  return (
    <div className={css.imgWrapper}>
      <picture>
        <source srcSet={`${img1x} 1x, ${img2x} 2x`} type="image/jpg" />
        <img className={css.img} src={img1x} alt="woman in a white shirt" />
      </picture>
      <img className={css.orangeIcon} src={orangeIcon} width="59" height="59" />

      <div className={css.iconWrapper}>
        <img className={css.greenIcon} src={greenIcon} width="45" height="45" />
        <BsQuestion className={css.questionIcon} size={26} />
      </div>

      <div className={css.experiensedWrapper}>
        <span className={css.checkIconWrapper}>
          <FaCheck className={css.checkIcon} size={30} />
        </span>
        <p className={css.text}>
          Experienced psychologists<span className={css.number}>15,000</span>
        </p>
      </div>
    </div>
  );
}
