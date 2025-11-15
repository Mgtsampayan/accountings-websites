// import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import FooterImage from '../../images/yellow.png';

const ContactInfo = ({ title, children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 sm:mb-8"
    >
        <h3 className="font-semisemibold text-xl sm:text-2xl mb-3">{title}</h3>
        {children}
    </motion.div>
);

// ContactInfo.propTypes = {
//     title: PropTypes.string.isRequired,
//     children: PropTypes.node.isRequired,
// };

export default function Footer() {
    return (
        <div className="relative w-full min-h-screen">
            <img
                src={FooterImage}
                alt="Person holding a smartphone"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-8 px-8 sm:px-16 z-10">
                <motion.div
                    className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12 md:gap-64"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        {/* Left side content if needed */}
                    </div>
                    <motion.div
                        className="md:w-1/2 text-left"
                        initial={{ x: 50 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.h2
                            className="text-4xl sm:text-5xl lg:text-6xl text-[#2D2657] mb-6 text-left"
                            initial={{ y: -20 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            CONTACT US
                        </motion.h2>
                        <motion.a
                            href="https://www.eteleconnectinc.com"
                            className="text-custom-green font-bold mb-5 block text-2xl sm:text-3xl hover:underline"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            www.eteleconnectinc.com
                        </motion.a>
                        <ContactInfo title="E-TeleConnect, Inc. PH ROHQ">
                            <p className="text-lg sm:text-xl font-semibold">Parañaque City,  Metro Manila, Philippines</p>
                            <p className="text-lg sm:text-xl font-semibold">Direct: US line: (855)800-0710 Loc. 805</p>
                            <p className="text-lg sm:text-xl font-semibold">Tel. No: (632) 8-829-0703 loc. 101/105</p>
                        </ContactInfo>
                        <ContactInfo title="E-TeleConnect, Inc. – Los Baños">
                            <p className="text-lg sm:text-xl font-semibold">Los Baños, Laguna, Philippines 4030</p>
                            <p className="text-lg sm:text-xl font-semibold">Direct: US line (808) 445-6527</p>
                            <p className="text-lg sm:text-xl font-semibold">Tel. No: (6349) 501-1210 loc.117/119</p>
                        </ContactInfo>
                        <motion.a
                            href="mailto:accounting@e-teleconnectinc.com"
                            className="text-custom-green font-extrabold text-3x1 sm:text-xl lg:text-3x1 hover:underline"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Email us: accounting@e-teleconnectinc.com
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}