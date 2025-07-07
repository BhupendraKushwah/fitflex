import '../../assets/style.css'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import CustomInputField from '../custom-fields/CustomInputField';
import api from '../../api/api';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/auth/authSlice';

const Login = () => {

    const dispatch = useDispatch()

    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            dispatch(login(data))
        } catch (error) {
            console.log(error);

        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container-fluid p-0 login-bg">
            <div className="w-100 login-wrapper p-3">
                <div className="card login-card col-xl-7 col-md-9 col-12">
                    <div className="d-flex flex-column flex-md-row h-100 w-100">
                        <div className="col-12 col-md-6 d-none d-sm-flex flex-column justify-content-center login-left">
                            <div className="text-start ps-4">
                                <h1 className="">Welcome Back!</h1>
                                <p className="">Log in to manage schedules, memberships, and progress tracking.</p>
                            </div>
                        </div>
                        {/* Right Section */}
                        <div className="col-12 col-md-6 d-flex align-items-center login-right">
                            <div className="w-100">
                                <h3 className="fw-bold my-3 text-center">GymAxis</h3>
                                <p className="text-center mb-2">Sign in to your account</p>
                                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column gap-3 p-3" noValidate
                                >
                                    <CustomInputField
                                        control={control}
                                        name="email"
                                        type="email"
                                        label="Email address"
                                        placeholder="Email address"
                                        rules={{
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                message: 'Please enter a valid email address',
                                            },
                                        }}
                                    />
                                    <CustomInputField
                                        control={control}
                                        name="password"
                                        type="password"
                                        label="Password"
                                        placeholder="Password"
                                        rules={{
                                            required: 'Password is required',
                                            minLength: {
                                                value: 8,
                                                message: 'Password must be at least 8 characters',
                                            },
                                        }}
                                    />
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                {...control.register('rememberMe')}
                                                className="form-check-input"
                                                id="remember"
                                            />
                                            <label className="form-check-label font-13 text-white" htmlFor="remember">
                                                Remember me
                                            </label>
                                        </div>
                                        <Link to="/forgot-password" className="text-info text-decoration-none font-13">
                                            Forgot Password?
                                        </Link>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100 fw-semibold py-2 rounded"
                                        disabled={isSubmitting}
                                        aria-busy={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <span className="spinner-border spinner-border-sm me-2"></span>
                                        ) : (
                                            'Log In'
                                        )}
                                    </button>
                                    <div className="d-flex justify-content-between text-muted mt-3 small">
                                        <Link to="/terms" className="text-decoration-none font-13">Terms of Use</Link>
                                        <Link to="/privacy" className="text-decoration-none font-13">Privacy Policy</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;