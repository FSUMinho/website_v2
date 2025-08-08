import './sponsors.css';
import { useTranslation } from 'react-i18next';
import Title from '../../components/title/title';

export const sponsors = {
    Diamond: [
        { name: "Santander", img: "/sponsors/santander.svg", url: "https://www.fundacaosantanderportugal.pt/" }
    ],
    Gold: [
        { name: "BorgWarner", img: "/sponsors/borgwarner.png", url: "https://www.borgwarner.com/" },
        { name: "Kroftools", img: "/sponsors/kroftools.png", url: "https://www.kroftools.com/en/" },
    ],
    Silver: [
        { name: "Tesla", img: "/sponsors/tesla.png", url: "https://www.tesla.com/pt_pt" },
        { name: "Cadflow", img: "/sponsors/cadflow.png", url: "https://www.cadflow.pt/" },
    ],
    Bronze: [
        { name: "Bosch", img: "/sponsors/bosch.png", url: "https://www.bosch.pt/" },
        { name: "Coficab", img: "/sponsors/COFICAB.png", url: "https://www.coficab.pt/" },
        { name: "Cepra", img: "/sponsors/cepra.png", url: "https://www.cepra.pt/" },
        { name: "Haas", img: "/sponsors/geen-haas.jpg", url: "https://www.haascnc.com/content/ghf/en/home.html" },
        { name: "Donelab", img: "/sponsors/donelab.png", url: "https://www.donelab.pt/" },
        { name: "Piep", img: "/sponsors/piep.png", url: "https://www.piep.pt/" },
        { name: "CNC4A", img: "/sponsors/cnc4a.jpg", url: "https://www.cnc4a.com/" },
        { name: "Etma Metal Parts", img: "/sponsors/etma.png", url: "https://www.etma.pt/"},
        { name: "Einhell", img: "/sponsors/einhell.png", url: "https://www.einhell.pt/"},
        { name: "Bontaz", img: "/sponsors/bontaz.png", url: "https://www.bontaz.com/en/"},
        { name: "Quantal", img: "/sponsors/quantal.png", url: "https://www.quantal.pt/"},
        { name: "Inegi", img: "/sponsors/inegi.png", url: "https://www.inegi.pt/pt/"},
        { name: "Wondermac", img: "/sponsors/wondermac.png", url: "https://www.wondermac.pt/" },
        { name: "Catim", img: "/sponsors/catim.png", url: "https://www.catim.pt/" },
        { name: "Norelem", img: "/sponsors/norelem.png", url: "https://norelem.es/pt" },
        { name: "Subic Group", img: "/sponsors/subic.png", url: "https://subic.pt/" },
        { name: "Moura Laser", img: "/sponsors/moura-laser.png", url: "https://www.mouralaser.pt/pt/" },
        { name: "Tufama", img: "/sponsors/tufama.png", url: "https://www.tufama.pt/" },
    ],
    partners: [
        { name: "Tracopower", img: "/sponsors/tracopower.png", url: "https://www.tracopower.com/int" },
        { name: "IHH", img: "/sponsors/IHH.png", url: "https://www.isabellenhuette.de/en/" },
        { name: "VLB", img: "/sponsors/vlb.png", url: "https://vlb-group.com/pt-pt/" },
        { name: "Mais Rent", img: "/sponsors/mais_rent.png", url: "https://maisrent.pt/pt" },
        { name: "Poliamol", img: "/sponsors/poliamol.png", url: "https://www.poliamol.pt/" },
        { name: "JMartins & Dias", img: "/sponsors/jmd.svg", url: "https://www.jmartinsdias.pt/home"},
        { name: "Placa Nobre", img: "/sponsors/placa_nobre.png", url: "https://www.palcanobre.pt/"},
        { name: "Cordex", img: "/sponsors/cordex.png", url: "https://cordex.com/pt/home-pt/"},
        { name: "Metalotrofa", img: "/sponsors/metalotrofa.jpeg", url: "https://www.metalotrofa.com/" },
    ],
    software: [
        { name: "RapidHarness", img: "/sponsors/rapidharness.png", url: "https://rapidharness.com/" },
        { name: "Cadflow", img: "/sponsors/cadflow.png", url: "https://www.cadflow.pt/" }
    ],
    institutions: [
        { name: "EEUM", img: "/sponsors/eeum.png", url: "https://www.eng.uminho.pt/pt" },
        { name: "GEPE", img: "/sponsors/gepe.png", url: "https://www.gepe.dei.uminho.pt/" },
        { name: "DEM", img: "/sponsors/dem.png", url: "https://dem.uminho.pt/" }
    ]
};

const Sponsors = () => {
    const { t } = useTranslation();
    
    const translateTierName = (tier) => {
        switch(tier) {
            case "Diamond":
            case "Gold":
            case "Silver":
            case "Bronze":
                return tier;
            case "partners":
                return t("sponsors.partner");
            case "software":
                return t("sponsors.software");
            case "institutions":
                return t("sponsors.inst");
            default:
                return tier;
        }
    };

    return (
        <div className="sponsors-page">
            <Title size="h1" title={t('sponsors.title')} />
            <div className="sponsors-container">
                {Object.entries(sponsors)
                    .filter(([_, sponsorsList]) => sponsorsList && sponsorsList.length > 0)
                    .map(([tier, sponsorsList]) => (
                        <div key={tier} className="sponsor-tier-container">
                            <h2 className="tier-title">
                                {translateTierName(tier)}
                            </h2>
                            
                            <div className="sponsor-tier">
                                {sponsorsList.map(({ name, img, url, style }) => (
                                    <a key={name} href={url} target="_blank" rel="noopener noreferrer">
                                        <img 
                                            src={img} 
                                            alt={name} 
                                            className="sponsor-logo"
                                            loading="lazy" 
                                            style={style || {}} 
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Sponsors;