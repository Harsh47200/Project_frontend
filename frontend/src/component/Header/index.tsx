import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { GiGearHammer } from "react-icons/gi";
import scss from "./Header.module.scss";
import { clsx } from "@/utils/string";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = ["Home", "Services", "About", "Reviews", "RentJcb", "Contact"];

  return (
    <header className={scss.header}>
      <div className={scss.header__container}>
        <div className={scss.header__content}>
          {/* Brand Logo */}
          <div className={scss.header__brand}>
            <div className={scss.header__logo}>
              <GiGearHammer className={scss.header__logo_icon} />
            </div>
            <div className={scss.header__text}>
              <h1 className={scss.header__title}>
                Mamta<span>Engineering</span>
              </h1>
              <p className={scss.header__subtitle}>
                Heavy Machinery Specialists
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className={scss.header__nav}>
            {menuItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={scss.header__nav_link}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className={scss.header__mobile_btn} onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className={clsx(scss.header__menu_icon, scss.header__menu_icon__close)} />
            ) : (
              <Menu className={scss.header__menu_icon} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={scss.header__mobile_nav}>
            <div className={scss.header__mobile_nav_content}>
              {menuItems.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={scss.header__mobile_nav_link}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
