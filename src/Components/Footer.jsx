import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaClock,
  FaHeart,
  FaLeaf,
  FaHome,
  FaInfoCircle,
  FaBookOpen,
  FaBuilding,
  FaCalendarAlt
} from 'react-icons/fa';
import { GiTreeBranch } from 'react-icons/gi';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'About Us', path: '/about', icon: <FaInfoCircle /> },
    { name: 'Academics', path: '/academics', icon: <FaBookOpen /> },
    { name: 'Facilities', path: '/facilities', icon: <FaBuilding /> },
    { name: 'Events', path: '/events', icon: <FaCalendarAlt /> },
    { name: 'Contact', path: '/contact', icon: <FaPhone /> },
  ];

  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt className="text-amber-400" />, 
      title: 'Our Location', 
      content: 'Cambridge Montessori Preschool, Chandapura ' 
    },
    { 
      icon: <FaPhone className="text-amber-400" />, 
      title: 'Phone Number', 
      content: '+91 98765 43210' 
    },
    { 
      icon: <FaEnvelope className="text-amber-400" />, 
      title: 'Email Address', 
      content: 'info@cambridgemontessori.com' 
    },
   
  ];

  return (
    <footer className="bg-amber-900 text-amber-50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              
              <div>
                <h3 className="text-2xl font-bold font-serif">Cambridge Montessori</h3>
                <p className="text-amber-200 font-sans">Preschool </p>
              </div>
            </div>
            <p className="text-amber-100 font-sans leading-relaxed">
              Nurturing young minds with Montessori philosophy in a loving, 
              child-centered environment that fosters independence, creativity, 
              and lifelong learning.
            </p>
           
          </div>

          {/* Quick Links (Navigation Links) */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-serif border-b border-amber-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path} 
                    className="text-amber-100 hover:text-amber-50 font-sans flex items-center space-x-2 transition-colors"
                  >
                    <span className="text-amber-400">{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-serif border-b border-amber-700 pb-2">
              Contact Us
            </h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  {info.icon}
                  <div>
                    <p className="font-sans font-medium">{info.title}</p>
                    <p className="text-amber-100 font-sans whitespace-pre-line">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>

      
    </footer>
  );
};

export default Footer;