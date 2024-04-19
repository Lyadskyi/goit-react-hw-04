import { useState, useEffect } from "react";
import { fetchImages } from "../../images-api";
import css from "./App.module.css";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getImages() {
      try {
        setIsLoading(true);
        const imageData = await fetchImages();
        setImages(imageData);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getImages();
  }, []);

  return (
    <div className={css.container}>
      <h2 className={css.head}>
        Застосунок пошуку зображень за ключовим словом
      </h2>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {/* <Loader /> */}
      <ImageGallery images={images} />
    </div>
  );
}
