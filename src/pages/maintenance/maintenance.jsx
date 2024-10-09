import './maintenance.css';
import optimizing from '../../assets/optimizing.png';

const Maintenance = () => {
    return (
        <div className="maintenance-container">
            <h1>This page is under maintenance</h1>
            <h3>Contact FSUMinho for more information</h3>
            <img src={optimizing} className="maintenance-img" />
        </div>
    )
};

export default Maintenance;