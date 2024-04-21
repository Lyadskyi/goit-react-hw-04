import { MdImageSearch } from "react-icons/md";
import css from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <header className={css.header}>
      <form className={css.form}>
        <button type="submit">
          <MdImageSearch size={22} />
        </button>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
