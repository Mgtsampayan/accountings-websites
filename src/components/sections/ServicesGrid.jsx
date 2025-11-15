import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
// import PropTypes from "prop-types";
import ServiceCard from '../common/ServiceCard';
import VideoBackground from '../common/VideoBackground';
import BackgroundVideo from '../../images/bg_1.mp4';
import BackgroundImage from '../../images/bg_2.png';

function ServicesGrid({ services, title, showTitle = true }) {
    const [showVideo, setShowVideo] = useState(true);
    const memoizedServices = useMemo(() => services, [services]);

    useEffect(() => {
        const handleResize = () => {
            setShowVideo(window.innerWidth >= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <main className="relative min-h-screen overflow-hidden bg-custom-green">
            <VideoBackground 
                videoSrc={BackgroundVideo}
                posterSrc={BackgroundImage}
                showVideo={showVideo}
            />
            
            <div className="relative z-20 p-4 sm:p-6 md:p-10 lg:p-16 xl:p-20">
                {showTitle && title && (
                    <motion.h1
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white"
                        style={{ textShadow: '4px 4px 4px rgba(5,5,5,5.5)' }}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {title}
                    </motion.h1>
                )}
                
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 max-w-7xl mx-auto" 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    {memoizedServices.map((service) => (
                        <ServiceCard key={service.id} {...service} />
                    ))}
                </motion.div>
            </div>
        </main>
    );
}

// ServicesGrid.propTypes = {
//     services: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             title: PropTypes.string.isRequired,
//             description: PropTypes.string.isRequired,
//             videoUrl: PropTypes.string.isRequired,
//         })
//     ).isRequired,
//     title: PropTypes.string,
//     showTitle: PropTypes.bool,
// };

export default ServicesGrid;