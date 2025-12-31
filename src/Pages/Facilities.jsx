import { 
  FaHome,
  FaChild,
  FaTree,
  FaBook,
  FaPaintBrush,
  FaMusic,
  FaUtensils,
  FaShieldAlt,
  FaMedkit,
  FaCamera,
  FaWifi,
  FaThermometerHalf,
  FaUsers,
  FaCar,
  FaStar,
  FaLightbulb,
  FaSeedling,
  FaGamepad,
  FaSwimmingPool,
  FaHeart
} from 'react-icons/fa';
import { GiMaterialsScience, GiTreehouse, GiBookshelf } from 'react-icons/gi';

const Facilities = () => {
  // Main Facilities
  const mainFacilities = [
    {
      icon: <FaHome className="text-4xl" />,
      title: "Montessori Classrooms",
      description: "Beautifully prepared environments with authentic Montessori materials",
      features: ["Child-sized Furniture", "Natural Lighting", "Learning Corners", "Observation Area"],
      imageClass: "bg-gradient-to-br from-amber-200 to-yellow-200",
      color: "text-amber-700"
    },
    {
      icon: <FaTree className="text-4xl" />,
      title: "Outdoor Play Area",
      description: "Safe, natural outdoor space for physical activities and nature exploration",
      features: ["Play Structures", "Sand Play Zone", "Gardening Area", "Running Space"],
      imageClass: "bg-gradient-to-br from-green-200 to-emerald-200",
      color: "text-emerald-700"
    },
    {
      icon: <FaBook className="text-4xl" />,
      title: "Learning Resources",
      description: "Rich collection of educational materials and resources",
      features: ["Montessori Materials", "Library Corner", "Audio-Visual Aids", "Cultural Materials"],
      imageClass: "bg-gradient-to-br from-blue-200 to-cyan-200",
      color: "text-blue-700"
    },
    {
      icon: <FaPaintBrush className="text-4xl" />,
      title: "Creative Arts Studio",
      description: "Dedicated space for artistic expression and creative development",
      features: ["Art Supplies", "Easels & Tables", "Clay Station", "Display Gallery"],
      imageClass: "bg-gradient-to-br from-purple-200 to-pink-200",
      color: "text-purple-700"
    }
  ];

  // Specialized Areas
  const specializedAreas = [
    {
      icon: <GiMaterialsScience className="text-3xl" />,
      title: "Sensorial Lab",
      description: "Specially designed area for sensorial exploration and development",
      highlights: ["Tactile Materials", "Sound Exploration", "Visual Discrimination", "Olfactory Station"]
    },
    {
      icon: <FaMusic className="text-3xl" />,
      title: "Music & Movement Room",
      description: "Dedicated space for musical activities and physical movement",
      highlights: ["Musical Instruments", "Dance Space", "Rhythm Tools", "Performance Area"]
    },
    {
      icon: <GiBookshelf className="text-3xl" />,
      title: "Reading Nook",
      description: "Cozy corner filled with age-appropriate books and storytelling materials",
      highlights: ["Picture Books", "Storytelling Props", "Comfortable Seating", "Audio Books"]
    },
    {
      icon: <FaSeedling className="text-3xl" />,
      title: "Nature Garden",
      description: "Outdoor garden for hands-on nature learning and exploration",
      highlights: ["Planting Beds", "Butterfly Garden", "Water Play", "Observation Station"]
    }
  ];

  // Safety & Security Features
  const safetyFeatures = [
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "24/7 CCTV Surveillance",
      description: "Complete campus coverage with monitoring"
    },
    {
      icon: <FaMedkit className="text-2xl" />,
      title: "First Aid & Medical Care",
      description: "Trained staff and well-equipped medical room"
    },
    {
      icon: <FaCamera className="text-2xl" />,
      title: "Access Control System",
      description: "Secure entry and exit with parent identification"
    },
    {
      icon: <FaThermometerHalf className="text-2xl" />,
      title: "Air Quality Control",
      description: "Air purifiers and regular quality checks"
    },
    {
      icon: <FaWifi className="text-2xl" />,
      title: "Fire Safety Systems",
      description: "Smoke detectors and fire extinguishers"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Trained Security Staff",
      description: "Professional security personnel on premises"
    }
  ];

  // Amenities
  const amenities = [
    {
      title: "Dining Area",
      description: "Clean, hygienic space for meals and snacks",
      icon: <FaUtensils />,
      details: ["Child-sized Tables", "Healthy Meal Service", "Hygiene Standards", "Nutrition Monitoring"]
    },
    {
      title: "Rest Areas",
      description: "Comfortable spaces for napping and relaxation",
      icon: <FaHeart />,
      details: ["Individual Beds", "Clean Linens", "Quiet Environment", "Supervised Rest"]
    },
    {
      title: "Parent Lounge",
      description: "Comfortable waiting area for parents",
      icon: <FaUsers />,
      details: ["Comfortable Seating", "Wi-Fi Access", "Observation Window", "Resource Library"]
    },
    {
      title: "Parking Area",
      description: "Convenient drop-off and pick-up facility",
      icon: <FaCar />,
      details: ["Designated Parking", "Safe Drop-off Zone", "Covered Area", "Security Patrol"]
    }
  ];

  // Montessori Materials
  const montessoriMaterials = [
    {
      category: "Practical Life",
      items: ["Dressing Frames", "Pouring Activities", "Food Prep Tools", "Cleaning Sets"],
      color: "bg-amber-100"
    },
    {
      category: "Sensorial",
      items: ["Pink Tower", "Color Tablets", "Sound Cylinders", "Geometric Solids"],
      color: "bg-green-100"
    },
    {
      category: "Mathematics",
      items: ["Number Rods", "Golden Beads", "Spindle Boxes", "Cards & Counters"],
      color: "bg-blue-100"
    },
    {
      category: "Language",
      items: ["Sandpaper Letters", "Moveable Alphabet", "Phonetic Objects", "Reading Cards"],
      color: "bg-purple-100"
    }
  ];

  // Environment Features
  const environmentFeatures = [
    {
      feature: "Natural Lighting",
      description: "Ample sunlight in all learning spaces",
      benefit: "Enhances mood and concentration"
    },
    {
      feature: "Non-Toxic Materials",
      description: "All furniture and materials are child-safe",
      benefit: "Ensures complete safety for children"
    },
    {
      feature: "Climate Control",
      description: "Temperature regulated classrooms",
      benefit: "Comfortable learning environment year-round"
    },
    {
      feature: "Acoustic Design",
      description: "Sound-absorbing materials",
      benefit: "Reduces noise for better concentration"
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header Banner */}
      <section className="py-16 bg-gradient-to-r from-amber-900 to-amber-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-50 font-serif mb-6">
              Our World-Class Facilities
            </h1>
            <p className="text-xl text-amber-100 font-sans leading-relaxed">
              Designed to inspire learning, ensure safety, and nurture the whole child in a 
              beautifully prepared Montessori environment.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif mb-6">
                  A Designed Environment for Learning
                </h2>
                <div className="w-24 h-1 bg-amber-500 mb-8"></div>
              </div>
              
              <p className="text-lg text-amber-800 font-sans leading-relaxed">
                At Cambridge Montessori, we believe that the environment is the third teacher. 
                Our facilities have been thoughtfully designed to support the Montessori philosophy 
                while ensuring the highest standards of safety, comfort, and functionality.
              </p>
              
              <p className="text-lg text-amber-800 font-sans leading-relaxed">
                Every aspect of our campus, from the classroom layout to the outdoor spaces, 
                has been created to foster independence, exploration, and joyful learning. 
                We provide an environment where children feel secure, inspired, and empowered 
                to discover their potential.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <FaStar className="text-amber-600 text-3xl mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 font-sans mb-2">Purpose-Built Spaces</h3>
                      <p className="text-amber-700 font-sans">
                        Each area designed specifically for Montessori learning activities
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <FaChild className="text-amber-600 text-3xl mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 font-sans mb-2">Child-Centered Design</h3>
                      <p className="text-amber-700 font-sans">
                        Everything scaled to child size for accessibility and independence
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <FaLightbulb className="text-amber-600 text-3xl mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 font-sans mb-2">Inspiring Atmosphere</h3>
                      <p className="text-amber-700 font-sans">
                        Beautiful, organized spaces that stimulate curiosity and creativity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif mb-6">
              Our Key Facilities
            </h2>
            <p className="text-lg text-amber-700 font-sans max-w-3xl mx-auto">
              Specially designed spaces that support every aspect of your child's development
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainFacilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300">
                <div className={`h-48 ${facility.imageClass} flex items-center justify-center`}>
                  {facility.icon}
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-amber-900 font-sans">{facility.title}</h3>
                      <p className={`font-sans font-medium mt-1 ${facility.color}`}>
                        <FaStar className="inline mr-2" /> Featured Facility
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-amber-700 font-sans mb-6">{facility.description}</p>
                  
                  <div>
                    <h4 className="font-bold text-amber-800 font-sans mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                          <span className="text-amber-700 font-sans text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Learning Areas */}
      <section className="py-20 bg-amber-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 font-serif mb-6">
              Specialized Learning Areas
            </h2>
            <p className="text-xl text-amber-200 font-sans max-w-3xl mx-auto">
              Dedicated spaces for specific areas of development and exploration
            </p>
            <div className="w-24 h-1 bg-amber-400 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedAreas.map((area, index) => (
              <div key={index} className="bg-amber-800/40 rounded-xl p-8 border border-amber-700/50 hover:bg-amber-800/60 transition-colors duration-300">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-700/30">
                    <div className="text-amber-300">
                      {area.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-amber-50 font-sans">{area.title}</h3>
                  <p className="text-amber-100 font-sans mb-4">{area.description}</p>
                  <div className="pt-4 border-t border-amber-700/50">
                    <h4 className="text-amber-300 font-sans font-bold mb-2">Highlights:</h4>
                    <ul className="space-y-2">
                      {area.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="text-amber-200 font-sans text-sm">
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif mb-6">
              Safety & Security
            </h2>
            <p className="text-lg text-amber-700 font-sans max-w-3xl mx-auto">
              Our top priority is ensuring a safe and secure environment for every child
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div key={index} className="bg-amber-50 rounded-xl p-8 hover:bg-amber-100 transition-colors duration-300">
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-amber-200 flex items-center justify-center">
                      <div className="text-amber-700">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 font-sans mb-2">{feature.title}</h3>
                    <p className="text-amber-700 font-sans">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-amber-900 font-serif mb-4">Our Safety Commitment</h3>
                <p className="text-amber-800 font-sans">
                  We maintain the highest standards of safety through regular audits, staff training, 
                  and continuous improvement. All our facilities undergo daily safety checks and 
                  monthly comprehensive inspections to ensure complete security for your child.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-amber-700 font-serif mb-2">100%</div>
                <p className="text-amber-800 font-sans font-bold">Safety Compliance</p>
                <p className="text-amber-600 text-sm font-sans">Daily safety audits and checks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Montessori Materials */}
      <section className="py-20 bg-gradient-to-b from-amber-900 to-amber-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 font-serif mb-6">
              Authentic Montessori Materials
            </h2>
            <p className="text-xl text-amber-200 font-sans max-w-3xl mx-auto">
              Complete collection of scientifically designed Montessori learning materials
            </p>
            <div className="w-24 h-1 bg-amber-400 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {montessoriMaterials.map((material, index) => (
              <div key={index} className={`rounded-xl p-8 ${material.color}`}>
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-amber-900 font-sans">{material.category}</h3>
                  <ul className="space-y-3">
                    {material.items.map((item, idx) => (
                      <li key={idx} className="text-amber-800 font-sans text-sm flex items-center justify-center">
                        <FaStar className="text-amber-600 mr-2 text-xs" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-amber-800/30 rounded-2xl p-8 border border-amber-700/50">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-amber-50 font-sans mb-4">Material Maintenance</h3>
              <p className="text-amber-200 font-sans max-w-3xl mx-auto">
                All our Montessori materials are regularly inspected, cleaned, and maintained 
                to ensure they remain in perfect condition for optimal learning. We follow 
                strict protocols for material care and replacement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif mb-6">
              Additional Amenities
            </h2>
            <p className="text-lg text-amber-700 font-sans max-w-3xl mx-auto">
              Comfort and convenience features that enhance the overall experience
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-amber-50 rounded-xl p-8 hover:bg-amber-100 transition-colors duration-300">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-amber-200 flex items-center justify-center">
                      <div className="text-amber-700 text-2xl">
                        {amenity.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-amber-900 font-sans">{amenity.title}</h3>
                    <p className="text-amber-700 font-sans mt-2">{amenity.description}</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-amber-200">
                  <h4 className="font-bold text-amber-800 font-sans mb-3">Features:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {amenity.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                        <span className="text-amber-700 font-sans text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment Features */}
      <section className="py-20 bg-gradient-to-r from-amber-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif mb-6">
              Environment Design Features
            </h2>
            <p className="text-lg text-amber-800 font-sans max-w-3xl mx-auto">
              Thoughtful design elements that create an optimal learning atmosphere
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {environmentFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100">
                    <FaStar className="text-amber-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900 font-sans mb-2">{feature.feature}</h3>
                    <p className="text-amber-700 font-sans text-sm mb-3">{feature.description}</p>
                    <div className="inline-block bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">
                      {feature.benefit}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto shadow-lg">
              <GiTreehouse className="text-amber-600 text-5xl mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-amber-900 font-serif mb-4">
                A Home Away From Home
              </h3>
              <p className="text-amber-800 font-sans">
                Our facilities are designed to feel warm, welcoming, and homely while 
                providing all the resources needed for comprehensive Montessori education. 
                We've created spaces where children feel comfortable, secure, and excited to learn.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Facilities;