// import React, { useEffect } from 'react';
import '../Test/Test.css';
import Card from '../Card';
import Footer from './Footer';
import Profile from './Profile';
import About from './About';
import RollingImage from './RollingImage';
import ScrollSectionsAppThird from './Third';
import DevelopingFourth from './Fourth';
import Abc from './Abc';
const Test = () => {
    return (
        <div style={{ fontFamily: "sans-serif", color: "white" }}>
            <div className="hero-section">
                <header className="top-bar">
                    <nav className="nav-container">
                        <a href="https://www.brington.in/" className="nav-link">Home</a>
                    </nav>
                </header>

                {/* Background image div (for CSS background property) */}
                <div className="background-image"></div>
                {/* Main content and overlay */}
                <div className="content-overlay">
                    <h1 className="main-title">I am a Sample<br /> Website</h1>
                    <h4 className="subtitle">
                        I'm a Sample<br />
                        Website, Create me<br />
                        as same as I am,<br />
                        Don't Do any<br />
                        Mistakes.<br /><br />
                        <button className="cta-button">Get Started</button>
                    </h4>
                </div>
                {/* Floating Chat Button */}
                <a href="#" className="chat-button">✨Chat with AI</a>
            </div>
            <div>
                <Card />
            </div>
            <div>
                <ScrollSectionsAppThird />
            </div>
            <div>
                < DevelopingFourth />
            </div>
            <div>
                <About />
            </div>
            <div>
                <RollingImage />
            </div>
            <div>
                <Abc />
            </div>
            <div>
                <Profile />
            </div>
            <div>
                < Footer />
            </div>
        </div>
    );
};

export default Test;