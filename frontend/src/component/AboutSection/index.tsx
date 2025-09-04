import React from "react";
import styles from "./AboutSection.module.scss";

const AboutSection = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.about__container}>
        <div className="max-w-5xl mx-auto text-center">
          {/* Title */}
          <h3 className={styles.about__title}>
            About Mamta Engineering Works
          </h3>

          {/* Description */}
          <p className={styles.about__desc}>
            With decades of expertise in heavy machinery maintenance and repair,
            <span className={styles.highlight}> Mamta Engineering Works </span>
            has established itself as a trusted name in the construction and
            mining industry.  
            We specialize in JCB & Hitachi equipment servicing,
            <span className={styles.underline}> hydraulic systems </span> and
            professional welding solutions — ensuring top-notch performance and
            reliability.
          </p>

          {/* Stats */}
          <div className={styles.about__stats}>
            {[
              { number: "1K+", text: "Machines Serviced", delay: "0.3s" },
              { number: "20+", text: "Years Experience", delay: "0.4s" },
              { number: "7-Days", text: "Emergency Service", delay: "0.5s" },
            ].map((stat, index) => (
              <div
                key={index}
                className={styles.about__stat}
                style={{ animationDelay: stat.delay }}
              >
                <div className={styles.about__stat_number}>
                  {stat.number}
                </div>
                <p className={styles.about__stat_text}>{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
