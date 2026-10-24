import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lightbox from '../lightbox/lightbox';
import './gallery.css';

// How many tiles the page grid shows; with more photos the last tile becomes "View all"
const PREVIEW_TILES = 6;

const Gallery = ({ images }) => {
    const { t } = useTranslation();
    const [openPhoto, setOpenPhoto] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const modalCloseRef = useRef(null);

    const hasMore = images.length > PREVIEW_TILES;
    const previews = hasMore ? images.slice(0, PREVIEW_TILES - 1) : images;
    const moreCover = hasMore ? images[PREVIEW_TILES - 1] : null;

    // Modal: Escape closes it (unless a photo is open on top), page scroll is locked
    useEffect(() => {
        if (!modalOpen) return;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && openPhoto === null) setModalOpen(false);
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [modalOpen, openPhoto]);

    useEffect(() => {
        if (!modalOpen) return;
        const previousFocus = document.activeElement;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        modalCloseRef.current?.focus();
        return () => {
            document.body.style.overflow = previousOverflow;
            previousFocus?.focus?.();
        };
    }, [modalOpen]);

    const renderTile = ({ src, alt }, index, className = '') => (
        <button
            type='button'
            className={`gallery-card ${className}`}
            key={src}
            onClick={() => setOpenPhoto(index)}
            aria-label={`${t('gallery.open')}: ${alt}`}
        >
            <img className='gallery-image' src={src} alt="" loading="lazy" decoding="async" />
        </button>
    );

    return (
        <>
            <div className='gallery-grid' data-aos="fade">
                {previews.map((image, index) => renderTile(image, index))}

                {hasMore && (
                    <button
                        type='button'
                        className='gallery-card gallery-more'
                        onClick={() => setModalOpen(true)}
                        aria-haspopup="dialog"
                    >
                        <img className='gallery-image' src={moreCover.src} alt="" loading="lazy" decoding="async" />
                        <span className='gallery-more-label'>
                            <span className='gallery-more-count'>+{images.length - previews.length}</span>
                            {t('gallery.more')}
                        </span>
                    </button>
                )}
            </div>

            {modalOpen && (
                <div
                    className='gallery-modal'
                    role="dialog"
                    aria-modal="true"
                    aria-label={t('gallery.title')}
                    onClick={() => setModalOpen(false)}
                >
                    <div className='gallery-modal-panel' onClick={(e) => e.stopPropagation()}>
                        <div className='gallery-modal-header'>
                            <h2 className='gallery-modal-title'>
                                {t('gallery.title')}
                                <span className='gallery-modal-count'>
                                    {t('gallery.count', { count: images.length })}
                                </span>
                            </h2>
                            <button
                                type='button'
                                className='gallery-modal-close'
                                ref={modalCloseRef}
                                onClick={() => setModalOpen(false)}
                                aria-label={t('gallery.close')}
                            >
                                ×
                            </button>
                        </div>

                        <div className='gallery-modal-grid'>
                            {images.map((image, index) => renderTile(image, index))}
                        </div>
                    </div>
                </div>
            )}

            <Lightbox
                images={images}
                index={openPhoto}
                onClose={() => setOpenPhoto(null)}
                onChange={setOpenPhoto}
            />
        </>
    );
};

export default Gallery;
