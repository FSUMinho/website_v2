import React from 'react';
import './footer.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>{t('footer.contact')}</h4>
                    <p>fsuminho21@gmail.com</p>
                    <p>Escola de Engenharia, Universidade do Minho</p>
                    <p>4800-058 Guimarães, Portugal</p>
                </div>

                <div className="footer-section">
                    <h4>{t('footer.social')}</h4>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/fsuminho/">
                            <img src="/instagram.png" className='icon' alt="Instagram" />
                        </a>
                        
                        <a href="https://www.linkedin.com/company/fsuminho">
                            <img src="/linkedin.png" className='icon' alt="LinkedIn" />
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Links</h4>
                    <ul>
                        <li><Link to="/team">{t('footer.team')}</Link></li>
                        <li><Link to="/sponsors">{t('footer.sponsors')}</Link></li>
                        <li><Link to="/invest">{t('footer.invest')}</Link></li>
                        <li><Link to="/competitions">{t('footer.competitions')}</Link></li>
                        {/*<li><Link to="/cars">{t('footer.cars')}</Link></li>*/}
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Faculty Advisor</h4>
                    <ul>
                        <li><a href='https://www.linkedin.com/in/h%C3%A9lder-puga-8b6b4243/'>Hélder Puga (puga@dem.uminho.pt)</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;