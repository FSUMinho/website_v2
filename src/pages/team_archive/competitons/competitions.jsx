import './competitions.css';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Competition from '../../../components/competition/competition';
import Title from '../../../components/title/title';
import { Helmet } from 'react-helmet';
import competitions from '../../../data/competitions';

// Fixed navbar height plus a little breathing room
const NAVBAR_OFFSET = 90;

const Archive = () => {
    const { t } = useTranslation();
    // ?c=<competition id> (e.g. from a car page) scrolls to that card and opens it
    const [searchParams] = useSearchParams();
    const target = searchParams.get('c');

    useEffect(() => {
        if (!target) return;
        // Wait a beat: the app scrolls every new page to the top after it renders
        const timer = setTimeout(() => {
            const card = document.getElementById(`competition-${target}`);
            if (!card) return;
            // Sum offsetTop rather than use scrollIntoView: the list's fade-up animation
            // starts 100px low, which would make the browser overshoot
            let top = 0;
            for (let node = card; node; node = node.offsetParent) top += node.offsetTop;
            window.scrollTo({ top: top - NAVBAR_OFFSET, behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
    }, [target]);

    const pageData = {
        title: "Competitions Archive",
        description: "FSUMinho competition history and achievements",
        keywords: "competitions, archive, history, FSUMinho, Formula Student"
    };

    return (
        <div className='arquive-container'>
            <Helmet>
                <title>{pageData.title}</title>
                <meta name="description" content={pageData.description} />
                <meta name="keywords" content={pageData.keywords} />
            </Helmet>

            <Title size="h1" title={t('archive.title')} />

            <div className='competitions-container' data-aos="fade-up">
                {competitions.map(competition => (
                    <Competition
                        key={competition.id}
                        {...competition}
                        defaultOpen={competition.id === target}
                    />
                ))}
            </div>
        </div>
    );
}

export default Archive;
