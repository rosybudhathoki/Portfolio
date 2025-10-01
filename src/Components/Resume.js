import React, { useState, useEffect } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import '../Resume.css';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [wid, setWid] = useState(window.innerWidth);

  const handleResize = () => setWid(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='ResumePage'>
      <Document file={pdf} className="resumeview">
        <Page pageNumber={1} scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1} />
      </Document>

      <a href={pdf} target='_blank' download="RosyBudhathokiResume">
        <button className='downloadResume' type='button'>
          <h3><BsDownload />&nbsp; Download Resume</h3>
        </button>
      </a>
    </div>
  )
}

export default Resume;
