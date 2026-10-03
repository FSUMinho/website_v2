import './team.css';
import { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../../components/title/title';
import { Helmet } from 'react-helmet';

const Team = () => {
    const { t } = useTranslation();

    const sectors = useMemo(() => [
        {
            id: 'sponsors',
            title: 'Sponsors',
            icon: `/team/sponsors.png`,
            description: t('team.sponsors'),
            photo: `/team/sponsors_photo.png`,
        },
        {
            id: 'logistics',
            title: 'Logistics',
            icon: `/team/logistics.png`,
            description: t('team.logistics'),
            photo: `/team/logistics_photo.png`,
        },
        {
            id: 'marketing',
            title: 'Marketing',
            icon: `/team/marketing.png`,
            description: t('team.marketing'),
            photo: `/team/marketing_photo.png`,
        },
        {
            id: 'powertrain',
            title: 'Powertrain',
            icon: `/team/pwrt.png`,
            description: t('team.powertrain'),
            photo: `/team/powertrain_photo.png`,
        },
        {
            id: 'esw',
            title: 'Electronics & Software',
            icon: `/team/ecu.png`,
            description: t('team.esw'),
            photo: `/team/esw_photo.png`,
        },
        {
            id: 'drivetrain',
            title: 'Drivetrain',
            icon: `/team/dvrt.png`,
            description: t('team.drivetrain'),
            photo: `/team/drivetrain_photo.png`,
        },
        {
            id: 'chassisaero',
            title: 'Chassis & Aero',
            icon: `/team/chassis_aero.png`,
            description: t('team.chassiaero'),
            photo: `/team/chassis_photo.png`,
        },
        {
            id: 'suspension',
            title: 'Suspension & Steering',
            icon: `/team/suspension_steering.png`,
            description: t('team.suspension'),
            photo: `/team/suspension_photo.png`,
        },
    ], [t]);

    const [selectedSectorId, setSelectedSectorId] = useState(sectors[0].id);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [displayedSectorId, setDisplayedSectorId] = useState(sectors[0].id);
    const displayedSector = sectors.find(sector => sector.id === displayedSectorId);

    // Preload every sector photo so switching sectors never waits on the network
    useEffect(() => {
        sectors.forEach(sector => {
            const img = new Image();
            img.src = sector.photo;
        });
    }, [sectors]);

    useEffect(() => {
        if (selectedSectorId === displayedSectorId) return;
        setIsTransitioning(true);
        const timer = setTimeout(() => {
            setDisplayedSectorId(selectedSectorId);
            setIsTransitioning(false);
        }, 120);
        return () => clearTimeout(timer);
    }, [selectedSectorId, displayedSectorId]);

    const pageData = {
        title: "Meet the Team",
        description: "Discover the dedicated team behind FSUMinho. Learn about our sectors and how we work together to achieve excellence in engineering and motorsport.",
        keywords: "team, FSUMinho, Formula Student, University of Minho, engineering, motorsport, sectors, management, powertrain, electronics, software, drivetrain, chassis, aero, suspension, steering"
    };

    return (
        <div>
            <Helmet>
                <title>{pageData.title}</title>
                <meta name="description" content={pageData.description} />
                <meta name="keywords" content={pageData.keywords} />
            </Helmet>
            
            <div className='team-title-container'
                style={{
                    backgroundImage: `linear-gradient(
                        rgba(0, 0, 0, 0.5),
                        rgba(0, 0, 0, 0.5)
                    ), url('/team/team_photo_s26.jpg')`,
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
                        decoding="async"
                    />
                </div>
            </div>
        </div>
    );
};

export default Team;
