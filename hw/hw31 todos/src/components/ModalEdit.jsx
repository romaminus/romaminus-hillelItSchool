import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../redux/reducers/modalReducers";
import { editItem } from "../redux/reducers/todoReducer";
import { useState } from "react";
import { styles } from "../css path/customCssPath";

function ModalEdit() {
  const { isOpen, id } = useSelector(state=>state.modal);
  const [currentText, setCurrentText] = useState('')
  const dispatch = useDispatch()
  const handleClose = () => {
    setCurrentText('');
    dispatch(closeModal())
  }
  const handleSave = () => {
    dispatch(editItem({ id, currentText }));
    setCurrentText('');
    dispatch(closeModal());
  }
  return (
    <>
      {isOpen && (
        <div className={styles.modal.modal}>
          <div className={styles.modal.modalContent}>
            <div className={styles.modal.modalHeader}>
              <h2 className={styles.modal.modalTitle}>
                Редагувати завдання
              </h2>
              <button
                onClick={handleClose}
                className={styles.btn.modalCloseBtn}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <textarea
              className={styles.modal.modalTextarea}
              value={currentText}
              onChange={(e) => setCurrentText(e.target.value)}
              placeholder="Введіть новий текст завдання..."
            />

            <div className={styles.btn.modalButtons}>
              <button
                onClick={handleClose}
                className={styles.btn.modalCancelBtn}
              >
                Скасувати
              </button>
              <button
                onClick={handleSave}
                className={styles.btn.modalSaveBtn}
              >
                Зберегти
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalEdit;
