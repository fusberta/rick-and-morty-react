import React from "react"
import Accordion from "../../accordion/accordion";

const Status = () => {

    const buttonLabels = ['Alive', 'Dead', 'Unknown'];

    return (
        <>
            <Accordion name='status' buttonLabels={buttonLabels} />
        </>
    )
};

export default Status;
