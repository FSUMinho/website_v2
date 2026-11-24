import './garage.css';
import { useTranslation } from 'react-i18next';
import Garage from '../../components/garage/garage';
import { Helmet } from 'react-helmet';
import cars from '../../data/cars';

const GaragePage = () => {
    const { t } = useTranslation();

    const pageData = {
        title: "Garage - FSUMinho",
        description: "Explore the Formula Student prototypes designed, built and raced by FSUMinho.",
        keywords: "garage, cars, prototypes, FSUM 01, FSUMinho, Formula Student"
    };

    return (
        <div className='garage-page'>
            <Helmet>
                <title>{pageData.title}</title>
                <meta name="description" content={pageData.description} />
                <meta name="keywords" content={pageData.keywords} />
            </Helmet>

            {/* Same photo banner as the team page */}
            <div className='garage-hero'>
                <h1 className='garage-hero-title' data-aos="fade">{t('garage.title')}</h1>
            </div>

            <p className='p1 garage-intro' data-aos="fade">{t('garage.intro')}</p>

            <div className='garage-list' data-aos="fade-up">
                {/* Newest car first */}
                {[...cars].reverse().map(car => (
                    <Garage key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
}

export default GaragePage;
