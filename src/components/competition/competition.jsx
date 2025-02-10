import React, { useState } from 'react';
import './competition.css';
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
                <img src={logo} className='logo' alt="Competition logo" />

                <h1>{year}</h1>

                <button onClick={toggleTable} className={arrowRotation ? 'rotate' : 'reverse-rotate'}>
                    <img src="/archive_assets/arrow.png" alt="Arrow" /> 
                </button>
            </div>

            <div className='competiton-info-container'>
                {showTable && (
                    <table className='event-info' data-aos="fade-down">
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
                                <td className='result'>
                                    P{overall}

                                    {overall === "1" && <img className='medal' src="/sponsors/gold-medal.png" alt="Gold medal" />}
                                    {overall === "2" && <img className='medal' src="/sponsors/silver-medal.png" alt="Silver medal" />}
                                    {overall === "3" && <img className='medal' src="/sponsors/bronze-medal.png" alt="Bronze medal" />}
                                </td>
                            </tr>

                            {Object.entries(results).map(([key, value]) => (
                                <tr key={key} className='info'>
                                    <th>{key}</th>
                                    <td className='result'>
                                        P{value}

                                        {value === "1" && <img className='medal' src="/sponsors/gold-medal.png" alt="Gold medal" />}
                                        {value === "2" && <img className='medal' src="/sponsors/silver-medal.png" alt="Silver medal" />}
                                        {value === "3" && <img className='medal' src="/sponsors/bronze-medal.png" alt="Bronze medal" />}
                                    </td>
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
