import './stats_card.css';

const StatsCard = ({ image, stat, value, orientation }) => {
    return (
        <div className="stat-card-container">
            {orientation === "1" && <img className='stat-icon' src={image} alt="icon" />}

            <div className='stat-text-container'>
                <p>
                    <span className='stat-number'>{value}</span> <br />
                    <span className='stat-name'>{stat}</span>
                </p>
            </div>

            {orientation === "2" && <img className='stat-icon' src={image} alt="icon" />}
        </div>
    );
};

export default StatsCard;
