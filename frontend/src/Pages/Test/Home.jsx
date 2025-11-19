import React, { useState, useEffect, useRef } from 'react';

// --- Icon Components (to avoid external dependencies) ---
// In a real app, you'd `npm install lucide-react` and import them.
// For this file, let's define simplified SVG versions.

const SimpleCheck = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-500">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

const SimpleShield = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 text-white">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

const SimpleChat = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

const SimpleArrowRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

const SimpleSparkle = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400 w-8 h-8 absolute -top-4 -left-4">
        <path d="M12 3a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6Z" />
        <path d="M12 15a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6Z" />
    </svg>
);

const SimpleCircle = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-500">
        <circle cx="12" cy="12" r="10" />
    </svg>
);

// --- Custom Hook for Scroll Animation ---

const useScrollAnimation = () => {
    const ref = useRef(null);

    useEffect(() => {
        // Check if IntersectionObserver is available
        if (typeof IntersectionObserver === 'undefined' || !ref.current) {
            // Fallback for older browsers or environments
            if (ref.current) {
                ref.current.classList.add('is-visible');
            }
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Animate only once
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1 // Triggers when 10% of the element is visible
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref]);

    return ref;
};


// --- Section Components ---

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-orange-600/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-white font-bold text-xl">Brington</span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#" className="text-white hover:bg-orange-700 px-3 py-2 rounded-md text-sm font-medium">
                                Home
                            </a>
                            {/* Add more links as needed */}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white inline-flex items-center justify-center p-2 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger icon */}
                            <svg className={`block h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Close icon */}
                            <svg className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on state */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#" className="text-white hover:bg-orange-700 block px-3 py-2 rounded-md text-base font-medium">
                        Home
                    </a>
                    {/* Add more links as needed */}
                </div>
            </div>
        </nav>
    );
};

const Hero = () => {
    return (
        <section
            className="relative min-h-screen flex items-center text-white bg-cover bg-center"
            style={{ backgroundImage: "url('https://placehold.co/1920x1080/2d3748/ffffff?text=Hero+Background')" }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 max-w-3xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                    I am a Sample Website
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                    I'm a Sample Website, Create me as same as I am, Don't Do any Mistakes.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                    Get Started
                </button>
            </div>
        </section>
    );
};

const SampleNumbers = () => {
    const animRef = useScrollAnimation();
    const row1Numbers = [
        { num: '73', unit: 'Unit' },
        { num: '89', unit: 'Unit' },
        { num: '102', unit: 'Unit' },
        { num: '+102', unit: 'Unit' },
    ];

    const row2Numbers = [
        { num: '59', unit: 'Unit' },
        { num: '71', unit: 'Unit' },
        { num: '81', unit: 'Unit' },
        { num: '+81', unit: 'Unit' },
    ];

    return (
        <section ref={animRef} className="py-20 bg-gray-50 overflow-x-hidden scroll-animate">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-16">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Sample Numbers</p>
                    <h2 className="text-3xl font-bold text-gray-900 mt-2">Row No. 1</h2>
                    <div className="mt-8 flex space-x-4 sm:space-x-6 overflow-x-auto pb-4">
                        {row1Numbers.map((item, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-60 sm:w-64 p-8 bg-gradient-to-r from-pink-300 to-red-300 rounded-3xl shadow-lg stagger-item"
                            >
                                <span className="text-5xl sm:text-6xl font-extrabold text-gray-900">{item.num}</span>
                                <span className="text-xl sm:text-2xl font-medium text-gray-800 ml-2">{item.unit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Sample Numbers</p>
                    <h2 className="text-3xl font-bold text-gray-900 mt-2">Row No. 2</h2>
                    <div className="mt-8 flex space-x-4 sm:space-x-6 overflow-x-auto pb-4">
                        {row2Numbers.map((item, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-60 sm:w-64 p-8 bg-white border-2 border-gray-900 rounded-3xl shadow-lg stagger-item"
                                style={{ transitionDelay: `${(index + row1Numbers.length) * 0.1}s` }} // Continue stagger
                            >
                                <span className="text-5xl sm:text-6xl font-extrabold text-gray-900">{item.num}</span>
                                <span className="text-xl sm:text-2xl font-medium text-gray-800 ml-2">{item.unit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const SampleData = () => {
    const animRef = useScrollAnimation();
    const data = [
        { num: '1,034', text: 'Sample Data about Sample Things' },
        { num: '2', text: 'Sample Data about Sample Things' },
        { num: '54', text: 'Sample Data about Sample Things' },
        { num: '25', text: 'Sample Data about Sample Things' },
    ];

    return (
        <section ref={animRef} className="relative py-24 bg-gradient-to-b from-teal-50 to-teal-100 overflow-hidden scroll-animate">
            {/* Decorative dashed line - simple version */}
            <div className="absolute top-0 left-0 w-1/2 h-full -translate-x-1/4 opacity-50">
                <svg width="100%" height="100%" viewBox="0 0 400 400" preserveAspectRatio="none">
                    <path d="M 0,400 C 100,300 300,100 400,0" strokeDasharray="5, 5" stroke="#a0aec0" fill="none" strokeWidth="1" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center space-y-24">
                    {data.map((item, index) => (
                        <div key={index} className="relative text-center z-10 stagger-item">
                            {index % 2 === 0 && <SimpleSparkle />}
                            <h2 className="text-7xl sm:text-8xl md:text-9xl font-serif text-gray-800">{item.num}</h2>
                            <p className="text-base sm:text-lg text-gray-600 mt-4 border-b border-gray-400 pb-2 inline-block">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Services = () => {
    const animRef = useScrollAnimation();
    const servicesList = [
        'Sample Text 1', 'Sample Text', 'Sample Text',
        'Sample Text', 'Sample Text', 'Sample Text'
    ];

    return (
        <section ref={animRef} className="py-24 bg-gradient-to-br from-blue-700 via-purple-800 to-indigo-900 text-white scroll-animate">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                    Accomplish Anything in Developing
                </h2>
                <p className="text-lg max-w-3xl mx-auto text-blue-100 mb-12">
                    This is the space to introduce the Services section. Briefly describe the types of services offered and highlight any special benefits or features.
                </p>

                <div className="relative flex justify-center items-center mb-12">
                    {/* Decorative circuit pattern - simplified */}
                    <div className="absolute w-72 h-72 border-2 border-blue-400/30 rounded-full animate-pulse"></div>
                    <div className="absolute w-96 h-96 border border-blue-400/20 rounded-full animate-pulse-slow"></div>

                    <div className="relative z-10 bg-blue-500/30 p-6 rounded-full backdrop-blur-sm">
                        <SimpleShield />
                    </div>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {servicesList.map((service, index) => (
                        <div key={index} className="flex items-center space-x-3 text-lg stagger-item">
                            <SimpleCheck />
                            <span className="border-b border-blue-400/50 pb-2 flex-1 text-left">{service}</span>
                        </div>
                    ))}
                </div>

                <button className="mt-16 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
                    Create Now!
                </button>
            </div>
        </section>
    );
};

const Hurdles = () => {
    const animRef = useScrollAnimation();
    return (
        <>
            {/* Marquee Section */}
            <div className="bg-white py-4 overflow-hidden marquee-container">
                <div className="animate-marquee flex-shrink-0">
                    <span className="text-3xl sm:text-4xl font-bold text-green-500 mx-8 flex items-center">
                        <SimpleCircle /> <span className="ml-3">HURDLES</span>
                    </span>
                    <span className="text-3xl sm:text-4xl font-bold text-green-500 mx-8 flex items-center">
                        <SimpleCircle /> <span className="ml-3">HURDLES</span>
                    </span>
                    <span className="text-3xl sm:text-4xl font-bold text-green-500 mx-8 flex items-center">
                        <SimpleCircle /> <span className="ml-3">HURDLES</span>
                    </span>
                    <span className="text-3xl sm:text-4xl font-bold text-green-500 mx-8 flex items-center">
                        <SimpleCircle /> <span className="ml-3">HURDLES</span>
                    </span>
                    {/* Duplicate for seamless loop */}
                    <span className="text-3xl sm:text-4xl font-bold text-green-500 mx-8 flex items-center">
                        <SimpleCircle /> <span className="ml-3">HURDLES</span>
                    </span>
                    <span className="text-3xl sm:text-4xl font-bold text-green-500 mx-8 flex items-center">
                        <SimpleCircle /> <span className="ml-3">HURDLES</span>
                    </span>
                    <span className="text-3xl sm:text-4xl font-bold text-green-500 mx-8 flex items-center">
                        <SimpleCircle /> <span className="ml-3">HURDLES</span>
                    </span>
                    <span className="text-3xl sm:text-4xl font-bold text-green-500 mx-8 flex items-center">
                        <SimpleCircle /> <span className="ml-3">HURDLES</span>
                    </span>
                </div>
            </div>

            {/* Main Hurdles Section */}
            <section ref={animRef} className="py-24 bg-gradient-to-b from-green-400 to-green-500 scroll-animate">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-800">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">ABOUT THE RACE</h2>
                    <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-12">
                        This is a race of yourself to yourself. Fight the race! Develope the website. Complete the task. As a developer, it's Not That hard.
                    </p>
                    <img
                        src="https://placehold.co/1200x600/FFFFFF/333333?text=Hurdles+Image"
                        alt="Hurdles"
                        className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
                    />
                </div>
            </section>
        </>
    );
};

const Project = () => {
    const animRef = useScrollAnimation();
    return (
        <section ref={animRef} className="py-24 bg-teal-800 text-white scroll-animate">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Project Name</h2>
                    <p className="text-xl sm:text-2xl text-teal-200">Client Name</p>
                </div>
                <div className="stagger-item">
                    <img
                        src="https://placehold.co/800x600/4A5568/FFFFFF?text=3D+Abstract+Graphic"
                        alt="Project Graphic"
                        className="w-full rounded-lg shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
};

const AZProject = () => {
    const animRef = useScrollAnimation();
    const [activeLetter, setActiveLetter] = useState('A');
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

    const gradients = {
        A: 'from-pink-300 to-purple-400',
        B: 'from-blue-300 to-indigo-400',
        C: 'from-green-300 to-teal-400',
        D: 'from-yellow-300 to-orange-400',
        E: 'from-red-300 to-pink-400',
        F: 'from-indigo-300 to-purple-400',
    };

    return (
        <section ref={animRef} className="grid grid-cols-1 lg:grid-cols-2 min-h-screen scroll-animate">
            {/* Left Side (Letter Display) */}
            <div className={`relative flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br ${gradients[activeLetter]} text-black transition-all duration-500`}>
                <div className="flex justify-between items-center text-sm font-medium">
                    <span>DESIGNWRAP</span>
                    <span className="font-serif text-xl sm:text-2xl border border-black rounded-full px-3 sm:px-4 py-1">the letter</span>
                    <span>DESIGNWRAP</span>
                </div>

                <div className="flex-grow flex items-center justify-center overflow-hidden">
                    <span className="font-serif text-9xl sm:text-[15rem] lg:text-[20rem] transition-all duration-300 ease-in-out" key={activeLetter}>
                        {activeLetter}
                    </span>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-end gap-4">
                    <div>
                        <p className="text-sm">2035</p>
                        <p className="text-sm">NYC</p>
                    </div>
                    <div className="text-xs max-w-xs text-gray-800 space-y-2">
                        <p>Your Design With 3D Motion Lettering Combines The Art Of Type... Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Each Letter Becomes A Sculptural Masterpiece... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
                    </div>
                </div>
            </div>

            {/* Right Side (Grid) */}
            <div className="bg-black text-white p-6 sm:p-8 flex flex-col justify-center">
                <div className="grid grid-cols-3 grid-rows-2 gap-px bg-gray-800 border border-gray-800">
                    {letters.map((letter) => (
                        <button
                            key={letter}
                            onClick={() => setActiveLetter(letter)}
                            className={`h-32 sm:h-48 flex items-center justify-center text-5xl sm:text-7xl font-bold transition-colors ${activeLetter === letter
                                    ? 'bg-white text-black'
                                    : 'bg-black text-white hover:bg-gray-900'
                                }`}
                        >
                            {letter}
                        </button>
                    ))}
                </div>
                <div className="mt-12">
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4">A-Z PROJECT</h3>
                    <p className="text-base sm:text-lg text-gray-300 max-w-md">
                        It's over to you. Download our library of transparent video letters and add them to your next project.
                    </p>
                </div>
            </div>
        </section>
    );
};

const Speakers = () => {
    const animRef = useScrollAnimation();
    const speakerList = [
        { name: 'Harry Williams', title: 'Director of Mobile Gaming, Fixer', img: 'https://placehold.co/100x100/E2E8F0/333333?text=HW' },
        { name: 'Akira Lee', title: 'Director of Mobile Gaming, Fixer', img: 'https://placehold.co/100x100/E2E8F0/333333?text=AL' },
        { name: 'Veronika Zakharova', title: 'Director of Mobile Gaming, Fixer', img: 'https://placehold.co/100x100/E2E8F0/333333?text=VZ' },
        { name: 'Ann Jacobs', title: 'Director of Mobile Gaming, Fixer', img: 'https://placehold.co/100x100/E2E8F0/333333?text=AJ' },
        { name: 'Lissa Cross', title: 'Director of Mobile Gaming, Fixer', img: 'https://placehold.co/100x100/E2E8F0/333333?text=LC' },
        { name: 'Murty Yang', title: 'Director of Mobile Gaming, Fixer', img: 'https://placehold.co/100x100/E2E8F0/333333?text=MY' },
        { name: 'Sheldon Smith', title: 'Director of Mobile Gaming, Fixer', img: 'https://placehold.co/100x100/E2E8F0/333333?text=SS' },
        { name: 'Jason Guhl', title: 'Director of Mobile Gaming, Fixer', img: 'https://placehold.co/100x100/E2E8F0/333333?text=JG' },
    ];

    return (
        <section ref={animRef} className="py-24 bg-white scroll-animate">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-6xl font-bold text-center text-gray-900 mb-16">Speakers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    {speakerList.map((speaker) => (
                        <div key={speaker.name} className="flex items-center space-x-4 sm:space-x-6 stagger-item">
                            <img src={speaker.img} alt={speaker.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-full" />
                            <div className="flex-1 border-b border-gray-200 pb-4">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{speaker.name}</h3>
                                <p className="text-sm sm:text-md text-gray-600">{speaker.title}</p>
                            </div>
                            <button className="flex-shrink-0 text-blue-600 font-medium border border-blue-600 rounded-full px-4 py-1 text-sm hover:bg-blue-50 transition-colors">
                                LinkedIn
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-black text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-center mb-20">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-xl text-center lg:text-left mb-8 lg:mb-0">
                        Be the First to Receive the Latest News
                    </h2>
                    <button className="flex-shrink-0 border border-white rounded-full px-6 py-3 text-lg font-medium hover:bg-white hover:text-black transition-colors flex items-center space-x-2">
                        <span>Sign Up</span>
                        <SimpleArrowRight />
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Brington</h3>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-400 mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-300">Home</a></li>
                            <li><a href="#" className="hover:text-gray-300">About</a></li>
                            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-400 mb-4">Social</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
                            <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
                            <li><a href="#" className="hover:text-gray-300">Youtube</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-400 mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li><a href="mailto:info@mysite.com" className="hover:text-gray-300">info@mysite.com</a></li>
                            <li><a href="tel:1234567890" className="hover:text-gray-300">Tel: 123-456-7890</a></li>
                            <li>India</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between text-sm text-gray-500">
                    <p className="mb-2 md:mb-0">© 2035 by Brington Inc</p>
                    <p>Built with love and caffeine</p>
                </div>
            </div>
        </footer>
    );
};

const ChatWidget = () => {
    return (
        <div className="fixed bottom-5 right-5 z-50">
            <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110">
                <SimpleChat />
            </button>
        </div>
    );
};


// --- Main App Component ---

export default function App() {
    return (
        <div className="font-inter antialiased text-gray-900">
            {/* This style tag adds the global animations. 
        In a real app, this would be in your index.css file.
      */}
            <style>{`
        body {
          font-family: 'Inter', sans-serif;
        }
        
        /* Keyframes for hero animations */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s cubic-bezier(0.6, 0.2, 0.4, 1) forwards;
        }

        /* Global scroll animation classes */
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s cubic-bezier(0.6, 0.2, 0.4, 1), transform 0.6s cubic-bezier(0.6, 0.2, 0.4, 1);
        }

        .scroll-animate.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Staggered list item animations */
        .scroll-animate.is-visible .stagger-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .scroll-animate.is-visible .stagger-item:nth-child(1) { transition-delay: 0.1s; }
        .scroll-animate.is-visible .stagger-item:nth-child(2) { transition-delay: 0.2s; }
        .scroll-animate.is-visible .stagger-item:nth-child(3) { transition-delay: 0.3s; }
        .scroll-animate.is-visible .stagger-item:nth-child(4) { transition-delay: 0.4s; }
        .scroll-animate.is-visible .stagger-item:nth-child(5) { transition-delay: 0.5s; }
        .scroll-animate.is-visible .stagger-item:nth-child(6) { transition-delay: 0.6s; }
        .scroll-animate.is-visible .stagger-item:nth-child(7) { transition-delay: 0.7s; }
        .scroll-animate.is-visible .stagger-item:nth-child(8) { transition-delay: 0.8s; }
        
        .scroll-animate.is-visible .stagger-item {
          opacity: 1;
          transform: translateY(0);
        }

        /* Marquee animation */
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%; /* Needs to be wide enough for two copies */
          animation: marquee 20s linear infinite;
        }
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

            <Navbar />
            <main>
                <Hero />
                <SampleNumbers />
                <SampleData />
                <Services />
                <Hurdles />
                <Project />
                <AZProject />
                <Speakers />
            </main>
            <Footer />
            <ChatWidget />
        </div>
    );
}