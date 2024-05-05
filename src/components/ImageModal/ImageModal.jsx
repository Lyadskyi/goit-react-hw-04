import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({ modal, onClose, url, author, alt }) {
  return (
    <div>
      <ReactModal
        isOpen={modal}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={onClose}
        overlayClassName={css.overlay}
        className={css.modal}
      >
        <img className={css.image} src={url} alt={alt} height={600} />
        <p className={css.title}>
          Author: <span className={css.desc}>{author}</span>
        </p>
        <p className={css.title}>
          Descripsion: <span className={css.desc}>{alt}</span>
        </p>
      </ReactModal>
    </div>
  );
}
