import React, { useState } from 'react';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

function Contact() {
  const [result, setResult] = useState(""); // State to store result message
  const [loading, setLoading] = useState(false); // State to manage loading state

  const notifySuccess = () => toast.success("Form Submitted Successfully!");
  const notifyError = (message) => toast.error(`Error: ${message}`);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "a704aac7-6f72-455e-bbdd-f2b439def32c");

    formData.append("name", event.target.name.value);
    formData.append("email", event.target.email.value);
    formData.append("message", event.target.message.value);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      setLoading(false); // Stop loading

      if (data.success) {
        setResult("Form Submitted Successfully");
        notifySuccess(); // Show success toast
        event.target.reset(); // Clear form fields
      } else {
        let errorMessage = data.message || "Something went wrong.";
        if (data.message === "Invalid Access Key") {
          errorMessage = "Invalid access key. Please verify.";
        } else if (data.message === "Form marked as spam") {
          errorMessage = "Your form has been marked as spam. Contact support.";
        }
        setResult(`Error: ${errorMessage}`);
        notifyError(errorMessage); // Show error toast
      }
    } catch (error) {
      setLoading(false); // Stop loading in case of error
      setResult("An unexpected error occurred. Please try again later.");
      notifyError("An unexpected error occurred. Please try again."); // Show error toast
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum earum reprehenderit harum dicta vitae, recusandae reiciendis repellendus quaerat inventore sapiente obcaecati delectus hic blanditiis placeat. Suscipit illum</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>msdimthi6@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>+918610825009</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>Bengaluru</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="message">Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>

          <button type="submit" className="contact-submit" disabled={loading}>
            {loading ? "Sending..." : "Submit now"}
          </button>

          {/* Display result message below form if needed */}
          {result && <p className="form-result">{result}</p>}
        </form>
      </div>
      <ToastContainer /> {/* Add ToastContainer for toast notifications */}
    </div>
  );
}

export default Contact;
