import { motion } from 'framer-motion';

export default function LoadingSpinner() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-custom-green to-green-800">
            <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {/* Outer ring */}
                <motion.div
                    className="w-20 h-20 border-4 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Inner ring */}
                <motion.div
                    className="absolute top-2 left-2 w-16 h-16 border-4 border-green-200 border-b-transparent rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Center dot */}
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>

            {/* Loading text */}
            <motion.p
                className="absolute mt-32 text-white text-lg font-semibold"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                Loading...
            </motion.p>
        </div>
    );
}