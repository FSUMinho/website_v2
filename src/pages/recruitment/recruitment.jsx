import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './recruitment.css';
import mnt from '../../assets/team/mnt.png';
import lightning from '../../assets/lightning.png';
import system from '../../assets/system.png';

const Recruitment = () => {
    const { t } = useTranslation();
    const [faqVisibility, setFaqVisibility] = useState(Array(6).fill(false));

    const toggleFaq = (index) => {
        setFaqVisibility(faqVisibility.map((visible, i) => (i === index ? !visible : visible)));
    };

    return (
        <div className='recruitment-container'>
            <h1>{t('recruitment.title')}</h1>

            <p className='recruitment-text'>{t('recruitment.description')}</p>

            <h2>{t('recruitment.steps-title')}</h2>

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

            <h2>{t('recruitment.dates-title')}</h2>

            <p className='recruitment-text'>{t('recruitment.dates-text')}</p>

            <h2>{t('recruitment.sectors-title')}</h2>

            <div className='options-container'>
                <div className='sector-form-container'>
                    <h3>{t('recruitment.mechanical')}</h3>
                    <img src={system} className='sector-icon' />
                    <p className='option-text'>{t('recruitment.mechanical-text')}</p>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSdansITc3mfeKt4CHom2aDCy90qye9nzIu86JoZMaPWfbj6Nw/viewform?usp=sf_link' className='apply-button'>{t('recruitment.apply')}</a>
                </div>

                <div className='sector-form-container'>
                    <h3>{t('recruitment.electrical')}</h3>
                    <img src={lightning} className='sector-icon' />
                    <p className='option-text'>{t('recruitment.electrical-text')}</p>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSfgoudXjd4YlJa7FzXSi5qVcCIrVU5GA8Fb2tPMdPOzIZ8aKQ/viewform?usp=sf_link' className='apply-button'>{t('recruitment.apply')}</a>
                </div>

                <div className='sector-form-container'>
                    <h3>{t('recruitment.management')}</h3>
                    <img src={mnt} className='sector-icon' />
                    <p className='option-text'>{t('recruitment.management-text')}</p>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSek0nZWYaW_ENBDzls9fv9wQHinuhjz8Y4-cE8rEh9GvwLURA/viewform?usp=sf_link' className='apply-button'>{t('recruitment.apply')}</a>
                </div>
            </div>

            <h2>{t('recruitment.faqs-title')}</h2>

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
