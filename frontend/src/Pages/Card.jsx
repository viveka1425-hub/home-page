import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Pages/Card.css";

gsap.registerPlugin(ScrollTrigger);

export default function CardScrollSection() {

    const sectionRef = useRef(null);
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);

    useLayoutEffect(() => {

        const ctx = gsap.context(() => {

            // Pin section
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "+=1200",
                pin: true,
                scrub: 1,
            });

            // Row 1 → moves left
            gsap.fromTo(
                row1Ref.current,
                { x: "55%" },
                {
                    x: "-75%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "+=1200",
                        scrub: 1,
                    },
                }
            );

            // Row 2 → moves right
            gsap.fromTo(
                row2Ref.current,
                { x: "-75%" },
                {
                    x: "55%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "+=1200",
                        scrub: 1,
                    },
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="card-scroll-section">
            <div className="title-block">
                <h2>Sample Numbers</h2>
                <h1>Row No - 1</h1>
            </div>

            {/* Row 1 */}
            <div ref={row1Ref} className="card-row">
                {["61", "73", "89", "102", "+102"].map((num, i) => (
                    <div className="card-item" key={i}>
                        <div className="card-number">{num}</div>
                        <div className="card-label">Unit</div>
                    </div>
                ))}
            </div>

            {/* Row 2 */}
            <div className="title-block">
                <h2>Sample Numbers</h2>
                <h1>Row No - 2</h1>
            </div>

            <div ref={row2Ref} className="card-row reverse">
                {["49", "59", "71", "81", "+81"].map((num, i) => (
                    <div className="card-item" key={i}>
                        <div className="card-number">{num}</div>
                        <div className="card-label">Unit</div>
                    </div>
                ))}
            </div>

        </section>
    );
}
