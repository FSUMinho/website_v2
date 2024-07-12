import './team.css'
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import mnt from '../../assets/team/mnt.png';
import pwrt from '../../assets/team/pwrt.png';
import ecu from '../../assets/team/ecu.png';
import dvrt from '../../assets/team/dvrt.png';
import chassi from '../../assets/team/chassis_aero.png';
import susp_str from '../../assets/team/suspension_steering.png';

const Team = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1 data-aos="fade">{t('team.title')}</h1>

            <p className='team-description' data-aos="fade">{t('team.description')}</p>

            <h1 data-aos="fade">{t('team.sectors-title')}</h1>

            <h2 data-aos="fade">Management</h2>

            <div className='sector'>
                <p data-aos="fade-right">{t('team.management')}</p>

                <img src={mnt} className='sector-icon' data-aos="fade-left" />
            </div>

            <h2 data-aos="fade">Powertrain</h2>

            <div className='sector'>
                <img src={pwrt} className='sector-icon' data-aos="fade-right" />

                <p data-aos="fade-left">{t('team.powertrain')}</p>
            </div>

            <h2 data-aos="fade">Electronics & Software</h2>

            <div className='sector'>
                <p data-aos="fade-right">{t('team.esw')}</p>

                <img src={ecu} className='sector-icon' data-aos="fade-left" />
            </div>

            <h2 data-aos="fade">Drivetrain</h2>

            <div className='sector'>
                <img src={dvrt} className='sector-icon' data-aos="fade-right" />

                <p data-aos="fade-left">{t('team.drivetrain')}</p>
            </div>

            <h2 data-aos="fade">Chassis & Aerodynamics</h2>

            <div className='sector'>
                <p data-aos="fade-right">{t('team.chassiaero')}</p>

                <img src={chassi} className='sector-icon' data-aos="fade-left" />
            </div>

            <h2 data-aos="fade">Drivetrain</h2>

            <div className='sector'>
                <img src={susp_str} className='sector-icon' data-aos="fade-right" />

                <p data-aos="fade-left">{t('team.suspension')}</p>
            </div>
            </div>
    );
}

export default Team;