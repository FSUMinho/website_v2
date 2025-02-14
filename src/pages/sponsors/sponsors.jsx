import './sponsors.css';
import { useTranslation } from 'react-i18next';

const sponsors = {
    Diamond: [
        { name: "Santander", img: "/sponsors/santander.svg", url: "https://www.fundacaosantanderportugal.pt/" }
    ],
    Gold: [
        { name: "Bosch", img: "/sponsors/bosch.png", url: "https://www.bosch.pt/" }
    ],
    Silver: [
        { name: "Kroftools", img: "/sponsors/kroftools.png", url: "https://www.kroftools.com/en/" },
        { name: "Tesla", img: "/sponsors/tesla.jpg", url: "https://www.tesla.com/pt_pt" }
    ],
    Bronze: [
        { name: "Coficab", img: "/sponsors/COFICAB.png", url: "https://www.coficab.pt/" },
        { name: "Cepra", img: "/sponsors/cepra.png", url: "https://www.cepra.pt/" },
        { name: "Haas", img: "/sponsors/geen-haas.jpg", url: "https://www.haascnc.com/content/ghf/en/home.html" },
        { name: "Bender", img: "/sponsors/bender.png", url: "https://www.bender.de/en/" },
        { name: "Alwelding", img: "/sponsors/alwelding.png", url: "https://www.instagram.com/alwelding/" },
        { name: "Donelab", img: "/sponsors/donelab.png", url: "https://www.donelab.pt/" },
        { name: "Piep", img: "/sponsors/piep.png", url: "https://www.piep.pt/" },
        { name: "CNC4A", img: "/sponsors/cnc4a.png", url: "https://www.cnc4a.com/" },
        {name: "Etma Metal Parts", img: "/sponsors/etma.png", url: "https://www.etma.pt/"}
    ],
    partners: [
        { name: "Tracopower", img: "/sponsors/tracopower.jpg", url: "https://www.tracopower.com/int" },
        { name: "IHH", img: "/sponsors/IHH.jpg", url: "https://www.isabellenhuette.de/en/" },
        { name: "VLB", img: "/sponsors/vlb.png", url: "https://vlb-group.com/pt-pt/" },
        { name: "Norelem", img: "/sponsors/norelem.png", url: "https://norelem.es/pt" },
        { name: "Printeca", img: "/sponsors/printeca.png", url: "https://printeca3d.com/" },
        { name: "Mais Rent", img: "/sponsors/mais_rent.png", url: "https://maisrent.pt/pt" },
        { name: "Moura Laser", img: "/sponsors/moura-laser.png", url: "https://www.mouralaser.pt/pt/" },
        { name: "Shapetek", img: "/sponsors/shapetek.png", url: "https://shapetek.pt/" },
        { name: "Poliamol", img: "/sponsors/poliamol.png", url: "https://www.poliamol.pt/" },
    ],
    institutions: [
        { name: "EEUM", img: "/sponsors/eeum.png", url: "https://www.eng.uminho.pt/pt" },
        { name: "GEPE", img: "/sponsors/gepe.png", url: "https://www.gepe.dei.uminho.pt/" },
        { name: "DEM", img: "/sponsors/dem.png", url: "https://dem.uminho.pt/" }
    ]
};

const Sponsors = () => {
    const { t } = useTranslation();

    return (
        <div className="sponsors-page">
            <h1 className="page-title">{t('sponsors.title')}</h1>
            <div className="sponsors-container">
                {Object.entries(sponsors).map(([tier, sponsorsList]) => (
                    <div key={tier} className="sponsor-tier-container">
                        <h2 className="tier-title">
                            {tier === "Diamond" ? "Diamond" :
                            tier === "Gold" ? "Gold" :
                            tier === "Silver" ? "Silver" :
                            tier === "Bronze" ? "Bronze" :
                            tier === "partners" ? t("sponsors.partner") :
                            tier === "institutions" ? t("sponsors.inst") : `${tier}`}
                        </h2>
                        
                        <div className="sponsor-tier">
                            {sponsorsList.map(({ name, img, url, style }) => (
                                <a key={name} href={url} target="_blank" rel="noopener noreferrer">
                                    <img 
                                        src={img} 
                                        alt={name} 
                                        className="sponsor-logo" 
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
