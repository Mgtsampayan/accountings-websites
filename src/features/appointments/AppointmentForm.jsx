import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import Select from 'react-select';
import BackgroundVideo from '../../images/bg_6.mp4';
import countries from '../../data/countries.js';
import appointmentSchema from '../appointments/appointmentSchema.js';

const AppointmentForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [isFormEnabled, setIsFormEnabled] = useState(false);

    const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
        resolver: yupResolver(appointmentSchema),
        defaultValues: { termsAccepted: false }
    });

    const countryOptions = countries.map(c => ({ value: c.code, label: c.name }));

    useEffect(() => {
        if (isFormEnabled) {
            document.getElementById('firstName')?.focus();
        }
    }, [isFormEnabled]);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            const response = await axios.post('/api/book-an-appointment', data);
            console.log('Form submitted:', response.data);
            toast.success('Appointment booked successfully!');
            setSubmitSuccess(true);
            reset();
        } catch (error) {
            console.error('Submission error:', error);
            toast.error('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClass = (fieldError) =>
        `w-full p-3 rounded-lg border-2 ${fieldError ? 'border-red-500' : 'border-gray-300'} bg-white text-black focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300`;

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
                    {!submitSuccess ? (
                        <motion.form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <fieldset disabled={!isFormEnabled} className={!isFormEnabled ? 'opacity-50' : ''}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <input
                                            id="firstName"
                                            {...register('firstName')}
                                            placeholder="First Name*"
                                            className={inputClass(errors.firstName)}
                                        />
                                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                                    </div>
                                    <div>
                                        <input
                                            id="lastName"
                                            {...register('lastName')}
                                            placeholder="Last Name*"
                                            className={inputClass(errors.lastName)}
                                        />
                                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                                    </div>
                                    <div>
                                        <input
                                            id="email"
                                            {...register('email')}
                                            type="email"
                                            placeholder="Email*"
                                            className={inputClass(errors.email)}
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                    </div>
                                    <div>
                                        <input
                                            id="phoneNumber"
                                            {...register('phoneNumber')}
                                            type="tel"
                                            placeholder="Phone Number*"
                                            className={inputClass(errors.phoneNumber)}
                                        />
                                        {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
                                    </div>
                                </div>

                                <div>
                                    <input
                                        id="companyName"
                                        {...register('companyName')}
                                        placeholder="Company Name*"
                                        className={inputClass(errors.companyName)}
                                    />
                                    {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>}
                                </div>

                                <div className="mb-4">
                                    <Controller
                                        name="country"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                options={countryOptions}
                                                placeholder="Select your country"
                                                isDisabled={!isFormEnabled}
                                                styles={{
                                                    control: (base) => ({
                                                        ...base,
                                                        borderColor: errors.country ? 'red' : base.borderColor
                                                    })
                                                }}
                                            />
                                        )}
                                    />
                                    {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
                                </div>

                                <div>
                                    <textarea
                                        id="message"
                                        {...register('message')}
                                        placeholder="Additional message (optional)"
                                        className={inputClass(errors.message) + ' h-32'}
                                    />
                                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                                </div>

                                <div className="flex items-center mb-4">
                                    <input type="checkbox" {...register('termsAccepted')} id="termsAccepted" className="mr-2" />
                                    <label htmlFor="termsAccepted" className="text-sm text-white">
                                        I accept the <a href="#" className="text-blue-400 hover:underline">Terms and Conditions</a>
                                    </label>
                                </div>
                                {errors.termsAccepted && <p className="text-red-500 text-sm mt-1">{errors.termsAccepted.message}</p>}
                            </fieldset>

                            <div className="flex justify-between items-center">
                                <motion.button
                                    type="submit"
                                    className={`bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 ${(!isFormEnabled || isSubmitting) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={!isFormEnabled || isSubmitting}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    BOOK NOW
                                </motion.button>

                                {!isFormEnabled && (
                                    <motion.button
                                        type="button"
                                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
                                        onClick={() => setIsFormEnabled(true)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        CLICK HERE
                                    </motion.button>
                                )}
                            </div>
                        </motion.form>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                            className="text-center text-white"
                        >
                            <h2 className="text-3xl font-bold mb-4">Thank you for booking an appointment!</h2>
                            <p className="text-xl mb-8">We&apos;ll be in touch with you shortly to confirm the details.</p>
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
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
            <ToastContainer position="bottom-right" autoClose={5000} />
        </div>
    );
};

export default AppointmentForm;