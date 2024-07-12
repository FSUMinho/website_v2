import './archive.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Competition from '../../components/competition/competition';
import FSPT_2023_group_photo from '../../assets/fspt_group_photo.jpg';
import FSPT_logo from '../../assets/archive_assets/FSPT_Logo_White_Square.svg';

const Archive = () => {
    const { t } = useTranslation();

    return (
        <div className='arquive-container'>
            <h1 data-aos="fade">{t('archive.title')}</h1>

            <div className='competitions-container' data-aos="fade-up">
                <Competition
                    background={FSPT_2023_group_photo}
                    logo={FSPT_logo}
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
            </div>
        </div>
    );
}

export default Archive;
