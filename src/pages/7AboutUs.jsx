import { aboutUsData } from '../data/content';

function AboutUs() {
    const { backgroundImage, title, video, logo, paragraphs } = aboutUsData;
    
    return (
        <div 
            className="min-h-screen bg-cover bg-center flex items-center justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="max-w-8xl w-full space-y-8 sm:space-y-12 md:space-y-16">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
                    {/* Left side - Title and Video */}
                    <div className="w-full lg:w-1/2 xl:w-3/5 space-y-6 sm:space-y-8 md:space-y-10">
                        <h1 
                            className="text-center lg:text-end text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider p-4 sm:p-6 italic"
                            style={{ textShadow: '4px 4px 4px rgba(5,5,5,5.5)' }}
                        >
                            {title}
                        </h1>
                        <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                            <video 
                                src={video} 
                                className="w-full h-full object-cover" 
                                autoPlay 
                                muted 
                                loop 
                                playsInline
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    
                    {/* Right side - Logo and Description */}
                    <div className="w-full lg:w-1/2 xl:w-2/5 flex flex-col items-center">
                        <img
                            src={logo}
                            alt="E-TeleConnect Logo"
                            className="max-h-full w-full h-28 sm:h-32 md:h-40 lg:h-48 xl:h-56 object-contain"
                        />
                        <div className="p-4 sm:p-6 md:p-8">
                            {paragraphs.map((paragraph, index) => (
                                <p 
                                    key={index}
                                    className={`text-black text-base sm:text-lg lg:text-xl xl:text-2xl lg:text-black ${
                                        index < paragraphs.length - 1 ? 'mb-6' : ''
                                    }`}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;