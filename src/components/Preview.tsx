import React from "react";
import Row from "./Row";

const Preview = () => {
    return (
        <>
            {["A", "B", "C", "D", "E"].map((letter: string) => (
                <Row character={letter} />
            ))}
        </>
    );
};

export default Preview;
