import React from "react";
import "../Test/Profile.css"; 

const TeamDirectory = () => {
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

    return (
        <div className="team-container">
            <h1 className="team-title">Speakers</h1>

            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div className="team-card" key={index}>
                        <img className="team-image" src={member.image} alt={member.name} />
                        <div className="team-info">
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.title}</p>
                        </div>

                        <a href="https://www.linkedin.com/" className="team-btn">
                            LinkedIn
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamDirectory;
