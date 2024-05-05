import { MdImageSearch } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (form.elements.query.value === "") {
      toast("Please fill in the field to search for images :)");
    }

    onSubmit(form.elements.query.value);
    form.reset();
  };
  return (
    <header className={css.header}>
      <Toaster
        toastOptions={{
          className: css.toaster,
          style: {
            border: "2px solid #713200",
            padding: "8px",
            background: "#DE3163",
            color: "#ffffff",
            marginTop: "80px",
          },
        }}
      />
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit">
          <MdImageSearch size={22} />
        </button>
        <input
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
