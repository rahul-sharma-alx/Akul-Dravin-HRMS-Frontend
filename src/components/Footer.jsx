import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import logo from "../assets/hrms.png"; // Your HRMS logo

export default function Footer() {
  return (
    <footer className="bg-light text-gray-700 border-t border-gray-200 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Socials */}
        <div>
          <img src={logo} alt="Akul Dravin HRMS" className="h-12 mb-4" />
          <p className="text-sm text-gray-600 mb-4">
            Digital HRMS for smart businesses.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-primary hover:text-secondary">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-primary hover:text-secondary">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-primary hover:text-secondary">
              <FaXTwitter size={20} />
            </a>
            <a href="#" className="text-primary hover:text-secondary">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold text-primary mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-secondary">About Us</a></li>
            <li><a href="#careers" className="hover:text-secondary">Careers</a></li>
            <li><a href="#contact" className="hover:text-secondary">Contact</a></li>
            <li><a href="#sitemap" className="hover:text-secondary">Sitemap</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="font-semibold text-primary mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#help" className="hover:text-secondary">Help Center</a></li>
            <li><a href="#terms" className="hover:text-secondary">Terms & Conditions</a></li>
            <li><a href="#privacy" className="hover:text-secondary">Privacy Policy</a></li>
            <li><a href="#report" className="hover:text-secondary">Report Issue</a></li>
          </ul>
        </div>

        {/* Resources Section (Fixed Duplicate) */}
        <div>
          <h4 className="font-semibold text-primary mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#blog" className="hover:text-secondary">Blog</a></li>
            <li><a href="#guides" className="hover:text-secondary">Guides</a></li>
            <li><a href="#faq" className="hover:text-secondary">FAQs</a></li>
            <li><a href="#community" className="hover:text-secondary">Community Forum</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Akul Dravin HRMS. All Rights Reserved.
      </div>
    </footer>
  );
}
