const About = () => {
    return (
        <div style={styles.page}>
            <center>
                <h1>ABOUT <br /> THE  RACE</h1>
                <p>This is a race of yourself to yourself.<br />
                    Fight the race! Develope the website.<br />
                    Complete the task.<br />
                    As a developer, it's Not That hard.</p>
            </center>
            <div style={styles.image}></div>
        </div>
    )
}
export default About;

const styles = {
    page: {
        width: "950pt",
        height: "900pt",
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
    image: {
        backgroundImage: "url('n')",
        backgroundRepeat: "no-repeat",
    }
};