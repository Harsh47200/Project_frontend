import React, { useState, useEffect } from "react";
import scss from "./Footer.module.scss";
import { GiGearHammer } from "react-icons/gi";
import { FaArrowUp } from "react-icons/fa"; // up arrow icon

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={scss.footer}>
      <div className={scss.footer__container}>
        <div className={scss.footer__content}>
          {/* Logo + Brand */}
          <div className={scss.footer__brand}>
            <div className={scss.footer__logo}>
              <GiGearHammer className={scss.footer__logo_icon} />
            </div>
            <span className={scss.footer__text}>
              Mamta<span>Engineering</span> Works
            </span>
          </div>

          {/* Copyright */}
          <div className={scss.footer__copyright}>
            © {new Date().getFullYear()} Mamta Engineering Works. All rights reserved.
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScroll && (
        <button
          className={scss.footer__scrollTop}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
