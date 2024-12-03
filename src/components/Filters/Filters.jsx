import { useState } from "react";
import css from "./Filters.module.css";

export default function Filters() {
  const [sortOption, setSortOption] = useState("");

  //   const filteredAndSortedItems = items
  //     .sort((a, b) => {
  //       if (sortOption === "price-asc") return a.price - b.price;
  //       if (sortOption === "price-desc") return b.price - a.price;
  //       if (sortOption === "alphabet-asc") return a.name.localeCompare(b.name);
  //       if (sortOption === "alphabet-desc") return b.name.localeCompare(a.name);
  //       return 0;
  //     });

  return (
    <>
      <div className={css.filtersContainer}>
        <p className={css.title}>Filters</p>
        <select
          className={css.filterOption}
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option className={css.option} value="all">
            Show all
          </option>
          <option className={css.option} value="alphabet-asc">
            A to Z
          </option>
          <option className={css.option} value="alphabet-desc">
            Z to A
          </option>
          <option className={css.option} value="less-10$">
            Less than 10$
          </option>
          <option className={css.option} value="more-10$">
            Greater than 10$
          </option>
          <option className={css.option} value="popular">
            Popular
          </option>
          <option className={css.option} value="not-popular">
            Not popular
          </option>
        </select>
      </div>
    </>
  );
}
