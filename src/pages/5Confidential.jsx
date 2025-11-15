import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../images/bg_4.png';
import teleconnectLogo from '../images/teleconnect.png';

const Confidential = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative w-full h-screen bg-white overflow-hidden">
            <img 
                src={backgroundImage} 
                alt="Background" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            <motion.div 
                className="absolute inset-0 flex flex-col justify-center items-start px-8 sm:px-16 md:px-28 lg:px-36 pl-12 sm:pl-20 md:pl-32 lg:pl-52"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1 
                    className="text-custom-green font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-2xl mb-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    CONFIDENTIAL DATA AND INFORMATION ARE SECURED
                </motion.h1>
                <motion.div 
                    className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <img src={teleconnectLogo} alt="Teleconnect Logo" className="w-full h-auto" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Confidential;