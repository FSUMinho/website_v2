import "../contact_form/contact_form.css";
import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const { t } = useTranslation();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useRef();

    const service_id = import.meta.env.VITE_SERVICE_ID;
    const template_id = import.meta.env.VITE_TEMPLATE_ID;
    const user_id = import.meta.env.VITE_PUBLIC_KEY;

    emailjs.init({
        publicKey: user_id,
        blockList: []
    });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            service_id, 
            template_id, 
            form.current, {
            publicKey: user_id,
        })
        .then(
            () => {
            console.log('SUCCESS!');
            setIsSubmitted(true);
            },
            
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <div className="container">
            <div className="contact-box" data-aos="fade">
                <form ref={form} onSubmit={sendEmail}>
                    <h1 className="form-title">{t('contact.title')}</h1>

                    <div className="form-fields">
                        <div className="fst-row">
                            <fieldset className="form-field name">
                                <label htmlFor="name">{t('contact.name')}</label>
                                <input id="name" name="user_name" placeholder={t('contact.name')} required />
                            </fieldset>
                    
                            <fieldset className="form-field email">
                                <label htmlFor="email">Email</label>
                                <input id="email" name="user_email" type="email" required placeholder='Email' />
                            </fieldset>
                        </div>

                        <div className="snd-row">
                            <fieldset className="form-field text-box">
                                <label htmlFor="message">{t('contact.message')}</label>
                                <textarea id="message" name="message" rows="4" placeholder={t('contact.message')} required></textarea>
                            </fieldset>
                    
                            <button type="submit" value="Send" className="send-button">{t('contact.send')}</button>
                    
                            {isSubmitted && (
                                <div className="thankyou_message">
                                    <h2>{t('contact.thanks')}</h2>
                                </div>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
