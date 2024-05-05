import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ loadMore }) {
  return (
    <div className={css.containerBtn}>
      <button className={css.loadBtn} onClick={loadMore}>
        Load more
      </button>
    </div>
  );
}
