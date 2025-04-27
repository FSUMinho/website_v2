import './title.css';

const Title = ({ title, size, primary = false }) => {
    const titleClass = primary ? "primary-title" : "section-title";
    
    if (size === 'h1') {
        return (
            <h1 className={titleClass}>
                {title}
            </h1>
        );
    }

    if (size === 'h2') {
        return (
            <h2 className={titleClass}>
                {title}
            </h2>
        );
    }

    if (size === 'h3') {
        return (
            <h3 className={titleClass}>
                {title}
            </h3>
        );
    }
};

export default Title;