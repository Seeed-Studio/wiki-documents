import React from 'react';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.css';

interface PdfDownloadButtonProps {
  className?: string;
}

const PdfDownloadButton: React.FC<PdfDownloadButtonProps> = ({ className }) => {
  const location = useLocation();

  const handleDownloadPdf = () => {
    // clean print version for the page
    const printContent = document.querySelector('article')?.cloneNode(true) as HTMLElement;
    
    if (!printContent) {
      console.error('Could not find article content');
      window.print();
      return;
    }

    const pdfButton = printContent.querySelector('.pdfButtonContainer');
    if (pdfButton) {
      pdfButton.remove();
    }

    //get page title
    const pageTitle = document.querySelector('h1')?.textContent || 
                     document.querySelector('article h1')?.textContent || 
                     document.title;

    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const printWindow = window.open('', '_blank', 'width=800,height=600');
    
    if (!printWindow) {
      // FALLBACK: if the popup was blocked
      window.print();
      return;
    }

    const styles = Array.from(document.styleSheets)
      .map(styleSheet => {
        try {
          return Array.from(styleSheet.cssRules)
            .map(rule => rule.cssText)
            .join('\n');
        } catch (e) {
          return '';
        }
      })
      .join('\n');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${document.title}</title>
          <meta charset="utf-8">
          <style>
            /* Base styles */
            * { box-sizing: border-box; }
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              margin: 0;
              padding: 20px;
              color: #333;
            }
            
            /* print-specific styles */
            @media print {
              body { margin: 0; }
              img { 
                max-width: 100% !important; 
                page-break-inside: avoid !important;
                break-inside: avoid !important;
              }
              h1, h2, h3, h4, h5, h6 { 
                page-break-after: avoid !important;
                break-after: avoid !important;
              }
              pre, code, .highlight { 
                page-break-inside: avoid !important;
                break-inside: avoid !important;
                white-space: pre-wrap !important;
              }
              table { 
                page-break-inside: avoid !important;
                break-inside: avoid !important;
              }
              a { 
                color: #0066cc !important;
                text-decoration: underline !important;
              }
              .pdfButtonContainer { display: none !important; }
            }
            
            /* Import existing styles */
            ${styles}
          </style>
        </head>
        <body>
          <!-- PDF Header -->
          <div class="pdf-header">
            <div class="pdf-header-left">
              <span class="pdf-company-name">Seed Studio</span>
            </div>
            <div class="pdf-header-center">
              ${pageTitle}
            </div>
            <div class="pdf-header-right">
              ${currentDate}
            </div>
          </div>

          <!-- Main Content -->
          <div class="pdf-content">
            ${printContent.innerHTML}
          </div>

          <!-- PDF Footer -->
          <div class="pdf-footer">
            <div class="pdf-footer-left">
              <span class="pdf-company-name">Seed Studio</span>
            </div>
            <div class="pdf-footer-center">
              ${pageTitle}
            </div>
            <div class="pdf-footer-right">
              ${currentDate}
            </div>
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
    
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.focus();
        printWindow.print();
        // Close the window after printing (optional)
        // printWindow.close();
      }, 500);
    };
  };

  return (
    <button
      className={`${styles.pdfButton} ${className || ''}`}
      onClick={handleDownloadPdf}
      title="Print/Save this page as PDF"
      aria-label="Print PDF"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.pdfIcon}
      >
        <path
          d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="14,2 14,8 20,8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="16"
          y1="13"
          x2="8"
          y2="13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="16"
          y1="17"
          x2="8"
          y2="17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="10,9 9,9 8,9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={styles.buttonText}>Print PDF</span>
    </button>
  );
};

export default PdfDownloadButton;