import './cars.css';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import Title from '../../../components/title/title';
import Specs from '../../../components/specs/specs';
import Gallery from '../../../components/gallery/gallery';
import No_Page from '../../no_page/no_page';
import { Helmet } from 'react-helmet';
import { getCar } from '../../../data/cars';
import { getCompetitions } from '../../../data/competitions';

const Cars = () => {
    const { t } = useTranslation();
    const { carId } = useParams();
    const car = getCar(carId);

    if (!car) return <No_Page />;

    const specs = car.specs.map(({ titleKey, rows }) => ({
        title: t(titleKey),
        rows: rows.map(({ labelKey, value, valueKey, unit }) => ({
            label: t(labelKey),
            value: valueKey ? t(valueKey) : value,
            unit,
        })),
    }));

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
                <title>{`${car.name} - FSUMinho`}</title>
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
                        ), url('${car.hero}')`
                    }}
                ></div>
                <Link to="/garage" className="car-back-link">
                    <img src="/archive_assets/arrow.png" alt="" />
                    {t('garage.back')}
                </Link>
                <div data-aos="fade-up">
                    <img className='logo-white' src={car.logo} alt={`Logo ${car.name}`} />
                </div>
            </div>

            <section className='car-highlights' aria-label={t('specs.title')}>
                {car.highlights.map(({ labelKey, value, unit }) => (
                    <div className='car-highlight' key={labelKey} data-aos="fade-up">
                        <span className='car-highlight-value'>
                            {value}<span className='car-highlight-unit'>{unit}</span>
                        </span>
                        <span className='car-highlight-label'>{t(labelKey)}</span>
                    </div>
                ))}
            </section>

            <section className='car-container'>
                <div className='car-text' data-aos="fade-right">
                    <Title size="h1" title={`${t('about_car.title')} ${car.name}`} />
                    <p className='car-description'>{t(car.descriptionKey)}</p>

                    {car.competitions?.length > 0 && (
                        <div className='car-competitions'>
                            <span className='car-competitions-label'>{t('garage.competitions')}</span>
                            {getCompetitions(car.competitions).map(({ id, name, year, overall }) => (
                                <Link to={`/competitions?c=${id}`} className='car-competition-link' key={id}>
                                    {name} {year}
                                    <span className='car-competition-result'>P{overall}</span>
                                    <img src="/archive_assets/arrow.png" alt="" />
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                <img src={car.aboutImage} className='car-image' data-aos="fade-left" alt={car.name} />
            </section>

            {/* Specs and gallery share one dark band so they read as a single section */}
            <div className='car-dark-band'>
                <section className='specs-container'>
                    <Title size="h1" title={t('specs.title')} />
                    <Specs title={t('specs.title')} specifications={specs} />
                </section>

                <section className='gallery-section' aria-label={t('gallery.title')}>
                    <Title size="h1" title={t('gallery.title')} />
                    <div className='gallery-container'>
                        <Gallery images={car.gallery} />
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Cars;
