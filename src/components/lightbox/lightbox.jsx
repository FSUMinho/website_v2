import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './lightbox.css';

// Full-screen photo viewer. `index` is the open photo, or null when closed.
const Lightbox = ({ images, index, onClose, onChange }) => {
    const { t } = useTranslation();
    const closeRef = useRef(null);
    const activeThumbRef = useRef(null);
    const touchStartX = useRef(null);

    const isOpen = index !== null;
    const count = images.length;

    // onChange gets an updater so quick repeated presses never use a stale index
    const step = (delta) => onChange(current => (current + delta + count) % count);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose();
            if (event.key === 'ArrowLeft') onChange(current => (current - 1 + count) % count);
            if (event.key === 'ArrowRight') onChange(current => (current + 1) % count);
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, count, onClose, onChange]);

    // Lock page scroll and move focus into the viewer while it is open
    useEffect(() => {
        if (!isOpen) return;
        const previousFocus = document.activeElement;
        // Restore whatever was there before, e.g. the gallery modal's own lock
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeRef.current?.focus();
        return () => {
            document.body.style.overflow = previousOverflow;
            previousFocus?.focus?.();
        };
    }, [isOpen]);

    // Keep the current photo's thumbnail in view as you move through them
    useEffect(() => {
        activeThumbRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }, [index]);

    if (!isOpen) return null;

    const { src, alt } = images[index];

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
        if (touchStartX.current === null) return;
        const distance = event.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(distance) > 50) step(distance < 0 ? 1 : -1);
        touchStartX.current = null;
    };

    return (
        <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={onClose}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <button
                type="button"
                className="lightbox-close"
                ref={closeRef}
                onClick={onClose}
                aria-label={t('gallery.close')}
            >
                ×
            </button>

            {count > 1 && (
                <button
                    type="button"
                    className="lightbox-nav lightbox-prev"
                    onClick={(e) => { e.stopPropagation(); step(-1); }}
                    aria-label={t('gallery.previous')}
                >
                    <img src="/archive_assets/arrow.png" alt="" />
                </button>
            )}

            <img
                key={src}
                className="lightbox-image"
                src={src}
                alt={alt}
                onClick={(e) => e.stopPropagation()}
            />

            {count > 1 && (
                <button
                    type="button"
                    className="lightbox-nav lightbox-next"
                    onClick={(e) => { e.stopPropagation(); step(1); }}
                    aria-label={t('gallery.next')}
                >
                    <img src="/archive_assets/arrow.png" alt="" />
                </button>
            )}

            <span className="lightbox-counter">{index + 1} / {count}</span>

            {count > 1 && (
                <div className="lightbox-thumbs" onClick={(e) => e.stopPropagation()}>
                    {images.map((image, i) => (
                        <button
                            type="button"
                            key={image.src}
                            ref={i === index ? activeThumbRef : null}
                            className={`lightbox-thumb ${i === index ? 'active' : ''}`}
                            onClick={() => onChange(i)}
                            aria-label={`${i + 1} / ${count}: ${image.alt}`}
                            aria-current={i === index}
                        >
                            <img src={image.src} alt="" loading="lazy" decoding="async" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Lightbox;
