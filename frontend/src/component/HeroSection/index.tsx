import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { FaWhatsappSquare } from "react-icons/fa";
import { Box, Heading, Text, UnorderedList, ListItem, Button, Image } from "@chakra-ui/react";
import scss from "./HeroSection.module.scss";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Expert JCB Maintenance Services",
      subtitle: "Professional repair and maintenance for all JCB models",
      description: [
        "Complete hydraulic system repair, engine overhaul, and genuine parts replacement.",
        "Advanced diagnostic tools used to identify and solve engine issues.",
        "Engine service includes draining old oil, replacing with new oil, and changing filters.",
        "We stock multiple filters: engine oil, diesel, stainer, hydraulic oil, and transmission filters.",
        "Available oils: hydraulic oil, transmission oil, excel oil.",
        "We handle oil changes for transmission, differential, hydraulic, and engine oil systems.",
      ],
      image: "/images/slider2.webp",
      bgColor: "from-yellow-500 to-orange-600",
    },
    {
      title: "Hitachi Equipment Specialists",
      subtitle: "Authorized service center for Hitachi machinery",
      description: [
        "Expert diagnostics, component replacement, and performance optimization.",
      ],
      image: "/images/slider1.jpg",
      bgColor: "from-yellow-500 to-blue-700",
    },
    {
      title: "Hydraulic Pump & Seal Repair",
      subtitle: "Precision hydraulic system solutions",
      description: [
        "Complete pump rebuilding, seal replacement, and system testing.",
      ],
      image: "/images/Hydraulicpump.webp",
      bgColor: "from-green-500 to-teal-600",
    },
    {
      title: "Professional Welding Works",
      subtitle: "All types of welding including hardbasing design",
      description: ["Structural welding, component repair, and custom fabrication."],
      image: "/images/slider4.jpg",
      bgColor: "from-red-200 to-pink-200",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const whatsappNumber = "919913972701";
  const emergencyNumber = "9913972701";

  return (
    <section id="home" className={scss.hero}>
      <div className={scss.hero__container}>
        <div className={scss.hero__slide}>
          <div
            className={`${scss.hero__background} bg-gradient-to-br ${heroSlides[currentSlide].bgColor}`}
          >
            <div className={scss.hero__overlay}></div>

            {/* Slide Image */}
            <Image 
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
              className={scss.hero__image}
            />

            {/* Slide Content */}
            <div className={scss.hero__content}>
              <div className={scss.hero__text}>
                <Heading className={scss.hero__title}>
                  {heroSlides[currentSlide].title}
                </Heading>

                <Text className={scss.hero__subtitle}>
                  {heroSlides[currentSlide].subtitle}
                </Text>

                <UnorderedList className={scss.hero__description}>
                  {heroSlides[currentSlide].description.map((point, idx) => (
                    <ListItem key={idx}>{point}</ListItem>
                  ))}
                </UnorderedList>

                <Box className={scss.hero__buttons}>
                  <Button
                    onClick={() =>
                      window.open(
                        `https://wa.me/${whatsappNumber}?text=Hello, I need service help!`,
                        "_blank"
                      )
                    }
                    className={`${scss.hero__btn} ${scss.hero__btn__primary} flex items-center gap-2`}
                  >
                    <FaWhatsappSquare className="text-green-500 w-5 h-5" />
                    WhatsApp
                  </Button>

                  <Button
                    onClick={() => (window.location.href = `tel:${emergencyNumber}`)}
                    className={`${scss.hero__btn} ${scss.hero__btn__secondary} flex items-center gap-2`}
                  >
                    <Phone className="w-5 h-5 text-red-500" />
                    Call for Emergency
                  </Button>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={`${scss.hero__nav} ${scss.hero__nav__prev}`}
      >
        <ChevronLeft className={scss.hero__nav_icon} />
      </button>
      <button
        onClick={nextSlide}
        className={`${scss.hero__nav} ${scss.hero__nav__next}`}
      >
        <ChevronRight className={scss.hero__nav_icon} />
      </button>

      {/* Indicators */}
      <div className={scss.hero__indicators}>
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`${scss.hero__indicator} ${
              index === currentSlide ? scss.hero__indicator__active : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
