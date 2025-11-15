import React from 'react';
import { CheckCircle } from 'lucide-react';
// import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pricingData } from '../data/content';

const ListItem = React.memo(({ children }) => (
    <motion.li
        className="flex items-center space-x-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ x: 5 }}
    >
        <CheckCircle className="text-black w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 flex-shrink-0" />
        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black">{children}</span>
    </motion.li>
));

ListItem.displayName = 'ListItem';

// ListItem.propTypes = {
//     children: PropTypes.node.isRequired,
// };

function OurBestDeal() {
    const { 
        backgroundVideo, 
        title, 
        image, 
        serviceImage, 
        services, 
        price, 
        priceDescription, 
        ctaText, 
        ctaLink 
    } = pricingData;

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            <AnimatePresence>
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative z-10 w-full max-w-full xl:max-w-[1920px] grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-20 items-center">
                        {/* Left side - Image */}
                        <motion.div
                            className="flex flex-col items-center md:items-end"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <h2 className="text-center md:text-end text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-custom-green mb-4 sm:mb-6 md:mb-8">
                                {title}
                            </h2>
                            <motion.img
                                src={image}
                                alt="Accounting services illustration"
                                className="rounded-lg w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                loading="lazy"
                            />
                        </motion.div>
                        
                        {/* Right side - Services and Pricing */}
                        <motion.div
                            className="flex flex-col items-center md:items-start"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                        >
                            <div className="">
                                <img 
                                    src={serviceImage} 
                                    alt="Professional Accounting Services" 
                                    className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
                                />
                            </div>
                            
                            <ul className="w-full space-y-4 sm:space-y-6 md:space-y-8 mb-4 sm:mb-6 md:mb-8">
                                {services.map((service, index) => (
                                    <ListItem key={index}>
                                        <span className="font-bold">{service}</span>
                                    </ListItem>
                                ))}
                            </ul>
                            
                            <motion.div
                                className="text-red-600 p-3 sm:p-4 md:p-5 mb-4 sm:mb-6 md:mb-8 w-full max-w-sm md:max-w-md lg:max-w-lg"
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                            >
                                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                                    {price}
                                </span>
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-2">
                                    {priceDescription}
                                </p>
                            </motion.div>
                            
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link 
                                    to={ctaLink}
                                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-custom-green hover:bg-green-800 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl py-3 px-6 rounded-full transition-transform duration-100 font-bold shadow-lg text-center block"
                                >
                                    {ctaText}
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default OurBestDeal;