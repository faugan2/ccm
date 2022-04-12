import "../styles/une.scss";
import "../styles/une_mobile.scss";
import banner from "./img/banner.webp";

const Une=()=>{
    return(
        <div className="une">
            <div className="top">
                <h1>Nos conseils</h1>
                <h2>Informations autour du contrat d’assurance auto</h2>
                <p>
                Assurer son véhicule est une obligation légale pour tous les propriétaires de véhicules 
                terrestres à moteur. En cas de non respect de cette loi, l’Etat Togolais est en droit
                 de mettre en œuvre des sanctions.
                </p>
            </div>
            <div className="content">
                <div>
                    <img src={banner} />
                    <h2>Contrat d’assurance auto : quelle obligation ?</h2>
                    <p>
                    Au Togo, la loi impose que tout véhicule terrestre à moteur en état de circuler doit être 
                    couvert par une assurance.
                    S’il existe plusieurs types de contrat d’assurances, tout véhicule doit au minimum 
                    bénéficier d’une assurance en responsabilité civile, aussi appelée couramment 
                    « garantie au tiers », car elle protège les tiers des dommages matériels et corporels 
                    qui pourraient survenir en cas de sinistre.

                    </p>
                </div>
                <div>
                    <img src={banner} />
                    <h2>Voiture non assurée : quelles sanctions ?</h2>
                    <p>
                    La loi sur l’assurance auto concerne aussi bien les véhicules en circulation que ceux qui 
                    ne circulent pas.Pour prouver que vous êtes assuré, vous devez afficher clairement votre 
                    attestation d’assurance sur la voiture. Si vous ne respectez pas ces conditions, 
                    vous encourez les sanctions allant d’une amende jusqu’à la confiscation de votre véhicule 
                    en passant par la suspension ou l’annulation de votre permis de conduire avec interdiction 
                    d’en solliciter un nouveau pendant plusieurs années.

                    </p>
                </div>
                <div>
                    <img src={banner} />
                    <h2>Quelles sont les garanties d’assurance exigées par la loi?</h2>
                    <p>
                    Pour conduire un véhicule au Togo, vous devez obligatoirement souscrire la garantie 
                    d'assurance Responsabilité civile. Cette garantie vous protège si vous êtes impliqué 
                    dans un accident et que vous endommagez les biens appartenant à d'autres personnes, 
                    ou si vous blessez une personne ou causez son décès.
                    </p>
                </div>
                <div>
                    <img src={banner} />
                    <h2>Est-ce que je suis obligé de souscrire une assurance auto?</h2>
                    <p>Oui, la loi vous y oblige. Vous serez passible d’une amende si vous êtes pris à
                         conduire sans assurance auto au Togo. Vous devrez payer vous-même les dommages que 
                         vous causerez aux biens des autres et assumer les frais d’une poursuite si vous 
                         blessez ou causez le décès d’une personne.</p>
                </div>
            </div>
        </div>
    );
}
export default Une;