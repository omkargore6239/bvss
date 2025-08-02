import React from 'react';
import { govColors } from '../utils/colors';

// Use the annexure arrays exactly as before
const annexures = [
  { name: 'ANNEXURE - A', file: '/BVG Imges/images/axe/ANNEXURE - A.pdf' },
  { name: 'ANNEXURE - B', file: '/BVG Imges/images/axe/ANNEXURE - B.pdf' },
  { name: 'ANNEXURE - C', file: '/BVG Imges/images/axe/ANNEXURE - C.pdf' },
  { name: 'ANNEXURE - D', file: '/BVG Imges/images/axe/ANNEXURE - D.pdf' },
  { name: 'ANNEXURE - E', file: '/BVG Imges/images/axe/ANNEXURE - E.pdf' },
  { name: 'ANNEXURE - F', file: '/BVG Imges/images/axe/ANNEXURE - F.pdf' },
  { name: 'ANNEXURE - G', file: '/BVG Imges/images/axe/ANNEXURE - G.pdf' },
  { name: 'ANNEXURE - H', file: '/BVG Imges/images/axe/ANNEXURE - H.pdf' },

];

const annexureImages = [
  { name: 'निरोगी मनुष्यांसाठी दिनचर्या', file: '/BVG Imges/images/axe/निरोगी मनुष्यासाठी दिनचर्या.jpg' },
  { name: 'पोटावरिल चरबी', file: '/BVG Imges/images/axe/पोटावरील चरबी.jpg' },
  { name: 'मासिक पाळीत आहार', file: '/BVG Imges/images/axe/मासिक पाळीत आहार.jpg' },
  { name: 'कौशल्य वटी', file: '/BVG Imges/images/axe/व्योषादी वटी.png' }
];

const Document = () => {
  return (
    <div style={{ backgroundColor: govColors.background.primary, minHeight: '100vh', padding: '3rem 1rem' }}>
      <style>{`
        .section-divider {
          height: 4px;
          background: linear-gradient(to right, ${govColors.primary.blue}, ${govColors.primary.orange}, ${govColors.primary.blue});
          margin: 3rem 0;
        }
        .gov-button-secondary {
          background: ${govColors.primary.white};
          color: ${govColors.primary.blue};
          border: 2px solid ${govColors.primary.blue};
          transition: all 0.3s ease;
          padding: 0.25rem 0.75rem;
          border-radius: 0.375rem;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          cursor: pointer;
          user-select: none;
        }
        .gov-button-secondary:hover {
          background: ${govColors.background.accent};
          color: ${govColors.primary.darkBlue};
        }
        .image-card {
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
          transition: box-shadow 0.3s ease;
        }
        .image-card:hover {
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }
        .image-thumb {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-radius: 0.375rem;
          cursor: pointer;
          user-select: none;
          transition: transform 0.3s ease;
        }
        .image-thumb:hover {
          transform: scale(1.05);
        }
        .image-caption {
          margin-top: 0.5rem;
          font-weight: 600;
          color: ${govColors.text.primary};
          text-align: center;
          font-size: 1.1rem;
        }
        .annexure-pdf-card {
          background: white;
          border-radius: 0.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: box-shadow 0.3s ease;
        }
        .annexure-pdf-card:hover {
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }
        .pdf-name {
          font-weight: 600;
          color: ${govColors.text.primary};
          font-size: 1.1rem;
          user-select: none;
        }
      `}</style>

      <div className="container mx-auto max-w-6xl">
        <h1 className="text-center text-4xl font-bold mb-6" style={{ color: govColors.primary.blue }}>
          Annexure Documents & Images
        </h1>
        <div className="w-24 h-1 mx-auto mb-10" style={{ backgroundColor: govColors.primary.orange }}></div>

        {/* PDF Annexures */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: govColors.primary.orange }}>
            PDF Annexures
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {annexures.map((annex, idx) => (
              <div key={idx} className="annexure-pdf-card">
                <span className="pdf-name">{annex.name}</span>
                <a
                  href={annex.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gov-button-secondary"
                >
                  View
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Annexure Images */}
        <section>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: govColors.primary.orange }}>
            Annexure Images
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {annexureImages.map((img, idx) => (
              <div key={idx} className="image-card">
                <a href={img.file} target="_blank" rel="noopener noreferrer" title={`View full image: ${img.name}`}>
                  <img
                    src={img.file}
                    alt={img.name}
                    className="image-thumb"
                  />
                </a>
                <div className="image-caption">{img.name}</div>
                <a
                  href={img.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gov-button-secondary"
                  style={{ marginTop: '0.5rem', width: '100%', textAlign: 'center' }}
                >
                  View Full Image
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Document;
