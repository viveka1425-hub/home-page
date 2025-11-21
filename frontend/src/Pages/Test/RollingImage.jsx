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
        backgroundImage: "url('/Rolling.jpg')",
        backgroundRepeat: "no-repeat",
        width: "21%",
        display: "flex",
        flexDirection: "column",
        color: "#fff",
        padding: "20px",
        boxSizing: "border-box"
    },

    RollImage: {
        width: "980pt",
        height: "650pt",
        backgroundPosition: "center",
        backgroundSize: "contain",
        marginTop: "20px"
    },
};
