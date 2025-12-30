import { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaInstagram,
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaBookOpen,
  FaBuilding,
  FaCalendarAlt,
  FaPhoneAlt
} from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/',  },
    { name: 'About Us', path: '/about', },
    { name: 'Academics', path: '/academics',},
    { name: 'Facilities', path: '/facilities',  },
    { name: 'Events', path: '/events',  },
    { name: 'Contact', path: '/contact',}
  ];

  return (
    <header className="sticky top-0 z-50 bg-amber-50 shadow-md">
      

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo & School Name */}
          <div className="flex items-center space-x-4">
            
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-amber-900 font-serif">
                Cambridge Montessori Preschool 
              </h1>
              {/* <p className="text-amber-700 font-sans text-xl md:text-base">
                Chandapura
              </p> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-amber-800 hover:text-amber-600 font-medium font-sans transition-colors flex items-center space-x-1"
              >
                <span className='text-amber-900'>{item.name}</span>
              </a>
            ))}
          </nav>

         

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-800 text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-amber-50 rounded-lg shadow-lg border border-amber-200">
            <div className="py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="flex items-center space-x-3 px-6 py-3 text-amber-800 hover:bg-amber-100 font-sans transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-amber-600">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              ))}
              
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;