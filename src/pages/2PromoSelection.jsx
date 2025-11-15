import { useRef, useEffect, memo } from "react";
// import PropTypes from 'prop-types';
import { promoData } from '../data/content';

const VideoPlayer = memo(({ videoSrc, autoPlay }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (autoPlay && videoRef.current) {
            videoRef.current.play().catch(error => 
                console.log("Auto-play was prevented:", error)
            );
        }
    }, [autoPlay]);

    return (
        <div className="relative w-full max-w-md mx-auto overflow-hidden shadow-xl mb-4 sm:mb-6 group">
            <div className="aspect-w-16 aspect-h-9">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={videoSrc}
                    controlsList="nodownload"
                    onContextMenu={(e) => e.preventDefault()}
                    playsInline
                    muted
                    loop
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
});

VideoPlayer.displayName = 'VideoPlayer';

// VideoPlayer.propTypes = {
//     videoSrc: PropTypes.string.isRequired,
//     autoPlay: PropTypes.bool,
// };

const TextContent = memo(({ heading }) => {
    return (
        <div className="bg-opacity-80 p-4 sm:p-6 md:p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-custom-green leading-tight text-start">
                {heading}
            </h2>
        </div>
    );
});

TextContent.displayName = 'TextContent';

// TextContent.propTypes = {
//     heading: PropTypes.string.isRequired,
// };

const PromotionSelection = () => {
    const { backgroundImage, heading, videos } = promoData;

    return (
        <div
            className="w-full p-4 sm:p-6 md:p-12 flex items-end justify-end bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="w-full h-full absolute top-0 left-0"></div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-32 relative z-10">
                {/* Videos Section */}
                <div className="w-full md:w-1/2 flex flex-col gap-6 sm:gap-8 md:gap-12 order-2 md:order-1">
                    {videos.map((video, index) => (
                        <div 
                            key={index} 
                            className={`flex justify-center ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
                        >
                            <div className="w-full sm:w-11/12 md:w-4/5">
                                <VideoPlayer 
                                    videoSrc={video.src} 
                                    autoPlay={video.autoPlay} 
                                />
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-end mt-8 sm:mt-12 md:mt-0 order-1 md:order-2 gap-6 sm:gap-8 md:gap-10">
                    <TextContent heading={heading} />
                </div>
            </div>
        </div>
    );
};

export default PromotionSelection;