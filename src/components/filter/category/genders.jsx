import React from "react"
import Accordion from "../../accordion/accordion";

const Genders = () => {

  const buttonLabels = ['female', 'male', 'genderless', 'unknown']

  return (
    <>
      <Accordion name='gender' buttonLabels={buttonLabels} />
    </>
  )
};

export default Genders;
