import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard.jsx";

export default function ImageGallery({ responce, modalOpening }) {
  return (
    <ul className={css.list}>
      {responce.map((item) => (
        <li onClick={() => modalOpening(item)} className={css.item} key={item.id}>
          <ImageCard responce={responce} image={item.urls.small} />
        </li>
      ))}
    </ul>
  );
}
