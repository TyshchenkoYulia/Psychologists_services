import { useSelector } from "react-redux";
import CardItem from "../CardItem/CardItem";
import css from "./CatalogList.module.css";
import { selectItems } from "../../redux/AllPsychologies/selectors";

export default function CatalogList() {
  const psychologies = useSelector(selectItems);

  if (psychologies.length === 0) {
    return;
  }

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {psychologies.map((psychology) => (
          <li className={css.item} key={psychology.id}>
            <CardItem data={psychology} />
          </li>
        ))}
      </ul>
    </div>
  );
}
