import './competitions.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Competition from '../../../components/competition/competition';

const Archive = () => {
    const { t } = useTranslation();

    return (
        <div className='arquive-container'>
            <h1 data-aos="fade">{t('archive.title')}</h1>

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
            </div>
        </div>
    );
}

export default Archive;
