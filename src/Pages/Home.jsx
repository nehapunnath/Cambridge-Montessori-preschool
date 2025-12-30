import { useState, useEffect, useRef } from 'react';
import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaChild, 
  FaGraduationCap, 
  FaUsers, 
  FaTree,
  FaStar,
  FaHeart,
  FaPlay,
  FaQuoteLeft,
  FaSeedling,
  FaPuzzlePiece,
  FaMusic,
  FaPalette
} from 'react-icons/fa';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const marqueeRef = useRef(null);
  
  // Carousel images with Google Images URLs
  const carouselSlides = [
    {
      id: 1,
      title: "Nurturing Young Minds",
      description: "A loving environment where children discover their potential",
      imageUrl: "https://media.istockphoto.com/id/998670532/photo/childs-are-playing-with-play-clay-in-classroom.jpg?s=612x612&w=0&k=20&c=2I7FiImWG-qaoPCd9ksEcY2FyHZKXyEAk7UR_VR2AYo=",
    },
    {
      id: 2,
      title: "Montessori Excellence",
      description: "Child-centered learning for holistic development",
      imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 3,
      title: "Safe & Stimulating Environment",
      description: "Designed spaces that inspire curiosity and growth",
      imageUrl: "https://media.istockphoto.com/id/1402700264/photo/teacher-with-a-group-of-elementary-students-playing-with-toy-blocks.jpg?s=612x612&w=0&k=20&c=VXOEyDfm5ZFbMjZ3Eu1Z62iigeI02SOg7IDmRb5jw3c=",
    }
  ];

  // Gallery images with Google Images URLs - Enhanced for marquee
  const galleryImages = [
    { 
      id: 1, 
      title: "Classroom Activities", 
      category: "Learning",
      imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: 2, 
      title: "Outdoor Play", 
      category: "Play",
      imageUrl: "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 3, 
      title: "Art & Creativity", 
      category: "Art",
      imageUrl: "https://www.eastsidelutheran.org/wp-content/uploads/2025/01/shutterstock_1248701260.jpg" 
    },
    { 
      id: 4, 
      title: "Music Time", 
      category: "Music",
      imageUrl: "https://media.istockphoto.com/id/1402700264/photo/teacher-with-a-group-of-elementary-students-playing-with-toy-blocks.jpg?s=612x612&w=0&k=20&c=VXOEyDfm5ZFbMjZ3Eu1Z62iigeI02SOg7IDmRb5jw3c=" 
    },
    { 
      id: 5, 
      title: "Group Activities", 
      category: "Social",
      imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 6, 
      title: "Nature Exploration", 
      category: "Nature",
      imageUrl: "https://images.ctfassets.net/xf6mqlbz6glx/8E52uYQTE3IaEwsJsRXyM/6cb8bd10362d00687a306bb7f621ebef/Preschool-Kids_holding_hands_walking_school_hall-Preschool.jpg.jpg?fm=jpg&fl=progressive&w=960&q=80" 
    },
    { 
      id: 7, 
      title: "Story Time", 
      category: "Literacy",
      imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      id: 8, 
      title: "Building Skills", 
      category: "Motor Skills",
      imageUrl: "https://images.unsplash.com/photo-1577896851162-1c4738d14413?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
    },
  ];

  // Features/Highlights
  const features = [
    {
      icon: <FaChild className="text-4xl" />,
      title: "Child-Centered Approach",
      description: "Individual attention to each child's unique learning style"
    },
    {
      icon: <FaGraduationCap className="text-4xl" />,
      title: "Certified Educators",
      description: "Montessori-trained teachers with years of experience"
    },
    {
      icon: <FaTree className="text-4xl" />,
      title: "Natural Environment",
      description: "Green spaces and nature-based learning activities"
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Small Class Size",
      description: "Optimal student-teacher ratio for personalized attention"
    }
  ];

  // Learning Areas
  const learningAreas = [
    {
      icon: <FaPuzzlePiece className="text-3xl" />,
      title: "Practical Life",
      description: "Developing independence and fine motor skills"
    },
    {
      icon: <FaSeedling className="text-3xl" />,
      title: "Sensorial",
      description: "Exploring the world through senses"
    },
    {
      icon: <FaMusic className="text-3xl" />,
      title: "Language & Music",
      description: "Building communication and rhythm skills"
    },
    {
      icon: <FaPalette className="text-3xl" />,
      title: "Creative Arts",
      description: "Expressing through art and creativity"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Parent of Arjun (4 years)",
      content: "Cambridge Montessori has transformed my child. He's more independent and curious about learning. The teachers are amazing!",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Parent of Meera (3 years)",
      content: "The Montessori approach here is authentic. My daughter loves coming to school every day. The facilities are excellent.",
      rating: 5
    },
    {
      name: "Anjali Patel",
      role: "Parent of Rohan (5 years)",
      content: "Best preschool in Chandapura! The focus on practical life skills along with academics is commendable.",
      rating: 5
    }
  ];

  // Auto slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Carousel Section with Images */}
      <section className="relative overflow-hidden">
        <div className="relative h-[70vh] md:h-[80vh]">
          {carouselSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${slide.imageUrl}')` }}
              >
                {/* <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-amber-800/60"></div> */}
              </div>
              
              
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-amber-900/80 text-amber-50 p-4 rounded-full hover:bg-amber-900 transition-colors shadow-xl"
        >
          <FaArrowLeft className="text-xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-amber-900/80 text-amber-50 p-4 rounded-full hover:bg-amber-900 transition-colors shadow-xl"
        >
          <FaArrowRight className="text-xl" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-amber-300 w-8' : 'bg-amber-100/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section  */}
      <section className="py-20 bg-amber-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-50 font-serif mb-6">
              Welcome to Cambridge Montessori Preschool
            </h2>
            <div className="w-32 h-1 bg-amber-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-xl text-amber-100 font-sans leading-relaxed">
                At Cambridge Montessori Preschool in Chandapura, we believe in nurturing the natural curiosity and love for learning in every child. Our authentic Montessori approach provides a prepared environment where children can explore, discover, and grow at their own pace.
              </p>
              <p className="text-xl text-amber-100 font-sans leading-relaxed">
                Our dedicated team of Montessori-trained educators creates a warm, welcoming atmosphere that feels like a second home. We focus on developing the whole child - intellectually, emotionally, socially, and physically through hands-on learning experiences.
              </p>
              
            </div>
            <div className="relative">
              <div className="bg-amber-800/50 rounded-3xl p-10 shadow-2xl border border-amber-700">
                <div className="grid grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="text-center space-y-4 p-6 bg-amber-800/30 rounded-2xl hover:bg-amber-800/50 transition-colors">
                      <div className="text-amber-300 flex justify-center">
                        {feature.icon}
                      </div>
                      <h3 className="font-bold text-amber-50 text-lg font-sans">{feature.title}</h3>
                      <p className="text-amber-200 font-sans">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Gallery Section */}
      <section className="py-20 bg-amber-50 overflow-hidden">
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-6">
              Our Learning Moments
            </h2>
            <p className="text-xl text-amber-700 font-sans max-w-3xl mx-auto">
              Capturing the joy of discovery and growth in our vibrant learning environment
            </p>
            <div className="w-32 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-marquee space-x-8 py-4">
              {[...galleryImages, ...galleryImages].map((image, index) => (
                <div
                  key={`${image.id}-${index}`}
                  className="flex-shrink-0 w-80 md:w-96 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative h-96">
                    <img 
                      src={image.imageUrl} 
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-transparent to-transparent flex items-end p-6">
                      {/* <div>
                        <span className="inline-block bg-amber-500 text-amber-900 text-sm font-bold px-4 py-1 rounded-full mb-2">
                          {image.category}
                        </span>
                        <h3 className="text-2xl font-bold text-amber-50 font-sans">{image.title}</h3>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </section>

      {/* Learning Areas Section with amber-900 background */}
      <section className="py-20 bg-amber-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-50 font-serif mb-6">
              Our Montessori Learning Areas
            </h2>
            <p className="text-xl text-amber-200 font-sans max-w-3xl mx-auto mb-8">
              We offer a comprehensive Montessori curriculum across five key learning areas
            </p>
            <div className="w-32 h-1 bg-amber-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningAreas.map((area, index) => (
              <div key={index} className="bg-amber-800/40 rounded-2xl p-8 hover:bg-amber-800/60 transition-all duration-300 transform hover:-translate-y-2 border border-amber-700/30">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-700/30">
                    <div className="text-amber-300">
                      {area.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-amber-50 font-serif">{area.title}</h3>
                  <p className="text-amber-200 font-sans leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 font-serif mb-6">
              What Parents Say About Us
            </h2>
            <div className="w-32 h-1 bg-amber-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-2xl border border-amber-200 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-amber-500 text-xl" />
                  ))}
                </div>
                <FaQuoteLeft className="text-amber-400 text-3xl mb-6" />
                <p className="text-amber-800 font-sans text-lg italic mb-8 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-amber-200 pt-6">
                  <p className="font-bold text-amber-900 text-xl font-sans">{testimonial.name}</p>
                  <p className="text-amber-600 font-sans">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Quick Info Section */}
      <section className="py-16 bg-gradient-to-r from-amber-100 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl">
              <div className="text-4xl font-bold text-amber-700 font-serif mb-2">50+</div>
              <p className="text-lg text-amber-800 font-sans font-bold">Happy Children</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl">
              <div className="text-4xl font-bold text-amber-700 font-serif mb-2">8+</div>
              <p className="text-lg text-amber-800 font-sans font-bold">Years Experience</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl">
              <div className="text-4xl font-bold text-amber-700 font-serif mb-2">1:8</div>
              <p className="text-lg text-amber-800 font-sans font-bold">Teacher Ratio</p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl">
              <div className="text-4xl font-bold text-amber-700 font-serif mb-2">100%</div>
              <p className="text-lg text-amber-800 font-sans font-bold">Safe Environment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;