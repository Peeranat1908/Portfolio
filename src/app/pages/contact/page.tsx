'use client';
import { useState } from 'react';
import Head from 'next/head';

// Type definitions (ใช้ได้เฉพาะ TypeScript)
type FormData = {
    name: string;
    email: string;
    message: string;
    subject: string;
};

type ErrorFields = Partial<Record<keyof FormData, string>>;

type FormStatus = {
    submitted: boolean;
    success: boolean;
    message: string;
};

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState<ErrorFields>({});
    const [formStatus, setFormStatus] = useState<FormStatus>({
        submitted: false,
        success: false,
        message: ''
    });

    const validateForm = () => {
        const newErrors: ErrorFields = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) return;

        setFormStatus({
            submitted: true,
            success: false,
            message: 'Sending your message...'
        });

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            setFormStatus({
                submitted: true,
                success: true,
                message: 'Thank you! Your message has been sent successfully.'
            });

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            setFormStatus({
                submitted: true,
                success: false,
                message: 'Oops! Something went wrong. Please try again later.'
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <Head>
                <title>Contact Us | My Website</title>
                <meta name="description" content="Get in touch with our team" />
            </Head>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
                        Contact Us
                    </h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                        We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="bg-white shadow overflow-hidden rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        {formStatus.submitted && (
                            <div className={`mb-6 p-4 rounded-md ${formStatus.success ? 'bg-green-50' : 'bg-red-50'}`}>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        {formStatus.success ? (
                                            <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </div>
                                    <div className="ml-3">
                                        <p className={`text-sm font-medium ${formStatus.success ? 'text-green-800' : 'text-red-800'}`}>
                                            {formStatus.message}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.name ? 'border-red-300' : ''}`}
                                />
                                {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.email ? 'border-red-300' : ''}`}
                                />
                                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={`mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.message ? 'border-red-300' : ''}`}
                                />
                                {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                    disabled={formStatus.submitted && !formStatus.success}
                                >
                                    {formStatus.submitted && !formStatus.success ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Our Location</h3>
                            <div className="mt-5 text-gray-500">
                                123 Business Street<br />
                                Suite 100<br />
                                San Francisco, CA 94107
                            </div>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Contact Information</h3>
                            <div className="mt-5 space-y-3 text-gray-500">
                                <p><span className="font-medium">Email:</span> info@example.com</p>
                                <p><span className="font-medium">Phone:</span> +1 (555) 123-4567</p>
                                <p><span className="font-medium">Hours:</span> Mon–Fri: 9AM–5PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
