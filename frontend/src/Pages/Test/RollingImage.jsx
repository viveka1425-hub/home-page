// import "../Test/Rolling.css";
const RollingImage = () => {
    return (
        <div style={styles.home}>
            <h1>Project Name</h1>
            <p>Client Name</p>

            <div style={styles.RollImage} className="roll"></div>
        </div>
    )
}

export default RollingImage;


const styles = {
    home: {
        background: "#3c5961",
        width:"21%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
        padding: "20px",
        boxSizing: "border-box"
    },

    RollImage: {
        width: "980pt",
        height: "750pt",
        backgroundImage: "url('/Rolling.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        marginTop: "20px"
    },
};
