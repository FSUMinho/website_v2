import './team.css';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../../components/title/title';

const Team = () => {
    const { t } = useTranslation();
    const [imagesLoaded, setImagesLoaded] = useState(new Set());
    const [isLoading, setIsLoading] = useState(true);
    const [preloadedImages, setPreloadedImages] = useState(new Set());

    const sectors = useMemo(() => [
        {
            id: 'management',
            title: 'Management',
            icon: '/team/mnt.png',
            description: t('team.management'),
            photo: '/team/mnt_photo.webp',
        },
        {
            id: 'powertrain',
            title: 'Powertrain',
            icon: '/team/pwrt.png',
            description: t('team.powertrain'),
            photo: '/team/powertrain_photo.webp',
        },
        {
            id: 'esw',
            title: 'Electronics & Software',
            icon: '/team/ecu.png',
            description: t('team.esw'),
            photo: '/team/esw_photo.webp',
        },
        {
            id: 'drivetrain',
            title: 'Drivetrain',
            icon: '/team/dvrt.png',
            description: t('team.drivetrain'),
            photo: '/team/drivetrain_photo.webp',
        },
        {
            id: 'chassisaero',
            title: 'Chassis & Aero',
            icon: '/team/chassis_aero.png',
            description: t('team.chassiaero'),
            photo: '/team/chassis_photo.webp',
        },
        {
            id: 'suspension',
            title: 'Suspension & Steering',
            icon: '/team/suspension_steering.png',
            description: t('team.suspension'),
            photo: '/team/suspension_photo.webp',
        },
    ], [t]);

    const [selectedSectorId, setSelectedSectorId] = useState(sectors[0].id);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [displayedSector, setDisplayedSector] = useState(sectors[0]);

    const preloadImage = useCallback((src, priority = 'low') => {
        return new Promise((resolve) => {
            if (preloadedImages.has(src)) {
                resolve(true);
                return;
            }

            const img = new Image();
            
            if ('loading' in img) {
                img.loading = priority === 'high' ? 'eager' : 'lazy';
            }
            
            if ('decoding' in img) {
                img.decoding = 'async';
            }

            const handleLoad = () => {
                setPreloadedImages(prev => new Set([...prev, src]));
                setImagesLoaded(prev => new Set([...prev, src]));
                resolve(true);
            };

            const handleError = () => {
                console.warn(`Failed to load image: ${src}`);
                setPreloadedImages(prev => new Set([...prev, src]));
                resolve(false);
            };

            img.onload = handleLoad;
            img.onerror = handleError;
            img.src = src;

            setTimeout(() => {
                if (!preloadedImages.has(src)) {
                    handleError();
                }
            }, 10000);
        });
    }, [preloadedImages]);

    useEffect(() => {
        const criticalImages = [
            '/team/team_photo.png',
            sectors[0].photo,
            sectors[0].icon
        ];
        
        const loadCriticalImages = async () => {
            const promises = criticalImages.map(src => preloadImage(src, 'high'));
            await Promise.allSettled(promises);
            setIsLoading(false);
        };

        loadCriticalImages();
    }, [sectors, preloadImage]);

    useEffect(() => {
        if (isLoading) return;

        const remainingImages = sectors
            .slice(1)
            .flatMap(sector => [sector.icon, sector.photo])
            .filter(src => !preloadedImages.has(src));

        if (remainingImages.length === 0) return;

        if ('IntersectionObserver' in window && 'requestIdleCallback' in window) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            requestIdleCallback(() => {
                                remainingImages.forEach(src => preloadImage(src, 'low'));
                            });
                            observer.disconnect();
                        }
                    });
                },
                { rootMargin: '50px' }
            );

            const sectorContainer = document.querySelector('.sectors-container');
            if (sectorContainer) {
                observer.observe(sectorContainer);
            }

            return () => observer.disconnect();
        } else {
            const timer = setTimeout(() => {
                remainingImages.forEach(src => preloadImage(src, 'low'));
            }, 500);
            
            return () => clearTimeout(timer);
        }
    }, [isLoading, sectors, preloadedImages, preloadImage]);

    const handleSectorHover = useCallback((hoveredSectorId) => {
        const hoveredSector = sectors.find(s => s.id === hoveredSectorId);
        if (hoveredSector && !preloadedImages.has(hoveredSector.photo)) {
            preloadImage(hoveredSector.photo, 'high');
        }
    }, [sectors, preloadedImages, preloadImage]);

    useEffect(() => {
        if (selectedSectorId) {
            const newSector = sectors.find(sector => sector.id === selectedSectorId);
            
            if (newSector) {
                setIsTransitioning(true);
                
                if (!preloadedImages.has(newSector.photo)) {
                    preloadImage(newSector.photo, 'high');
                }
                
                const timer = setTimeout(() => {
                    setDisplayedSector(newSector);
                    setIsTransitioning(false);
                }, 150);
                
                return () => clearTimeout(timer);
            }
        }
    }, [selectedSectorId, sectors, preloadedImages, preloadImage]);

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading team information...</p>
            </div>
        );
    }

    return (
        <div>
            <div className='team-title-container'
                style={{
                    backgroundImage: `linear-gradient(
                        rgba(0, 0, 0, 0.5),
                        rgba(0, 0, 0, 0.5)
                    ), url('/team/team_photo.png')`,
                }}>
                <h1 className='team-title' data-aos="fade">{t('team.title')}</h1>
            </div>

            <p className='p1 team-description' data-aos="fade">{t('team.description')}</p>

            <div className='sectors-container' data-aos="fade">
                <Title size="h1" title={t('team.sectors-title')} />

                <div className='sector-selector-container'>
                    {sectors.map((sector, index) => (
                        <button 
                            className={`sector-selector ${selectedSectorId === sector.id ? 'selected' : ''}`} 
                            key={sector.id}
                            type='button'
                            onClick={() => setSelectedSectorId(sector.id)}
                            onMouseEnter={() => handleSectorHover(sector.id)}
                            onFocus={() => handleSectorHover(sector.id)}
                        >
                            {sector.title}
                        </button>
                    ))}
                </div>
                
                <div className={`sector-description ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                    <div className="sector-content">
                        <h3 className='sector-title'>{displayedSector.title}</h3>
                        <p className='p1 sector-description-text'>{displayedSector.description}</p>
                    </div>
                    
                    <img 
                        src={displayedSector.photo}
                        alt={displayedSector.title} 
                        className='sector-photo' 
                        loading="lazy"
                        decoding="async"
                        style={{
                            opacity: preloadedImages.has(displayedSector.photo) ? 1 : 0.7,
                            transition: 'opacity 0.3s ease'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Team;