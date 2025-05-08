import css from "./SearchBox.module.css";

export default function SearchBox({ onFilter, value }) {
  return (
    <div className={css.container}>
      <p className={css.title}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
}
