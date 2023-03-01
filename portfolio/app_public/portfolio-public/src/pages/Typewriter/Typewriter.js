import React from "react";
import Typewriter from "typewriter-effect";
import './typewriter.scss';

function TypeWriter() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Frontend Developer.",
                    "Gaming Enthusiast."
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 20,
            }}
        />
    );
}

export default TypeWriter;

