import './team.css';
import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../../components/title/title';

const Team = () => {
    const { t } = useTranslation();

    const sectors = useMemo(() => [
        {
            id: 'management',
            title: 'Management',
            icon: `/team/mnt.png`,
            description: t('team.management'),
            photo: `/team/mnt_photo.jpg`,
        },
        {
            id: 'powertrain',
            title: 'Powertrain',
            icon: `/team/pwrt.png`,
            description: t('team.powertrain'),
            photo: `/team/powertrain_photo.jpg`,
        },
        {
            id: 'esw',
            title: 'Electronics & Software',
            icon: `/team/ecu.png`,
            description: t('team.esw'),
            photo: `/team/esw_photo.jpg`,
        },
        {
            id: 'drivetrain',
            title: 'Drivetrain',
            icon: `/team/dvrt.png`,
            description: t('team.drivetrain'),
            photo: `/team/drivetrain_photo.jpg`,
        },
        {
            id: 'chassisaero',
            title: 'Chassis & Aero',
            icon: `/team/chassis_aero.png`,
            description: t('team.chassiaero'),
            photo: `/team/chassis_photo.jpg`,
        },
        {
            id: 'suspension',
            title: 'Suspension & Steering',
            icon: `/team/suspension_steering.png`,
            description: t('team.suspension'),
            photo: `/team/suspension_photo.jpg`,
        },
    ], [t]);

    const [selectedSectorId, setSelectedSectorId] = useState(sectors[0].id);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [displayedSector, setDisplayedSector] = useState(sectors[0]);

    useEffect(() => {
        if (selectedSectorId) {
            const newSector = sectors.find(sector => sector.id === selectedSectorId);
            if (newSector) {
                setIsTransitioning(true);
                const timer = setTimeout(() => {
                    setDisplayedSector(newSector);
                    setIsTransitioning(false);
                }, 150);
                return () => clearTimeout(timer);
            }
        }
    }, [selectedSectorId, sectors]);

    return (
        <div>
            <div className='team-title-container'
                style={{
                    backgroundImage: `linear-gradient(
                        rgba(0, 0, 0, 0.5),
                        rgba(0, 0, 0, 0.5)
                    ), url('/team/team_photo.jpg')`,
                }}>
                <h1 className='team-title' data-aos="fade">{t('team.title')}</h1>
            </div>

            <p className='p1 team-description' data-aos="fade">{t('team.description')}</p>

            <div className='sectors-container' data-aos="fade">
                <Title size="h1" title={t('team.sectors-title')} />

                <div className='sector-selector-container'>
                    {sectors.map((sector) => (
                        <button 
                            className={`sector-selector ${selectedSectorId === sector.id ? 'selected' : ''}`} 
                            key={sector.id}
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
                        decoding="async"
                    />
                </div>
            </div>
        </div>
    );
};

export default Team;
