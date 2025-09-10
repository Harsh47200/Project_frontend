import React, { useState, useEffect } from "react";
import { Star, Calendar, IndianRupee, ChevronLeft, ChevronRight } from "lucide-react";
import Swal from "sweetalert2";
import scss from "./RentJcbSection.module.scss";
import { Image } from "@chakra-ui/react";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  state: string;
  district: string;
  village: string;
  rentTime: string;
  equipmentType: string;
}

interface RentOption {
  value: string;
  label: string;
  rate: number;
}

const JCBRentSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const API_URL = "https://67b25adb260b.ngrok-free.app";

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    state: "",
    district: "",
    village: "",
    rentTime: "",
    equipmentType: "JCB",
  });

  const jcbImages = [
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&h=900&fit=crop",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=900&fit=crop",
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1600&h=900&fit=crop",
  ];

  const rentTimeOptions: RentOption[] = [
    { value: "1hour", label: "1 Hour", rate: 1100 },
    { value: "2hours", label: "2 Hours", rate: 2200 },
    { value: "halfday", label: "Half Day", rate: 5500 },
    { value: "fullday", label: "Full Day", rate: 8800 },
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
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatCurrency = (value: number) => new Intl.NumberFormat("en-IN").format(value);

  const calculateRate = () => {
    const selected = rentTimeOptions.find((option) => option.value === formData.rentTime);
    return selected ? selected.rate : 0;
  };

  const validate = () => {
    if (!formData.name || !formData.email || !formData.mobile || !formData.state || !formData.district || !formData.village || !formData.rentTime) {
      Swal.fire("Missing fields", "Please fill all fields", "warning");
      return false;
    }
    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      Swal.fire("Invalid Mobile Number", "Please enter a valid 10-digit Indian mobile number", "error");
      return false;
    }
    if (!/^[A-Za-z0-9+_.-]+@(.+)$/.test(formData.email)) {
      Swal.fire("Invalid Email", "Please enter a valid email address", "warning");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    try {
      const payload = { ...formData, rate: calculateRate() };
      // const response = await fetch("http://localhost:8080/api/contact/rent-request", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });
      const response = await fetch(`${API_URL}/api/contact/rent-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (response.ok && data.status === "success") {
        Swal.fire("✅ Request Submitted!", data.message || "Your request has been submitted successfully!", "success");
        setFormData({
          name: "", email: "", mobile: "", state: "", district: "", village: "", rentTime: "", equipmentType: "JCB",
        });
      } else {
        Swal.fire("Submission Failed", data.message || "Failed to submit request.", "error");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Failed!", "Failed to submit request. Please try again.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % jcbImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + jcbImages.length) % jcbImages.length);

  return (
    <section id="rentjcb" className={scss["jcb-rent-section"]}>
      <div className={scss["jcb-rent-section__container"]}>
        {/* Header */}
        <div className={scss["jcb-rent-section__header"]}>
          <h2 className={scss["jcb-rent-section__title"]}>JCB & Equipment Rental Services</h2>
          <p className={scss["jcb-rent-section__subtitle"]}>
            Premium heavy machinery rental with professional operators. Construction, excavation & industrial projects made easy.
          </p>
        </div>

        {/* Content Grid */}
        <div className={scss["jcb-rent-section__content-grid"]}>
          {/* Gallery */}
          <div className={scss["jcb-rent-section__gallery"]}>
            <div className={scss["jcb-rent-section__main-image-container"]}>
              <Image className={scss["jcb-rent-section__main-image"]} src={jcbImages[currentImageIndex]} alt="JCB Equipment" />
              <div className={scss["jcb-rent-section__image-overlay"]}>
                <div className={scss["jcb-rent-section__overlay-content"]}>
                  <span className={scss["jcb-rent-section__availability-badge"]}>Available Now</span>
                  <div className={scss["jcb-rent-section__rating"]}>
                    <Star size={18} />
                    4.8
                  </div>
                </div>
              </div>
              <div className={`${scss["jcb-rent-section__nav-arrow"]} ${scss["jcb-rent-section__nav-arrow--left"]}`} onClick={prevImage}><ChevronLeft /></div>
              <div className={`${scss["jcb-rent-section__nav-arrow"]} ${scss["jcb-rent-section__nav-arrow--right"]}`} onClick={nextImage}><ChevronRight /></div>
            </div>
            <div className={scss["jcb-rent-section__thumbnails"]}>
              {jcbImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`${scss["jcb-rent-section__thumbnail"]} ${currentImageIndex === idx ? scss.active : ""}`}
                  onClick={() => setCurrentImageIndex(idx)}
                >
                  <Image src={img} alt="" />
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className={scss["jcb-rent-section__form-container"]}>
            <div className={scss["jcb-rent-section__form-card"]}>
              <div className={scss["jcb-rent-section__form-header"]}>
                <h3>Book Your Equipment</h3>
                <p>Fill the form below to reserve your equipment.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className={scss["jcb-rent-section__form-group"]}>
                  <label>Full Name *</label>
                  <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" />
                </div>
                <div className={scss["jcb-rent-section__form-group"]}>
                  <label>Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" />
                </div>
                <div className={scss["jcb-rent-section__form-group"]}>
                  <label>Mobile Number *</label>
                  <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="Enter 10-digit mobile number" />
                </div>
                <div className={scss["jcb-rent-section__form-group"]}>
                  <label>Equipment Type *</label>
                  <select name="equipmentType" value={formData.equipmentType} onChange={handleInputChange}>
                    <option value="JCB">JCB Equipment</option>
                    <option value="Breaker">Breaker Equipment</option>
                  </select>
                </div>
                <div className={scss["jcb-rent-section__form-group"]}>
                  <label>State *</label>
                  <select name="state" value={formData.state} onChange={handleInputChange}>
                    <option value="">Select State</option>
                    {indianStates.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className={scss["jcb-rent-section__form-group"]}>
                  <label>District *</label>
                  <input name="district" value={formData.district} onChange={handleInputChange} placeholder="Enter district" />
                </div>
                <div className={scss["jcb-rent-section__form-group"]}>
                  <label>Village/City *</label>
                  <input name="village" value={formData.village} onChange={handleInputChange} placeholder="Enter village or city" />
                </div>
                <div className={scss["jcb-rent-section__form-group"]}>
                  <label>Rental Duration *</label>
                  <select name="rentTime" value={formData.rentTime} onChange={handleInputChange}>
                    <option value="">Select rental duration</option>
                    {rentTimeOptions.map((o) => (
                      <option key={o.value} value={o.value}>{o.label} - ₹{formatCurrency(o.rate)}</option>
                    ))}
                  </select>
                </div>

                {formData.rentTime && (
                  <div className={scss["jcb-rent-section__rate"]}>
                    <span>Total Rate:</span>
                    <div>
                      <IndianRupee />
                      {formatCurrency(calculateRate())}
                    </div>
                  </div>
                )}

                <button type="submit" className={scss["jcb-rent-section__submit-btn"]} disabled={submitting}>
                  <Calendar /> Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JCBRentSection;
