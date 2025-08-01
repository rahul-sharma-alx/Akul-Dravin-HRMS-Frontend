import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from '../api/axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    setErrors({});

    try {
      // First get CSRF cookie
      await axios.get('/sanctum/csrf-cookie');

      // Then login
      const response = await axios.post('api/login', {
        email,
        password
      });

      // Store token and user data
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // Redirect to dashboard
      navigate('/dashboard');
      
    } catch (err) {
      console.error('Login error:', err);
      if (err.response?.status === 401) {
        setErrors({ form: 'Invalid email or password' });
      } else if (err.response?.status === 419) {
        setErrors({ form: 'Session expired. Please refresh the page.' });
      } else {
        setErrors({ form: 'Login failed. Please try again.' });
      }
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-light">
      {/* Illustration */}
      <div className="md:w-1/2 hidden md:flex justify-center items-center bg-gray-50">
        <img
          src='null'
          alt="HRMS Login"
          className="w-[90%] max-w-lg"
          loading="lazy"
        />
      </div>

      {/* Form */}
      <div className="md:w-1/2 w-full flex justify-center items-center p-4 sm:p-6">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6 sm:p-8">
          <div className="text-right text-sm text-gray-500 mb-3">
            Don't have an account?{" "}
            <Link 
              to="/register" 
              className="text-primary font-medium hover:text-primary-dark transition"
            >
              Sign Up
            </Link>
          </div>

          <h2 className="text-2xl font-semibold mb-6 text-primary-dark">Sign In</h2>

          {errors.form && (
            <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded">
              {errors.form}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
                className={`w-full border-b ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-600 bg-transparent py-2 px-1`}
                placeholder="Enter your email"
                autoComplete="email"
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-1">{errors.email}</span>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={password} onChange={(e) => setPassword(e.target.value)}
                className={`w-full border-b ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-600 bg-transparent py-2 px-1`}
                placeholder="Enter your password"
                autoComplete="current-password"
              />
              {errors.password && (
                <span className="text-red-500 text-xs mt-1">{errors.password}</span>
              )}
            </div>

            <div className="flex justify-between items-center mb-6">
              <label className="inline-flex items-center text-sm text-gray-600 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="mr-2 accent-primary rounded" 
                />
                Remember me
              </label>
              <Link 
                to="/forgot-password" 
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-primary text-white py-3 rounded-full hover:bg-primary-dark transition ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <>
                  <span className="inline-block animate-spin mr-2">↻</span>
                  Signing In...
                </>
              ) : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Or continue with</p>
            <div className="flex justify-center mt-3 space-x-4">
              <button className="p-2 border rounded-full hover:bg-gray-50">
                <GoogleIcon className="w-5 h-5" />
              </button>
              <button className="p-2 border rounded-full hover:bg-gray-50">
                <FacebookIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <footer className="text-xs text-center text-gray-400 mt-8 pt-4 border-t">
            © {new Date().getFullYear()} YourApp. All rights reserved.
            <div className="mt-1">
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              <span className="mx-2">•</span>
              <Link to="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

// Placeholder components for social icons
function GoogleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      {/* Google icon path */}
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      {/* Facebook icon path */}
    </svg>
  );
}