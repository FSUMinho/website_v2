import './home.css';
import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import StatsCard from '../../components/stats_card/stats_card';
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Title from '../../components/title/title';
import { sponsors } from '../sponsors/sponsors';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

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
           breakpoint: 992,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
           },
         },
         {
           breakpoint: 576,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             arrows: false,
           },
         },
       ],
     };

    const base_sponsor_logos = Object.values(sponsors).flat();
    const sponsor_logos_for_infinite_scroll = [
        ...base_sponsor_logos,
        ...base_sponsor_logos,
        ...base_sponsor_logos,
        ...base_sponsor_logos,
    ];

    const [instaData, setInstaData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            try {
                const behold_api = 'https://feeds.behold.so/1IdZpnDvhFXL2pgpNuA0';
                const response = await fetch(behold_api);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                const filetered_data = data.posts.filter((post) => post.mediaType !== 'VIDEO');
                setInstaData(filetered_data);
                setError(null);
            } catch (error) {
                console.error('Error fetching posts:', error);
                setError('Failed to load Instagram posts');
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        './archive_assets/fspt_25.jpg',
        '/fspt_group_photo.jpg',
        '/archive_assets/fspt24.jpg',
        '/fspt24_2.jpg',
        '/team/team_photo.jpg',
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    const handleTouchStart = useCallback((e) => {
        const element = e.currentTarget;
        const classBackground = element.querySelector('.class-background');
        const classText = element.querySelector('.class-text');

        if (classBackground && classText) {
            classBackground.style.opacity = 0;
            classText.style.opacity = 1;
        }
    }, []);

    const handleTouchEnd = useCallback((e) => {
        const element = e.currentTarget;
        const classBackground = element.querySelector('.class-background');
        const classText = element.querySelector('.class-text');

        if (classBackground && classText) {
            classBackground.style.opacity = 1;
            classText.style.opacity = 0;
        }
    }, []);

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "FSUMinho - Formula Student Team",
        "alternateName": "FSUMinho - Formula Student Team",
        "url": "https://fsuminho.com/",
        "logo": "https://fsuminho.com/favicon.ico",
        "image": "https://fsuminho.com/logo_red.png",
        "description": "Official website of FSUMinho, the team representing the University of Minho in Formula Student competitions.",
        "foundingDate": "2021",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Guimarães",
            "addressRegion": "Braga",
            "addressCountry": "PT"
        },
        "sameAs": [
            "https://www.instagram.com/fsuminho/",
            "https://www.linkedin.com/company/fsuminho/"
        ]
    };

    return (
        <div className='homepage-container'>
            <Helmet>
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
            </Helmet>

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
                        <Title size="h1" title={t('about_us.title')} />
                        <p className='about-us-text'>{t('about_us.text')}</p>
                    </div>

                    <img data-aos="fade-left" src='/EEUMLOGO.png' className='eeum-logo' alt="EEUM Logo" />
                </div>

                <div className='stats-container' data-aos="fade">
                    <StatsCard
                        image='/team.png'
                        stat={t('about_us.members')}
                        value={57}
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
                        value={21}
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

            <div className='fs-container' data-aos="fade" style={{
                backgroundImage: `linear-gradient(
                                rgba(0, 0, 0, 0.5),
                                rgba(0, 0, 0, 0.5)
                            ), url(/fspt_photo.webp)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}>
                <Title size="h1" title={t('fs.title')} />
                <p className='fs-text'>{t('fs.description')}</p>

                <div data-aos="fade">
                    <h3>{t('fs.classes.title')}</h3>
                    <p>{t('fs.classes.description')}</p>

                    <div className="classes-container">
                        <div
                            className="fs-class"
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div className="class-content">
                                <div className="class-background">
                                    <img className="class-icon" src='/petrol.png' alt="Petrol Icon" />
                                    <span className="class-title">CV</span>
                                </div>
                                <p className="class-text">{t('fs.classes.cv-description')}</p>
                            </div>
                        </div>

                        <div
                            className="fs-class"
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div className="class-content">
                                <div className="class-background">
                                    <img className="class-icon" src='/lightning.png' alt="Lightning Icon" />
                                    <span className="class-title">EV</span>
                                </div>
                                <p className="class-text">{t('fs.classes.ev-description')}</p>
                            </div>
                        </div>

                        <div
                            className="fs-class"
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            <div className="class-content">
                                <div className="class-background">
                                    <img className="class-icon" src='/self-driving.png' alt="Self Driving Icon" />
                                    <span className="class-title">DV</span>
                                </div>
                                <p className="class-text">{t('fs.classes.dv-description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='car-container'>
                <div className='car-text' data-aos="fade-right">
                    <Title size="h1" title={t('car.title')} />
                    <p className='car-description'>{t('car.description')}</p>
                </div>

                <img src='/fsum_24.png' className='car-image' data-aos="fade-left" alt="FSUM 24 Car" />
            </div>

            <div className="santander-container">
                <Title size="h1" title={t('falperra.title')} />

                <div className="image-wrapper">
                    <Link to="/falperra">
                        <img
                            src='/falperra/prototype.jpg'
                            className="santander-image"
                            alt="Santander Banner"
                        />
                    </Link>

                    <div className="image-text">
                        {t('falperra.short')}
                    </div>

                    <div className="overlay">{t('santander.more')}</div>
                </div>
            </div>

            <div className="slider-container" data-aos="fade">
                <Title size="h1" title={t('news')} />

                {isLoading ? (
                    <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>
                ) : error ? (
                    <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>{error}</div>
                ) : (
                    <Slider {...slider_settings}>
                        {Object.entries(instaData).map(([index, post]) => (
                            <div key={index} className="slider-item">
                                <a href={post.permalink}>
                                    <img
                                        className="slider-image"
                                        src={post.sizes.medium.mediaUrl}
                                        alt={`Instagram post ${index}`}
                                    />
                                </a>
                            </div>
                        ))}
                    </Slider>
                )}
            </div>

            <div className="sponsors-container" data-aos="fade">
                <Title size="h1" title={t('sponsors.title')} />
                <div className="sponsors-scroll-wrapper">
                    <div className="sponsors-track">
                        {sponsor_logos_for_infinite_scroll.map((sponsor, index) => (
                            <a key={`${sponsor.name}-${index}`} href={sponsor.url} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={sponsor.img}
                                    alt={sponsor.name}
                                    className="infinite-slider-sponsor-logo"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;