import { whyChooseData } from '../data/content';

function Component() {
    const { backgroundImage, backgroundGif, mainTitle, subTitle, reasons } = whyChooseData;
    
    return (
        <div className="min-h-screen bg-white p-4 sm:p-8 flex flex-col items-center justify-start relative overflow-hidden font-sans text-black">

            {/* Primary background */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center sm:bg-bottom"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />

            {/* GIF background overlay */}
            <div
                className="absolute inset-0 z-10 bg-no-repeat bg-bottom opacity-50"
                style={{
                    backgroundImage: `url(${backgroundGif})`,
                    backgroundSize: '1000px 300px',
                }}
            />

            {/* Content */}
            <div className="relative z-20 max-w-5xl w-full text-center space-y-6 sm:space-y-8 mt-16 sm:mt-24 px-4">

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider mb-2">
                    {mainTitle}
                </h2>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 sm:mb-20">
                    {subTitle}
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 sm:gap-x-20 gap-y-10 sm:gap-y-16 text-left">
                    {reasons.map(reason => (
                        <div
                            key={reason.id}
                            className="space-y-2 sm:space-y-3 transition-transform hover:scale-105"
                        >
                            <h3 className="text-lg sm:text-xl font-semibold text-black">
                                {reason.title}
                            </h3>
                            <p className="text-sm sm:text-base text-black">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Component;