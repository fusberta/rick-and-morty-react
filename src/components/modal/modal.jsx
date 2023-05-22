import React, {useContext} from "react"
import { RiCloseCircleFill } from 'react-icons/ri'
import './modal.css'
import Status from "../filter/category/status";
import Genders from "../filter/category/genders";
import Species from "../filter/category/species";
import { FilterContext } from "../../pages/characters/characters";

const Modal = ({ closeModal, openModal }) => {

  const {updateStatus, updateGender, updateSpecies, setCurrentPage} = useContext(FilterContext)

  return (
    <div className={openModal ? "modal-overlay active" : "modal-overlay"} onClick={() => closeModal(false)}>
      <div className={openModal ? "modal active" : "modal"} onClick={e => e.stopPropagation()}>
        <div className="modal-scroll-container">
          <div className="modal-header">
            <h1 className="modal-label">
              Фильтры
            </h1>
            <button className="hover:scale-125 transition-all" 
                    onClick={() => closeModal(false)}>
              <RiCloseCircleFill size={30} />
            </button>
          </div>
          <div className="modal-main">
            <Status />
            <Genders />
            <Species />
          </div>
          <div className="modal-footer">
            <button className="modal-reset"
              onClick={() => {
                updateGender("")
                updateSpecies("")
                updateStatus("")
                setCurrentPage(1)
                window.location.reload(false)
              }}>Сброс</button>
            <button className="modal-submit" onClick={() => closeModal(false)}>Готово</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Modal;
