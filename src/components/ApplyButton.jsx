import { useNavigate } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';

const ApplyButton = ({ jobId }) => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate(`/apply/${jobId}`);
  };

  return (
     <button
      onClick={handleApply}
      className="flex items-center justify-center w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition duration-200 group text-sm mt-6"
    >
      <span>Apply Now</span>
      <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform duration-200 text-xs" />
    </button>
  );
};

export default ApplyButton;