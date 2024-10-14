import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../reducers/authReducer';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Ensure this import is correct

const SignIn = () => {
    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);
    const loading = useSelector((state) => state.auth.loading);

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        dispatch(signInStart());
        try {
            const response = await axios.post('http://localhost:8080/api/auth/signin', values);
            dispatch(signInSuccess(response.data));
        } catch (err) {
            dispatch(signInFailure(err.response.data.message));
        }
        setSubmitting(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <Field
                                    type="password"
                                    name="password"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />
                            </div>
                            {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    disabled={isSubmitting || loading}
                                >
                                    {loading ? 'Signing in...' : 'Sign In'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default SignIn;