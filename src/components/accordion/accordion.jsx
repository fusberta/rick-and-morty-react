import React, { useState, useContext, useEffect } from "react"
import './accordion.css'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { FilterContext } from "../../pages/characters/characters";

const Accordion = ({ name, buttonLabels, primaryBtns }) => {

    const {status, updateStatus, updateGender, updateSpecies, currentPage, setCurrentPage} = useContext(FilterContext)
    const [isOpen, setIsOpen] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);

    function toggleAccordion() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="accordion">
            <div className={isOpen ? 'rounded-t-lg border-b border-zinc-400 accordion-header' : 'rounded-lg accordion-header'} onClick={toggleAccordion}>
                <p>{name}</p>
                {isOpen ? (
                    <span className="accordion-arrow"><RiArrowUpSLine size={23}/></span>
                ) : (
                    <span className="accordion-arrow"><RiArrowDownSLine size={23}/></span>
                )}
            </div>
            {isOpen && (
                <div className="accordion-body">
                    {buttonLabels.map((label, index) => (
                        <button
                            key={index}
                            className={(selectedButton === index) ? 'accordion-btn-primary' : 'accordion-btn'}
                            onClick={() => {
                                setSelectedButton(index)
                                setCurrentPage(1)
                                if (buttonLabels.includes('Alive'))
                                    updateStatus(label)
                                else if (buttonLabels.includes('male'))
                                    updateGender(label)
                                else if (buttonLabels.includes('Human'))
                                    updateSpecies(label)
                            }}
                        >   
                            {label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
};

export default Accordion;
