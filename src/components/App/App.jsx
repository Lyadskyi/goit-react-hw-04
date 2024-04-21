import { useState, useEffect } from "react";
import { fetchImages } from "../../images-api";
import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";

export default function App() {
  // const [searchValue, setSearchValue] = useState("");
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
      <SearchBar onSubmit={() => {}} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery images={images} />
    </div>
  );
}
