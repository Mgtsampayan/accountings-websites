import { useState } from 'react';
// import PropTypes from 'prop-types';

export default function VideoBackground({
    videoSrc,
    posterSrc,
    showVideo = true,
    className = '',
    overlay = false,
    overlayOpacity = 0.6
}) {
    const [mediaError, setMediaError] = useState(false);

    const handleMediaError = () => {
        console.error('Failed to load background media:', videoSrc);
        setMediaError(true);
    };

    return (
        <div className={`absolute inset-0 z-0 ${className}`}>
            {showVideo && !mediaError ? (
                <video
                    className="w-full h-full object-cover"
                    src={videoSrc}
                    poster={posterSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    onError={handleMediaError}
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <img
                    className="w-full h-full object-cover"
                    src={posterSrc}
                    alt="Background"
                    onError={handleMediaError}
                />
            )}

            {overlay && (
                <div
                    className="absolute inset-0 bg-black pointer-events-none"
                    style={{ opacity: overlayOpacity }}
                />
            )}

            {mediaError && (
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <p className="text-white text-lg">Background media unavailable</p>
                </div>
            )}
        </div>
    );
}

// VideoBackground.propTypes = {
//     videoSrc: PropTypes.string.isRequired,
//     posterSrc: PropTypes.string.isRequired,
//     showVideo: PropTypes.bool,
//     className: PropTypes.string,
//     overlay: PropTypes.bool,
//     overlayOpacity: PropTypes.number
// };