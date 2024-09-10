import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase'; // Ensure Firebase is configured correctly
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  // Handle form data changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle regular email/password signup
  const handleSignup = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect after successful signup
    } catch (error) {
      console.error('Signup Error:', error);
    }
  };

  // Handle Google Sign-In
  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/'); // Redirect after successful Google signup
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            or{' '}
            <div className="mt-6">
          <button
            onClick={handleGoogleSignup}
            className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" className="h-5 w-5 mr-2" />
            Sign up with Google
          </button>
        </div>
          </p>
        </div>
        <form onSubmit={handleSignup} className="mt-8 space-y-6">
        <div className="rounded-md shadow-sm">
  <div className="grid grid-cols-2 gap-4 mb-4">
    <div>
      <label htmlFor="firstName" className="sr-only">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        required
        placeholder="First Name"
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        value={formData.firstName}
        onChange={handleInputChange}
      />
    </div>
    <div>
      <label htmlFor="lastName" className="sr-only">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        required
        placeholder="Last Name"
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
        value={formData.lastName}
        onChange={handleInputChange}
      />
    </div>
  </div>

  <div className="mb-4">
    <label htmlFor="fatherName" className="sr-only">Father's Name</label>
    <input
      id="fatherName"
      name="fatherName"
      type="text"
      required
      placeholder="Father's Name"
      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
      value={formData.fatherName}
      onChange={handleInputChange}
    />
  </div>

  <div className="mb-4">
    <label htmlFor="email" className="sr-only">Email</label>
    <input
      id="email"
      name="email"
      type="email"
      required
      placeholder="Email address"
      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
      value={formData.email}
      onChange={handleInputChange}
    />
  </div>

  <div className="mb-4">
    <label htmlFor="password" className="sr-only">Password</label>
    <input
      id="password"
      name="password"
      type="password"
      required
      placeholder="Password"
      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
      value={formData.password}
      onChange={handleInputChange}
    />
  </div>
</div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="/signin" className="font-medium text-blue-600 hover:text-blue-500">
                Already have an account? Sign in
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign up
            </button>
          </div>
        </form>

        
      </div>
    </div>
  );
};

export default Signup;
