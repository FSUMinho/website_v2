import './team.css';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Team = () => {
    const { t } = useTranslation();

    const sectors = [
        {
            title: 'Management',
            icon: '/team/mnt.png',
            description: t('team.management'),
        },
        {
            title: 'Powertrain',
            icon: '/team/pwrt.png',
            description: t('team.powertrain'),
        },
        {
            title: 'Electronics & Software',
            icon: '/team/ecu.png',
            description: t('team.esw'),
        },
        {
            title: 'Drivetrain',
            icon: '/team/dvrt.png',
            description: t('team.drivetrain'),
        },
        {
            title: 'Chassis & Aero',
            icon: '/team/chassis_aero.png',
            description: t('team.chassiaero'),
        },
        {
            title: 'Suspension & Steering',
            icon: '/team/suspension_steering.png',
            description: t('team.suspension'),
        },
    ];

    return (
        <div>
            <h1 data-aos="fade">{t('team.title')}</h1>

            <p className='team-description' data-aos="fade">{t('team.description')}</p>

            <h1 data-aos="fade">{t('team.sectors-title')}</h1>

            <div className='sectors-container'>
                {sectors.map((sector, index) => (
                    <div className='sector' data-aos="fade" key={index}>
                        <div className="sector-content">
                            <div className="sector-background">
                                <span className="sector-title">{sector.title}</span>
                                <img className="sector-icon" src={sector.icon} alt={sector.title} />
                            </div>
                            <p className="sector-text">{sector.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;
