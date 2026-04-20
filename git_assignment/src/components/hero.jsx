import React from "react";

const Hero = () => {
  const collegeName = import.meta.env.VITE_COLLEGE_NAME;

  return (
    <div
      style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "#e0f2f1",
        borderBottom: "5px solid #004d40",
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "#004d40" }}>{collegeName}</h1>
      <p style={{ fontSize: "1.2rem", color: "#333" }}>
        Excellence in Learning, Character, and Service.
      </p>
      <p>Located in the heart of Ede, Osun State.</p>
      <button
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          background: "#004d40",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Apply Now
      </button>
    </div>
  );
};

export default Hero;
