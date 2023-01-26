import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required!!'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid  email').required('Email is required'),
    password: Yup.string().required('Password is required').min('8')
})