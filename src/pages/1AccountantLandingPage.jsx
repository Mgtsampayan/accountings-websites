import React, { useState, useRef, useEffect, useCallback, memo } from "react";
import { Home, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../images/bg_2.png";
import Lp from "../images/1.mp4";
import bg1 from "../images/bg_1.mp4";

function useIsMobile({ breakpoint = 1024 } = {}) {
    const isClient = typeof window !== "undefined";

    // Initialize synchronously (NOT inside effect)
    const [isMobile, setIsMobile] = useState(() =>
        isClient ? window.innerWidth < breakpoint : false
    );

    useEffect(() => {
        if (!isClient) return;

        // Prefer matchMedia for efficiency
        const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

        const handleChange = (e) => {
            setIsMobile(e.matches);
        };

        // Subscribe ONLY — no setState during the effect body
        mq.addEventListener("change", handleChange);

        return () => mq.removeEventListener("change", handleChange);
    }, [breakpoint, isClient]);

    return isMobile;
}

/* ---------- small memoized components ---------- */
const NavItem = memo(({ children }) => (
    <motion.li
        className="cursor-pointer text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
        whileHover={{ scale: 1.05, color: "#ffffff" }}
        transition={{ duration: 0.2 }}
    >
        {children}
    </motion.li>
));

const Navigation = memo(({ isMobile, isOpen, toggleNav }) => {
    const navVariants = { hidden: { x: "-100%" }, visible: { x: 0 } };
    const navItemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
    const navItems = [
        { text: "ABOUT US", path: "/about-us" },
        { text: "OUR SERVICES", path: "/our-services" },
        { text: "CONTACT US", path: "/contact-us" },
    ];

    if (isMobile) {
        return (
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        className="fixed top-0 left-0 h-full w-1/2 bg-black z-50 shadow-4xl"
                        variants={navVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <motion.button
                            onClick={toggleNav}
                            className="absolute top-4 right-4 text-white"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X className="w-7 h-7 sm:w-9 sm:h-9" />
                        </motion.button>
                        <div className="flex flex-col items-center justify-center h-full space-y-7 sm:space-y-9">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <Home className="w-9 h-9 sm:w-12 sm:h-12 cursor-pointer text-white" />
                            </motion.div>
                            <motion.ul
                                className="flex flex-col space-y-5 sm:space-y-7 text-lg sm:text-xl md:text-2xl font-semibold"
                                variants={navItemVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                            >
                                {navItems.map((item) => (
                                    <NavItem key={item.text}>
                                        <Link to={item.path} onClick={toggleNav}>
                                            {item.text}
                                        </Link>
                                    </NavItem>
                                ))}
                            </motion.ul>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        );
    }

    return (
        <nav className="hidden lg:flex items-start justify-start w-full p-5 lg:p-7 xl:p-9">
            <div className="flex items-center space-x-24 lg:space-x-32 xl:space-x-40">
                <motion.a href="/" aria-label="Home" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Home className="w-14 h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 cursor-pointer text-white" />
                </motion.a>
                <ul className="flex space-x-10 lg:space-x-24 xl:space-x-28 text-xl lg:text-2xl xl:text-3xl font-bold">
                    {navItems.map((item) => (
                        <NavItem key={item.text}>
                            <Link to={item.path}>{item.text}</Link>
                        </NavItem>
                    ))}
                </ul>
            </div>
        </nav>
    );
});

/* ---------- sections unchanged (kept small) ---------- */
const HeroSection = () => {
    const navigate = useNavigate();
    const handleLearnMore = () => navigate("/about-us");

    return (
        <motion.div
            className="text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8 xl:space-y-10 max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h1
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight mb-4 sm:mb-6 lg:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                SAVE TIME, EFFORT & MONEY WITH OUR DEDICATED GLOBAL ACCOUNTANTS
            </motion.h1>
            <motion.button
                onClick={handleLearnMore}
                aria-label="Learn more about our services"
                className="relative px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-sm sm:text-base lg:text-lg xl:text-xl font-bold uppercase rounded-xl overflow-hidden bg-linear-to-r from-red-500 via-red-600 to-red-700 shadow-lg border-2 border-transparent hover:border-red-400 outline-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <span className="absolute inset-0 from-red-500 to-red-700 opacity-15 animate-pulse"></span>
                <span className="relative z-10 text-white">LEARN MORE</span>
            </motion.button>
        </motion.div>
    );
};

const VideoSection = ({ videoRef }) => (
    <motion.div
        className="flex justify-center lg:justify-center mt-8 lg:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
    >
        <div className="relative rounded-full overflow-hidden border-4 sm:border-6 lg:border-8 border-white w-44 h-44 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-md lg:h-112 xl:w-lg xl:h-128 shadow-2xl">
            <video ref={videoRef} src={Lp} className="w-full h-full object-cover" loop muted playsInline autoPlay />
        </div>
    </motion.div>
);

/* ---------- main page ---------- */
const AccountantLandingPage = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const videoRef = useRef(null);
    const isMobile = useIsMobile({ breakpoint: 1024 });

    const toggleNav = useCallback(() => setIsNavOpen((p) => !p), []);

    return (
        <div className="relative min-h-screen text-white font-roboto">
            <motion.div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />
            <motion.div
                className="absolute inset-0 z-10 flex justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <video src={bg1} className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline />
            </motion.div>

            <motion.div className="relative z-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }}>
                <header className="p-4 sm:p-6 lg:p-8 xl:p-10 flex justify-between items-center">
                    {isMobile && (
                        <motion.button onClick={toggleNav} className="text-white z-50" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Menu className="w-8 h-8 sm:w-10 sm:h-10" />
                        </motion.button>
                    )}
                    <Navigation isMobile={isMobile} isOpen={isNavOpen} toggleNav={toggleNav} />
                </header>

                <main className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-6 sm:py-8 lg:py-12 xl:py-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                    <HeroSection />
                    <VideoSection videoRef={videoRef} />
                </main>
            </motion.div>
        </div>
    );
};

export default AccountantLandingPage;
