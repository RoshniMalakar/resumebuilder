import React from "react";
import "../Style/Navbar.css";
function Navbar({ downloadPDF }) {
  return (
    <div className="navbar">
      <p>Resume Builder</p>
      <button onClick={downloadPDF}>
        <i className="fa-solid fa-download"></i> Download Resume
      </button>
    </div>
  );
}

export default Navbar;
