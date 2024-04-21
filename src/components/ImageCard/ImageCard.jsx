import css from "./ImageCard.module.css";

export default function ImageCard({ image }) {
  return (
    <div className={css.wrapper}>
      <img className={css.card} src={image.urls.small} alt={image.slug} />
    </div>
  );
}
