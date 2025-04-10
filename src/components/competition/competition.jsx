import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './competition.css';

const Competition = ({ background, logo, year, country, city, circuit, class_, overall, results }) => {
    const { t } = useTranslation();
    const [showTable, setShowTable] = useState(false);

    const toggleTable = () => {
        setShowTable(!showTable);
    };

    const renderMedal = (position) => {
        if (position === "1") return <img className="medal" src="/sponsors/gold-medal.png" alt="" />;
        if (position === "2") return <img className="medal" src="/sponsors/silver-medal.png" alt="" />;
        if (position === "3") return <img className="medal" src="/sponsors/bronze-medal.png" alt="" />;
        return null;
    };

    return (
        <div className="competition-wrapper">  
            <div 
                className="competition-card"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${background})`
                }}
            >
                <div className="competition-header">
                    {logo && <img src={logo} className="competition-logo" alt="" />}
                    <h2 className="competition-year">{year}</h2>
                </div>

                <button 
                    onClick={toggleTable} 
                    className={`toggle-button ${showTable ? 'active' : ''}`}
                    aria-label="Toggle competition details"
                    aria-expanded={showTable}
                >
                    <img src="/archive_assets/arrow.png" alt="" />
                </button>
            </div>

            <div className={`competition-details ${showTable ? 'visible' : ''}`}>
                <div className="details-content">
                    <table className="results-table">
                        <tbody>
                            <tr>
                                <th>{t('archive.country')}</th>
                                <td>{country}</td>
                            </tr>
                            <tr>
                                <th>{t('archive.city')}</th>
                                <td>{city}</td>
                            </tr>
                            <tr>
                                <th>{t('archive.circuit')}</th>
                                <td>{circuit}</td>
                            </tr>
                            <tr>
                                <th>{t('archive.class_')}</th>
                                <td>{class_}</td>
                            </tr>
                            <tr className="overall-result">
                                <th>{t('archive.result')}</th>
                                <td>
                                    <div className="result-display">
                                        <span className="position">P{overall}</span>
                                        {renderMedal(overall)}
                                    </div>
                                </td>
                            </tr>
                            {Object.entries(results).map(([key, value]) => (
                                <tr key={key}>
                                    <th>{key}</th>
                                    <td>
                                        <div className="result-display">
                                            <span className="position">P{value}</span>
                                            {renderMedal(value)}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Competition;