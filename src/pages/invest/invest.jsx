import './invest.css';
import { useTranslation } from 'react-i18next';
import SponsorTier from '../../components/sposnsor_tier/sponsor_tier';

const Invest = () => {
    const { t } = useTranslation();

    return (
        <div className="invest-container">
            <h1 data-aos="fade">{t('invest.title')}</h1>

            <h2 data-aos="fade">{t('invest.why-title')}</h2>

            <p className='why-invest-text' data-aos="fade">{t('invest.why-text')}</p>

            <h2 data-aos="fade">{t('invest.forms-title')}</h2>

            <div className='invest-forms-container' data-aos="fade">
                <div className='invest-form'>
                    <h3>{t('invest.monetary-title')}</h3>

                    <img src="/invest/hand.png" className='invest-form-image' />

                    <p className='invest-form-text'>{t('invest.monetary-text')}</p>
                </div>

                <div className='invest-form'>
                    <h3>{t('invest.material-title')}</h3>

                    <img src="/invest/membrane.png" className='invest-form-image' />

                    <p className='invest-form-text'>{t('invest.material-text')}</p>
                </div>

                <div className='invest-form'>
                    <h3>{t('invest.knowledge-title')}</h3>

                    <img src="/invest/thought.png" className='invest-form-image' />

                    <p className='invest-form-text'>{t('invest.knowledge-text')}</p>
                </div>
            </div>

            <h2 data-aos="fade">{t('invest.tiers-title')}</h2>

            <div className='tiers-container' data-aos="fade">
                <SponsorTier 
                    name="Diamond"
                    icon="/sponsors/diamond.png"
                    benefits={[
                        t('invest.social'),
                        t('invest.website'),
                        t('invest.car'),
                        t('invest.banner'),
                        t('invest.kit'),
                        t('invest.rollout'),
                        t('invest.team_events'),
                        t('invest.cv'),
                        t('invest.open_days'),
                        t('invest.uni'),
                    ]}
                    value="8000€"
                />

                <SponsorTier 
                    name="Gold"
                    icon="/sponsors/gold-medal.png"
                    benefits={[
                        t('invest.social'),
                        t('invest.website'),
                        t('invest.car'),
                        t('invest.banner'),
                        t('invest.kit'),
                        t('invest.rollout'),
                        t('invest.team_events'),
                        t('invest.cv'),
                        t('invest.open_days')
                    ]}
                    value="6000€"
                />

                <SponsorTier 
                    name="Silver"
                    icon="/sponsors/silver-medal.png"
                    benefits={[
                        t('invest.social'),
                        t('invest.website'),
                        t('invest.car'),
                        t('invest.banner'),
                        t('invest.kit'),
                        t('invest.rollout'),
                        t('invest.team_events')
                    ]}
                    value="4000€"
                />

                <SponsorTier 
                    name="Bronze"
                    icon="/sponsors/bronze-medal.png"
                    benefits={[
                        t('invest.social'),
                        t('invest.website'),
                        t('invest.car'),
                        t('invest.banner'),
                        t('invest.kit'),
                        t('invest.rollout')
                    ]}
                    value="2000€"
                />    

                <SponsorTier 
                    name={t('invest.partner-title')}
                    icon="/invest/handshake.png"
                    benefits={[
                        t('invest.social'),
                        t('invest.website')
                    ]}
                    value="500€"
                />             
            </div>
        </div>
    );
}

export default Invest;
