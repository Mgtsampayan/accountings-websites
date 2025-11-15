import * as Yup from 'yup';

const appointmentSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First Name is required')
        .min(2, 'Too short')
        .max(50, 'Too long'),
    lastName: Yup.string()
        .required('Last Name is required')
        .min(2, 'Too short')
        .max(50, 'Too long'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    phoneNumber: Yup.string()
        .matches(/^\+?\d{10,15}$/, 'Invalid phone number')
        .required('Phone Number is required'),
    companyName: Yup.string()
        .required('Company Name is required')
        .min(2, 'Too short')
        .max(100, 'Too long'),
    country: Yup.object()
        .required('Country is required')
        .nullable(), // important for react-select controlled component
    message: Yup.string()
        .max(500, 'Message is too long'),
    termsAccepted: Yup.boolean()
        .oneOf([true], 'You must accept the terms and conditions')
});

export default appointmentSchema;
