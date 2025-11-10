import './falperra.css';
import Title from '../../components/title/title';
import { useTranslation } from 'react-i18next';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';

const Falperra = () => {
    const { t } = useTranslation();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth <= 768;

    const criteriaData = [
        { name: t('falperra.juri-item0'), value: 40 },
        { name: t('falperra.juri-item1'), value: 30 },
        { name: t('falperra.juri-item2'), value: 20 },
        { name: t('falperra.juri-item3'), value: 10 }
    ];

    const COLORS = ['#e52526', '#2563eb', '#10b981', '#f59e0b'];

    const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
        const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

        return (
            <text 
                x={x} 
                y={y} 
                fill="white" 
                textAnchor={x > cx ? 'start' : 'end'} 
                dominantBaseline="central"
                fontSize={isMobile ? "14" : "18"}
                fontWeight="bold"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    }

    return (
        <div className='falperra-page'>
            <div className='page-header'>
                <Title size='h1' title={t('falperra.title')} />
            </div>

            <div className='falperra-content-wrapper'>
                <p className='section-description' dangerouslySetInnerHTML={{ __html: t('falperra.description') }} />

                <Title size='h2' title={t('falperra.subtitle1')} />
                <ul className='content-list primary-list'>
                    {Array.from({ length: 8 }, (_, i) => {
                        if (i === 7) {
                            return (
                                <li key={i}>
                                    {t('falperra.participation7')}
                                    <ul className='content-list secondary-list'>
                                        {Array.from({ length: 7 }, (_, j) => (
                                            <li key={j}>{t(`falperra.participation-subitem${j}`)}</li>
                                        ))}
                                    </ul>
                                </li>
                            );
                        }
                        return <li key={i}>{t(`falperra.participation${i}`)}</li>;
                    })}
                </ul>

                <Title size='h2' title={t('falperra.subtitle2')} />
                <ul className='content-list primary-list'>
                    <li>{t('falperra.submission0')}</li>
                    <li>{t('falperra.submission1')}</li>
                    <li>
                        {t('falperra.submission2')}
                        <ul className='content-list secondary-list'>
                            {Array.from({ length: 4 }, (_, i) => (
                                <li key={i}>{t(`falperra.submission-subitem${i}`)}</li>
                            ))}
                        </ul>
                    </li>
                    <li>{t('falperra.submission3')}</li>
                </ul>

                <Title size='h2' title={t('falperra.subtitle3')} />
                <p className='section-description'>{t('falperra.juri-description')}</p>
                <div className='criteria-chart-container'>
                    <ResponsiveContainer width="100%" height={isMobile ? 300 : 400}>
                        <PieChart>
                            <Pie
                                data={criteriaData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomLabel}
                                outerRadius={isMobile ? 80 : 120}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {criteriaData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                ))}
                            </Pie>
                            <Legend
                                layout={isMobile ? "horizontal" : "vertical"}
                                iconType="circle"
                                verticalAlign={isMobile ? "bottom" : "middle"} 
                                align={isMobile ? "center" : "left"}
                                wrapperStyle={isMobile ? { paddingTop: '20px' } : {}}
                                formatter={(value, entry) => (
                                    <span style={{ color: '#333', fontSize: isMobile ? '0.9rem' : '1.1rem' }}>
                                        {value}
                                    </span>
                                )}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <Title size='h2' title={t('falperra.subtitle4')} />
                <p className='section-description'>{t('falperra.prize-description')}</p>
                <ul className='content-list primary-list'>
                    {Array.from({ length: 3 }, (_, i) => (
                        <li key={i}>{t(`falperra.prize${i}`)}</li>
                    ))}
                </ul>

                <Title size='h2' title={t('falperra.subtitle5')} />
                <p className='section-description'>{t('falperra.rights-description')}</p>

                <Title size='h2' title={t('falperra.subtitle6')} />
                <ul className='content-list primary-list'>
                    {Array.from({ length: 3 }, (_, i) => (
                        <li key={i}>{t(`falperra.finals${i}`)}</li>
                    ))}
                </ul>

                <Title size='h2' title="Downloads" />
                <div className='downloads-container'>
                    <a 
                        href="/falperra/regulamento.pdf" 
                        download
                        className='download-button'
                    >
                        <span className='download-icon'>📄</span>
                        <span className='download-text'>{t('falperra.download-regulations')}</span>
                    </a>
                    <a 
                        href="/falperra/logos.zip" 
                        download
                        className='download-button'
                    >
                        <span className='download-icon'>🎨</span>
                        <span className='download-text'>{t('falperra.download-assets')}</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Falperra;