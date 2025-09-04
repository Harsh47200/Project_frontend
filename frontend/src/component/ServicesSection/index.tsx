import React from "react";
import { Truck, Settings, Wrench, Shield } from "lucide-react";
import scss from "./ServicesSection.module.scss";
import { CSSVariableStyle } from "@/utils/string";

const ServicesSection = () => {
  const services = [
    {
      title: "JCB Maintenance",
      description:
        "Complete maintenance and repair services for JCB machinery with genuine parts and expert technicians.",
      icon: <Truck className={scss.services__card_icon} style={{ "--delay": "0s" } as CSSVariableStyle} />,
    },
    {
      title: "Hitachi Equipment Service",
      description:
        "Professional servicing and repair of Hitachi construction equipment with specialized tools.",
      icon: <Settings className={scss.services__card_icon} style={{ "--delay" : "0.1s" } as CSSVariableStyle} />,
    },
    {
      title: "Hydraulic Pump & Seal Repair",
      description:
        "Expert hydraulic pump rebuilding and seal replacement services for optimal performance.",
      icon: <Wrench className={scss.services__card_icon} style={{ "--delay": "0.2s" } as CSSVariableStyle} />,
    },
    {
      title: "Welding Works",
      description:
        "All types of welding including hardbasing design welding for heavy machinery components.",
      icon: <Shield className={scss.services__card_icon} style={{ "--delay": "0.3s" } as CSSVariableStyle} />,
    },
  ];

  const additional = [
    {
      icon: <Truck className={scss.services__additional_icon} style={{ "--delay": "0.1s" } as CSSVariableStyle} />,
      title: "On-Site Service",
      desc: "We come to your location for repairs and maintenance.",
    },
    {
      icon: <Settings className={scss.services__additional_icon} style={{ "--delay": "0.2s" } as CSSVariableStyle} />,
      title: "Hardbasing Design Welding",
      desc: "Specialized welding for heavy-duty welding road use.",
    },
    {
      icon: <Shield className={scss.services__additional_icon} style={{ "--delay": "0.3s" } as CSSVariableStyle} />,
      title: "Genuine Parts",
      desc: "Quality parts for lasting repairs and performance.",
    },
  ];

  return (
    <section id="services" className={scss.services}>
      <div className={scss.services__container}>
        <h2 className={scss.services__title}>Our Services</h2>
        <p className={scss.services__subtitle}>
          Complete solution for all your heavy machinery needs with expert
          technicians and quality parts.
        </p>
        <p className={scss.services__note}>
          We do not provide JCB services 24x7; however, if any customer faces an immediate issue, there is an additional charge for urgent service. Our shop remains open Monday to Saturday.
        </p>
        <p className={scss.services__note}>
          We work with full care and attention, ensuring once the job is done, customers don’t return with complaints.
        </p>

        {/* Main Services Grid */}
        <div className={scss.services__grid}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${scss.services__card} fade-in`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={scss.services__card_icon}>{service.icon}</div>
              <h4 className={scss.services__card_title}>{service.title}</h4>
              <p className={scss.services__card_desc}>{service.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className={`${scss.services__additional} slide-up`}>
          <h4 className={scss.services__additional_heading}>Additional Services</h4>
          <div className={scss.services__additional_grid}>
            {additional.map((item, index) => (
              <div
                key={index}
                className={`${scss.services__additional_item} bounce-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {item.icon}
                <h5 className={scss.services__additional_title}>{item.title}</h5>
                <p className={scss.services__additional_desc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
