import React, {useEffect, useState} from 'react';

export default function ImagePreviewer({selector}) {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return undefined;
    }

    const openPreview = (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const image = event.target.closest(selector);

      if (!image) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      setPreview({
        src: image.currentSrc || image.src,
        alt: image.alt || 'image preview',
      });
    };

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setPreview(null);
      }
    };

    document.addEventListener('click', openPreview, true);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('click', openPreview, true);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [selector]);

  if (!preview) {
    return (
      <style>{`
        ${selector} {
          cursor: zoom-in;
        }
      `}</style>
    );
  }

  return (
    <>
      <style>{`
        ${selector} {
          cursor: zoom-in;
        }
      `}</style>
      <div
        role="dialog"
        aria-modal="true"
        onClick={() => setPreview(null)}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '32px',
          background: 'rgba(0, 0, 0, 0.72)',
        }}
      >
        <button
          type="button"
          aria-label="Close image preview"
          onClick={() => setPreview(null)}
          style={{
            position: 'absolute',
            top: '20px',
            right: '24px',
            width: '40px',
            height: '40px',
            border: 0,
            borderRadius: '50%',
            color: '#ffffff',
            background: 'rgba(255, 255, 255, 0.18)',
            fontSize: '28px',
            lineHeight: '40px',
            cursor: 'pointer',
          }}
        >
          x
        </button>
        <img
          src={preview.src}
          alt={preview.alt}
          onClick={(event) => event.stopPropagation()}
          style={{
            maxWidth: '92vw',
            maxHeight: '86vh',
            objectFit: 'contain',
            borderRadius: '8px',
            boxShadow: '0 24px 80px rgba(0, 0, 0, 0.45)',
            background: '#111827',
            cursor: 'default',
          }}
        />
      </div>
    </>
  );
}
