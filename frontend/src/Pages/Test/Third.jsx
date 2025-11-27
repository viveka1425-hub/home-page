import React from 'react';
import "../Test/Third.css"
const AnimatedStar = ({ size = 40 }) => {
    return (
        <div className='width-220vh'>
            <div style={{
                position: 'relative',
                width: `${size}px`,
                height: `${size}px`,
                animation: 'rotate 8s linear infinite'
            }}>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: '2px',
                            height: `${size * 0.4}px`,
                            background: 'linear-gradient(to top, transparent, #9B7FBD, #7B5FA0)',
                            transformOrigin: 'bottom center',
                            transform: `translate(-50%, -100%) rotate(${angle}deg)`,
                            animation: 'pulse 2s ease-in-out infinite'
                        }}
                    />
                ))}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: `${size * 0.25}px`,
                    height: `${size * 0.25}px`,
                    background: '#9B7FBD',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 0 10px #9B7FBD',
                    animation: 'glow 2s ease-in-out infinite'
                }} />
            </div>
        </div>
    );
};

const NumbersWithStars = () => {
    const numbers = [
        { id: 1, value: "1,034", text: "Sample Data about Sample Things", position: { top: '10%', left: '42%' } },
        { id: 2, value: "2", text: "Sample Data about Sample Things", position: { top: '35%', left: '75.3%' } },
        { id: 3, value: "54", text: "Sample Data about Sample Things", position: { top: '60%', left: '83.5%' } },
        { id: 4, value: "25", text: "Sample Data about Sample Things", position: { top: '80%', left: '31%' } }
    ];

    return (
        <div style={{
            position: 'relative',
            height: "70%",
            // marginBottom: '-50pt',
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #406964 0%, #80aba3 25%, #ebf7f3 50%, #d1c4ff 75%, #d1c4ff 100%)',
            overflow: 'hidden',
            width: '100vw'
        }}>
            {/* SVG for curved dotted lines with animation */}
            <svg
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    // width: '100%',
                    pointerEvents: 'none'
                }}
            >
                <defs>
                    <style>{`
                        .animated-path {
                            stroke-dasharray: 10, 10;
                            stroke-dashoffset: 0;
                            animation: dash 3s linear infinite;
                        }
                        @keyframes dash {
                            to {
                                stroke-dashoffset: -20;
                            }
                        }
                    `}</style>
                </defs>

                {/* Line 1 to 2 - upward curve */}
                <path
                    className="animated-path"
                    d="M 20% 15% Q 45% 5%, 70% 25%"
                    stroke="#9B7FBD"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                />

                {/* Line 2 to 3 - downward curve */}
                <path
                    className="animated-path"
                    d="M 70% 25% Q 85% 42%, 75% 60%"
                    stroke="#9B7FBD"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                />

                {/* Line 3 to 4 - wavy curve */}
                <path
                    className="animated-path"
                    d="M 75% 60% Q 50% 75%, 25% 70%"
                    stroke="#9B7FBD"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                />

                {/* Line 4 to 1 - closing curve */}
                <path
                    className="animated-path"
                    d="M 25% 70% Q 15% 42%, 20% 15%"
                    stroke="#9B7FBD"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                />
            </svg>

            <div style={{ textAlign:"center", marginTop: "12%" }}>
                <img src='line.png'></img>
            </div>
            {/* Numbers with Stars */}
            <div>
                {numbers.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            position: "absolute",
                            top: item.position.top,
                            left: item.position.left,
                            transform: "translate(-50%, -50%)",

                            display: "flex",
                            flexDirection: "column",   // 👈 makes text go to next line
                            alignItems: "center",
                            gap: "5px"
                        }}
                    >
                        {/* Row: Star + Number */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "15px"
                            }}
                        >
                            <AnimatedStar size={50} />

                            <div
                                style={{
                                    fontSize: "13vw",
                                    fontFamily: "Didot, serif",
                                    backgroundImage: "url('Star.png')",
                                    backgroundSize: "200%",
                                    backgroundPosition: "0% 0%",
                                    color: "transparent",
                                    WebkitBackgroundClip: "text",
                                    animation: "moveBG 11s linear infinite",
                                    marginLeft: "50pt"
                                }}
                            >
                                {item.value}
                            </div>
                        </div>

                        {/* Text in NEW LINE */}
                        <div
                            style={{
                                color: "black",
                            }}
                        >
                            {item.text}
                        </div>
                    </div>
                ))}

            </div>

            <style>{`
                @keyframes rotate { 
                    from { transform: rotate(0deg); } 
                    to { transform: rotate(360deg); } 
                }
                @keyframes pulse { 
                    0%, 100% { opacity: 0.8; } 
                    50% { opacity: 1; } 
                }
                @keyframes glow { 
                    0%, 100% { box-shadow: 0 0 10px #9B7FBD; } 
                    50% { box-shadow: 0 0 15px #9B7FBD, 0 0 25px #7B5FA0; } 
                }
            `}</style>
        </div>
    );
};

export default NumbersWithStars;