import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { FaArrowLeft, FaBriefcase, FaMapMarkerAlt, FaMoneyBillWave, FaClock, FaUserTie, FaEnvelope, FaPhone, FaFileUpload, FaUser, FaCalendarAlt, FaUsers, FaEye } from 'react-icons/fa';

const JobApplication = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [backendError, setBackendError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
  });
  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    phone: '',
    resume: '',
    coverLetter: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`/api/get-job/${jobId}`);
        setJob(response.data.job);
      } catch (err) {
        setBackendError(err.response?.data?.message || 'Failed to load job details');
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.length < 3) return 'Name must be at least 3 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
        return '';
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        if (!/^[0-9]{10,15}$/.test(value)) return 'Invalid phone number (10-15 digits)';
        return '';
      case 'resume':
        if (!value) return 'Resume is required';
        if (value && !['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(value.type))
          return 'Only PDF, DOC, or DOCX files are allowed';
        return '';
      case 'coverLetter':
        if (!value) return 'Resume is required';
        if (value.length > 1000) return 'Message must be less than 1000 characters';
        return '';
      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setValidationErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, resume: file }));
    setValidationErrors(prev => ({ ...prev, resume: validateField('resume', file) }));
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      resume: validateField('resume', formData.resume),
      coverLetter: validateField('coverLetter', formData.coverLetter)
    };
    
    setValidationErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBackendError(null);
    
    if (!validateForm()) {
      setBackendError('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const formPayload = new FormData();
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('phone', formData.phone);
      formPayload.append('cv_upload', formData.resume);
      formPayload.append('message', formData.coverLetter);
      formPayload.append('job_id', jobId);
      formPayload.append('job_title', job.title);

      const response = await axios.post('/api/applications', formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      if (response.data.success) {
        navigate('/application-success');
      } else {
        setBackendError(response.data.message || 'Application submission failed');
      }
    } catch (err) {
      // Handle different types of backend errors
      if (err.response) {
        // The request was made and the server responded with a status code
        const errorData = err.response.data;
        if (errorData.errors) {
          // Handle validation errors from backend
          const backendValidationErrors = {};
          Object.keys(errorData.errors).forEach(key => {
            backendValidationErrors[key] = errorData.errors[key][0];
          });
          setValidationErrors(prev => ({ ...prev, ...backendValidationErrors }));
          setBackendError('Please fix the highlighted errors');
        } else {
          setBackendError(errorData.message || 'Application failed. Please try again.');
        }
      } else if (err.request) {
        // The request was made but no response was received
        setBackendError('Network error. Please check your connection and try again.');
      } else {
        // Something happened in setting up the request
        setBackendError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">{backendError || 'Job not found'}</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-primary hover:text-secondary mb-6 transition"
        >
          <FaArrowLeft className="mr-2" />
          Back to Jobs
        </button>
    
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Job Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <div className="flex items-center mt-2">
              <FaUser className="mr-2 text-blue-200" />
              <span className="text-blue-100">Posted by: {job.user?.name || 'Unknown'}</span>
            </div>
          </div>

          {/* Job Details */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center">
                <FaBriefcase className="text-primary mr-2" />
                <span>{job.job_type || 'Not specified'}</span>
              </div>
              <div className="flex items-center">
                <FaUserTie className="text-primary mr-2" />
                <span>Experience: {job.experience || 'Not specified'} years</span>
              </div>
              <div className="flex items-center">
                <FaUser className="text-primary mr-2" />
                <span>Age below: {job.age || 'Not specified'}</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-primary mr-2" />
                <span>{job.location || 'Location not specified'}</span>
              </div>
              <div className="flex items-center">
                <FaMoneyBillWave className="text-primary mr-2" />
                <span>₹{job.salary_from || 'Salary not disclosed'}/m - ₹{job.salary_to || 'Salary not disclosed'}/m</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-primary mr-2" />
                <span>Posted: {new Date(job.created_at).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="text-primary mr-2" />
                <span>Deadline: {job.expired_date ? new Date(job.expired_date).toLocaleDateString() : 'None'}</span>
              </div>
              <div className="flex items-center">
                <FaUsers className="text-primary mr-2" />
                <span>{job.no_of_vacancies || 0} vacancies</span>
              </div>
              <div className="flex items-center">
                <FaEye className="text-primary mr-2" />
                <span>{job.count || 0} views</span>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Job Description</h2>
              <p className="text-gray-600 whitespace-pre-line">{job.description}</p>
            </div>

            {job.requirements && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Requirements</h2>
                {Array.isArray(job.requirements) ? (
                  <ul className="list-disc pl-5 text-gray-600">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 whitespace-pre-line">{job.requirements}</p>
                )}
              </div>
            )}
          </div>

          {/* Application Form */}
          <div className="border-t border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Apply for this Position</h2>
            
            {backendError && (
              <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <strong>Error:</strong>
                </div>
                <p className="mt-1 ml-7">{backendError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUserTie className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className={`pl-10 w-full px-4 py-2 border ${validationErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-primary focus:border-primary`}
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {validationErrors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      {validationErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={`pl-10 w-full px-4 py-2 border ${validationErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-primary focus:border-primary`}
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {validationErrors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      {validationErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className={`pl-10 w-full px-4 py-2 border ${validationErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-primary focus:border-primary`}
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  {validationErrors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      {validationErrors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                    Resume (PDF) *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaFileUpload className="text-gray-400" />
                    </div>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      required
                      accept=".pdf,.doc,.docx"
                      className={`pl-10 w-full px-4 py-2 border ${validationErrors.resume ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-primary focus:border-primary file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20`}
                      onChange={handleFileChange}
                    />
                  </div>
                  {validationErrors.resume && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      {validationErrors.resume}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows="4"
                    className={`w-full px-4 py-2 border ${validationErrors.coverLetter ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-primary focus:border-primary`}
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Explain why you're a good fit for this position..."
                  />
                  <div className="flex justify-between mt-1">
                    {validationErrors.coverLetter && (
                      <p className="text-sm text-red-600 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        {validationErrors.coverLetter}
                      </p>
                    )}
                    <p className={`text-xs ${formData.coverLetter.length > 1000 ? 'text-red-500' : 'text-gray-500'} ml-auto`}>
                      {formData.coverLetter.length}/1000 characters
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-white font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting || !formData.resume}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Submit Application
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;