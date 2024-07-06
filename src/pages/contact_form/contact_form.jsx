import "../contact_form/contact_form.css"
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t } = useTranslation();

    return (
        <div className="container">
            <h1>{t('contact.title')}</h1>

            <div className="contact-form">
                <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSek0nZWYaW_ENBDzls9fv9wQHinuhjz8Y4-cE8rEh9GvwLURA/viewform?embedded=true" 
                width="640" 
                height="1200" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0">A carregar…</iframe>
            </div>
        </div>
    )
};

export default ContactForm;