import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn() {
  return (
    <div className={css.containerBtn}>
      <button className={css.loadBtn}>Load more</button>
    </div>
  );
}
