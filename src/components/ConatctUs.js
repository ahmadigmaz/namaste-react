import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-10">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
        Contact Us
      </h1>

      {/* Sub Heading */}
      <h2 className="text-xl text-gray-600 text-center mb-8">
        We’d love to hear from you 📞✉️
      </h2>

      {/* Contact Card */}
      <div className="bg-gray-50 rounded-xl shadow-inner p-6 mb-10 space-y-4 text-gray-700">
        <p className="text-lg">
          📍 <strong>Address:</strong> Foodie's Paradise HQ, New Delhi, India
        </p>
        <p className="text-lg">
          📞 <strong>Phone:</strong>{" "}
          <a
            href="tel:+918077926132"
            className="text-green-600 font-medium hover:underline"
          >
            +91 80779 26132
          </a>
        </p>
        <p className="text-lg">
          ✉️ <strong>Email:</strong>{" "}
          <a
            href="mailto:igmazahmad@gmail.com"
            className="text-green-600 font-medium hover:underline"
          >
            igmazahmad@gmail.com
          </a>
        </p>
      </div>

      {/* Extra Section */}
      <div className="text-center space-y-3 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800">💬 Get in Touch</h2>
        <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Have questions, feedback, or just want to say hello? We’re always here
          to help! Reach out through phone or email, and we’ll get back to you
          as soon as possible.
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-8 border-t pt-4">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-green-600">Foodie's Paradise</span> | 
        Connect with us anytime
      </footer>
    </div>
  );
};

export default Contact;
