import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import "./contact_form.css";

const ContactForm = () => {
    const { t } = useTranslation();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const form = useRef();

    const service_id = import.meta.env.VITE_SERVICE_ID;
    const template_id = import.meta.env.VITE_TEMPLATE_ID;
    const user_id = import.meta.env.VITE_PUBLIC_KEY;

    useEffect(() => {
        emailjs.init({
            publicKey: user_id,
            blockList: []
        });
    }, [user_id]);

    const validateForm = () => {
        const errors = {};
        
        if (!formData.user_name.trim()) {
            errors.user_name = t('contact.errors.name_required');
        }
        
        if (!formData.user_email.trim()) {
            errors.user_email = t('contact.errors.email_required');
        } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
            errors.user_email = t('contact.errors.email_invalid');
        }
        
        if (!formData.message.trim()) {
            errors.message = t('contact.errors.message_required');
        } else if (formData.message.trim().length < 10) {
            errors.message = t('contact.errors.message_too_short');
        }
        
        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
        // Clear error for this field when user starts typing
        if (formErrors[name]) {
            setFormErrors({
                ...formErrors,
                [name]: ''
            });
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        
        // Validate form
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }
        
        setIsSubmitting(true);

        emailjs
            .sendForm(
                service_id, 
                template_id, 
                form.current,
                { publicKey: user_id }
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsSubmitted(true);
                    setFormData({
                        user_name: '',
                        user_email: '',
                        message: ''
                    });
                    setIsSubmitting(false);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsSubmitting(false);
                    alert(t('contact.errors.send_failed'));
                },
            );
    };

    const resetForm = () => {
        setIsSubmitted(false);
        setFormErrors({});
    };

    return (
        <div className="contact-container">
            <div className="contact-box" data-aos="fade-up">
                <form ref={form} onSubmit={sendEmail}>
                    <h1 className="form-title">{t('contact.title')}</h1>
                    
                    {isSubmitted ? (
                        <div className="thankyou-message">
                            <div className="success-icon">✓</div>
                            <h2>{t('contact.thanks')}</h2>
                            <p>{t('contact.response_message')}</p>
                            <button 
                                type="button" 
                                className="reset-button"
                                onClick={resetForm}
                            >
                                {t('contact.send_another')}
                            </button>
                        </div>
                    ) : (
                        <div className="form-fields">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">{t('contact.name')}</label>
                                    <input 
                                        id="name" 
                                        name="user_name" 
                                        placeholder='Full name'
                                        value={formData.user_name}
                                        onChange={handleChange}
                                        className={formErrors.user_name ? 'error' : ''}
                                    />
                                    {formErrors.user_name && (
                                        <span className="error-message">{formErrors.user_name}</span>
                                    )}
                                </div>
                        
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        id="email" 
                                        name="user_email" 
                                        type="email" 
                                        placeholder='Email'
                                        value={formData.user_email}
                                        onChange={handleChange}
                                        className={formErrors.user_email ? 'error' : ''}
                                    />
                                    {formErrors.user_email && (
                                        <span className="error-message">{formErrors.user_email}</span>
                                    )}
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">{t('contact.message')}</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="5" 
                                    placeholder='Your message ...'
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={formErrors.message ? 'error' : ''}
                                ></textarea>
                                {formErrors.message && (
                                    <span className="error-message">{formErrors.message}</span>
                                )}
                            </div>
                    
                            <button 
                                type="submit" 
                                className="send-button"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? t('contact.sending') : t('contact.send')}
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ContactForm;