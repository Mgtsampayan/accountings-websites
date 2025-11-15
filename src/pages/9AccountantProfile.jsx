import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/content';

function AccountantProfile() {
    const [isMobile, setIsMobile] = useState(false);
    const { backgroundVideo, image, position, company, quote, heading, description } = profileData;

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerVariants = useMemo(() => ({
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } }
    }), []);

    const itemVariants = useMemo(() => ({
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }), []);

    return (
        <div className="relative min-h-screen flex items-center overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
            >
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <motion.div
                className="relative z-10 p-4 sm:p-6 lg:p-8 w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-7xl mx-auto w-full">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Profile Image and Info */}
                        <motion.div 
                            className="lg:w-1/3 xl:w-1/4 space-y-8 flex-shrink-0" 
                            variants={itemVariants}
                        >
                            <div className="rounded-3xl overflow-hidden border-4 border-custom-green max-w-sm mx-auto lg:max-w-full transition-all duration-300 ease-in-out hover:shadow-xl shadow-lg">
                                <motion.img
                                    src={image}
                                    alt="Profile picture"
                                    width="300"
                                    height="400"
                                    className="object-cover w-full h-auto"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.div
                                    className="text-custom-green p-6 rounded-xl max-w-sm mx-auto lg:max-w-full shadow-xl"
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="sm:text-xl text-center font-medium mb-3">
                                        <b>{position}</b>
                                    </h2>
                                    <p className="text-base text-center sm:text-xl font-extrabold">
                                        {company}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Quote and Description */}
                        <div className="lg:w-2/3 xl:w-3/4 flex flex-col justify-evenly">
                            <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
                                {/* Quote */}
                                <motion.div 
                                    className="quote-container space-y-4 mb-20" 
                                    variants={itemVariants}
                                >
                                    <blockquote 
                                        className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${
                                            isMobile ? 'text-center' : 'text-end'
                                        } text-custom-green italic`}
                                    >
                                        &ldquo;{quote.text}&rdquo;
                                    </blockquote>
                                    <div className={isMobile ? 'text-center' : 'text-end'}>
                                        <blockquote className="font-bold text-custom-green text-lg sm:text-xl inline-block">
                                            - {quote.author}
                                        </blockquote>
                                    </div>
                                </motion.div>

                                {/* Heading */}
                                <motion.div 
                                    className="heading-container" 
                                    variants={itemVariants}
                                >
                                    <h1 
                                        className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${
                                            isMobile ? 'text-center' : 'text-end'
                                        } text-custom-green italic`}
                                    >
                                        {heading}
                                    </h1>
                                </motion.div>
                            </div>

                            {/* Description */}
                            <motion.div 
                                className="description-container" 
                                variants={itemVariants}
                            >
                                <p className="text-custom-green font-semibold text-start lg:text-start lg:text-2xl text-lg sm:text-lg leading-relaxed">
                                    {description}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default AccountantProfile;