import { BiMessageSquareError } from "react-icons/bi";
import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={css.error}>
      <BiMessageSquareError size={20} color="#de3163" />
      <p className={css.title}>
        Sorry, an HTTP request error occurred. Please reload!
      </p>
      <BiMessageSquareError size={20} color="#de3163" />
    </div>
  );
}
