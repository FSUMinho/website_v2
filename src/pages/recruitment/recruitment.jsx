import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './recruitment.css';
import Title from '../../components/title/title.jsx';

const Recruitment = () => {
    const { t } = useTranslation();
    const [faqVisibility, setFaqVisibility] = useState(Array(6).fill(false));

    const toggleFaq = (index) => {
        setFaqVisibility(faqVisibility.map((visible, i) => (i === index ? !visible : visible)));
    };

    return (
        <div className='recruitment-container'>
            <Title size="h1" title={t('recruitment.title')} />

            <p className='recruitment-text'>{t('recruitment.description')}</p>

            <Title size="h2" title={t('recruitment.steps-title')} />

            <div className='steps-list'>
                <div className='step-item'>
                    <div className='step-number'>1</div>
                    <p className='step-text'>{t('recruitment.step1')}</p>
                </div>
                <div className='step-item'>
                    <div className='step-number'>2</div>
                    <p className='step-text'>{t('recruitment.step2')}</p>
                </div>
                <div className='step-item'>
                    <div className='step-number'>3</div>
                    <p className='step-text'>{t('recruitment.step3')}</p>
                </div>
                <div className='step-item'>
                    <div className='step-number'>4</div>
                    <p className='step-text'>{t('recruitment.step4')}</p>
                </div>
            </div>

            <Title size="h2" title={t('recruitment.dates-title')} />

            <p className='recruitment-text'>{t('recruitment.dates-text')}</p>

            <Title size="h2" title={t('recruitment.sectors-title')} />

            <div className='options-container'>
                <div className='sector-form-container'>
                    <h3>{t('recruitment.mechanical')}</h3>
                    <img src="/system.png" className='sector-icon' />
                    <p className='option-text'>{t('recruitment.mechanical-text')}</p>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSeLkUS7CGCfpZke5zjdW2hqaAjIqXxHhIHu-Jy3csdv1jXJTA/viewform?usp=dialog' className='apply-button'>{t('recruitment.apply')}</a>
                </div>

                <div className='sector-form-container'>
                    <h3>{t('recruitment.electrical')}</h3>
                    <img src="/lightning.png" className='sector-icon' />
                    <p className='option-text'>{t('recruitment.electrical-text')}</p>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSexeoeZcVlvuQ7ufbrayDfkt8tuNsO5TqQUGPVadFVIcNhqDA/viewform?usp=dialog' className='apply-button'>{t('recruitment.apply')}</a>
                </div>

                <div className='sector-form-container'>
                    <h3>{t('recruitment.management')}</h3>
                    <img src="/team/mnt.png" className='sector-icon' />
                    <p className='option-text'>{t('recruitment.management-text')}</p>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSdbR2nxJS2SdIE1-lCVs5nK3c_1t7BaDecbpT1JWfwQgOKS_g/viewform?usp=dialog' className='apply-button'>{t('recruitment.apply')}</a>
                </div>
            </div>

            <Title size="h2" title={t('recruitment.faqs-title')} />

            <div className='faq-container'>
                {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div key={index} className='faq-item'>
                        <div className='faq-question' onClick={() => toggleFaq(index - 1)}>
                            <span>{t(`recruitment.question${index}`)}</span>
                            <span className='faq-toggle'>{faqVisibility[index - 1] ? '-' : '+'}</span>
                        </div>
                        {faqVisibility[index - 1] && <p className='faq-text'>{t(`recruitment.answer${index}`)}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recruitment;