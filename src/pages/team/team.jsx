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

            <div className='sectors-container'>
                <div className='sector' data-aos="fade">
                    <div className="sector-content">
                        <div className="sector-background">
                            <span className="sector-title">Management</span>
                            <img className="sector-icon" src={mnt} />
                        </div>
                        <p className="sector-text">{t('team.management')}</p>
                    </div>
                </div>

                <div className='sector' data-aos="fade">
                    <div className="sector-content">
                        <div className="sector-background">
                            <span className="sector-title">Powertrain</span>
                            <img className="sector-icon" src={pwrt} />
                        </div>
                        <p className="sector-text">{t('team.powertrain')}</p>
                    </div>
                </div>

                <div className='sector' data-aos="fade">
                    <div className="sector-content">
                        <div className="sector-background">
                            <span className="sector-title">Electronics & Software</span>
                            <img className="sector-icon" src={ecu} />
                        </div>
                        <p className="sector-text">{t('team.esw')}</p>
                    </div>
                </div>

                <div className='sector' data-aos="fade">
                    <div className="sector-content">
                        <div className="sector-background">
                            <span className="sector-title">Drivetrain</span>
                            <img className="sector-icon" src={dvrt} />
                        </div>
                        <p className="sector-text">{t('team.drivetrain')}</p>
                    </div>
                </div>

                <div className='sector' data-aos="fade">
                    <div className="sector-content">
                        <div className="sector-background">
                            <span className="sector-title">Chassis & Aero</span>
                            <img className="sector-icon" src={chassi} />
                        </div>
                        <p className="sector-text">{t('team.chassiaero')}</p>
                    </div>
                </div>

                <div className='sector' data-aos="fade">
                    <div className="sector-content">
                        <div className="sector-background">
                            <span className="sector-title">Suspension & Steering</span>
                            <img className="sector-icon" src={susp_str} />
                        </div>
                        <p className="sector-text">{t('team.suspension')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;