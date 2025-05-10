import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard.jsx";

export default function ImageGallery({ responce }) {
  // console.log(responce.data.results);
  
  return (
    <ul className={css.list}>
      {responce.map((item) => (
        <li className={css.item} key={item.id}>
          <ImageCard responce={responce} image={item.urls.small} />
        </li>
      ))}
    </ul>
  );
}
