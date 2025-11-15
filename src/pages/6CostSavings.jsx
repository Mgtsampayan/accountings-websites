import { costSavingsData } from '../data/content';

function AcceleratedGrowthComponent() {
    const { backgroundVideo, sections } = costSavingsData;
    
    return (
        <div className="relative min-h-screen p-6 sm:p-12 flex flex-col justify-center">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover -z-10"
            >
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            {/* Content Container */}
            <div className="relative z-10 max-w-6xl mx-auto space-y-16 sm:space-y-24 px-4 sm:px-6">
                {sections.map((section) => (
                    <div 
                        key={section.id} 
                        className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-16"
                    >
                        <div className="flex-1 text-center sm:text-left">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-custom-green mb-6">
                                {section.title}
                            </h2>
                            <p className="text-base sm:text-lg font-bold text-black mb-4">
                                {section.description}
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <img
                                src={section.image}
                                alt={section.imageAlt}
                                className="w-full max-w-[400px] h-auto object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AcceleratedGrowthComponent;