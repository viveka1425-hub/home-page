import React, { useRef, useEffect, useState } from 'react';
import '../Test/Fourth.css';

const DevelopingFourth = () => {
    return (
        <div style={{ fontFamily: 'Georgia, serif' }}>
            <div className='fourth'>
                <div style={{ height: "850pt" }} className="image-color">
                    <h1 style={{
                        color: "black",
                        fontSize: "80pt",
                        textAlign: "center",
                        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                        fontWeight: "300"
                    }}>
                        Accomplish<br /> Anything in <br /> Developing
                    </h1>
                    <h2 style={{ textAlign: "center", marginBottom: "40pt" }}>This is the space to introduce the Services section. Briefly describe the <br /> types of services offered and highlight any special benefits or features</h2>
                    {/* Left Column */}
                    <center>
                        <div className='content-wrapper'>
                            <div className="text-column left">
                                <div className="text-item">
                                    <span className="checkbox-icon">✓</span>
                                    <span className="text">Sample Text 1</span>
                                    <hr className="divider" />
                                </div>
                                <div className="text-item">
                                    <span className="checkbox-icon">✓</span>
                                    <span className="text">Sample Text</span>
                                    <hr className="divider" />
                                </div>
                                <div className="text-item">
                                    <span className="checkbox-icon">✓</span>
                                    <span className="text">Sample Text</span>
                                    <hr className="divider" />
                                </div>
                            </div>
                            <div className="center-column">
                                <div className="circuit-ring">
                                    <div className="center-logo">
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="text-column right">
                                <div className="text-item">
                                    <span className="checkbox-icon">✓</span>
                                    <span className="text">Sample Text</span>
                                    <hr className="divider" />
                                </div>
                                <div className="text-item">
                                    <span className="checkbox-icon">✓</span>
                                    <span className="text">Sample Text</span>
                                    <hr className="divider" />
                                </div>
                                <div className="text-item">
                                    <span className="checkbox-icon">✓</span>
                                    <span className="text">Sample Text</span>
                                    <hr className="divider" />
                                </div>
                            </div>
                        </div>

                        {/* Button */}
                        <button className="create-button">
                            Create Now!
                        </button>
                    </center>
                </div>
            </div>


            {/* Footer/End Spacer */}
            {/* <div style={{ overflow: "hidden", background: "white", padding: -20 }}>
                <div className="scroll-text">
                    {[...Array(20)].map((_, i) => (
                        <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
                            <p className="scrolling-logo" />
                            HURDLES
                        </span>
                    ))}
                </div>
            </div> */}

        </div>
    );
};


export default DevelopingFourth;