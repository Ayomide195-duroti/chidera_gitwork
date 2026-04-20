import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "#004d40",
        color: "white",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 }}>SC-EDE</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <span>Home</span>
        <span>About</span>
        <span>Admissions</span>
        <span>Contact</span>
      </div>
    </nav>
  );
};

export default Navbar;
