import { FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ApplicationSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <FaCheckCircle className="h-6 w-6 text-green-600" />
        </div>
        <h2 className="mt-3 text-xl font-medium text-gray-900">Application Submitted!</h2>
        <p className="mt-2 text-sm text-gray-500">
          Thank you for applying. We've received your application and will review it shortly.
        </p>
        <div className="mt-6">
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSuccess;