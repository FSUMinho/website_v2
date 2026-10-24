import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './garage.css';

const Garage = ({ background, logo, detailsUrl }) => {
    const { t } = useTranslation();

    return (
        <div className="garage-wrapper">
            <div
                className="garage-card"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url(${background})`
                }}
            >
                {logo && <img src={logo} className="garage-logo" alt="" />}
                {detailsUrl ? (
                    <Link to={detailsUrl} className="garage-details-button">
                        {t('garage.view-details')}
                    </Link>
                ) : (
                    <button type="button" className="garage-details-button">
                        {t('garage.view-details')}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Garage;
