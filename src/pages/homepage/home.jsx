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
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
    const { t } = useTranslation();
    const current_date = new Date;
    const current_year = current_date.getFullYear();
    const years_stat = current_year - 2021;

    const slider_settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [instaData, setInstaData] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const behold_api = import.meta.env.VITE_BEHOLD_API;

                const response = await fetch(behold_api);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setInstaData(data.posts);

            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

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
                        <h1 className='about-us-title'>{t('about_us.title')}</h1>

                        <p className='who-are-we-text'>{t('about_us.text')}</p>
                    </div>

                    <img data-aos="fade-left" src={ eeum_logo } className='eeum-logo' />
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

            <div className="slider-container" data-aos="fade">
                <h1>{t('news')}</h1>

                <Slider {...slider_settings}>
                    {Object.entries(instaData).map(([index, post]) => (
                        <div key={index} className="slider-item">
                            <a href={post.permalink}>
                                <img
                                    className="slider-image"
                                    src={post.sizes.medium.mediaUrl}
                                />
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
};

export default Home;