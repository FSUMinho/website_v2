import './competitions.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Competition from '../../../components/competition/competition';
import Title from '../../../components/title/title';
import { Helmet } from 'react-helmet';

const Archive = () => {
    const { t } = useTranslation();

    const pageData = {
        title: "Competitions Archive",
        description: "FSUMinho competition history and achievements",
        keywords: "competitions, archive, history, FSUMinho, Formula Student"
    };

    return (
        <div className='arquive-container'>
            <Helmet>
                <title>{pageData.title}</title>
                <meta name="description" content={pageData.description} />
                <meta name="keywords" content={pageData.keywords} />
            </Helmet>

            <Title size="h1" title={t('archive.title')} />

            <div className='competitions-container' data-aos="fade-up">
                <Competition
                    background="/fspt_group_photo.jpg"
                    logo="/archive_assets/FSPT_Logo_White_Square.svg"
                    year='2023'
                    country='Portugal'
                    city='Castelo Branco'
                    circuit='Kartódromo de Castelo Branco'
                    class_="Concept Class"
                    overall="2"
                    results={{
                        "Business Plan Presentation": "1", 
                        "Engineering Design": "2", 
                        "Cost of Manufacturing": "5"
                    }}
                />

                <Competition
                    background="/archive_assets/fspt24.jpg"
                    logo="/archive_assets/FSPT_Logo_White_Square.svg"
                    year='2024'
                    country='Portugal'
                    city='Castelo Branco'
                    circuit='Kartódromo de Castelo Branco'
                    class_="EV"
                    overall="7"
                    results={{
                        "Business Plan Presentation": "6", 
                        "Engineering Design": "9", 
                        "Cost of Manufacturing": "2"
                    }}
                />

                <Competition
                    background="/archive_assets/fspt_25.jpg"
                    logo="/archive_assets/FSPT_Logo_White_Square.svg"
                    year='2025'
                    country='Portugal'
                    city='Castelo Branco'
                    circuit='Kartódromo de Castelo Branco'
                    class_="2"
                    overall="3"
                    results={{
                        "Business Plan Presentation": "3", 
                        "Engineering Design": "5", 
                        "Cost of Manufacturing": "1"
                    }}
                />
            </div>
        </div>
    );
}

export default Archive;
