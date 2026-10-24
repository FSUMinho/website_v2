import './cars.css';
import { useTranslation } from 'react-i18next';
import Title from '../../../components/title/title';
import Specs from '../../../components/specs/specs';
import { Helmet } from 'react-helmet';

const Cars = () => {
    const { t } = useTranslation();

    const specs = [
        {
            title: t('Perfomance'),
            specifications: [
                [t('0–100 km/h'), '4s'],
                [t('specs.performance.speed'), '110 km/h'],
                [t('specs.performance.weight'), '280 Kg'],
            ],
        },
        {
            title: t('Powertrain'),
            specifications: [
                [t('specs.powertrain.type-engine'), 'EV'],
                [t('specs.powertrain.power'), '80 kW'],
                [t('specs.powertrain.binary'), '150 Nm'],
            ],
        },
        {
            title: t('Chassis'),
            specifications: [
                [t('specs.chassis.type-chassis'), 'Tubular'],
                [t('Material'), 'Aço s355jr'],
                [t('specs.chassis.wheelbase'), '1800 mm'],
            ],
        },
        {
            title: t('specs.suspension-brakes.title'),
            specifications: [
                [t('specs.suspension-brakes.type-arm'), 'Double A-arm'],
                [t('specs.suspension-brakes.tyres'), 'Hoosier & 20.5×7.0−13'],
                [t('specs.suspension-brakes.brakes'), 'Wilwood'],
            ],
        },
    ];

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
        <div className='carspage-container'>
            <Helmet>
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
            </Helmet>

            <div className="cars-container">
                <div
                    className="background-image visible"
                    style={{
                        backgroundImage: `linear-gradient(
                            rgba(0, 0, 0, 0.5),
                            rgba(0, 0, 0, 0.5)
                        ), url('/car/FSUM01_car.jpg')`
                    }}
                ></div>
                <div data-aos="fade-up">
                    <img className='logo-white' src='/car/FSUM01_logo.png' alt="Logo FSUM01" />
                </div>
            </div>

            <section className='specs-container'>
                <Title size="h1" title={t('specs.title')} />
                <Specs title={t('specs.title')} specifications={specs} />
            </section>

            <section className='gallery-section' aria-label={t('gallery.title')}>
                <Title size="h1" title={t('gallery.title')} />
                <div className='gallery-container'>
                    <div className='gallery-grid' data-aos="fade">
                        {[
                            { src: '/car/FSUM01_FSPT26_1.jpg', alt: 'FSUM01 at FSPT26' },
                            { src: '/car/FSUM01_FSPT26_2.jpg', alt: 'FSUM01 at FSPT26' },
                            { src: '/car/FSUM01_tyre.jpg', alt: 'FSUM01 tyre' },
                            { src: '/car/FSUM01_interior.jpg', alt: 'FSUM01 interior' },
                            { src: '/car/FSUM01_seat.jpg', alt: 'FSUM01 seat' },
                            { src: '/car/FSUM01.jpeg', alt: 'FSUM01' },
                        ].map(({ src, alt }, index) => (
                            <figure
                                className={`gallery-card ${index === 0 || index === 5 ? 'gallery-card-wide' : ''}`}
                                key={src}
                            >
                                {src && <img className='gallery-image' src={src} alt={alt} />}
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            <div className='car-container'>
                <div className='car-text' data-aos="fade-right">
                    <Title size="h1" title={t('about_car.title')} />
                    <p className='car-description'>{t('about_car.description')}</p>
                </div>

                <img src='/car/FSUM01_FSPT26_3.jpg' className='car-image' data-aos="fade-left" alt="FSUM01" />
            </div>

        </div>
    );
};

export default Cars;
