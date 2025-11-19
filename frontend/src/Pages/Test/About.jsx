const About = () => {
    return (
        <div style={styles.page}>
            <center>
                <h1>ABOUT <br /> THE RACE</h1>
                <p>This is a race of yourself to yourself.<br />
                    Fight the race! Develope the website.<br />
                    Complete the task.<br />
                    As a developer, it's Not That hard.</p>
            </center>

            <div style={styles.hurdleWrapper}>
                {[1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        style={{
                            ...styles.hurdle,
                            transform: `scale(${1 - i * 0.15}) translateY(${i * 20}px)`
                        }}
                    />
                ))}
            </div>

        </div>
    );
};

export default About;


const styles = {
    page: {
        width: "950pt",
        height: "600pt",
        background: "linear-gradient(to bottom, #02ad8b, #ffffff)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "10px",
        boxSizing: "border-box",
        color: "#ffffff",
        fontFamily: "Poppins, sans-serif",
    },

    hurdleWrapper: {
        position: "relative",
        width: "900pt",
        height: "950pt",
    },

    hurdle: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        margin: "auto",
        width: "800pt",
        height: "400pt",
        backgroundImage: "url('/light.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 1,
    },
};
