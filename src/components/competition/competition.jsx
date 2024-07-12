import React, { useState } from 'react';
import './competition.css';
import arrow from '../../assets/archive_assets/arrow.png';
import { useTranslation } from 'react-i18next';

const Competition = ({ background, logo, year, country, city, circuit, class_, overall, results }) => {
    const containerStyle = {
        background: `
            linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
            ), 
            url(${background})
        `,
        backgroundPosition: '0% 5%',
        backgroundSize: 'cover'
    };

    const { t } = useTranslation();

    const [showTable, setShowTable] = useState(false);
    const [arrowRotation, setArrowRotation] = useState(false);

    const toggleTable = () => {
        setShowTable(!showTable);
        setArrowRotation(!arrowRotation);
    };

    return (
        <div className='component-container'>  
            <div className='competition-container' style={containerStyle}>
                <img src={logo} className='logo' />

                <h1>{year}</h1>

                <button onClick={toggleTable} className={arrowRotation ? 'rotate' : 'reverse-rotate'}>
                    <img src={arrow} alt="Arrow" /> 
                </button>
            </div>

            <div className='competiton-info-container'>
            {showTable && (
                    <table className='event-info'>
                        <tbody>
                            <tr className='info'>
                                <th>{t('archive.country')}</th>
                                <td>{country}</td>
                            </tr>

                            <tr className='info'>
                                <th>{t('archive.city')}</th>
                                <td>{city}</td>
                            </tr>

                            <tr className='info'>
                                <th>{t('archive.circuit')}</th>
                                <td>{circuit}</td>
                            </tr>

                            <tr className='info'>
                                <th>{t('archive.class_')}</th>
                                <td>{class_}</td>
                            </tr>

                            <tr className='info'>
                                <th>{t('archive.result')}</th>
                                <td>P{overall}</td>
                            </tr>

                            {Object.entries(results).map(([key, value]) => (
                                <tr key={key} className='info'>
                                    <th>{key}</th>
                                    <td>P{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default Competition;
