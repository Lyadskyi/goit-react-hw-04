import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={css.error}>
      <p className={css.title}>Oops! Warning! Error...</p>
    </div>
  );
}
