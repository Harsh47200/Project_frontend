import React from "react";
import { Star } from "lucide-react";
import styles from "./TestimonialsSection.module.scss";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Promodbhai Patel",
      company: "Umiya Earthmovers",
      From: "Mahesana",
      rating: 5,
      text: "Excellent service! They repaired our JCB hydraulic system perfectly. Very professional team and reasonable pricing.",
    },
    {
      name: "Jyantibhai Vanzara",
      company: "Patan Earthmovers",
      From:"Patan",
      rating: 5,
      text: "Best welding work in the city. Their hardbasing welding saved our excavator bucket. Highly recommended!",
    },
    {
      name: "Satishbhai Patel",
      company: "Sagar Earthmovers",
      From: "Unjha",
      rating: 5,
      text: "Quick and reliable service. They came to our site and fixed the Hitachi machine on the same day. Great job!",
    },
    {
      name: "Abhaji Vanzara",
      company: "Jay Goga Earthmovers",
      From: "Unjha",
      rating: 5,
      text: "Good quality repair work. Their hydraulic pump service extended our machine life significantly.",
    },
  ];

  return (
    <section id="reviews" className={styles.testimonials}>
      <div className={styles["testimonials__container"]}>
        <h3 className={styles["testimonials__title"]}>What Our Clients Say</h3>
        <p className={styles["testimonials__subtitle"]}>
          Trusted by construction companies across the region
        </p>
        <div className={styles["testimonials__grid"]}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={styles["testimonials__card"]}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles["testimonials__rating"]}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={styles["testimonials__star"]}
                    style={{ "--delay": `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <p className={styles["testimonials__text"]}>
                "{testimonial.text}"
              </p>
              <div className={styles["testimonials__author"]}>
                <div className={styles["testimonials__author_name"]}>
                  {testimonial.name}
                </div>
                <div className={styles["testimonials__author_company"]}>
                  {testimonial.company}
                </div>
                <div className={styles["testimonials__author_company"]}>
                  {testimonial.From}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
