import { useState } from "react";
import "./contactUs.css";
import Layout from "../layout";
import PreFooter from "../partials/PreFooter";
import FeatureIconCard from "../partials/FeatureIconCard";

const apiURL = process.env.REACT_APP_API_URL;
function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${apiURL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (result.status === 200) {
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      }
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <>
    <Layout>
    <div className="contactus-container">
      <div className="contact center">
    
        <div className="form-wrapper center">
          <h3 className="form-heading">Contact Us</h3>
          <form className="center" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              name="name"
              value={formData.name}
              type="text"
              placeholder="Username"
              required
            />
            <input
              onChange={handleChange}
              name="email"
              value={formData.email}
              type="email"
              placeholder="Email"
              required
            />
            <textarea
              onChange={handleChange}
              name="message"
              value={formData.message}
              placeholder="Message"
              required
            ></textarea>
            {!loading && <input type="submit" className="form-btn" />}
            {loading && <div>Loading</div>}
          </form>
        </div>
      </div>
    </div>
    <FeatureIconCard/>
    <PreFooter/>
    </Layout>
    </>
  );
}
export default ContactUs;
