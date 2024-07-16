import './home.css'
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import StatsCard from '../../components/stats_card/stats_card'
import eeum_logo from '../../assets/EEUMLOGO.png';
import calendar_icon from '../../assets/calendar.png';
import hat_icon from '../../assets/graduation-hat.png';
import car_icon from '../../assets/race-car.png';
import team_icon from '../../assets/team.png';
import logo_white from '../../assets/logo_white.png'
import lightning from '../../assets/lightning.png'
import petrol from '../../assets/petrol.png'
import self_driving from '../../assets/self-driving.png'

const Home = () => {
    const { t } = useTranslation();
    const current_date = new Date;
    const current_year = current_date.getFullYear();
    const years_stat = current_year - 2021;

    return (
        <div className='homepage-container'>
            <div className="home-container">
                <div data-aos="fade-up">
                    <img className='logo-white' src={logo_white}/>
                    <h3>Engineering at high speed</h3>
                </div>
            </div>

            <div className='who-are-we-container'>
                <div className='who-are-we-logo-container'>
                    <div data-aos="fade-right">
                        <h1>{t('about_us.title')}</h1>

                        <p className='paragraph who-are-we-text'>{t('about_us.text')}</p>
                    </div>

                    <img data-aos="fade-left" src={ eeum_logo } />
                </div>

                <div className='stats-container' data-aos="fade">
                    <StatsCard 
                        image={team_icon} 
                        stat={t('about_us.members')}
                        value={23}
                        orientation="1"
                    />

                    <StatsCard
                        image={calendar_icon}
                        stat={t('about_us.years')}
                        value={years_stat}
                        orientation="2"
                    />

                    <StatsCard 
                        image={hat_icon}
                        stat={t('about_us.courses')}
                        value={8}
                        orientation="1"
                    />

                    <StatsCard
                        image={car_icon}
                        stat={t('about_us.cars')}
                        value={1}
                        orientation="2"
                    />
                </div>
            </div>

            <div className='fs-container' data-aos="fade">
                <h1>{t('fs.title')}</h1>

                <p className='fs-text'>{t('fs.description')}</p>

                <div data-aos="fade">
                    <h3>{t('fs.classes.title')}</h3>

                    <p>{t('fs.classes.description')}</p>

                    <div className="classes-container">
                        <div className="fs-class">
                            <div className="class-content">
                                <div className="class-background">
                                    <img className="class-icon" src={petrol} alt="Petrol Icon"/>
                                    <span className="class-title">CV</span>
                                </div>
                                <p className="class-text">{t('fs.classes.cv-description')}</p>
                            </div>
                        </div>

                        <div className="fs-class">
                            <div className="class-content">
                                <div className="class-background">
                                    <img className="class-icon" src={lightning} alt="Lightning Icon"/>
                                    <span className="class-title">EV</span>
                                </div>
                                <p className="class-text">{t('fs.classes.ev-description')}</p>
                            </div>
                        </div>

                        <div className="fs-class">
                            <div className="class-content">
                                <div className="class-background">
                                    <img className="class-icon" src={self_driving} alt="Self Driving Icon"/>
                                    <span className="class-title">DV</span>
                                </div>
                                <p className="class-text">{t('fs.classes.dv-description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;