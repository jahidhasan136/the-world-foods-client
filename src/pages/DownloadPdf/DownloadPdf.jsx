import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

const DownloadPdf = () => {

    const handleDownload = () => {
        const input = document.getElementById('download-pdf');
        html2canvas(input, { scale: .59, top: 500 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save('blogs.pdf');
        });
    };

    return (
        <div className='flex justify-center'>
            <button className='btn_regular btn bg-red-500 border-0' onClick={handleDownload}>Download Blogs PDF</button>
        </div>
    );
};

export default DownloadPdf;