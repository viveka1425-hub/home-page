import React from 'react';

const TeamDirectory = () => {
    const teamMembers = [
        {
            name: "Harry Williams",
            title: "Director of Mobile Gaming, Fixer",
            image: "pro1.jpg"
        },
        {
            name: "Veronika Zakharova",
            title: "Director of Mobile Gaming, Fixer",
            image: "pro2.jpg"
        },
        {
            name: "Lissa cross",
            title: "Director of Mobile Gaming, Fixer",
            image: "pro3.jpg"
        },
        {
            name: "sheldon Smith",
            title: "Director of Mobile Gaming, Fixer",
            image: "pro4.jpg"
        },
        {
            name: "Akira Lee",
            title: "Director of Mobile Gaming, Fixer",
            image: "pro5.jpg"
        },
        {
            name: "Ann Jacobs",
            title: "Director of Mobile Gaming, Fixer",
            image: "pro6.jpg"
        },
        {
            name: "Murty Yang",
            title: "Director of Mobile Gaming, Fixer",
            image: "pro7.jpg"
        },
        {
            name: "Jason Guhl",
            title: "Director of Mobile Gaming, Fixer",
            image: "pro8.jpg"
        }
    ];

    const styles = {
        container: {
            width: "950pt",
            height: "150pt",
            minHeight: '100vh',
            background: '#fafafa',
            padding: '40px 20px',
            marginBottom:'28pt',
        },
        grid: {
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px'
        },
        column: {
            display: 'flex',
            flexDirection: 'column'
        },
        card: {
            display: 'flex',
            alignItems: 'center',
            background: 'white',
            padding: '30px 20px',
            borderBottom: '1px solid #e5e5e5',
            gap: '20px'
        },
        image: {
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            objectFit: 'cover'
        },
        info: {
            flex: 1
        },
        name: {
            fontSize: '28px',
            fontWeight: '400',
            color: 'black',
            margin: '0 0 8px 0'
        },
        title: {
            fontSize: '16px',
            color: '#c4c4c4',
            margin: 0
        },
        button: {
            padding: '12px 32px',
            border: '2px solid black',
            borderRadius: '25px',
            background: 'white',
            color: 'black',
            fontSize: '16px',
            cursor: 'pointer'
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={{ textAlign: "center", color: "black" }}>Speakers</h1>
            <div style={styles.grid}>
                <div style={styles.column}>
                    {teamMembers.slice(0, 4).map((member, index) => (
                        <div style={{ ...styles.card, borderBottom: index === 2 ? 'none' : '1px solid #e5e5e5' }} key={index}>
                            <img style={styles.image} src={member.image} alt={member.name} />
                            <div style={styles.info}>
                                <h3 style={styles.name}>{member.name}</h3>
                                <p style={styles.title}>{member.title}</p>
                            </div>
                            <button style={styles.button}><a href ="https://www.linkedin.com/checkpoint/challengesV2/AQHN5ARscKEt9wAAAZqYcg-vq4V0c59D_4qqn8s6jnlvfnTg3ewvhoms4LU3sfxZMBSpOTpAShk7bUamojDKx9YakzXzsoInQg?ut=0eGEZJ1nXiuI01">LinkedIn</a></button>
                        </div>
                    ))}
                </div>

                <div style={styles.column}>
                    {teamMembers.slice(4, 8).map((member, index) => (
                        <div style={{ ...styles.card, borderBottom: index === 2 ? 'none' : '1px solid #e5e5e5' }} key={index}>
                            <img style={styles.image} src={member.image} alt={member.name} />
                            <div style={styles.info}>
                                <h3 style={styles.name}>{member.name}</h3>
                                <p style={styles.title}>{member.title}</p>
                            </div>
                            <button style={styles.button}>LinkedIn</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamDirectory;