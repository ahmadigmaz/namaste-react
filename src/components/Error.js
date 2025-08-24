import React from "react";
import { useRouteError } from "react-router-dom";

export const Error = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
    textAlign: "center",
  };

  const h1Style = {
    fontSize: "5rem",
    margin: "0",
    color: "#ff4b5c",
    textShadow: "2px 2px 10px rgba(0,0,0,0.2)",
  };

  const h2Style = {
    fontSize: "1.8rem",
    marginTop: "1rem",
    color: "#444",
    fontWeight: "400",
  };

  const buttonStyle = {
    marginTop: "2rem",
    padding: "12px 24px",
    fontSize: "1rem",
    backgroundColor: "#ff4b5c",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const err = useRouteError();

  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>OOPS!</h1>
      <h2 style={h2Style}>Something Went Wrong</h2>
      <h2 style={h2Style}>{err.status + " : " + err.statusText}</h2>
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#e63946")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#ff4b5c")}
        onClick={() => window.location.href = "/"}
      >
        Go Back Home
      </button>
    </div>
  );
};
