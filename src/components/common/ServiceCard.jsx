import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
// import PropTypes from 'prop-types';

function VideoPlayer({ videoUrl }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error =>
                console.error("Error playing video:", error)
            );
        }
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden">
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src={videoUrl}
                loop
                muted
                playsInline
                autoPlay
            />
        </div>
    );
}

// VideoPlayer.propTypes = {
//     videoUrl: PropTypes.string.isRequired,
// };

export default function ServiceCard({ videoUrl, title, description }) {
    return (
        <motion.article
            className="flex flex-col bg-white shadow-lg overflow-hidden relative z-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
        >
            <figure className="relative h-48 sm:h-60 md:h-72 lg:h-80 xl:h-96 z-30">
                <VideoPlayer
                    videoUrl={videoUrl}
                    aria-label={`Video demonstration for ${title}`}
                />
            </figure>

            <div className="p-4 sm:p-6 md:p-8 text-center">
                <motion.h3
                    className="text-balance text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-custom-green uppercase mb-2 sm:mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {title}
                </motion.h3>

                <motion.p
                    className="text-black text-start text-sm sm:text-base md:text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    {description}
                </motion.p>
            </div>
        </motion.article>
    );
}

// ServiceCard.propTypes = {
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     videoUrl: PropTypes.string.isRequired,
// };