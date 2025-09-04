import React, { useState, useEffect } from "react";
import {
  Star,
  Phone,
  Mail,
  MapPin,
  Wrench,
  Settings,
  Shield,
  Truck,
  ChevronDown,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Navigation,
  Clock,
  Award,
} from "lucide-react";

const MamtaEngineeringWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Expert JCB Maintenance Services",
      subtitle: "Professional repair and maintenance for all JCB models",
      description:
        "Complete hydraulic system repair, engine overhaul, and genuine parts replacement",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&auto=format",
      bgColor: "from-yellow-500 to-orange-600",
    },
    {
      title: "Hitachi Equipment Specialists",
      subtitle: "Authorized service center for Hitachi machinery",
      description:
        "Expert diagnostics, component replacement, and performance optimization",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&auto=format",
      bgColor: "from-blue-500 to-blue-700",
    },
    {
      title: "Hydraulic Pump & Seal Repair",
      subtitle: "Precision hydraulic system solutions",
      description:
        "Complete pump rebuilding, seal replacement, and system testing",
      image:
        "https://images.unsplash.com/photo-1565198020165-3e9e5ee1b862?w=800&h=600&fit=crop&auto=format",
      bgColor: "from-green-500 to-teal-600",
    },
    {
      title: "Professional Welding Works",
      subtitle: "All types of welding including hardbasing design",
      description:
        "Structural welding, component repair, and custom fabrication",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop&auto=format",
      bgColor: "from-red-500 to-pink-600",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const services = [
    {
      title: "JCB Maintenance",
      description:
        "Complete maintenance and repair services for JCB machinery with genuine parts and expert technicians.",
      icon: <Truck className="w-8 h-8" />,
    },
    {
      title: "Hitachi Equipment Service",
      description:
        "Professional servicing and repair of Hitachi construction equipment with specialized tools.",
      icon: <Settings className="w-8 h-8" />,
    },
    {
      title: "Hydraulic Pump & Seal Repair",
      description:
        "Expert hydraulic pump rebuilding and seal replacement services for optimal performance.",
      icon: <Wrench className="w-8 h-8" />,
    },
    {
      title: "Welding Works",
      description:
        "All types of welding including hardbasing design welding for heavy machinery components.",
      icon: <Shield className="w-8 h-8" />,
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Kumar Construction",
      rating: 5,
      text: "Excellent service! They repaired our JCB hydraulic system perfectly. Very professional team and reasonable pricing.",
    },
    {
      name: "Amit Sharma",
      company: "Sharma Excavators",
      rating: 5,
      text: "Best welding work in the city. Their hardbasing welding saved our excavator bucket. Highly recommended!",
    },
    {
      name: "Pradeep Singh",
      company: "Singh Infrastructure",
      rating: 5,
      text: "Quick and reliable service. They came to our site and fixed the Hitachi machine on the same day. Great job!",
    },
    {
      name: "Vikram Patel",
      company: "Patel Earthmovers",
      rating: 4,
      text: "Good quality repair work. Their hydraulic pump service extended our machine life significantly.",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(234, 179, 8, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(234, 179, 8, 0.6),
              0 0 40px rgba(234, 179, 8, 0.3);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }
        @keyframes bounce-in {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes slide-up {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          background-size: 200px 100%;
          animation: shimmer 2s infinite;
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .glass-morphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .neon-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .neon-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        .neon-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s;
        }
        .neon-button:hover::before {
          left: 100%;
        }

        .service-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(234, 179, 8, 0.1),
            transparent
          );
          transition: left 0.6s;
        }
        .service-card:hover::before {
          left: 100%;
        }
        .service-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .testimonial-card {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .testimonial-card:hover {
          transform: translateY(-5px) rotateX(5deg);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        .floating-icon {
          animation: float 3s ease-in-out infinite;
          animation-delay: var(--delay, 0s);
        }

        .contact-card {
          transition: all 0.3s ease;
          position: relative;
        }
        .contact-card:hover {
          transform: scale(1.05) rotateY(5deg);
        }
        .contact-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(45deg, #fbbe243b, #f0e2cbff);
          color:black
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .contact-card:hover::after {
          opacity: 1;
        }
      `}</style>

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 animate-fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 animate-slide-up">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse-glow neon-button">
                <Truck
                  className="w-6 h-6 sm:w-8 sm:h-8 text-black font-bold floating-icon"
                  style={{ "--delay": "0s" }}
                />
              </div>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 truncate hover:text-yellow-600 transition-colors duration-300">
                  Mamta Engineering Works
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block animate-shimmer">
                  Heavy Machinery Specialists
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 xl:space-x-8 animate-slide-up">
              {["Home", "Services", "About", "Reviews", "Contact"].map(
                (item, index) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-yellow-600 transition-all duration-300 text-sm xl:text-base relative neon-button px-3 py-1 rounded-lg"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item}
                  </a>
                )
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 -mr-2 hover:bg-gray-100 rounded-lg transition-all duration-300 neon-button"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 hover:rotate-180 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 border-t pt-3 sm:pt-4 animate-bounce-in glass-morphism rounded-lg">
              <div className="flex flex-col space-y-1">
                {["Home", "Services", "About", "Reviews", "Contact"].map(
                  (item, index) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-700 hover:text-yellow-600 py-2 px-2 rounded transition-all duration-300 neon-button"
                      onClick={() => setIsMenuOpen(false)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section with Slider */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="relative h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                index === currentSlide
                  ? "translate-x-0"
                  : index < currentSlide
                  ? "-translate-x-full"
                  : "translate-x-full"
              }`}
            >
              <div
                className={`h-full bg-gradient-to-br ${slide.bgColor} relative`}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.3,
                  }}
                ></div>
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                  <div className="max-w-2xl lg:max-w-4xl text-white animate-fade-in">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight animate-slide-up">
                      {slide.title}
                    </h2>
                    <p
                      className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-3 sm:mb-4 md:mb-6 font-medium animate-slide-up"
                      style={{ animationDelay: "0.2s" }}
                    >
                      {slide.subtitle}
                    </p>
                    <p
                      className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl animate-slide-up"
                      style={{ animationDelay: "0.4s" }}
                    >
                      {slide.description}
                    </p>
                    <div
                      className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up"
                      style={{ animationDelay: "0.6s" }}
                    >
                      <button className="bg-white text-gray-800 px-6 sm:px-8 py-3 rounded-lg font-semibold neon-button relative overflow-hidden">
                        Get Quote Now
                      </button>
                      <button className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold neon-button glass-morphism">
                        Call for Emergency
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 glass-morphism text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-20 hidden sm:block neon-button"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 glass-morphism text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-20 hidden sm:block neon-button"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 neon-button ${
                index === currentSlide
                  ? "bg-white animate-pulse-glow"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Description Section with Photos */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-6 animate-slide-up">
                Why Choose Mamta Engineering Works?
              </h3>
              <p
                className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-4 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                We are your trusted partner for heavy machinery maintenance and
                repair services. With state-of-the-art equipment and experienced
                technicians, we ensure your machines operate at peak
                performance.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
              {[
                {
                  title: "JCB Specialists",
                  desc: "Certified technicians for all JCB models and components",
                  img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop&auto=format",
                  color: "yellow",
                },
                {
                  title: "Hitachi Experts",
                  desc: "Authorized service center with genuine parts availability",
                  img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=200&fit=crop&auto=format",
                  color: "blue",
                },
                {
                  title: "Hydraulic Systems",
                  desc: "Precision pump repair and seal replacement services",
                  img: "https://images.unsplash.com/photo-1565198020165-3e9e5ee1b862?w=300&h=200&fit=crop&auto=format",
                  color: "green",
                },
                {
                  title: "Professional Welding",
                  desc: "Expert hardbasing and structural welding solutions",
                  img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop&auto=format",
                  color: "red",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center group animate-slide-up service-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-xl mb-3 sm:mb-4 transform transition-all duration-500">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-36 sm:h-40 md:h-48 lg:h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-${item.color}-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500`}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <h4
                    className={`font-semibold text-gray-800 mb-2 text-sm sm:text-base lg:text-lg group-hover:text-${item.color}-600 transition-colors duration-300`}
                  >
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 px-2 group-hover:text-gray-800 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="glass-morphism rounded-2xl p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-gray-50 to-gray-100">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-6 animate-slide-up">
                    On-Site Service Excellence
                  </h4>
                  <p
                    className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 animate-slide-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    We understand that downtime costs money. That's why we offer
                    comprehensive on-site services to minimize your equipment
                    downtime. Our mobile service units are equipped with the
                    latest diagnostic tools and a wide range of spare parts.
                  </p>
                  <ul className="space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
                    {[
                      {
                        icon: Shield,
                        text: "Emergency 24/7 support",
                        delay: "0.3s",
                      },
                      {
                        icon: Shield,
                        text: "Mobile workshop facility",
                        delay: "0.4s",
                      },
                      {
                        icon: Shield,
                        text: "Genuine parts guarantee",
                        delay: "0.5s",
                      },
                      {
                        icon: Shield,
                        text: "Skilled certified technicians",
                        delay: "0.6s",
                      },
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center animate-slide-up"
                        style={{ animationDelay: item.delay }}
                      >
                        <item.icon
                          className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0 floating-icon"
                          style={{ "--delay": `${index * 0.2}s` }}
                        />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="relative order-1 lg:order-2 animate-slide-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=400&fit=crop&auto=format"
                    alt="Mobile Service Unit"
                    className="rounded-xl shadow-lg w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transform hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black from-0% via-transparent to-transparent rounded-xl"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white animate-bounce-in">
                    <p className="font-semibold text-sm sm:text-base">
                      Mobile Service Unit
                    </p>
                    <p className="text-xs sm:text-sm opacity-90">
                      We come to you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 animate-slide-up">
              Our Services
            </h3>
            <p
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Complete solution for all your heavy machinery needs with expert
              technicians and quality parts
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 rounded-xl shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="text-yellow-600 mb-3 sm:mb-4 floating-icon"
                  style={{ "--delay": `${index * 0.2}s` }}
                >
                  {service.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">
                  {service.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="mt-8 sm:mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 sm:p-8 rounded-xl glass-morphism animate-bounce-in">
            <h4 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-gray-800">
              Additional Services
            </h4>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  icon: Truck,
                  title: "On-Site Service",
                  desc: "We come to your location for repairs and maintenance",
                  delay: "0.1s",
                },
                {
                  icon: Settings,
                  title: "Hardbasing Design Welding",
                  desc: "Specialized welding for heavy-duty applications",
                  delay: "0.2s",
                },
                {
                  icon: Shield,
                  title: "Genuine Parts",
                  desc: "Quality parts for lasting repairs and performance",
                  delay: "0.3s",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: item.delay }}
                >
                  <item.icon
                    className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-600 mx-auto mb-2 sm:mb-3 floating-icon"
                    style={{ "--delay": `${index * 0.3}s` }}
                  />
                  <h5 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                    {item.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-12 sm:py-16 bg-gradient-to-br from-gray-100 to-gray-200"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 animate-slide-up">
              About Mamta Engineering Works
            </h3>
            <p
              className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              With years of experience in heavy machinery maintenance and
              repair, Mamta Engineering Works has become a trusted name in the
              construction and mining industry. We specialize in JCB and Hitachi
              equipment servicing, hydraulic systems, and professional welding
              services.
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12">
              {[
                { number: "500+", text: "Machines Serviced", delay: "0.3s" },
                { number: "10+", text: "Years Experience", delay: "0.4s" },
                { number: "24/7", text: "Emergency Service", delay: "0.5s" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center service-card p-4 rounded-xl bg-white shadow-lg animate-slide-up"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-600 mb-1 sm:mb-2 animate-pulse-glow">
                    {stat.number}
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Location Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 animate-slide-up">
              Our Location
            </h3>
            <p
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Visit our well-equipped workshop or call us for on-site service
              anywhere in Mumbai and surrounding areas
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="animate-slide-up">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1577086664693-894d8405334a?w=600&h=400&fit=crop&auto=format"
                    alt="Workshop Location Map View"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white animate-bounce-in">
                    <h4 className="text-lg sm:text-xl font-bold mb-2">
                      Industrial Area, Sector 15
                    </h4>
                    <p className="text-sm sm:text-base opacity-90">
                      Mumbai, Maharashtra - Prime Industrial Location
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2 animate-pulse-glow">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                  </div>
                </div>
              </div>

              <div
                className="animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="space-y-6">
                  <div className="contact-card bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <MapPin
                        className="w-8 h-8 text-blue-600 mr-4 floating-icon"
                        style={{ "--delay": "0s" }}
                      />
                      <h4 className="text-xl font-bold text-gray-800">
                        Workshop Address
                      </h4>
                    </div>
                    <p className="text-gray-600 mb-2">
                      Industrial Area, Sector 15
                    </p>
                    <p className="text-gray-600 mb-2">
                      Near Main Highway Junction
                    </p>
                    <p className="text-gray-600">Mumbai, Maharashtra 400001</p>
                  </div>

                  <div className="contact-card bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Clock
                        className="w-8 h-8 text-green-600 mr-4 floating-icon"
                        style={{ "--delay": "0.5s" }}
                      />
                      <h4 className="text-xl font-bold text-gray-800">
                        Working Hours
                      </h4>
                    </div>
                    <div className="space-y-2 text-gray-600">
                      <p>
                        <span className="font-semibold">
                          Monday - Saturday:
                        </span>{" "}
                        8:00 AM - 8:00 PM
                      </p>
                      <p>
                        <span className="font-semibold">Sunday:</span> 9:00 AM -
                        5:00 PM
                      </p>
                      <p>
                        <span className="font-semibold text-red-600">
                          Emergency:
                        </span>{" "}
                        24/7 Available
                      </p>
                    </div>
                  </div>

                  <div className="contact-card bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                      <Navigation
                        className="w-8 h-8 text-yellow-600 mr-4 floating-icon"
                        style={{ "--delay": "1s" }}
                      />
                      <h4 className="text-xl font-bold text-gray-800">
                        Service Area
                      </h4>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <p>• Mumbai Central</p>
                      <p>• Navi Mumbai</p>
                      <p>• Thane District</p>
                      <p>• Kalyan-Dombivli</p>
                      <p>• Vasai-Virar</p>
                      <p>• Pune (On-call)</p>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold neon-button flex items-center justify-center space-x-2 text-lg">
                    <Navigation className="w-5 h-5" />
                    <span>Get Directions</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Map Placeholder */}
            <div
              className="mt-8 sm:mt-12 animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl p-8 relative overflow-hidden">
                <div className="text-center mb-6">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                    Interactive Workshop Map
                  </h4>
                  <p className="text-gray-600">
                    Click to view detailed location and directions
                  </p>
                </div>

                <div className="relative bg-white rounded-xl p-6 shadow-inner min-h-64 flex items-center justify-center group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                      <MapPin className="w-10 h-10 text-blue-600 floating-icon" />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-800 mb-2">
                      Mamta Engineering Works
                    </h5>
                    <p className="text-gray-600 text-sm mb-4">
                      Industrial Area, Sector 15, Mumbai
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium neon-button">
                      Open in Maps
                    </button>
                  </div>

                  {/* Decorative map elements */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div
                    className="absolute top-6 right-8 w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div
                    className="absolute bottom-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 animate-slide-up">
              What Our Clients Say
            </h3>
            <p
              className="text-base sm:text-lg text-gray-600 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Trusted by construction companies across the region
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card bg-white p-4 sm:p-6 rounded-xl shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-2 sm:mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current floating-icon"
                      style={{ "--delay": `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-3">
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-16 bg-gradient-to-br from-yellow-600 to-orange-600 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 animate-slide-up">
              Get In Touch
            </h3>
            <p
              className="text-base sm:text-lg animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Ready to service your heavy machinery? Contact us today!
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mb-8 sm:mb-12">
            {[
              {
                icon: Phone,
                title: "Phone",
                details: ["+91 98244 62201", "+91 87654 32109"],
                delay: "0.1s",
              },
              {
                icon: Mail,
                title: "Email",
                details: [
                  "info@mamtaengineering.com",
                  "service@mamtaengineering.com",
                ],
                delay: "0.2s",
              },
              {
                icon: MapPin,
                title: "Location",
                details: ["Industrial Area, Sector 15", "Mumbai, Maharashtra"],
                delay: "0.3s",
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="text-center contact-card p-6 rounded-xl glass-morphism animate-slide-up"
                style={{ animationDelay: contact.delay }}
              >
                <contact.icon
                  className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 floating-icon"
                  style={{ "--delay": `${index * 0.5}s` }}
                />
                <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                  {contact.title}
                </h4>
                {contact.details.map((detail, i) => (
                  <p key={i} className="text-sm sm:text-base opacity-90">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="text-center">
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <button className="bg-black text-yellow-400 px-6 sm:px-8 py-3 rounded-lg font-semibold neon-button relative overflow-hidden">
                Request Service Call
              </button>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold neon-button glass-morphism">
                Emergency Hotline
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-0 animate-slide-up">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded flex items-center justify-center animate-pulse-glow">
                <Truck className="w-4 h-4 sm:w-6 sm:h-6 text-black floating-icon" />
              </div>
              <span className="text-base sm:text-lg font-semibold">
                Mamta Engineering Works
              </span>
            </div>
            <div
              className="text-xs sm:text-sm text-gray-400 text-center sm:text-right animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              © 2025 Mamta Engineering Works. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MamtaEngineeringWebsite;
