import './specs.css';

const Specs = ({ title, specifications }) => {
    return (
        <section className='specs' aria-label={title}>
            <div className='specs-grid' data-aos="fade">
                {specifications.map(({ title, specifications }) => (
                    <article className='specs-card' key={title}>
                        <h2 className='specs-card-title'>{title}</h2>
                        <dl className='specs-list'>
                            {specifications.map(([label, value]) => (
                                <div className='specs-row' key={label}>
                                    <dt>{label}</dt>
                                    <dd>{value}</dd>
                                </div>
                            ))}
                        </dl>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Specs;
