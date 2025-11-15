import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import BackgroundVideo from '../images/bg_6.mp4';
import countries from '../data/countries.js';

const schema = Yup.object().shape({
    firstName: Yup.string().required('Required').min(2, 'Too short').max(50, 'Too long'),
    lastName: Yup.string().required('Required').min(2, 'Too short').max(50, 'Too long'),
    email: Yup.string().email('Invalid email').required('Required'),
    phoneNumber: Yup.string().matches(/^\d{10,15}$/, "Invalid phone number").required('Required'),
    companyName: Yup.string().required('Required').min(2, 'Too short').max(100, 'Too long'),
    country: Yup.object().required('Required'),
    message: Yup.string().max(500, 'Too long'),
    termsAccepted: Yup.boolean().oneOf([true], 'Must accept terms')
});

const AppointmentForm = () => {
    const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
        defaultValues: { termsAccepted: false }
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [isFormEnabled, setIsFormEnabled] = useState(false);
    const navigate = useNavigate();

    const onSubmit = useCallback(async (data) => {
        setIsSubmitting(true);
        try {
            const response = await axios.post('/api/book-an-appointment', data);
            console.log('Form submitted:', response.data);
            setSubmitSuccess(true);
            toast.success('Appointment booked successfully!');
            reset();
        } catch (error) {
            console.error('Submission error:', error);
            toast.error('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }, [reset]);

    const renderInput = useCallback(({ name, placeholder, type = "text" }) => (
        <div className="mb-4">
            <input
                type={type}
                {...register(name)}
                placeholder={placeholder}
                className={`w-full p-3 rounded-lg border-2 ${errors[name] ? 'border-red-500' : 'border-gray-300'} bg-white text-black focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300`}
                disabled={!isFormEnabled}
            />
            {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
        </div>
    ), [errors, register, isFormEnabled]);

    const formAnimation = useMemo(() => ({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.3 }
    }), []);

    const handleBookAppointment = useCallback(() => {
        setIsFormEnabled(true);
        navigate('/api/book-an-appointment');
    }, [navigate]);

    const renderForm = useMemo(() => (
        <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            {...formAnimation}
        >
            <fieldset disabled={!isFormEnabled} className={!isFormEnabled ? 'opacity-50' : ''}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {renderInput({ name: "firstName", placeholder: "First Name*" })}
                    {renderInput({ name: "lastName", placeholder: "Last Name*" })}
                    {renderInput({ name: "email", placeholder: "Email*", type: "email" })}
                    {renderInput({ name: "phoneNumber", placeholder: "Phone Number*", type: "tel" })}
                </div>
                {renderInput({ name: "companyName", placeholder: "Company Name*" })}
                <Controller
                    name="country"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            options={countries.map(country => ({ value: country.code, label: country.name }))}
                            placeholder="Select your country"
                            className={`mb-4 ${errors.country ? 'border-red-500' : ''}`}
                            isDisabled={!isFormEnabled}
                        />
                    )}
                />
                {errors.country && <p className="text-red-500 text-sm mt-1 mb-4">{errors.country.message}</p>}
                <textarea
                    {...register("message")}
                    placeholder="Additional message (optional)"
                    className="w-full p-3 rounded-lg border-2 border-gray-300 bg-white text-black focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300 h-32 mb-4"
                    disabled={!isFormEnabled}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1 mb-4">{errors.message.message}</p>}
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        {...register("termsAccepted")}
                        id="termsAccepted"
                        className="mr-2"
                        disabled={!isFormEnabled}
                    />
                    <label htmlFor="termsAccepted" className="text-sm text-white">
                        I accept the <a href="#" className="text-blue-400 hover:underline">Terms and Conditions</a>
                    </label>
                </div>
                {errors.termsAccepted && <p className="text-red-500 text-sm mt-1 mb-4">{errors.termsAccepted.message}</p>}
            </fieldset>
            <div className="flex justify-between items-center">
                <motion.button
                    type="submit"
                    className={`bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 ${(isSubmitting || !isFormEnabled) ? 'opacity-50 cursor-not-allowed' : ''}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitting || !isFormEnabled}
                >
                    BOOK NOW
                </motion.button>
                {!isFormEnabled && (
                    <motion.button
                        type="button"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleBookAppointment}
                    >
                        CLICK HERE
                    </motion.button>
                )}
            </div>
        </motion.form>
    ), [control, errors, formAnimation, handleSubmit, isSubmitting, onSubmit, register, renderInput, isFormEnabled, handleBookAppointment]);

    const renderSuccessMessage = useMemo(() => (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
        >
            <h2 className="text-3xl font-bold mb-4">Thank you for booking an appointment!</h2>
            <p className="text-xl mb-8">We&apos;ll be in touch with you shortly to confirm the details.</p>
            <div className="flex justify-center">
                <motion.button
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50"
                    onClick={() => {
                        setSubmitSuccess(false);
                        setIsFormEnabled(false);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Book Another Appointment
                </motion.button>
            </div>
        </motion.div>
    ), []);

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={BackgroundVideo}
                autoPlay
                loop
                muted
                playsInline
            />
            <motion.div
                className="w-full max-w-4xl p-8 relative z-10 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-5xl font-bold text-white mb-8 text-center">BOOK AN APPOINTMENT</h1>
                <AnimatePresence mode="wait">
                    {!submitSuccess ? renderForm : renderSuccessMessage}
                </AnimatePresence>
            </motion.div>
            <ToastContainer position="bottom-right" autoClose={5000} />
        </div>
    );
};

export default AppointmentForm;