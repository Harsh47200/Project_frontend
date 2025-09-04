import React, { useState, useEffect } from "react";
import {
  Truck,
  Clock,
  MapPin,
  Phone,
  Star,
  Calendar,
  IndianRupee,
  Settings,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import scss from "./RentJcbSection.module.scss";
import Swal from "sweetalert2";

const JCBRentSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "", // NEW
    mobile: "",
    state: "",
    district: "",
    village: "",
    rentTime: "",
    equipmentType: "JCB",
  });

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-IN").format(value);

  const jcbImages = [
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&h=900&fit=crop",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=900&fit=crop",
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1600&h=900&fit=crop",
    "https://images.unsplash.com/photo-1565198020165-3e9e5ee1b862?w=1600&h=900&fit=crop",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&h=900&fit=crop",
  ];

  const rentTimeOptions = [
    { value: "1hour", label: "1 Hour", rate: 1100 },
    { value: "2hours", label: "2 Hours", rate: 2200 },
    { value: "halfday", label: "Half Day", rate: 5500 },
    { value: "fullday", label: "Full Day", rate: 8800 },
    { value: "1year", label: "1 Year", rate: 2920000 },
    { value: "moreyear", label: "More than 1 Year", rate: 2920000 },
  ];

  const breakerRentOptions = [
    { value: "1hour", label: "1 Hour", rate: 1400 },
    { value: "2hours", label: "2 Hours", rate: 2800 },
    { value: "halfday", label: "Half Day", rate: 7000 },
    { value: "fullday", label: "Full Day", rate: 11200 },
    { value: "1year", label: "1 Year", rate: 3720000 },
    { value: "moreyear", label: "More than 1 Year", rate: 3720000 },
  ];

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % jcbImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [jcbImages.length]);

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateRate = () => {
    const options =
      formData.equipmentType === "JCB" ? rentTimeOptions : breakerRentOptions;
    const selected = options.find((option) => option.value === formData.rentTime);
    return selected ? selected.rate : 0;
  };

  const validate = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.state ||
      !formData.district ||
      !formData.village ||
      !formData.rentTime
    ) {
      Swal.fire({
        title: "Missing fields",
        text: "Please fill all fields",
        icon: "warning",
        confirmButtonText: "OK",
        timer: 1800,
        backdrop: false,
        showClass: { popup: "animate__animated animate__fadeInDown" },
        hideClass: { popup: "animate__animated animate__fadeOutUp" },
      });
      return false;
    }
    const mobileOk = /^[6-9]\d{9}$/.test(formData.mobile);
    if (!mobileOk) {
      Swal.fire({
        title: "Invalid Mobile Number",
        text: "Please enter a valid 10-digit Indian mobile number",
        icon: "error",
        confirmButtonText: "OK",
        backdrop: true,
        showClass: { popup: "animate__animated animate__shakeX" },
        hideClass: { popup: "animate__animated animate__fadeOutUp" },
      });
      return false;
    }
    const emailOk = /^[A-Za-z0-9+_.-]+@(.+)$/.test(formData.email);
    if (!emailOk) {
      Swal.fire({
        title: "Invalid Email",
        text: "Please enter a valid email address",
        icon: "warning",
        confirmButtonText: "OK",
        backdrop: true,
        showClass: { popup: "animate__animated animate__fadeInDown" },
        hideClass: { popup: "animate__animated animate__fadeOutUp" },
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      const payload = { ...formData, rate: calculateRate() };

      // Hitting Spring Boot directly (CORS already allowed for http://localhost:3000)
      const response = await fetch("http://localhost:8080/api/contact/rent-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok && data.status === "success") {
        Swal.fire({
          title: "✅ Request Submitted!",
          text: data.message || "Your request has been submitted successfully! We’ll contact you immediately.",
          icon: "success",
          confirmButtonText: "OK",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });

        setFormData({
          name: "",
          email: "",
          mobile: "",
          state: "",
          district: "",
          village: "",
          rentTime: "",
          equipmentType: "JCB",
        });
      }
      else {
        Swal.fire({
          title: "Submission Failed",
          text: data.message || "Failed to submit request. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
          backdrop: true,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Failed!",
        text: "Failed to submit request. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
        backdrop: true,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } finally {
      setSubmitting(false);
    }
  };

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % jcbImages.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + jcbImages.length) % jcbImages.length);

  return (
    <section id="rentjcb" className={scss["jcb-rent-section"]}>
      <div className={scss["jcb-rent-section__container"]}>
        {/* Header */}
        <motion.div
          className={scss["jcb-rent-section__header"]}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className={scss["jcb-rent-section__title"]}>
            JCB & Equipment Rental Services
          </h2>
          <p className={scss["jcb-rent-section__subtitle"]}>
            Premium heavy machinery rental with professional operators. <br />
            Construction, excavation & industrial projects made easy.
          </p>
        </motion.div>

        <div className={scss["jcb-rent-section__content-grid"]}>
          {/* Image Gallery */}
          <motion.div
            className={scss["jcb-rent-section__gallery"]}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className={scss["jcb-rent-section__main-image-container"]}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={jcbImages[currentImageIndex]}
                  alt={`JCB Equipment ${currentImageIndex + 1}`}
                  className={scss["jcb-rent-section__main-image"]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1.2 }}
                />
              </AnimatePresence>
              <div className={scss["jcb-rent-section__image-overlay"]}>
                <div className={scss["jcb-rent-section__overlay-content"]}>
                  <div>
                    <span className={scss["jcb-rent-section__availability-badge"]}>
                      Available Now
                    </span>
                    <h3 className={scss["jcb-rent-section__equipment-title"]}>
                      {formData.equipmentType} Equipment
                    </h3>
                  </div>
                  <div className={scss["jcb-rent-section__rating"]}>
                    <Star size={20} fill="currentColor" />
                    <span>4.8</span>
                  </div>
                </div>
              </div>

              {/* Arrows */}
              <button
                className={`${scss["jcb-rent-section__nav-arrow"]} ${scss["jcb-rent-section__nav-arrow--left"]}`}
                onClick={prevImage}
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className={`${scss["jcb-rent-section__nav-arrow"]} ${scss["jcb-rent-section__nav-arrow--right"]}`}
                onClick={nextImage}
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className={scss["jcb-rent-section__thumbnails"]}>
              {jcbImages.map((image, index) => (
                <div
                  key={index}
                  className={`${scss["jcb-rent-section__thumbnail"]} ${currentImageIndex === index ? scss["active"] : ""
                    }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Rental Form */}
          <motion.div
            className={scss["jcb-rent-section__form-container"]}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className={scss["jcb-rent-section__form-card"]}>
              <div className={scss["jcb-rent-section__form-header"]}>
                <h3>Book Your Equipment</h3>
                <p>Fill the form to get instant quote</p>
              </div>
              <form className={scss["jcb-rent-section__form"]} onSubmit={handleSubmit}>
                <div className={scss["jcb-rent-section__form-group"]}>
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className={scss["jcb-rent-section__form-group"]}>
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                  />
                </div>

                <div className={scss["jcb-rent-section__form-group"]}>
                  <label>Mobile Number *</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter 10-digit mobile number"
                  />
                </div>

                <div className={scss["jcb-rent-section__form-group"]}>
                  <label>Equipment Type *</label>
                  <select
                    name="equipmentType"
                    value={formData.equipmentType}
                    onChange={handleInputChange}
                  >
                    <option value="JCB">JCB Equipment</option>
                    <option value="Breaker">Breaker Equipment</option>
                  </select>
                </div>

                <div className={scss["jcb-rent-section__form-row"]}>
                  <div className={scss["jcb-rent-section__form-group"]}>
                    <label>State *</label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                    >
                      <option value="">Select State</option>
                      {indianStates.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className={scss["jcb-rent-section__form-group"]}>
                    <label>District *</label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      placeholder="Enter district"
                    />
                  </div>
                </div>

                <div className={scss["jcb-rent-section__form-group"]}>
                  <label>Village/City *</label>
                  <input
                    type="text"
                    name="village"
                    value={formData.village}
                    onChange={handleInputChange}
                    placeholder="Enter village or city name"
                  />
                </div>

                <div className={scss["jcb-rent-section__form-group"]}>
                  <label>Rental Duration *</label>
                  <select
                    name="rentTime"
                    value={formData.rentTime}
                    onChange={handleInputChange}
                  >
                    <option value="">Select rental duration</option>
                    {(
                      formData.equipmentType === "JCB"
                        ? rentTimeOptions
                        : breakerRentOptions
                    ).map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label} - ₹{formatCurrency(o.rate)}
                      </option>
                    ))}
                  </select>
                </div>

                {formData.rentTime && (
                  <div className={scss["jcb-rent-section__rate"]}>
                    <span>Total Rate:</span>
                    <div>
                      <IndianRupee size={20} />
                      <span>{formatCurrency(calculateRate())}</span>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className={scss["jcb-rent-section__submit-btn"]}
                  disabled={submitting}
                >
                  <Calendar size={20} /> {submitting ? "Submitting..." : "Book Now"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JCBRentSection;
