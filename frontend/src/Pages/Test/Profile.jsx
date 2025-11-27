import React, { useEffect, useRef, useState } from "react";
import "../Test/Profile.css"; 

const TeamDirectory = () => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);
    const cardRefs = useRef([]);

    const teamMembers = [
        { name: "Harry Williams", title: "Director of Mobile Gaming, Fixer", image: "pro1.jpg" },
        { name: "Veronika Zakharova", title: "Director of Mobile Gaming, Fixer", image: "pro2.jpg" },
        { name: "Lissa Cross", title: "Director of Mobile Gaming, Fixer", image: "pro3.jpg" },
        { name: "Sheldon Smith", title: "Director of Mobile Gaming, Fixer", image: "pro4.jpg" },
        { name: "Akira Lee", title: "Director of Mobile Gaming, Fixer", image: "pro5.jpg" },
        { name: "Ann Jacobs", title: "Director of Mobile Gaming, Fixer", image: "pro6.jpg" },
        { name: "Murty Yang", title: "Director of Mobile Gaming, Fixer", image: "pro7.jpg" },
        { name: "Jason Guhl", title: "Director of Mobile Gaming, Fixer", image: "pro8.jpg" }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        // Stagger animation for cards
                        cardRefs.current.forEach((ref, index) => {
                            if (ref) {
                                setTimeout(() => {
                                    ref.classList.add('card-visible');
                                }, index * 150);
                            }
                        });
                    }
                });
            },
            { 
                threshold: 0.2,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    return (
        <div 
            ref={containerRef}
            className={`team-container ${isVisible ? 'container-visible' : ''}`}
        >
            <h1 className="team-title">Speakers</h1>

            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div 
                        className="team-card"
                        ref={addToRefs}
                        key={index}
                    >
                        <div className="image-container">
                            <img className="team-image" src={member.image} alt={member.name} />
                            <div className="image-overlay"></div>
                        </div>
                        <div className="team-info">
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.title}</p>
                        </div>

                        <a href="https://www.linkedin.com/" className="team-btn">
                            <span>LinkedIn</span>
                            <svg className="btn-icon" viewBox="0 0 24 24" width="16" height="16">
                                <path fill="currentColor" d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamDirectory;