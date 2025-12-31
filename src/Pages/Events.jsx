import { 
  FaCalendarAlt,
  FaCalendarCheck,
  FaCalendarDay,
  FaCalendarPlus,
  FaCalendarTimes,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaChild,
  FaMusic,
  FaPalette,
  FaBookOpen,
  FaTree,
  FaGraduationCap,
  FaCamera,
  FaStar,
  FaRegCalendarCheck,
  FaRegCalendarMinus
} from 'react-icons/fa';

const Events = () => {
  // Past Events
  const pastEvents = [
    {
      id: 1,
      title: "Annual Day Celebration",
      date: "December 15, 2023",
      time: "5:00 PM - 7:00 PM",
      description: "A spectacular evening showcasing our children's talents through music, dance, and drama performances. Parents, grandparents, and special guests enjoyed the heartwarming performances.",
      imageUrl: "https://tinytykesocala.com/wp-content/uploads/2022/01/blog-big-3.jpg",
      category: "Celebration",
      attendees: "150+",
      highlights: ["Cultural Performances", "Parent Appreciation", "Award Ceremony"]
    },
    {
      id: 2,
      title: "Montessori Workshop for Parents",
      date: "November 20, 2023",
      time: "10:00 AM - 12:30 PM",
      description: "Interactive workshop where parents experienced Montessori activities firsthand and learned how to create Montessori-friendly environments at home.",
      imageUrl: "https://procaresoftware.com/wp-content/uploads/2021/09/PreschoolReady-1024x683.jpeg",
      category: "Workshop",
      attendees: "45 Parents",
      highlights: ["Hands-on Activities", "Q&A Session", "Home Environment Tips"]
    },
    {
      id: 3,
      title: "Nature Walk & Picnic",
      date: "October 28, 2023",
      time: "9:00 AM - 2:00 PM",
      description: "Educational nature walk where children explored local flora and fauna, followed by a fun picnic and outdoor games.",
      imageUrl: "https://kleinspringmontessori.com/wp-content/uploads/2021/06/fb2-1024x768.jpeg",
      category: "Outdoor",
      attendees: "60 Children",
      highlights: ["Nature Exploration", "Outdoor Games", "Picnic Lunch"]
    },
    {
      id: 4,
      title: "Art Exhibition 2023",
      date: "September 30, 2023",
      time: "3:00 PM - 6:00 PM",
      description: "Showcasing creative artworks from our little artists. The exhibition featured paintings, sculptures, and mixed media creations.",
      imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Art",
      attendees: "200+ Visitors",
      highlights: ["Art Display", "Live Demonstrations", "Art Auction"]
    },
    {
      id: 5,
      title: "Sports Day",
      date: "August 26, 2023",
      time: "8:00 AM - 12:00 PM",
      description: "Fun-filled sports activities promoting physical fitness, teamwork, and healthy competition among our young athletes.",
      imageUrl: "https://www.parents.com/thmb/d0qdbY82J3o-2ezdehypjSNXKI0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Parents-Preschool-Age-Stocksy-3668758-4b6915ed8fbd4d32aa00d86fc7ad43ad.jpg",
      category: "Sports",
      attendees: "80 Children",
      highlights: ["Relay Races", "Fun Games", "Medal Ceremony"]
    },
    {
      id: 6,
      title: "Graduation Ceremony",
      date: "July 15, 2023",
      time: "4:00 PM - 6:00 PM",
      description: "A memorable ceremony celebrating our graduating students as they transition to primary school with cap and gown celebration.",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/5ed3d5c0a39cba76b9d957a4/1593054383100-A22CZYRR2JJMXMKYLOEG/graduation.jpg",
      category: "Graduation",
      attendees: "25 Graduates",
      highlights: ["Cap & Gown", "Certificates", "Memory Lane"]
    }
  ];

  // Upcoming Events
  const upcomingEvents = [
    {
      id: 1,
      title: "Spring Festival Celebration",
      date: "March 20, 2024",
      time: "10:00 AM - 12:00 PM",
      description: "Welcome spring with flower-themed activities, nature crafts, and a special outdoor celebration.",
      category: "Festival",
      icon: <FaTree />,
      status: "Confirmed",
      registration: "Open"
    },
    {
      id: 2,
      title: "Parent-Teacher Meetings",
      date: "April 5-6, 2024",
      time: "9:00 AM - 5:00 PM",
      description: "Individual meetings to discuss your child's progress, achievements, and future learning goals.",
      category: "Academic",
      icon: <FaGraduationCap />,
      status: "Scheduled",
      registration: "Required"
    },
    {
      id: 3,
      title: "Summer Camp Registration",
      date: "April 15, 2024",
      time: "Starts 8:00 AM",
      description: "Registration opens for our exciting summer camp program with special workshops and activities.",
      category: "Camp",
      icon: <FaCalendarPlus />,
      status: "Upcoming",
      registration: "Opening Soon"
    },
    {
      id: 4,
      title: "Music & Movement Workshop",
      date: "May 10, 2024",
      time: "3:00 PM - 4:30 PM",
      description: "Special workshop focusing on rhythm, dance, and musical expression for young children.",
      category: "Workshop",
      icon: <FaMusic />,
      status: "Planned",
      registration: "Will Open"
    }
  ];

  // Event Categories with Stats
  const eventCategories = [
    { name: "Celebrations", count: 12, color: "bg-amber-500" },
    { name: "Workshops", count: 8, color: "bg-green-500" },
    { name: "Outdoor", count: 10, color: "bg-blue-500" },
    { name: "Academic", count: 15, color: "bg-purple-500" },
    { name: "Community", count: 6, color: "bg-pink-500" }
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header Banner */}
      <section className="py-16 bg-gradient-to-r from-amber-900 to-amber-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-50 font-serif mb-6">
              Events & Celebrations
            </h1>
            <p className="text-xl text-amber-100 font-sans leading-relaxed">
              Creating memorable experiences and building community through joyful events, 
              celebrations, and learning opportunities.
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
                  Our Event Philosophy
                </h2>
                <div className="w-24 h-1 bg-amber-500 mb-8"></div>
              </div>
              
              <p className="text-lg text-amber-800 font-sans leading-relaxed">
                At Cambridge Montessori, events are more than just dates on the calendar - 
                they are opportunities for learning, community building, and creating 
                cherished memories. Our events are carefully designed to align with 
                Montessori principles while providing enriching experiences for children 
                and families.
              </p>
              
              <p className="text-lg text-amber-800 font-sans leading-relaxed">
                From annual celebrations to educational workshops, each event is planned 
                with purpose and executed with care, ensuring meaningful experiences that 
                contribute to the holistic development of our children.
              </p>
              
              
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <FaChild className="text-amber-600 text-3xl mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 font-sans mb-2">Child-Centered</h3>
                      <p className="text-amber-700 font-sans">
                        Events designed around children's interests and developmental needs
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <FaUsers className="text-amber-600 text-3xl mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 font-sans mb-2">Community Building</h3>
                      <p className="text-amber-700 font-sans">
                        Strengthening connections between children, parents, and educators
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <FaBookOpen className="text-amber-600 text-3xl mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 font-sans mb-2">Educational Focus</h3>
                      <p className="text-amber-700 font-sans">
                        Every event incorporates learning opportunities and skill development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Past Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <FaCalendarTimes className="text-amber-600 text-4xl" />
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 font-serif">
                Past Events & Memories
              </h2>
            </div>
            <p className="text-lg text-amber-700 font-sans max-w-3xl mx-auto">
              Relive the joyful moments and memorable celebrations from our previous events
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-amber-50 rounded-xl overflow-hidden shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 group">
                {/* Event Image */}
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={event.imageUrl} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                </div>

                {/* Event Content */}
                <div className="p-6">
                  {/* Date & Time */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 text-amber-600 font-bold font-sans mb-1">
                      <FaCalendarDay />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-amber-500 font-sans text-sm">
                      <FaClock />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/* Event Title */}
                  <h3 className="text-xl font-bold text-amber-900 font-sans mb-3 group-hover:text-amber-700 transition-colors">
                    {event.title}
                  </h3>

                  {/* Event Description */}
                  <p className="text-amber-700 font-sans mb-6 line-clamp-3">
                    {event.description}
                  </p>

                  
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-gradient-to-b from-amber-900 to-amber-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <FaCalendarCheck className="text-amber-300 text-4xl" />
              <h2 className="text-3xl md:text-4xl font-bold text-amber-50 font-serif">
                Upcoming Events
              </h2>
            </div>
            <p className="text-xl text-amber-200 font-sans max-w-3xl mx-auto">
              Mark your calendar for these exciting upcoming events and celebrations
            </p>
            <div className="w-24 h-1 bg-amber-400 mx-auto mt-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-amber-800/40 rounded-xl p-8 border border-amber-700/50 hover:bg-amber-800/60 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                    {/* Event Icon & Date */}
                    <div className="md:w-1/4">
                      <div className="flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-amber-700/30 flex items-center justify-center mb-4">
                          <div className="text-amber-300 text-3xl">
                            {event.icon}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-amber-50 font-serif">{event.date.split(' ')[1]}</div>
                          <div className="text-amber-300 font-sans">{event.date.split(' ')[0]}</div>
                          <div className="text-amber-400 font-sans text-sm">{event.date.split(' ')[2]}</div>
                        </div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="md:w-3/4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-amber-50 font-sans mb-2">{event.title}</h3>
                          <div className="flex items-center space-x-4 text-amber-300 font-sans mb-3">
                            <span className="flex items-center">
                              <FaClock className="mr-2" /> {event.time}
                            </span>
                            <span className="flex items-center">
                              <FaMapMarkerAlt className="mr-2" /> School Campus
                            </span>
                          </div>
                        </div>
                        
                      </div>

                      <p className="text-amber-100 font-sans mb-6">{event.description}</p>

                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </section>

     

      
    </div>
  );
};

export default Events;