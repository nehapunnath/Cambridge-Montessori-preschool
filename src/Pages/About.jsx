import { 
  FaHistory, 
  FaBullseye, 
  FaHandsHelping, 
  FaUserGraduate, 
  FaAward,
  FaHeart,
  FaUsers,
  FaLeaf,
  FaGlobe,
  FaBookOpen,
  FaStar,
  FaQuoteRight,
  FaGraduationCap,
  FaChild,
  FaSchool,
  FaShieldAlt,
  FaChalkboardTeacher,
  FaBrain,
  FaHandHoldingHeart,
  FaSeedling,
  FaLightbulb
} from 'react-icons/fa';

const About = () => {
  // School Values
  const values = [
    {
      icon: <FaChild className="text-3xl" />,
      title: "Child-Centered",
      description: "Every child is unique with their own pace and learning style"
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Nurturing Care",
      description: "Safe, loving environment that feels like home"
    },
    {
      icon: <FaLeaf className="text-3xl" />,
      title: "Natural Learning",
      description: "Connection with nature and hands-on experiences"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Community",
      description: "Building strong partnerships with parents and families"
    }
  ];

  // Montessori Principles
  const principles = [
    {
      title: "Respect for the Child",
      description: "We honor each child's individuality and respect their choices and pace of learning.",
      icon: <FaHandsHelping />
    },
    {
      title: "Prepared Environment",
      description: "Classrooms are carefully designed to encourage independence and exploration.",
      icon: <FaSchool />
    },
    {
      title: "Auto-education",
      description: "Children learn naturally through interaction with their environment.",
      icon: <FaBookOpen />
    },
    {
      title: "Hands-on Learning",
      description: "Concrete materials help children understand abstract concepts.",
      icon: <FaGraduationCap />
    }
  ];

  // Learning Environment Features
  const environmentFeatures = [
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Safe & Secure",
      description: "CCTV surveillance, secure premises, and child-friendly safety measures"
    },
    {
      icon: <FaChalkboardTeacher className="text-2xl" />,
      title: "Qualified Guides",
      description: "Montessori-certified teachers with special training in early childhood education"
    },
    {
      icon: <FaBrain className="text-2xl" />,
      title: "Stimulating Materials",
      description: "Authentic Montessori materials that engage all senses and promote cognitive development"
    },
    {
      icon: <FaHandHoldingHeart className="text-2xl" />,
      title: "Emotional Support",
      description: "Emphasis on emotional intelligence and social-emotional learning"
    }
  ];

  // Developmental Focus Areas
  const focusAreas = [
    {
      title: "Cognitive Development",
      description: "Building problem-solving skills, memory, and logical thinking through Montessori materials",
      icon: <FaLightbulb />,
      activities: ["Puzzle solving", "Sorting activities", "Pattern recognition"]
    },
    {
      title: "Social Skills",
      description: "Learning cooperation, sharing, and communication through group activities",
      icon: <FaUsers />,
      activities: ["Group projects", "Role-playing", "Collaborative games"]
    },
    {
      title: "Physical Development",
      description: "Enhancing fine and gross motor skills through purposeful activities",
      icon: <FaSeedling />,
      activities: ["Practical life activities", "Outdoor play", "Sensorial exercises"]
    },
    {
      title: "Creative Expression",
      description: "Encouraging imagination and self-expression through various art forms",
      icon: <FaGraduationCap />,
      activities: ["Art studio time", "Music & movement", "Storytelling"]
    }
  ];

  // Parent Partnership
  const parentPartnership = [
    {
      title: "Regular Updates",
      description: "Daily reports and weekly newsletters to keep parents informed"
    },
    {
      title: "Parent Workshops",
      description: "Monthly sessions on child development and Montessori parenting"
    },
    {
      title: "Open Door Policy",
      description: "Parents are welcome to visit and observe classroom activities"
    },
    {
      title: "Individual Meetings",
      description: "Regular parent-teacher conferences to discuss child's progress"
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Mission & Vision Banner */}
      <section className="py-16 bg-gradient-to-r from-amber-900 to-amber-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-50 font-serif mb-8">
              About Cambridge Montessori
            </h1>
            <p className="text-xl text-amber-100 font-sans leading-relaxed">
              Nurturing independent thinkers and lifelong learners through authentic Montessori education 
              in the heart of Chandapura since 2015.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif mb-6">
                  Our Story
                </h2>
                <div className="w-24 h-1 bg-amber-500 mb-8"></div>
              </div>
              
              <p className="text-lg text-amber-800 font-sans leading-relaxed">
                Cambridge Montessori Preschool was founded in 2015 with a vision to bring authentic 
                Montessori education to the Chandapura community. Our founder, Dr. Anjali Sharma, 
                a passionate educator with over 15 years of experience in child development, 
                recognized the need for a learning environment that truly respects and nurtures 
                each child's individual potential.
              </p>
              
              <p className="text-lg text-amber-800 font-sans leading-relaxed">
                What began as a small preschool with 12 children has grown into a thriving learning 
                community serving over 50 families. Our journey has been guided by the timeless principles 
                of Dr. Maria Montessori, adapted to contemporary needs while preserving the essence 
                of child-centered education.
              </p>
              
             
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <FaHistory className="text-amber-600 text-3xl mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 font-sans mb-2">Our Heritage</h3>
                      <p className="text-amber-700 font-sans">
                        Rooted in Montessori philosophy, enriched with modern pedagogy
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <FaGlobe className="text-amber-600 text-3xl mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 font-sans mb-2">Our Community</h3>
                      <p className="text-amber-700 font-sans">
                        Serving families in Chandapura and surrounding areas since 2015
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <FaAward className="text-amber-600 text-3xl mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 font-sans mb-2">Our Recognition</h3>
                      <p className="text-amber-700 font-sans">
                        Certified Montessori program with continuous quality improvement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-amber-700 font-sans max-w-2xl mx-auto">
              The principles that guide everything we do at Cambridge Montessori
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 font-sans">{value.title}</h3>
                  <p className="text-amber-700 font-sans">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Montessori Principles */}
      <section className="py-20 bg-amber-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 font-serif mb-6">
              Montessori Philosophy
            </h2>
            <p className="text-xl text-amber-200 font-sans max-w-3xl mx-auto">
              The guiding principles that make our approach unique and effective
            </p>
            <div className="w-24 h-1 bg-amber-400 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-amber-800/50 rounded-xl p-8 border border-amber-700 hover:bg-amber-800/70 transition-colors duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-amber-700/30 flex items-center justify-center">
                      <div className="text-amber-300 text-xl">
                        {principle.icon}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-50 font-sans mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-amber-100 font-sans leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-amber-800/30 rounded-2xl p-8 border border-amber-700/50">
            <div className="flex items-center space-x-4">
              <FaQuoteRight className="text-amber-300 text-4xl" />
              <p className="text-2xl text-amber-50 font-serif italic">
                "The goal of early childhood education should be to activate the child's own natural desire to learn."
              </p>
            </div>
            <p className="text-amber-300 font-sans mt-4 text-right">— Dr. Maria Montessori</p>
          </div>
        </div>
      </section>

      {/* Learning Environment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif mb-6">
              Our Learning Environment
            </h2>
            <p className="text-lg text-amber-700 font-sans max-w-3xl mx-auto">
              A carefully prepared space designed to inspire curiosity and independent learning
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {environmentFeatures.map((feature, index) => (
              <div key={index} className="bg-amber-50 rounded-xl p-6 hover:bg-amber-100 transition-colors duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-amber-200 flex items-center justify-center">
                    <div className="text-amber-600">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-amber-900 font-sans">{feature.title}</h3>
                  <p className="text-amber-700 font-sans text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-amber-900 font-serif mb-6 text-center">
              Why Our Environment Matters
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-amber-800 font-sans">Child-Sized Everything</h4>
                <p className="text-amber-700 font-sans">
                  Furniture, shelves, and materials are all proportioned to children's size, 
                  promoting independence and accessibility.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-amber-800 font-sans">Order & Beauty</h4>
                <p className="text-amber-700 font-sans">
                  Everything has its place, creating a sense of order that helps children 
                  feel secure and focused.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developmental Focus Areas */}
      <section className="py-20 bg-gradient-to-b from-amber-900 to-amber-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 font-serif mb-6">
              Holistic Development Focus
            </h2>
            <p className="text-xl text-amber-200 font-sans max-w-3xl mx-auto">
              We nurture all aspects of your child's growth and development
            </p>
            <div className="w-24 h-1 bg-amber-400 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-amber-800/40 rounded-xl p-8 border border-amber-700/50 hover:bg-amber-800/60 transition-colors duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-amber-700/30 flex items-center justify-center">
                      <div className="text-amber-300 text-2xl">
                        {area.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-amber-50 font-sans mb-3">{area.title}</h3>
                    <p className="text-amber-100 font-sans mb-4">{area.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {area.activities.map((activity, idx) => (
                        <span key={idx} className="inline-block bg-amber-700/50 text-amber-200 text-sm px-3 py-1 rounded-full">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Partnership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif mb-6">
              Parent Partnership
            </h2>
            <p className="text-lg text-amber-700 font-sans max-w-3xl mx-auto">
              We believe that education is a partnership between school and home
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {parentPartnership.map((item, index) => (
              <div key={index} className="bg-amber-50 rounded-xl p-8 text-center hover:bg-amber-100 transition-colors duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-200 text-amber-700 font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-amber-900 font-sans mb-3">{item.title}</h3>
                <p className="text-amber-700 font-sans">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-amber-800 font-sans max-w-3xl mx-auto mb-8">
              We maintain open communication channels and involve parents in their child's 
              learning journey through regular updates, workshops, and collaborative events.
            </p>
           
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-amber-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-amber-800/30 rounded-2xl p-10 border border-amber-700/50">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-700/30">
                  <FaBullseye className="text-amber-300 text-3xl" />
                </div>
                <h3 className="text-3xl font-bold text-amber-50 font-serif">Our Mission</h3>
                <p className="text-xl text-amber-100 font-sans leading-relaxed">
                  To provide an authentic Montessori environment that nurtures independent, 
                  confident, and compassionate learners who are prepared for life's journey 
                  with curiosity, respect, and joy.
                </p>
              </div>
            </div>
            
            <div className="bg-amber-800/30 rounded-2xl p-10 border border-amber-700/50">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-700/30">
                  <FaGlobe className="text-amber-300 text-3xl" />
                </div>
                <h3 className="text-3xl font-bold text-amber-50 font-serif">Our Vision</h3>
                <p className="text-xl text-amber-100 font-sans leading-relaxed">
                  To be the leading Montessori preschool in Chandapura, recognized for 
                  excellence in early childhood education and for developing future 
                  leaders who contribute positively to their communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation & Recognition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-amber-900 font-serif mb-4">
              Our Commitment to Excellence
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-amber-50 rounded-xl">
              <FaUserGraduate className="text-amber-600 text-4xl mx-auto mb-4" />
              <p className="font-sans text-amber-800 font-medium">Montessori Certified Faculty</p>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-xl">
              <FaAward className="text-amber-600 text-4xl mx-auto mb-4" />
              <p className="font-sans text-amber-800 font-medium">Quality Education Standards</p>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-xl">
              <FaGraduationCap className="text-amber-600 text-4xl mx-auto mb-4" />
              <p className="font-sans text-amber-800 font-medium">Early Childhood Certification</p>
            </div>
            <div className="text-center p-6 bg-amber-50 rounded-xl">
              <FaStar className="text-amber-600 text-4xl mx-auto mb-4" />
              <p className="font-sans text-amber-800 font-medium">Parent Recommended</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;