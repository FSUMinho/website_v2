import './garage.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Garage from '../../components/garage/garage';
import Title from '../../components/title/title';
import { Helmet } from 'react-helmet';

const Archive = () => {
    const { t } = useTranslation();

    const pageData = {
        title: "Garage Archive",
        description: "FSUMinho garage history and achievements",
        keywords: "garage, archive, history, FSUMinho, Formula Student"
    };

    return (
        <div className='arquive-container'>
            <Helmet>
                <title>{pageData.title}</title>
                <meta name="description" content={pageData.description} />
                <meta name="keywords" content={pageData.keywords} />
            </Helmet>

            <Title size="h1" title={t('garage.title')} />

            <div className='garage-container' data-aos="fade-up">
                <Garage
                    detailsUrl="/car"
                    background="/car/FSUM_01_side.jpg"
                    logo="/car/FSUM01_logo_white.png"
                />

            </div>
        </div>
    );
}

export default Archive;
