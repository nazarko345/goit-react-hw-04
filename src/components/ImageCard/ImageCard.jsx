import css from "./ImageCard.module.css";

export default function ImageCard({ image }) {
  return (
    <div className={css.imgContainer}>
      <img className={css.img} src={image} alt="Your search query" />
    </div>
  );
}