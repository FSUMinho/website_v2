import './invest.css';
import { useTranslation } from 'react-i18next';
import SponsorTier from '../../components/sposnsor_tier/sponsor_tier';
import { useEffect, useState } from 'react';
import Title from '../../components/title/title';

const InvestForm = ({ title, image, description }) => (
  <div className="invest-form" data-aos="fade-up">
    <h3>{title}</h3>
    <img 
      src={image} 
      alt={title} 
      className="invest-form-image"
      loading="lazy" 
    />
    <p className="invest-form-text">{description}</p>
  </div>
);

const Invest = () => {
    const { t } = useTranslation();
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const imagesToPreload = [
            '/invest/hand.png',
            '/invest/membrane.png',
            '/invest/thought.png',
            '/invest/handshake.png',
            '/sponsors/diamond.png',
            '/sponsors/gold-medal.png',
            '/sponsors/silver-medal.png',
            '/sponsors/bronze-medal.png'
        ];
        
        Promise.all(
            imagesToPreload.map(src => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = resolve;
                    img.onerror = resolve;
                });
            })
        ).then(() => {
            setImagesLoaded(true);
        });
    }, []);

    const tiers = [
        {
            name: "Diamond",
            icon: "/sponsors/diamond.png",
            benefits: [
                'invest.social', 'invest.website', 'invest.car', 'invest.banner', 
                'invest.kit', 'invest.rollout', 'invest.team_events', 'invest.cv', 
                'invest.open_days', 'invest.uni'
            ],
            value: "8000€"
        },
        {
            name: "Gold",
            icon: "/sponsors/gold-medal.png",
            benefits: [
                'invest.social', 'invest.website', 'invest.car', 'invest.banner', 
                'invest.kit', 'invest.rollout', 'invest.team_events', 'invest.cv', 
                'invest.open_days'
            ],
            value: "6000€"
        },
        {
            name: "Silver",
            icon: "/sponsors/silver-medal.png",
            benefits: [
                'invest.social', 'invest.website', 'invest.car', 'invest.banner', 
                'invest.kit', 'invest.rollout', 'invest.team_events'
            ],
            value: "4000€"
        },
        {
            name: "Bronze",
            icon: "/sponsors/bronze-medal.png",
            benefits: [
                'invest.social', 'invest.website', 'invest.car', 'invest.banner', 
                'invest.kit', 'invest.rollout'
            ],
            value: "2000€"
        },
        {
            name: t('invest.partner-title'),
            icon: "/invest/handshake.png",
            benefits: ['invest.social', 'invest.website'],
            value: "500€"
        }
    ];

    const investForms = [
        {
            title: t('invest.monetary-title'),
            image: "/invest/hand.png",
            description: t('invest.monetary-text')
        },
        {
            title: t('invest.material-title'),
            image: "/invest/membrane.png",
            description: t('invest.material-text')
        },
        {
            title: t('invest.knowledge-title'),
            image: "/invest/thought.png",
            description: t('invest.knowledge-text')
        }
    ];

    return (
        <div className="invest-container">
            <section className="invest-section">
                <Title size="h1" title={t('invest.title')} primary={true} />
                
                <Title size="h2" title={t('invest.why-title')} />
                <div className="content-wrapper">
                    <p className="why-invest-text">{t('invest.why-text')}</p>
                </div>
            </section>

            <section className="invest-section" data-aos="fade">
                <Title size="h2" title={t('invest.forms-title')} />
                <div className="invest-forms-container">
                    {investForms.map((form, index) => (
                        <InvestForm 
                            key={index}
                            title={form.title}
                            image={form.image}
                            description={form.description}
                        />
                    ))}
                </div>
            </section>

            <section className="invest-section" data-aos="fade">
                <Title size="h2" title={t('invest.tiers-title')} />
                <div className="tiers-container">
                    {tiers.map((tier, index) => (
                        <SponsorTier 
                            key={index}
                            name={tier.name}
                            icon={tier.icon}
                            benefits={tier.benefits.map(benefit => t(benefit))}
                            value={tier.value}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Invest;