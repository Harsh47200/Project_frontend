import React from "react";
import { Shield } from "lucide-react";
import scss from "./DescriptionSection.module.scss";
import { clsx } from "@/utils/string";
import { Image } from "@chakra-ui/react";

const DescriptionSection = () => {
  const features = [
    {
      title: "JCB Specialists",
      desc: "Certified technicians for all JCB models and components.",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&auto=format",
      color: "yellow",
    },
    {
      title: "Hitachi Experts",
      desc: "Authorized service center with genuine parts availability.",
      img: "/images/Hitachi.jpg",
      color: "orange",
    },
    {
      title: "Hydraulic Systems",
      desc: "Precision pump repair and seal replacement services.",
      img: "/images/product.webp",
      color: "green",
    },
    {
      title: "Professional Welding",
      desc: "Expert hardbasing and structural welding solutions.",
      img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop&auto=format",
      color: "red",
    },
  ];

  const services = [
    { text: "Emergency 7-days support", delay: "0.2s" },
    { text: "Maintenance workshop facility", delay: "0.3s" },
    { text: "Genuine parts", delay: "0.4s" },
    { text: "Skilled certified technicians", delay: "0.5s" },
  ];

  return (
    <section className={scss.description}>
      <div className={scss.description__container}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={scss.description__header}>
            <h3 className={scss.description__title}>
              Why Choose Mamta Engineering Works?
            </h3>
            <p className={clsx(scss.description__subtitle, scss.fadeIn)}>
              We are your trusted partner for heavy machinery maintenance and
              repair services. With state-of-the-art equipment and experienced
              technicians, we ensure your machines operate at peak performance.
            </p>
            <p className={clsx(scss.description__subtitle, scss.fadeIn)}>
              Dear customer, when you join us, you will receive all the services
              of JCB with great satisfaction. Our goal is to provide the best
              JCB service without compromising your equipment.
            </p>
          </div>

          {/* Features Grid */}
          <div className={scss.description__grid}>
            {features.map((item, index) => (
              <div
                key={index}
                className={clsx(scss.description__card, scss[item.color])}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={scss.description__card_image}>
                  <Image src={item.img} alt={item.title} />
                  <div className={scss.description__card_overlay}></div>
                </div>
                <h4 className={scss.description__card_title}>{item.title}</h4>
                <p className={scss.description__card_desc}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Service Section */}
          <div className={scss.description__service}>
            <div className={scss.description__service_content}>
              <div className={scss.description__service_text}>
                <h4 className={scss.description__service_title}>
                  On-Site Service Excellence
                </h4>
                <p className={scss.description__service_desc}>
                  <strong>Maintenance & Repair:</strong> Professional services
                  for maintaining and repairing JCB equipment, including routine
                  inspections, troubleshooting, and timely repairs.
                  <br />
                  <strong>Technical Support:</strong> If the JCB breaks down on
                  the road, our forman will guide drivers on call to resolve the
                  issue immediately.
                </p>

                <ul className={scss.description__service_list}>
                  {services.map((item, index) => (
                    <li
                      key={index}
                      className={scss.description__service_item}
                      style={{ animationDelay: item.delay }}
                    >
                      <Shield className={scss.description__service_icon} />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className={scss.description__service_image}>
                <Image
                  src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&auto=format"
                  alt="Mobile Service Unit"
                />
                <div className={scss.description__service_overlay}></div>
                <div className={scss.description__service_caption}>
                  <p className={scss.description__service_caption_title}>
                    Mobile Service Unit
                  </p>
                  <p className={scss.description__service_caption_subtitle}>
                    We come to you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
