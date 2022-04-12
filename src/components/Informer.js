import "../styles/informer.scss";
import "../styles/informer_mobile.scss";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
const Informer=()=>{
    return(
        <div className="informer">
            <div className="top">
                <button>
                    <MenuBookIcon />
                </button>
                <h1>5 Raisons de résiliation d'un contrat <hr /></h1>
                <button className="btn_all">
                    <MoreHorizIcon style={{color:"white"}}/>
                    <span>
                    Toutes nos assurances</span>
                </button>
            </div>
            <div className="content">
                <div>
                    <div>
                        <button>1</button>
                        <h3>L’absence de paiement des cotisations</h3>
                    </div>
                    <p>
                    Si vous ne payez pas vos cotisations dans les temps impartis, c’est-à-dire dans les 10 jours après la date d’échéance, 
                    votre assureur est en droit de vous envoyer un courrier de mise en demeure. Vous disposez alors de 30 jours ...
                    <span>pour payer les cotisations dues. En cas de non-respect de ce délai, les garanties sont suspendues durant 10 jours 
                        puis le contrat est résilié pour non-paiement de prime.
                    </span>
                    </p>
                </div>

                <div>
                    <div>
                        <button>2</button>
                        <h3>La survenance d’un sinistre</h3>
                    </div>
                    <p>
                    L’assureur peut résilier un contrat après la réalisation d’un sinistre dans le délai d’un mois qui suit la conclusion 
                    des négociations relatives à l’indemnité. Le préavis est alors d’un mois et l’assureur doit reverser...
                    <span> l’éventuel trop perçu des primes.
                    
                    Votre assureur peut aussi résilier votre contrat auto si vous étiez en état d’ivresse ou sous l’emprise de 
                    stupéfiants lors d’un sinistre. 
                    Il en est de même si vous avez enfreint le code de la route et provoqué un accident de voiture.
                    </span>
                    </p>
                </div>
                <div>
                    <div>
                        <button>3</button>
                        <h3>L’aggravation du risque</h3>
                    </div>
                    <p>
                    Vous pouvez être résilié par votre assurance lorsque vous l’informez en cours de contrat d’un fait susceptible de 
                    modifier sa perception du risque. Par exemple, vous prévenez votre assureur que vous avez fait l’objet d’une 
                    suspension de permis ...<span>de 6 mois suite à une infraction relative à l’alcool ou stupéfiant ou excès de vitesse, 
                    ce dernier a la faculté d’y mettre un terme et vous êtes résilié pour aggravation du risque.</span>

                    </p>
                </div>

                <div>
                    <div>
                        <button>4</button>
                        <h3>Une déclaration d’informations inexactes</h3>
                    </div>
                    <p>
                    Faire une fausse déclaration ou omettre de transmettre des informations peut avoir de lourdes conséquences pour votre 
                    assureur. C’est pourquoi il est en droit de rompre votre contrat et même de vous demander de...
                    <span>rembourser les indemnités 
                    touchées s’il considère que la fraude était intentionnelle.</span> 
                   </p>
                </div>



                <div>
                    <div>
                        <button>5</button>
                        <h3>L’échéance de votre contrat</h3>
                    </div>
                    <p>
                    Si votre contrat arrive à date d’échéance, votre assureur est autorisé à ne pas le renouveler sans émettre de raisons 
                    particulières. Il en est cependant de même de votre côté.
                   </p>
                </div>
            </div>
        </div>
    );
}
export default Informer;