import './sponsors.css'
import { useTranslation } from 'react-i18next';
import bosch from '../../assets/sponsors/bosch.png'
import cepra from '../../assets/sponsors/cepra.png'
import coficab from '../../assets/sponsors/COFICAB.png'
import ihh from '../../assets/sponsors/IHH.jpg'
import kroftools from '../../assets/sponsors/kroftools.png'
import piep from '../../assets/sponsors/piep.png'
import tesla from '../../assets/sponsors/tesla.jpg'
import tracopower from '../../assets/sponsors/tracopower.jpg'
import vlb from '../../assets/sponsors/vlb.png'

const Sponsors = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('sponsors.title')}</h1>

            <div className='sponsors-container'>
                <h2 className='tier-title'>Gold</h2>

                <div className='sponsor-tier'>
                    <a href='https://www.bosch.pt/'><img src={bosch} className='sponsor-logo' /></a>
                </div>

                <h2 className='tier-title'>Silver</h2>

                <div className='sponsor-tier'>
                    <a href='https://www.kroftools.com/en/'><img src={kroftools} className='sponsor-logo' /></a>

                    <a href='https://www.tesla.com/pt_pt'><img src={tesla} className='sponsor-logo' /></a>
                </div>

                <h2 className='tier-title'>Bronze</h2>

                <div className='sponsor-tier'>
                    <a href='https://www.coficab.pt/'><img src={coficab} className='sponsor-logo' /></a>
                    
                    <a href='https://www.cepra.pt/'><img src={cepra} className='sponsor-logo' /></a>

                    <a href='https://vlb-group.com/pt-pt/'><img src={vlb} className='sponsor-logo' /></a>
                </div>

                <h2 className='tier-title'>{t('sponsors.partner')}</h2>

                <div className='sponsor-tier'>
                    <a href='https://www.tracopower.com/int'><img src={tracopower} className='sponsor-logo' /></a>
                    
                    <a href='https://www.isabellenhuette.de/en/'><img src={ihh} className='sponsor-logo' /></a>

                    <a href='https://www.piep.pt/'><img src={piep} className='sponsor-logo' /></a>
                </div>
            </div>
        </div>
    );
}

export default Sponsors;