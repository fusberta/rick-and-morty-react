import React from "react"
import Accordion from "../../accordion/accordion";

const Species = () => {

    const buttonLabels = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
    ];

    return (
        <>
            <Accordion name='species' buttonLabels={buttonLabels} />
        </>
    )
};

export default Species;
