import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(to right, #e0f7fa, #f1f8e9)",
        minHeight: "100vh",
        padding: "50px 20px",
        color: "#333",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontSize: "3rem",
          color: "#2e7d32",
          marginBottom: "20px",
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        Contact Us
      </h1>

      {/* Sub Heading */}
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "400",
          marginBottom: "30px",
          color: "#555",
        }}
      >
        We’d love to hear from you 📞✉️
      </h2>

      {/* Contact Card */}
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
          textAlign: "left",
        }}
      >
        <p style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
          📍 <strong>Address:</strong> Foodie's Paradise HQ, New Delhi, India
        </p>
        <p style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
          📞 <strong>Phone:</strong>{" "}
          <a
            href="tel:+918077926132"
            style={{ textDecoration: "none", color: "#2e7d32" }}
          >
            +91 80779 26132
          </a>
        </p>
        <p style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
          ✉️ <strong>Email:</strong>{" "}
          <a
            href="mailto:igmazahmad@gmail.com"
            style={{ textDecoration: "none", color: "#1565c0" }}
          >
            igmazahmad@gmail.com
          </a>
        </p>
      </div>

      {/* Extra Section */}
      <div
        style={{
          marginTop: "50px",
          maxWidth: "800px",
          margin: "40px auto",
          padding: "30px",
          background: "#2e7d32",
          color: "white",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>💬 Get in Touch</h2>
        <p style={{ fontSize: "1.1rem" }}>
          Have questions, feedback, or just want to say hello? We’re always here
          to help! Reach out through phone or email, and we’ll get back to you
          as soon as possible.
        </p>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "60px",
          fontSize: "0.9rem",
          color: "#777",
        }}
      >
        © {new Date().getFullYear()} Foodie's Paradise | Connect with us anytime
      </footer>
    </div>
  );
};

export default Contact;
