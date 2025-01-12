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
import norelem from '../../assets/sponsors/norelem.png'
import printeca from '../../assets/sponsors/printeca.png'
import haas from '../../assets/sponsors/geen-haas.jpg'
import bender from '../../assets/sponsors/bender.png'
import alwelding from '../../assets/sponsors/alwelding.png'
import mais_rent from '../../assets/sponsors/mais_rent.png'
import moura_laser from '../../assets/sponsors/moura-laser.png'
import gepe from '../../assets/sponsors/gepe.png'
import shapetek from '../../assets/sponsors/shapetek.png'
import donelab from '../../assets/sponsors/donelab.png'
import santander from '../../assets/sponsors/santander.svg'

const Sponsors = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('sponsors.title')}</h1>

            <div className='sponsors-container'>
                <h2 className='tier-title'>Diamond</h2>

                <div className='sponsor-tier'>
                    <a href='https://www.fundacaosantanderportugal.pt/'><img src={santander} className='sponsor-logo' /></a>
                </div>

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

                    <a href='https://www.haascnc.com/content/ghf/en/home.html'><img src={haas} className='sponsor-logo' /></a>

                    <a href='https://www.bender.de/en/'><img src={bender} className='sponsor-logo' /></a>

                    <a href='https://www.instagram.com/alwelding/'><img src={alwelding} className='sponsor-logo' /></a>

                    <a href='https://www.donelab.pt/'><img src={donelab} className='sponsor-logo' style={{width: '8vw'}} /></a>

                    <a href='https://www.piep.pt/'><img src={piep} className='sponsor-logo' /></a>
                </div>

                <h2 className='tier-title'>{t('sponsors.partner')}</h2>

                <div className='sponsor-tier'>
                    <a href='https://www.tracopower.com/int'><img src={tracopower} className='sponsor-logo' /></a>
                    
                    <a href='https://www.isabellenhuette.de/en/'><img src={ihh} className='sponsor-logo' /></a>

                    <a href='https://vlb-group.com/pt-pt/'><img src={vlb} className='sponsor-logo' /></a>

                    <a href='https://norelem.es/pt/?gad_source=1&gclid=CjwKCAjwtNi0BhA1EiwAWZaANIudrdWOgR9PyGX5LAQIqMXnHsQe5d_NNs3-VgJ_p_E8_JpR-dpOdhoCa34QAvD_BwE'><img src={norelem} className='sponsor-logo' /></a>

                    <a href='https://printeca3d.com/'><img src={printeca} className='sponsor-logo' /></a>

                    <a href='https://maisrent.pt/pt'><img src={mais_rent} className='sponsor-logo' /></a>

                    <a href='https://www.mouralaser.pt/pt/'><img src={moura_laser} className='sponsor-logo' /></a>

                    <a href='https://www.gepe.dei.uminho.pt/'><img src={gepe} className='sponsor-logo' /></a>
                    
                    <a href='https://shapetek.pt/'><img src={shapetek} className='sponsor-logo' /></a>
                </div>
            </div>
        </div>
    );
}

export default Sponsors;
