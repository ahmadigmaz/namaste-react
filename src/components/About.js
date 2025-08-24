import React from "react";
import User from "../User";
import UserClass from "../UserClass";

const About = () => {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(to right, #f9f9f9, #e6f7ff)",
        minHeight: "100vh",
        padding: "50px 20px",
        color: "#333",
        textAlign: "center",
      }}
    >
      <User/>
      <UserClass/>
      {/* Heading */}
      <h1
        style={{
          fontSize: "3rem",
          color: "#0077b6",
          marginBottom: "20px",
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        About Us
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
        Discover Our Story & Passion for Great Food 🍴
      </h2>

      {/* Content Section */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          lineHeight: "1.8",
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
        }}
      >
        <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          Welcome to <strong>Foodie's Paradise</strong> – your ultimate
          destination for delicious meals, authentic flavors, and an
          unforgettable dining experience. 🌟
        </p>

        <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          Our journey began with a simple love for food and a mission to bring
          people together. Whether you’re craving traditional Indian spices,
          continental delights, or quick bites, we’ve got something for
          everyone. 🍕🍔🥗
        </p>

        <p style={{ fontSize: "1.1rem" }}>
          We believe that <strong>food is more than just a meal</strong> — it’s
          an emotion, a connection, and a memory in the making. ❤️
        </p>
      </div>

      {/* Vision Section */}
      <div
        style={{
          marginTop: "50px",
          maxWidth: "900px",
          margin: "40px auto",
          padding: "30px",
          background: "#0077b6",
          color: "white",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>✨ Our Vision</h2>
        <p style={{ fontSize: "1.1rem" }}>
          To serve happiness on every plate and to make dining not just about
          food, but about creating joyful experiences for everyone.
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
        © {new Date().getFullYear()} Foodie's Paradise | Made with ❤️ for Food
        Lovers
      </footer>
    </div>
  );
};

export default About;
