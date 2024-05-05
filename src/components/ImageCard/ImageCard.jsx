import css from "./ImageCard.module.css";

export default function ImageCard({ image, modal }) {
  const onHandleClick = () => {
    modal(image);
  };

  return (
    <div className={css.wrapper} onClick={onHandleClick}>
      <img
        className={css.card}
        src={image.urls.small}
        alt={image.alt_description}
        height={100}
      />
      <p className={css.title}>
        Author: <span className={css.desc}>{image.user.name}</span>
      </p>
      <p className={css.title}>
        Description: <span className={css.desc}>{image.alt_description}</span>
      </p>
    </div>
  );
}
