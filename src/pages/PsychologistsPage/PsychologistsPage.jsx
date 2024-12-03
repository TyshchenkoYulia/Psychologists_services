// import LogIn from "../../components/LogIn/LogIn";

import CatalogList from "../../components/CatalogList/CatalogList";
import Filters from "../../components/Filters/Filters";
import css from "./PsychologistsPage.module.css";

export default function PsychologistsPage() {
  return (
    <div className={css.container}>
      <Filters />
      <CatalogList />
    </div>
  );
}
