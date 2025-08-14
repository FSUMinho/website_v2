import './title.css';

const Title = ({ title, size = 'h1', primary = false }) => {
  const titleClass = primary ? "primary-title" : "section-title";

  switch (size) {
    case 'h1':
      return <h1 className={titleClass}>{title}</h1>;
    case 'h2':
      return <h2 className={titleClass}>{title}</h2>;
    case 'h3':
      return <h3 className={titleClass}>{title}</h3>;
    default:
      return <h2 className={titleClass}>{title}</h2>;
  }
};

export default Title;
