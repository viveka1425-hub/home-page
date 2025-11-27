import React, { useState } from "react";
import "../Test/Abc.css";

const letters = ["A", "B", "C", "D", "E", "F"];
const bgList = ["A1", "B1", "C1", "D1", "E1", "F1"];

export default function Abc() {
    const [activeLetter, setActiveLetter] = useState("A");
    const [activeBg, setActiveBg] = useState("A1");

    const handleClick = (letter, index) => {
        setActiveLetter(letter);
        setActiveBg(bgList[index]);
    };

    return (
        <div className="container">

            {/* LEFT SIDE */}
            <div
                className="left"
                style={{
                    backgroundImage: `url("/bg/${activeBg}.jpg")`,
                }}
            >
                {/* ROTATING FOREGROUND IMAGE */}
                <img
                    src={`/images/${activeLetter}.png`}
                    className="rotate-img"
                    alt={`${activeLetter} visual representation`}
                />
            </div>

            {/* RIGHT SIDE */}
            <div className="right">

                <div className="grid">
                    {letters.map((letter, index) => (
                        <div
                            key={letter}
                            className={`box ${activeLetter === letter ? 'active' : ''}`}
                            onClick={() => handleClick(letter, index)}
                        >
                            {letter}
                        </div>
                    ))}
                </div>

                <div className="bottom">
                    <h2 className="project-title">A-Z PROJECT</h2>
                    <p className="project-description">
                        Download our library of transparent video letters<br />
                        and add them to your next project.
                    </p>
                </div>

            </div>
        </div>
    );
}