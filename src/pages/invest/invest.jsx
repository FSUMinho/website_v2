import './invest.css';
import { useTranslation } from 'react-i18next';
import hand from '../../assets/invest/hand.png';
import membrane from '../../assets/invest/membrane.png';
import thought from '../../assets/invest/thought.png';
import diamond from '../../assets/sponsors/diamond.png';
import gold from '../../assets/sponsors/gold-medal.png';
import silver from '../../assets/sponsors/silver-medal.png';
import bronze from '../../assets/sponsors/bronze-medal.png';

const Invest = () => {
    const { t } = useTranslation();

    return (
        <div className="invest-container">
            <h1>{t('invest.title')}</h1>

            <h2>{t('invest.why-title')}</h2>

            <p className='why-invest-text'>{t('invest.why-text')}</p>

            <h2>{t('invest.forms-title')}</h2>

            <div className='invest-forms-container'>
                <div className='invest-form'>
                    <h3>{t('invest.monetary-title')}</h3>

                    <img src={hand} className='invest-form-image' />

                    <p className='invest-form-text'>{t('invest.monetary-text')}</p>
                </div>

                <div className='invest-form'>
                    <h3>{t('invest.material-title')}</h3>

                    <img src={membrane} className='invest-form-image' />

                    <p className='invest-form-text'>{t('invest.material-text')}</p>
                </div>

                <div className='invest-form'>
                    <h3>{t('invest.knowledge-title')}</h3>

                    <img src={thought} className='invest-form-image' />

                    <p className='invest-form-text'>{t('invest.knowledge-text')}</p>
                </div>
            </div>

            <h2>{t('invest.tiers-title')}</h2>

            <div className='tiers-container'>
                <div className='tier'>
                    <h3>Diamond</h3>

                    <img src={diamond} className='tier-image' />

                    <p className='tier-description'>{t('invest.diamond-text')}</p>

                    <p className='tier-value'>{t('invest.diamond-value')}</p>
                </div>

                <div className='tier'>
                    <h3>Gold</h3>

                    <img src={gold} className='tier-image' />

                    <p className='tier-description'>{t('invest.gold-text')}</p>

                    <p className='tier-value'>{t('invest.gold-value')}</p>
                </div>

                <div className='tier'>
                    <h3>Silver</h3>

                    <img src={silver} className='tier-image' />

                    <p className='tier-description'>{t('invest.silver-text')}</p>

                    <p className='tier-value'>{t('invest.silver-value')}</p>
                </div>

                <div className='tier'>
                    <h3>Bronze</h3>

                    <img src={bronze} className='tier-image' />

                    <p className='tier-description'>{t('invest.bronze-text')}</p>

                    <p className='tier-value'>{t('invest.bronze-value')}</p>
                </div>

                <div className='tier'>
                    <h3>{t('invest.partner-title')}</h3>

                    <p className='tier-description'>{t('invest.partner-text')}</p>

                    <p className='tier-value'>{t('invest.partner-value')}</p>
                </div>
            </div>
        </div>
    );
}

export default Invest;
        