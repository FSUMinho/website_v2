import './team.css';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../../components/title/title';

const Team = () => {
    const { t } = useTranslation();
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const sectors = [
        {
            id: 'management',
            title: 'Management',
            icon: '/team/mnt.png',
            description: t('team.management'),
            photo: '/team/mnt_photo.png',
        },
        {
            id: 'powertrain',
            title: 'Powertrain',
            icon: '/team/pwrt.png',
            description: t('team.powertrain'),
            photo: '/team/powertrain_photo.png',
        },
        {
            id: 'esw',
            title: 'Electronics & Software',
            icon: '/team/ecu.png',
            description: t('team.esw'),
            photo: '/team/esw_photo.png',
        },
        {
            id: 'drivetrain',
            title: 'Drivetrain',
            icon: '/team/dvrt.png',
            description: t('team.drivetrain'),
            photo: '/team/drivetrain_photo.png',
        },
        {
            id: 'chassisaero',
            title: 'Chassis & Aero',
            icon: '/team/chassis_aero.png',
            description: t('team.chassiaero'),
            photo: '/team/chassis_photo.png',
        },
        {
            id: 'suspension',
            title: 'Suspension & Steering',
            icon: '/team/suspension_steering.png',
            description: t('team.suspension'),
            photo: '/team/suspension_photo.png',
        },
    ];

    const [selectedSectorId, setSelectedSectorId] = useState(sectors[0].id);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [displayedSector, setDisplayedSector] = useState(sectors[0]);

    useEffect(() => {
        const criticalImages = ['/team/team_photo.png', sectors[0].photo, sectors[0].icon];
        
        Promise.all(
            criticalImages.map(src => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = resolve;
                    img.onerror = () => {
                        console.error(`Failed to load image: ${src}`);
                        resolve();
                    };
                });
            })
        ).then(() => {
            setIsLoading(false);
        });
    }, []);
    
    useEffect(() => {
        if (!isLoading) {
            const remainingImages = sectors.slice(1).flatMap(sector => [sector.icon, sector.photo]);
            
            if ('IntersectionObserver' in window) {
                const lazyLoadImages = () => {
                    remainingImages.forEach(src => {
                        const img = new Image();
                        img.src = src;
                    });
                };
                
                const timer = setTimeout(lazyLoadImages, 100);
                return () => clearTimeout(timer);
            } else {
                const loadRemainingImagesSequentially = async () => {
                    for (const src of remainingImages) {
                        await new Promise(resolve => {
                            const img = new Image();
                            img.src = src;
                            img.onload = resolve;
                            img.onerror = resolve;
                        });
                    }
                    setImagesLoaded(true);
                };
                
                loadRemainingImagesSequentially();
            }
        }
    }, [isLoading]);

    useEffect(() => {
        if (selectedSectorId) {
            setIsTransitioning(true);
            
            const timer = setTimeout(() => {
                setDisplayedSector(sectors.find(sector => sector.id === selectedSectorId));
                setIsTransitioning(false);
            }, 200);
            
            return () => clearTimeout(timer);
        }
    }, [selectedSectorId]);

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
                            key={index} 
                            type='button'
                            onClick={() => setSelectedSectorId(sector.id)}
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
                    />
                </div>
            </div>
        </div>
    );
};

export default Team;