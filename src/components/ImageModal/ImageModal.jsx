import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { BsXLg } from "react-icons/bs"; 

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, isClosed, selectedArt }) {
  return (
    <Modal className={css.modal} isOpen={isOpen} onRequestClose={isClosed}>
      {selectedArt && (
        <>
          <button onClick={isClosed}>
            <BsXLg />
          </button>
          <img
            className={css.img}
            src={selectedArt.urls.regular}
            alt={selectedArt.alt_description}
          />
          <div className={css.miniContainer}>
            <h4 className={css.description}>
              {" "}
              {selectedArt.description ||
                selectedArt.alt_description ||
                "No description available"}
            </h4>
            <p className={css.likes}>❤️ {selectedArt.likes}</p>
          </div>
        </>
      )}
    </Modal>
  );
}

