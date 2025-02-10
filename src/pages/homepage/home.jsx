import './home.css';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import StatsCard from '../../components/stats_card/stats_card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const { t } = useTranslation();
    const current_date = new Date();
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
                const behold_api = 'https://feeds.behold.so/1IdZpnDvhFXL2pgpNuA0';

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

    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        '/fspt_group_photo.jpg', 
        '/archive_assets/fspt24.jpg', 
        '/fspt24_2.jpg'
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='homepage-container'>
            <div className="home-container">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`background-image ${index === currentImage ? 'visible' : ''}`}
                        style={{
                            backgroundImage: `linear-gradient(
                                rgba(0, 0, 0, 0.5),
                                rgba(0, 0, 0, 0.5)
                            ), url(${image})`
                        }}
                    ></div>
                ))}
                <div data-aos="fade-up">
                    <img className='logo-white' src='/logo_white.png' alt="Logo White" />
                    <h3>Engineering at high speed</h3>
                </div>
            </div>

            <div className='who-are-we-container'>
                <div className='who-are-we-logo-container'>
                    <div data-aos="fade-right">
                        <h1 className='about-us-title'>{t('about_us.title')}</h1>

                        <p className='who-are-we-text'>{t('about_us.text')}</p>
                    </div>

                    <img data-aos="fade-left" src='/EEUMLOGO.png' className='eeum-logo' />
                </div>

                <div className='stats-container' data-aos="fade">
                    <StatsCard 
                        image='/team.png' 
                        stat={t('about_us.members')}
                        value={43}
                        orientation="1"
                    />

                    <StatsCard
                        image='/calendar.png'
                        stat={t('about_us.years')}
                        value={years_stat}
                        orientation="2"
                    />

                    <StatsCard 
                        image='/graduation-hat.png'
                        stat={t('about_us.courses')}
                        value={8}
                        orientation="1"
                    />

                    <StatsCard
                        image='/race-car.png'
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
                                    <img className="class-icon" src='/petrol.png' alt="Petrol Icon"/>
                                    <span className="class-title">CV</span>
                                </div>
                                <p className="class-text">{t('fs.classes.cv-description')}</p>
                            </div>
                        </div>

                        <div className="fs-class">
                            <div className="class-content">
                                <div className="class-background">
                                    <img className="class-icon" src='/lightning.png' alt="Lightning Icon"/>
                                    <span className="class-title">EV</span>
                                </div>
                                <p className="class-text">{t('fs.classes.ev-description')}</p>
                            </div>
                        </div>

                        <div className="fs-class">
                            <div className="class-content">
                                <div className="class-background">
                                    <img className="class-icon" src='/self-driving.png' alt="Self Driving Icon"/>
                                    <span className="class-title">DV</span>
                                </div>
                                <p className="class-text">{t('fs.classes.dv-description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="santander-container">
                <h1>{t('santander.title')}</h1>

                <div className="image-wrapper">
                    <a href="https://www.santander.pt/universitarios?utm_campaign=BN_ACC_ACST_SU_PAS0_CCO_Matriculas0225_Universidade_Minho_NA_NGAL&utm_source=siteuniversidades&utm_medium=banner&utm_content=NA&utm_term=NA">
                        <img
                            src='/santander_home.png'
                            className="santander-image"
                        />
                    </a>

                    <div className="overlay">{t('santander.more')}</div>
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
    );
};

export default Home;
