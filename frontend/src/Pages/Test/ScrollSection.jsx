import React, { useRef, useEffect, useState } from 'react';
import '../Test/ScrollSection.css';

const FullScrollingContent = () => {
    return (
        <div style={{ fontFamily: 'Georgia, serif', width: "21%" }}>
            <div>
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
                </div>
            </div>


            {/* Footer/End Spacer */}
            <div style={{ overflow: "hidden", background: "white", padding: -20 }}>
                <div className="scroll-text">
                    {[...Array(20)].map((_, i) => (
                        <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
                            <p className="scrolling-logo" />
                            HURDLES
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
};

// --- 4. Section Renderer Component (Handles Styling based on type) ---
const ScrollSection = ({ number, description, isNumber }) => {
    const ref = useRef();
    const threshold = isNumber ? 0.5 : 0.4;
    const isVisible = useOnScreen(ref, threshold);
    const animationClass = isVisible ? 'visible' : 'hidden';

    // --- Inline Styles (Set based on section type) ---
    const sectionStyle = {
        minHeight: isNumber ? '100vh' : '80vh',
        // backgroundColor: isNumber ? '#fff' : '#404040',
        color: isNumber ? '#000' : 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px 20px',
        overflow: 'hidden',
        textAlign: 'center',
    };

    const headlineStyle = {
        fontSize: isNumber ? 'min(30vw, 250px)' : 'min(10vw, 80px)',
        fontWeight: isNumber ? 400 : 800,
        lineHeight: 1.1,
        margin: '0 auto 20px',
        maxWidth: isNumber ? 'auto' : '900px',
        color: isNumber ? 'transparent' : 'white', // Text color for the Accomplish block
    };

    const descriptionStyle = {
        maxWidth: '600px',
        marginTop: '30px',
        fontSize: '1rem',
        // color: isNumber ? '#333' : '#ccc',
        transitionDelay: isNumber ? '0s' : '0.4s',
    };

    // --- Class Names (Used for external CSS text effects and animation) ---
    const headlineClassName = isNumber ? "large-stylized-text" : "accomplish-headline";
    const containerClassName = isNumber ? "scroll-number-container" : "accomplish-text-container";

    return (
        <div>
            <section ref={ref} style={sectionStyle}>
                <div className={`${containerClassName} ${animationClass}`} style={{ textAlign: 'center' }}>
                    <h2 className={headlineClassName} style={headlineStyle}>
                        {isNumber ? number : (
                            <>
                                Accomplish
                                <br />
                                Anything in
                                <br />
                                Developing
                            </>
                        )}
                    </h2>
                </div>

                <p className={`description-block ${animationClass}`} style={descriptionStyle}>
                    {isNumber ? description : description}
                </p>
            </section>
        </div>
    );
};

export default FullScrollingContent;