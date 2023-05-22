import React, { useEffect } from "react"
import './filter.css'
import { BsFilterCircleFill } from "react-icons/bs"
import { useState } from "react";
import Modal from "../modal/modal";

const Filter = () => {

  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [openModal]);

  return (
    <>
      <button className="filter-container"
        onClick={() => {
          setOpenModal(true)
        }}>
        <BsFilterCircleFill size={53} />
      </button>
      <Modal closeModal={setOpenModal} openModal={openModal} />
    </>
  )
};

export default Filter;
