// import PropTypes from 'prop-types';
import { memo } from 'react';
import { locationsData } from '../data/content';

const LocationCard = memo(({ title, text, image, imageAlt }) => (
    <div className="text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-8">
            {title}
            <p className="text-xl text-green-700 mb-4">{text}</p>
        </h2>
        <div className="h-64 overflow-hidden">
            <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover object-center"
                loading="lazy"
            />
        </div>
    </div>
));

LocationCard.displayName = 'LocationCard';

// LocationCard.propTypes = {
//     title: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     imageAlt: PropTypes.string.isRequired,
// };

const ExpandGlobal = () => {
    const { backgroundVideo, title, locations } = locationsData;
    
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-start p-4 gap-8">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={backgroundVideo}
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="relative z-10 w-full">
                <h1 className="text-5xl font-bold text-green-800 text-center mt-32 mb-24">
                    {title}
                </h1>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {locations.map((location) => (
                            <LocationCard key={location.id} {...location} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpandGlobal;