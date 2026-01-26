import { FaFacebook, FaTwitter, FaLinkedin, FaBehance } from 'react-icons/fa';
import { Link } from "react-router-dom";
const ProfileLink = () => {
  return (
    <div className="flex gap-4 justify-center mt-2">

      <div className="bg-white text-black p-3 rounded-full hover:bg-gray-800 hover:text-white transition duration-300 transform hover:scale-105">
        <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaFacebook size={24} />
        </Link>
      </div>


      <div className="bg-white text-black p-3 rounded-full hover:bg-gray-800 hover:text-white transition duration-300 transform hover:scale-105">
        <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter size={24} />
        </Link>
      </div>


      <div className="bg-white text-black p-3 rounded-full hover:bg-gray-800 hover:text-white transition duration-300 transform hover:scale-105">
        <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </Link>
        
      </div>

      {/* YouTube */}
      <div className="bg-white text-black p-3 rounded-full hover:bg-gray-800 hover:text-white transition duration-300 transform hover:scale-105">
        <Link to="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaBehance size={24} />
        </Link>
      </div>
    </div>
  );
}

export default ProfileLink;
