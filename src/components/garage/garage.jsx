import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './garage.css';

const Garage = ({ car }) => {
    const { t } = useTranslation();

    return (
        <Link to={`/garage/${car.id}`} className="garage-card" aria-label={`${car.name} — ${t('garage.view-details')}`}>
            <div className="garage-background" style={{ backgroundImage: `url(${car.cover})` }} />
            <div className="garage-header">
                <img src={car.logoWhite} className="garage-logo" alt="" />
                <span className="garage-year">{car.year}</span>
            </div>

            <span className="garage-details" aria-hidden="true">
                {t('garage.view-details')}
                <span className="garage-arrow">
                    <img src="/archive_assets/arrow.png" alt="" />
                </span>
            </span>
        </Link>
    );
};

export default Garage;
