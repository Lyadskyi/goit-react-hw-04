import { useEffect, useState } from "react";
import { fetchImages } from "../../images-api";
// Сomponents imports
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal.jsx";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
// Style imports
import css from "./App.module.css";
// Library imports
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  const [author, setAuthor] = useState("");

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleOpenModal = (image) => {
    setShowModal(true);
    setModalUrl(image.urls.regular);
    setAuthor(image.user.name);
    setModalAlt(image.alt_description);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImages() {
      try {
        setIsLoading(true);
        const imageData = await fetchImages(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...imageData];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getImages();
  }, [page, query]);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} modal={handleOpenModal} />
      )}
      <ImageModal />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn loadMore={handleLoadMore} />
      )}
      {images.length > 0 && (
        <ImageModal
          modal={showModal}
          onClose={handleCloseModal}
          url={modalUrl}
          author={author}
          alt={modalAlt}
        />
      )}
    </div>
  );
}
