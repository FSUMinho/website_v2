import './home.css'
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className='homepage-container'>
            <div className="home-container">
                <h1>FSUMinho</h1>
                <h3>Engineering at high speed</h3>
            </div>

            <div className='who-are-we-container'>
                <h1>{t('about_us_title', {})}</h1>
            </div>
        </div>
    )
};

export default Home;