import "../styles/engagements.scss";
import "../styles/engagements_mobile.scss";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import BusinessIcon from '@material-ui/icons/Business';
const Engagements=()=>{
    return(
        <div className="engagements">
            <div className="top">
                <h2>Pourquoi choisir CCM</h2>
            </div>
            <div className="content">
                <div>
                    <AssignmentTurnedInIcon />
                    <h3>Votre fidélité récompensée</h3>
                    <p>Afin de bénéficier des meilleures garanties au meilleur prix, 
                        nous vous proposons une révision systématique de votre contrat tous les deux ans.
                    </p>
                </div>


                <div>
                    <GroupWorkIcon />
                    <h3>Notre équipe à votre écoute</h3>
                    <p>
                    Une demande spécifique ? Un doute ? Nous vous rappelons gratuitement pour répondre à toutes vos questions.
                    </p>
                </div>

                <div>
                    <AccountBoxIcon />
                    <h3>Des assurances adaptées à vos besoins</h3>
                    <p>
                    Nous sélectionnons auprès de nos partenaires l’assurance qui vous convient le mieux : 
                    la certitude pour vous d’être bien couvert sans dépense superflue.
                    </p>
                </div>

                <div>
                    <BusinessIcon />
                    <h3>Notre professionnalisme, gage de votre confiance</h3>
                    <p>
                    Une équipe compétente et des partenaires fiables vous garantissent d’être assuré en toute sérénité.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Engagements;