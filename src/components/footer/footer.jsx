import React from 'react';
import './footer.css';
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import { useTranslation } from 'react-i18next';

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
                    <img src={instagram} className='icon' />
                </a>
                
                <a href="https://www.linkedin.com/company/fsuminho">
                    <img src={linkedin} className='icon' />
                </a>
            </div>
            </div>

            <div className="footer-section">
            <h4>Links</h4>
            <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
