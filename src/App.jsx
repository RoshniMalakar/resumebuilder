import React, { useState, useRef } from "react";
import Resume from "./Component/Resume";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import "./App.css";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
function App() {
  const pdfRef = useRef();
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input, {
      scale: 3,
      useCORS: true,
      logging: false,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Resume.pdf");
    });
  };
  return (
    <div className="app">
      <Navbar downloadPDF={downloadPDF} />
      <Resume pdfRef={pdfRef} />
      <Footer />
    </div>
  );
}

export default App;
