import { useState, useEffect } from "react";
import { fetchImages } from "../../images-api";
import css from "./App.module.css";
import ImageGallery from "../ImageGallery/ImageGallery";

export default function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function getImages() {
      const imageData = await fetchImages();
      console.log(imageData);
      // setImages(imageData);
    }

    getImages();
  }, []);

  return (
    <div className={css.container}>
      <h2 className={css.head}>
        Застосунок пошуку зображень за ключовим словом
      </h2>
      <ImageGallery images={images} />
    </div>
  );
}
