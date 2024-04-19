import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <p className={css.title}>Please wait, loading images...</p>
    </div>
  );
}
