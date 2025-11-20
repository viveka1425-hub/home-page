import React, { useEffect, useRef, useState } from "react";
import "../Pages/Card.css";

export default function CardScroll() {
    const triggerRef = useRef();
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                }
            },
            { threshold: 0.5 }
        );

        if (triggerRef.current) observer.observe(triggerRef.current);

        return () => {
            if (triggerRef.current) observer.unobserve(triggerRef.current);
        };
    }, []);

    return (
        <div style={{ backgroundColor: "white", width:"21%" }}>
            <div style={{ color: "black", marginLeft: "35rem" }}>
                <h2 ref={triggerRef}>Sample Numbers</h2>
                <h1 style={{marginTop:-18}} ref={triggerRef}>Row No-1</h1>
            </div>

            <div className={`card-row ${animate ? "scroll-right-left" : ""}`}>
                <div class="card">
                    <div class="card-number">61</div>
                    <div class="card-label">Unit</div>
                </div>

                <div class="card">
                    <div class="card-number">73</div>
                    <div class="card-label">Unit</div>
                </div>

                <div class="card">
                    <div class="card-number">89</div>
                    <div class="card-label">Unit</div>
                </div>

                <div class="card">
                    <div class="card-number">102</div>
                    <div class="card-label">Unit</div>
                </div>

                <div class="card">
                    <div class="card-number">+102</div>
                    <div class="card-label">Unit</div>
                </div>
            </div>

            <div style={{ color: "black", marginLeft: "35rem" }}>
                <h2 ref={triggerRef}>Sample Numbers</h2>
                <h1 style={{marginTop:-18}} ref={triggerRef}>Row No-2</h1>
            </div>
            <div className={`card-row ${animate ? "scroll-left-right" : ""}`}>
                <div class="card">
                    <div class="card-number">49</div>
                    <div class="card-label">Unit</div>
                </div>

                <div class="card">
                    <div class="card-number">59</div>
                    <div class="card-label">Unit</div>
                </div>

                <div class="card">
                    <div class="card-number">71</div>
                    <div class="card-label">Unit</div>
                </div>

                <div class="card">
                    <div class="card-number">81</div>
                    <div class="card-label">Unit</div>
                </div>

                <div class="card">
                    <div class="card-number">+81</div>
                    <div class="card-label">Unit</div>
                </div>
            </div>
        </div>
    );
}