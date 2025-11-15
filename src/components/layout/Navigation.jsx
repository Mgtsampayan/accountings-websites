import { Home, Menu, X } from "lucide-react";
// import PropTypes from "prop-types";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({ children, onClick }) => (
    <motion.li
        className="cursor-pointer text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
        whileHover={{ scale: 1.05, color: "#ffffff" }}
        transition={{ duration: 0.2 }}
        onClick={onClick}
    >
        {children}
    </motion.li>
);

// NavItem.propTypes = {
//     children: PropTypes.node.isRequired,
//     onClick: PropTypes.func
// };

const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();

    const checkIfMobile = useCallback(() => {
        setIsMobile(window.innerWidth < 1024);
    }, []);

    useEffect(() => {
        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);
        return () => window.removeEventListener("resize", checkIfMobile);
    }, [checkIfMobile]);

    const toggleNav = useCallback(() => setIsNavOpen((prev) => !prev), []);

    const navItems = [
        { text: 'ABOUT US', path: '/about-us' },
        { text: 'OUR SERVICES', path: '/services' },
        { text: 'CONTACT US', path: '/contact' },
    ];

    const navVariants = {
        hidden: { x: "-100%" },
        visible: { x: 0 },
    };

    const navItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    // Hide navigation on homepage hero
    if (location.pathname === '/') {
        return null;
    }

    if (isMobile) {
        return (
            <>
                <header className="fixed top-0 left-0 z-40 p-4 sm:p-6">
                    <motion.button
                        onClick={toggleNav}
                        className="text-white z-50"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Menu className="w-8 h-8 sm:w-10 sm:h-10" />
                    </motion.button>
                </header>
                <AnimatePresence>
                    {isNavOpen && (
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
                                    <Link to="/" onClick={toggleNav}>
                                        <Home className="w-9 h-9 sm:w-12 sm:h-12 cursor-pointer text-white" />
                                    </Link>
                                </motion.div>
                                <motion.ul
                                    className="flex flex-col space-y-5 sm:space-y-7 text-lg sm:text-xl md:text-2xl font-semibold"
                                    variants={navItemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                                >
                                    {navItems.map((item) => (
                                        <NavItem key={item.text} onClick={toggleNav}>
                                            <Link to={item.path}>{item.text}</Link>
                                        </NavItem>
                                    ))}
                                </motion.ul>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </>
        );
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="flex items-center justify-start w-full p-5 lg:p-7 xl:p-9">
                <div className="flex items-center space-x-24 lg:space-x-32 xl:space-x-40">
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Link to="/" aria-label="Home">
                            <Home className="w-14 h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 cursor-pointer text-white" />
                        </Link>
                    </motion.div>
                    <ul className="flex space-x-10 lg:space-x-24 xl:space-x-28 text-xl lg:text-2xl xl:text-3xl font-bold">
                        {navItems.map((item) => (
                            <NavItem key={item.text}>
                                <Link to={item.path}>{item.text}</Link>
                            </NavItem>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;