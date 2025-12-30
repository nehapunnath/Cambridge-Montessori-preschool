import { 
  FaBookOpen,
  FaGraduationCap,
  FaChild,
  FaBrain,
  FaUsers,
  FaSeedling,
  FaPalette,
  FaMusic,
  FaLanguage,
  FaCalculator,
  FaGlobeAsia,
  FaClock,
  FaCalendarAlt,
  FaCheckCircle,
  FaLightbulb,
  FaHandsHelping,
  FaPuzzlePiece,
  FaChartLine,
  FaUserGraduate,
  FaAward
} from 'react-icons/fa';
import { GiMaterialsScience, GiTreeBranch } from 'react-icons/gi';

const Academics = () => {
  // Montessori Curriculum Areas
  const curriculumAreas = [
    {
      icon: <FaHandsHelping className="text-3xl" />,
      title: "Practical Life",
      description: "Developing independence, coordination, concentration, and self-care skills",
      activities: ["Pouring & Transferring", "Dressing Frames", "Food Preparation", "Care of Environment"],
      ageGroup: "2.5-6 Years",
      color: "bg-gradient-to-br from-amber-100 to-amber-50"
    },
    {
      icon: <FaPuzzlePiece className="text-3xl" />,
      title: "Sensorial",
      description: "Refining the senses and understanding the world through exploration",
      activities: ["Color Tablets", "Geometric Solids", "Sound Cylinders", "Touch Boards"],
      ageGroup: "2.5-6 Years",
      color: "bg-gradient-to-br from-yellow-100 to-amber-100"
    },
    {
      icon: <FaLanguage className="text-3xl" />,
      title: "Language",
      description: "Building vocabulary, writing, reading, and communication skills",
      activities: ["Sandpaper Letters", "Moveable Alphabet", "Phonetic Reading", "Storytelling"],
      ageGroup: "3-6 Years",
      color: "bg-gradient-to-br from-amber-50 to-yellow-50"
    },
    {
      icon: <FaCalculator className="text-3xl" />,
      title: "Mathematics",
      description: "Concrete understanding of numbers, quantities, and mathematical operations",
      activities: ["Number Rods", "Golden Beads", "Decimal System", "Addition & Subtraction"],
      ageGroup: "4-6 Years",
      color: "bg-gradient-to-br from-yellow-50 to-amber-100"
    }
  ];

  // Cultural Subjects
  const culturalSubjects = [
    {
      icon: <GiMaterialsScience className="text-3xl" />,
      title: "Science & Nature",
      description: "Introduction to biology, zoology, and physical science concepts",
      activities: ["Living/Non-living", "Animal Classification", "Plant Life Cycle", "Simple Experiments"]
    },
    {
      icon: <FaGlobeAsia className="text-3xl" />,
      title: "Geography & Culture",
      description: "Exploring continents, countries, cultures, and world diversity",
      activities: ["Continent Maps", "Land & Water Forms", "Cultural Festivals", "Flag Studies"]
    },
    {
      icon: <FaPalette className="text-3xl" />,
      title: "Creative Arts",
      description: "Expression through various art forms and creative mediums",
      activities: ["Painting", "Clay Modeling", "Collage", "Free Drawing"]
    },
    {
      icon: <FaMusic className="text-3xl" />,
      title: "Music & Movement",
      description: "Developing rhythm, coordination, and musical appreciation",
      activities: ["Rhythm Instruments", "Action Songs", "Creative Movement", "Music Appreciation"]
    }
  ];

  // Age Groups and Programs
  const ageGroups = [
    {
      title: "Toddler Program",
      age: "1.5 - 2.5 Years",
      description: "Focus on developing independence, language, and social skills in a nurturing environment",
      focus: ["Gross Motor Skills", "Basic Communication", "Social Interaction", "Routine Development"],
      schedule: "9:00 AM - 12:00 PM",
      ratio: "1:5 Teacher-Child Ratio"
    },
    {
      title: "Primary Program",
      age: "2.5 - 6 Years",
      description: "Complete Montessori curriculum covering all areas of development in mixed-age classrooms",
      focus: ["Academic Foundations", "Social Skills", "Practical Life", "Creative Expression"],
      schedule: "9:00 AM - 3:00 PM",
      ratio: "1:8 Teacher-Child Ratio"
    }
  ];

  // Daily Schedule
  const dailySchedule = [
    { time: "8:30 - 9:00 AM", activity: "Arrival & Free Play", description: "Children settle in with free choice activities" },
    { time: "9:00 - 11:00 AM", activity: "Montessori Work Cycle", description: "Individual and small group lessons with Montessori materials" },
    { time: "11:00 - 11:30 AM", activity: "Snack Time", description: "Healthy snacks in a social setting" },
    { time: "11:30 AM - 12:00 PM", activity: "Outdoor Play", description: "Physical activities and nature exploration" },
    { time: "12:00 - 1:00 PM", activity: "Lunch & Rest", description: "Nutritious lunch followed by quiet time" },
    { time: "1:00 - 2:30 PM", activity: "Special Activities", description: "Art, Music, Storytelling, or Cultural Studies" },
    { time: "2:30 - 3:00 PM", activity: "Group Time & Departure", description: "Closing circle and preparation for home" }
  ];

  // Learning Outcomes
  const learningOutcomes = [
    {
      title: "Academic Readiness",
      outcomes: ["Letter & Number Recognition", "Pre-reading Skills", "Mathematical Concepts", "Scientific Curiosity"]
    },
    {
      title: "Social-Emotional Development",
      outcomes: ["Self-regulation", "Conflict Resolution", "Empathy & Cooperation", "Confidence Building"]
    },
    {
      title: "Physical Development",
      outcomes: ["Fine Motor Skills", "Gross Motor Coordination", "Sensory Integration", "Self-care Abilities"]
    },
    {
      title: "Cognitive Skills",
      outcomes: ["Problem Solving", "Critical Thinking", "Memory Enhancement", "Concentration Skills"]
    }
  ];

  // Assessment Approach
  const assessmentMethods = [
    {
      method: "Observation-Based",
      description: "Teachers continuously observe and document each child's progress and interests"
    },
    {
      method: "Individual Portfolios",
      description: "Collection of work samples, photographs, and observations for each child"
    },
    {
      method: "Parent-Teacher Conferences",
      description: "Regular meetings to discuss development and set goals"
    },
    {
      method: "Progress Reports",
      description: "Detailed reports on developmental milestones and achievements"
    }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header Banner */}
      <section className="py-16 bg-gradient-to-r from-amber-900 to-amber-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-50 font-serif mb-6">
              Our Montessori Curriculum
            </h1>
            <p className="text-xl text-amber-100 font-sans leading-relaxed">
              A comprehensive, child-centered approach that nurtures the whole child - academically, 
              socially, emotionally, and physically.
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
                  Authentic Montessori Education
                </h2>
                <div className="w-24 h-1 bg-amber-500 mb-8"></div>
              </div>
              
              <p className="text-lg text-amber-800 font-sans leading-relaxed">
                At Cambridge Montessori, we follow an authentic Montessori curriculum that has been 
                scientifically developed over 100 years. Our approach respects each child's individual 
                learning pace and style, allowing them to discover concepts through hands-on exploration.
              </p>
              
              <p className="text-lg text-amber-800 font-sans leading-relaxed">
                The Montessori classroom is a carefully prepared environment where children choose 
                their activities from open shelves, work at their own pace, and discover the joy of 
                learning through specially designed materials.
              </p>
              
              <div className="pt-6">
                <button className="bg-amber-600 text-white px-8 py-3 rounded-full font-sans font-medium hover:bg-amber-700 transition-colors">
                  Download Curriculum Guide
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <FaBookOpen className="text-amber-600 text-3xl mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 font-sans mb-2">Research-Based</h3>
                      <p className="text-amber-700 font-sans">
                        Curriculum backed by decades of educational research and child development studies
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <FaChild className="text-amber-600 text-3xl mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 font-sans mb-2">Individualized</h3>
                      <p className="text-amber-700 font-sans">
                        Each child receives personalized lessons based on their interests and abilities
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <FaChartLine className="text-amber-600 text-3xl mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 font-sans mb-2">Progressive Learning</h3>
                      <p className="text-amber-700 font-sans">
                        Sequential materials ensure continuous progression and mastery of concepts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Montessori Curriculum */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif mb-6">
              Core Montessori Curriculum Areas
            </h2>
            <p className="text-lg text-amber-700 font-sans max-w-3xl mx-auto">
              The five essential areas of learning in our Montessori environment
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {curriculumAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
                <div className={`h-3 ${area.color}`}></div>
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                        <div className="text-amber-600">
                          {area.icon}
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-bold text-amber-900 font-sans">{area.title}</h3>
                        <span className="bg-amber-100 text-amber-700 text-sm font-bold px-3 py-1 rounded-full">
                          {area.ageGroup}
                        </span>
                      </div>
                      <p className="text-amber-700 font-sans my-4">{area.description}</p>
                      <div className="mt-6">
                        <h4 className="font-bold text-amber-800 font-sans mb-2">Key Activities:</h4>
                        <div className="flex flex-wrap gap-2">
                          {area.activities.map((activity, idx) => (
                            <span key={idx} className="inline-block bg-amber-50 text-amber-700 text-sm px-3 py-1 rounded-full border border-amber-200">
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cultural Studies Card */}
          <div className="mt-12 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-amber-200 flex items-center justify-center">
                  <GiTreeBranch className="text-amber-700 text-3xl" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-amber-900 font-sans mb-3">Cultural Studies</h3>
                <p className="text-amber-800 font-sans">
                  An integrated approach to Science, Geography, History, Art, and Music that helps children 
                  understand their place in the world and appreciate different cultures and the natural environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Subjects */}
      <section className="py-20 bg-amber-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 font-serif mb-6">
              Cultural & Enrichment Subjects
            </h2>
            <p className="text-xl text-amber-200 font-sans max-w-3xl mx-auto">
              Additional areas that enrich the Montessori curriculum and broaden learning experiences
            </p>
            <div className="w-24 h-1 bg-amber-400 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culturalSubjects.map((subject, index) => (
              <div key={index} className="bg-amber-800/40 rounded-xl p-8 border border-amber-700/50 hover:bg-amber-800/60 transition-colors duration-300">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-700/30">
                    <div className="text-amber-300">
                      {subject.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-amber-50 font-sans">{subject.title}</h3>
                  <p className="text-amber-100 font-sans mb-4">{subject.description}</p>
                  <div className="pt-4 border-t border-amber-700/50">
                    <h4 className="text-amber-300 font-sans font-bold mb-2">Sample Activities:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {subject.activities.slice(0, 2).map((activity, idx) => (
                        <span key={idx} className="inline-block bg-amber-700/30 text-amber-200 text-xs px-2 py-1 rounded-full">
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

      {/* Age Groups and Programs */}
       <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif mb-6">
              Programs by Age Group
            </h2>
            <p className="text-lg text-amber-700 font-sans max-w-3xl mx-auto">
              Age-appropriate programs designed to meet the developmental needs of each stage
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>

          {/* <div className="grid lg:grid-cols-2 gap-12">
            {ageGroups.map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-xl border border-amber-100">
                <div className="mb-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-amber-900 font-sans">{program.title}</h3>
                      <p className="text-amber-600 font-sans font-bold mt-1">{program.age}</p>
                    </div>
                    <span className="bg-amber-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                      {program.schedule}
                    </span>
                  </div>
                  <p className="text-amber-700 font-sans my-6">{program.description}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-amber-800 font-sans mb-3">Primary Focus Areas:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {program.focus.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <FaCheckCircle className="text-amber-500 text-sm" />
                          <span className="text-amber-700 font-sans text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-amber-200">
                    <div className="flex justify-between items-center">
                      <span className="text-amber-600 font-sans font-medium">{program.ratio}</span>
                      <button className="bg-amber-600 text-white px-6 py-2 rounded-full font-sans text-sm hover:bg-amber-700 transition-colors">
                        Program Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Daily Schedule */}
      {/* <section className="py-20 bg-gradient-to-b from-amber-900 to-amber-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 font-serif mb-6">
              A Day at Cambridge Montessori
            </h2>
            <p className="text-xl text-amber-200 font-sans max-w-3xl mx-auto">
              A balanced routine that combines structured learning with free exploration
            </p>
            <div className="w-24 h-1 bg-amber-400 mx-auto mt-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {dailySchedule.map((item, index) => (
                <div key={index} className="bg-amber-800/30 rounded-xl p-6 border border-amber-700/50 hover:bg-amber-800/40 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-1/4">
                      <div className="bg-amber-700/50 text-amber-100 font-bold py-2 px-4 rounded-full text-center">
                        {item.time}
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold text-amber-50 font-sans mb-2">{item.activity}</h3>
                      <p className="text-amber-200 font-sans">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Learning Outcomes */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif mb-6">
              Expected Learning Outcomes
            </h2>
            <p className="text-lg text-amber-700 font-sans max-w-3xl mx-auto">
              The skills and competencies children develop through our Montessori program
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="bg-amber-50 rounded-xl p-8 hover:bg-amber-100 transition-colors duration-300">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-200">
                    <FaLightbulb className="text-amber-700 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 font-sans">{outcome.title}</h3>
                  <ul className="space-y-3">
                    {outcome.outcomes.map((item, idx) => (
                      <li key={idx} className="text-amber-700 font-sans text-sm flex items-center">
                        <FaCheckCircle className="text-amber-500 mr-2 text-sm" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Assessment Approach */}
      {/* <section className="py-20 bg-gradient-to-r from-amber-100 to-yellow-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif mb-6">
              Our Assessment Approach
            </h2>
            <p className="text-lg text-amber-800 font-sans max-w-3xl mx-auto">
              Holistic evaluation methods that respect each child's individual progress
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assessmentMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-700 font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 font-sans">{method.method}</h3>
                  <p className="text-amber-700 font-sans">{method.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-amber-800 font-sans max-w-3xl mx-auto mb-8">
              We believe in assessing the whole child, not just academic skills. Our approach focuses 
              on observing growth in all areas - social, emotional, physical, and cognitive development.
            </p>
            <button className="bg-amber-600 text-white px-10 py-3 rounded-full font-sans font-medium hover:bg-amber-700 transition-colors">
              Request Sample Progress Report
            </button>
          </div>
        </div>
      </section> */} 

     
    </div>
  );
};

export default Academics;