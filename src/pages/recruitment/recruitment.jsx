import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './recruitment.css';
import Title from '../../components/title/title.jsx';

const Recruitment = () => {
    const { t } = useTranslation();
    const [faqVisibility, setFaqVisibility] = useState(Array(6).fill(false));
    const [expandedTimeline, setExpandedTimeline] = useState(Array(4).fill(false));

    const toggleFaq = (index) => {
        setFaqVisibility(faqVisibility.map((visible, i) => (i === index ? !visible : visible)));
    };

    const toggleTimelineCard = (index) => {
        setExpandedTimeline(expandedTimeline.map((expanded, i) => (i === index ? !expanded : expanded)));
    };

    return (
        <div className='recruitment-container'>
            <Title size="h1" title={t('recruitment.title')} />

            <p className='recruitment-text'>{t('recruitment.description')}</p>

            <Title size="h2" title={t('recruitment.steps-title')} />

            <div className='timeline-container'>
                <div className='timeline-line'></div>
                
                {[1, 2, 3, 4].map((stepNumber, index) => (
                    <div key={stepNumber} className='timeline-step'>
                        <div className='timeline-number'>{stepNumber}</div>
                        <div className={`timeline-card ${expandedTimeline[index] ? 'expanded' : ''}`}>
                            <div className='timeline-content'>
                                <h3 className='timeline-title'>{t(`recruitment.step${stepNumber}-title`)}</h3>
                                <p className='timeline-summary'>{t(`recruitment.step${stepNumber}-summary`)}</p>
                                <div className={`timeline-details ${expandedTimeline[index] ? 'expanded' : ''}`}>
                                    <p>{t(`recruitment.step${stepNumber}-details`)}</p>
                                </div>
                            </div>
                            <button 
                                className={`timeline-expand-btn ${expandedTimeline[index] ? 'expanded' : ''}`}
                                onClick={() => toggleTimelineCard(index)}
                                aria-label={expandedTimeline[index] ? 'Collapse details' : 'Expand details'}
                            >
                                {expandedTimeline[index] ? '−' : '+'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Title size="h2" title={t('recruitment.dates-title')} />

            <p className='recruitment-text'>{t('recruitment.dates-text')}</p>

            <Title size="h2" title={t('recruitment.sectors-title')} />

            <div className='options-container'>
                <div className='sector-form-container'>
                    <h3>{t('recruitment.mechanical')}</h3>
                    <img src="/system.png" className='sector-icon' alt="Mechanical sector" />
                    <p className='option-text'>{t('recruitment.mechanical-text')}</p>
                    <a href='' className='apply-button'>{t('recruitment.not-open')}</a>
                </div>

                <div className='sector-form-container'>
                    <h3>{t('recruitment.electrical')}</h3>
                    <img src="/lightning.png" className='sector-icon' alt="Electrical sector" />
                    <p className='option-text'>{t('recruitment.electrical-text')}</p>
                    <a href='' className='apply-button'>{t('recruitment.not-open')}</a>
                </div>

                <div className='sector-form-container'>
                    <h3>{t('recruitment.management')}</h3>
                    <img src="/team/mnt.png" className='sector-icon' alt="Management sector" />
                    <p className='option-text'>{t('recruitment.management-text')}</p>
                    <a href='' className='apply-button'>{t('recruitment.not-open')}</a>
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