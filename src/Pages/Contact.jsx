import { 
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaCar,
  FaBus,
  FaParking,
  FaWheelchair,
  FaShieldAlt,
  FaMapPin
} from 'react-icons/fa';

const Contact = () => {
  // Contact Information - Matching Footer details
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Our Location",
      details: [
        "Cambridge Montessori Preschool",
        "Chandapura, Bangalore"
      ],
      color: "bg-amber-100",
      iconColor: "text-amber-600"
    },
    {
      icon: <FaPhoneAlt className="text-3xl" />,
      title: "Phone Number",
      details: [
        "+91 98765 43210"
      ],
      color: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: "Email Address",
      details: [
        "info@cambridgemontessori.com"
      ],
      color: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
        "Sunday: By Appointment Only"
      ],
      color: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  // Transportation & Access
  const transportation = [
    {
      icon: <FaCar />,
      title: "By Car",
      description: "Ample parking available near Chandapura"
    },
    {
      icon: <FaBus />,
      title: "By Bus",
      description: "BMTC buses available to Chandapura"
    },
    {
      icon: <FaParking />,
      title: "Parking",
      description: "Dedicated parking for visitors"
    },
    {
      icon: <FaWheelchair />,
      title: "Accessibility",
      description: "Wheelchair accessible premises"
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header Banner */}
      <section className="py-16 bg-gradient-to-r from-amber-900 to-amber-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-50 font-serif mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-amber-100 font-sans leading-relaxed">
              Get in touch with Cambridge Montessori Preschool in Chandapura
            </p>
          </div>
        </div>
      </section>


      {/* Contact Information Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif mb-6">
              Contact Information
            </h2>
            <p className="text-lg text-amber-700 font-sans max-w-3xl mx-auto">
              Connect with Cambridge Montessori Preschool in Chandapura
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-amber-100 hover:shadow-xl transition-shadow duration-300">
                <div className={`${info.color} rounded-t-xl p-6 flex justify-center`}>
                  <div className={`${info.iconColor}`}>
                    {info.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-900 font-sans mb-4">{info.title}</h3>
                  <ul className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <li key={idx} className="text-amber-700 font-sans">{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Transportation Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Map Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-100">
              <div className="h-64 bg-gradient-to-br from-amber-200 to-yellow-200 flex items-center justify-center">
                <div className="text-center">
                  <FaMapPin className="text-amber-600 text-5xl mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-amber-900 font-sans">Chandapura Location</h3>
                  <p className="text-amber-700 font-sans mt-2">Cambridge Montessori Preschool</p>
                  <p className="text-amber-600 font-sans">Chandapura, Bangalore</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-amber-800 font-sans mb-4">Location Details:</h4>
                <ul className="space-y-3">
                  <li className="text-amber-700 font-sans flex items-center">
                    <FaShieldAlt className="text-amber-500 mr-3" />
                    <span>Safe, child-friendly environment in Chandapura</span>
                  </li>
                  <li className="text-amber-700 font-sans flex items-center">
                    <FaMapMarkerAlt className="text-amber-500 mr-3" />
                    <span>Conveniently located in Chandapura area</span>
                  </li>
                  <li className="text-amber-700 font-sans flex items-center">
                    <FaCar className="text-amber-500 mr-3" />
                    <span>Easy access from main Chandapura roads</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Transportation */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-amber-900 font-sans mb-6">Getting to Chandapura</h3>
                <div className="grid grid-cols-2 gap-4">
                  {transportation.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 text-center">
                      <div className="text-amber-600 text-2xl mb-2">{item.icon}</div>
                      <h4 className="font-bold text-amber-800 font-sans text-sm">{item.title}</h4>
                      <p className="text-amber-600 font-sans text-xs mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-amber-100">
                <h3 className="text-2xl font-bold text-amber-900 font-sans mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg">
                    <FaPhoneAlt className="text-amber-600 text-xl" />
                    <div>
                      <p className="font-sans font-medium text-amber-800">Call Us</p>
                      <p className="text-amber-700 font-sans">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg">
                    <FaEnvelope className="text-amber-600 text-xl" />
                    <div>
                      <p className="font-sans font-medium text-amber-800">Email Us</p>
                      <p className="text-amber-700 font-sans">info@cambridgemontessori.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      
    </div>
  );
};

export default Contact;