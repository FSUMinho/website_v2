import { useEffect, useRef, useState } from 'react';
import './specs.css';

const COUNT_DURATION = 1200;

const prefersReducedMotion = () =>
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

// Counts a whole number up from 0 once `start` is true; anything else is shown as-is.
// The real value is rendered until then, so crawlers and no-animation cases never see 0.
const CountUp = ({ value, start }) => {
    const target = /^\d+$/.test(value) ? Number(value) : null;
    const [shown, setShown] = useState(value);

    useEffect(() => {
        setShown(value);
        if (target === null || !start || prefersReducedMotion()) return;

        let frame;
        const startTime = performance.now();
        const tick = (now) => {
            const progress = Math.min((now - startTime) / COUNT_DURATION, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setShown(String(Math.round(target * eased)));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [value, target, start]);

    return shown;
};

// specifications: [{ title, rows: [{ label, value, unit? }] }]
const Specs = ({ title, specifications }) => {
    const gridRef = useRef(null);
    const [inView, setInView] = useState(false);

    // Start the count-up as soon as the cards begin to enter the screen
    useEffect(() => {
        const grid = gridRef.current;
        if (!grid || !('IntersectionObserver' in window)) {
            setInView(true);
            return;
        }
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.disconnect();
            }
        }, { threshold: 0 });
        observer.observe(grid);
        return () => observer.disconnect();
    }, []);

    return (
        <section className='specs' aria-label={title}>
            <div className='specs-grid' ref={gridRef}>
                {specifications.map(({ title, rows }, index) => {
                    const number = String(index + 1).padStart(2, '0');
                    return (
                        <article
                            className='specs-card'
                            key={title}
                            data-aos="fade-up"
                            data-aos-delay={index * 80}
                        >
                            <h2 className='specs-card-title'>
                                <span className='specs-card-index'>{number}</span>
                                {title}
                            </h2>
                            <dl className='specs-list'>
                                {rows.map(({ label, value, unit }) => (
                                    <div className='specs-row' key={label}>
                                        <dt>{label}</dt>
                                        <dd>
                                            <CountUp value={value} start={inView} />
                                            {unit && <span className='specs-unit'>{unit}</span>}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Specs;
