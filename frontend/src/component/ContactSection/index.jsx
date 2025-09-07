import React, { useState } from "react";
import { Phone, Mail, MapPin, X } from "lucide-react";
import Swal from 'sweetalert2';
import scss from "./ContactSection.module.scss";

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState({ sms: false, email: false });
  const [messages, setMessages] = useState({ sms: "", email: "" });
  const [showEmergencyForm, setShowEmergencyForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phoneNumber: '',
    details: ''
  });
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const handleRequestService = async () => {
    setIsLoading(prev => ({ ...prev, sms: true }));
    setMessages(prev => ({ ...prev, sms: "" }));

    try {
      // const response = await fetch('http://localhost:8080/api/contact/service-request', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     phoneNumber: "+917990178938", // Your target phone
      //     message: "Service request from website user"
      //   })
      // });

      const response = await fetch(`${API_URL}/api/contact/service-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: "+917990178938", // Your target phone
          message: "Service request from website user"
        })
      });

      const data = await response.json();

      if (data.status === 'success') {
        Swal.fire({
          icon: 'success',
          title: 'SMS Sent!',
          text: 'Service request SMS sent successfully!',
          confirmButtonText: 'OK',
          confirmButtonColor: '#10b981',
          timer: 3000,
          timerProgressBar: true
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'SMS Failed',
          text: 'Failed to send SMS: ' + data.message,
          confirmButtonText: 'OK',
          confirmButtonColor: '#ef4444'
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error: ' + error.message,
        confirmButtonText: 'OK',
        confirmButtonColor: '#ef4444'
      });
    } finally {
      setIsLoading(prev => ({ ...prev, sms: false }));
    }
  };

  const handleEmergencyHotline = () => {
    setShowEmergencyForm(true);
  };

  const handleFormSubmit = async () => {
    // Validate required fields
    if (!formData.email.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Email Required',
        text: 'Please enter your email address',
        confirmButtonText: 'OK',
        confirmButtonColor: '#f59e0b'
      });
      return;
    }

    setIsLoading(prev => ({ ...prev, email: true }));

    try {
      // const response = await fetch('http://localhost:8080/api/contact/emergency-email', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData)
      // });

      const response = await fetch(`${API_URL}/api/contact/emergency-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.status === 'success') {
        setShowEmergencyForm(false);
        setFormData({ email: '', name: '', phoneNumber: '', details: '' });

        Swal.fire({
          icon: 'success',
          title: 'Emergency Email Sent!',
          html: `
            <div style="text-align: center;">
              <p style="font-size: 16px; margin-bottom: 10px;">Emergency email sent successfully!</p>
              <div style="font-size: 24px; margin: 10px 0;">🚨📧</div>
              <p style="font-size: 14px; color: #666;">Check your email for emergency support details and next steps.</p>
            </div>
          `,
          confirmButtonText: 'Got it!',
          confirmButtonColor: '#dc2626',
          timer: 5000,
          timerProgressBar: true,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Email Failed',
          text: 'Failed to send email: ' + result.message,
          confirmButtonText: 'OK',
          confirmButtonColor: '#ef4444'
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Network error. Please try again.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#ef4444'
      });
      console.error('Emergency email error:', error);
    } finally {
      setIsLoading(prev => ({ ...prev, email: false }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const closeForm = () => {
    setShowEmergencyForm(false);
    setFormData({ email: '', name: '', phoneNumber: '', details: '' });
  };

  return (
    <>
      <section id="contact" className={scss.contact}>
        <div className={scss.contact__overlay}></div>
        <div className={scss.contact__container}>
          <div className={scss.contact__title}>Get In Touch</div>
          <p className={scss.contact__subtitle}>
            Ready to service your heavy machinery? Contact us today!
          </p>
          <div className={scss.contact__grid}>
            {[
              {
                icon: (
                  <Phone
                    className={scss.contact__card_icon}
                    style={{ "--delay": "0.1s" }}
                  />
                ),
                title: "Phone",
                details: ["+91 98244 62201", "+91 99139 72701"],
                delay: "0.1s",
              },
              {
                icon: (
                  <Mail
                    className={scss.contact__card_icon}
                    style={{ "--delay": "0.2s" }}
                  />
                ),
                title: "Email",
                details: [
                  "upeshsharma213@gmail.com",
                  "sanjaysharma213@gmail.com",
                ],
                delay: "0.2s",
              },
              {
                icon: (
                  <MapPin
                    className={scss.contact__card_icon}
                    style={{ "--delay": "0.3s" }}
                  />
                ),
                title: "Location",
                details: ["Near Bus Station, Highway Road, Unjha, Gujarat"],
                delay: "0.3s",
              },
            ].map((contact, index) => (
              <div
                key={index}
                className={scss.contact__card}
                style={{ animationDelay: contact.delay }}
              >
                {contact.icon}
                <h4 className={scss.contact__card_title}>{contact.title}</h4>
                {contact.details.map((detail, i) => (
                  <p key={i} className={scss.contact__card_text}>
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className={scss.contact__buttons}>
            <button
              className={`${scss.contact__btn} ${scss.contact__btn__primary}`}
              onClick={handleRequestService}
              disabled={isLoading.sms}
            >
              {isLoading.sms ? (
                <>
                  <span>📱</span> Sending SMS...
                </>
              ) : (
                <>
                  <span>🔧</span> Request Service Call
                </>
              )}
            </button>
            <button
              className={`${scss.contact__btn} ${scss.contact__btn__secondary}`}
              onClick={handleEmergencyHotline}
              disabled={isLoading.email}
            >
              {isLoading.email ? (
                <>
                  <span>📧</span> Sending Email...
                </>
              ) : (
                <>
                  <span>🚨</span> Emergency Hotline
                </>
              )}
            </button>
          </div>

          {/* Status Messages */}
          {(messages.sms || messages.email) && (
            <div className={scss.contact__messages}>
              {messages.sms && (
                <div className={scss.contact__message}>
                  <p>{messages.sms}</p>
                </div>
              )}
              {messages.email && (
                <div className={scss.contact__message}>
                  <p>{messages.email}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Emergency Form Modal */}
      {showEmergencyForm && (
        <div className={scss.modal__overlay}>
          <div className={scss.modal__container}>
            <div className={scss.modal__header}>
              <h2 className={scss.modal__title}>
                🚨 Emergency Support Request
              </h2>
              <button
                className={scss.modal__close}
                onClick={closeForm}
                type="button"
              >
                <X size={20} />
              </button>
            </div>

            <div className={scss.modal__content}>
              <div className={scss.form__group}>
                <label className={scss.form__label}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={scss.form__input}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className={scss.form__group}>
                <label className={scss.form__label}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={scss.form__input}
                  placeholder="Enter your name"
                />
              </div>

              <div className={scss.form__group}>
                <label className={scss.form__label}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className={scss.form__input}
                  placeholder="+91XXXXXXXXXX"
                />
              </div>

              <div className={scss.form__group}>
                <label className={scss.form__label}>
                  Emergency Details
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  className={scss.form__textarea}
                  rows="4"
                  placeholder="Describe your emergency situation..."
                />
              </div>

              <div className={scss.modal__actions}>
                <button
                  type="button"
                  onClick={closeForm}
                  className={`${scss.contact__btn} ${scss.contact__btn__cancel}`}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleFormSubmit}
                  disabled={isLoading.email}
                  className={`${scss.contact__btn} ${scss.contact__btn__emergency}`}
                >
                  {isLoading.email ? (
                    <>
                      <span>📧</span> Sending...
                    </>
                  ) : (
                    <>
                      <span>🚨</span> Send Emergency Email
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactSection;