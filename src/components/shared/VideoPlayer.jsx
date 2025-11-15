import { useRef, useEffect, useState } from "react";

/**
 * VideoPlayer Component
 * Reusable video player with auto-play and error handling
 * 
 * @param {string} videoUrl - Source URL for the video
 * @param {string} className - Additional CSS classes
 * @param {boolean} autoPlay - Auto-play on mount (default: true)
 * @param {boolean} controls - Show video controls (default: false)
 * @param {string} ariaLabel - Accessibility label
 */
const VideoPlayer = ({
    videoUrl,
    className = "",
    autoPlay = true,
    controls = false,
    ariaLabel = "Video player"
}) => {
    const videoRef = useRef(null);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setHasError(false);
    }, [videoUrl]);

    useEffect(() => {
        if (autoPlay && videoRef.current && !hasError) {
            const playPromise = videoRef.current.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setIsLoading(false);
                    })
                    .catch(error => {
                        console.error("Auto-play was prevented:", error);
                        setIsLoading(false);
                    });
            }
        }
    }, [autoPlay, hasError]);

    const handleError = (e) => {
        console.error("Video loading error:", e);
        setHasError(true);
        setIsLoading(false);
    };

    const handleCanPlay = () => {
        setIsLoading(false);
    };

    if (hasError) {
        return (
            <div className={`relative w-full h-full overflow-hidden ${className}`}>
                <div className="flex items-center justify-center h-full bg-gray-200">
                    <div className="text-center p-4">
                        <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-gray-600">Unable to load video</p>
                        <p className="text-sm text-gray-500 mt-2">Please check your connection</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-custom-green"></div>
                </div>
            )}
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                src={videoUrl}
                loop
                muted
                playsInline
                autoPlay={autoPlay}
                controls={controls}
                controlsList="nodownload"
                onContextMenu={(e) => e.preventDefault()}
                onError={handleError}
                onCanPlay={handleCanPlay}
                aria-label={ariaLabel}
            >
                <source src={videoUrl} type="video/mp4" />
                <source src={videoUrl} type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;