import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function ContentSection({
    //layout = 'single', 'single', 'two-column', 'grid'
    backgroundImage,
    backgroundVideo,
    children
}) {
    return (
        <div className="relative min-h-screen">
            {/* Background */}
            {backgroundVideo && (
                <video className="absolute inset-0 w-full h-full object-cover"
                    src={backgroundVideo} autoPlay loop muted playsInline />
            )}
            {!backgroundVideo && backgroundImage && (
                <img className="absolute inset-0 w-full h-full object-cover"
                    src={backgroundImage} alt="" />
            )}

            {/* Content */}
            <div className="relative z-10 p-8">
                {children}
            </div>
        </div>
    );
}