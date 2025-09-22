import React, { useState } from 'react';
import './sponsor_tier.css';
import { useTranslation } from 'react-i18next';

const SponsorTier = ({ name, icon, benefits, value }) => {
    const { t } = useTranslation();
    const [showBenefits, setShowBenefits] = useState(false);

    const toggleBenefits = (event) => {
        event.stopPropagation();
        setShowBenefits(!showBenefits);
    };

    const more = t('invest.more');
    const less = t('invest.less');

    return (
        <div className="investment-package">
            <div className="package-header">
                <img src={icon} alt={`${name} icon`} className="package-icon" />
                <h3 className="package-title">{name}</h3>
                {/*<div className="package-value">
                    {value}
                </div>*/}
            </div>

            <button className="details-button" onClick={toggleBenefits}>
                {showBenefits ? less : more}
            </button>

            {showBenefits && (
                <div className="benefits-container">
                    <div className="benefits-divider" />
                    <ul className="package-benefits">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="package-benefit">
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SponsorTier;