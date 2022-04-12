import "../styles/footer.scss";
import "../styles/footer_mobile.scss";
import {Link} from "react-router-dom";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
const Footer=()=>{
    return(
        <div className="footer">
            <div className="content">
                <div>
                    <h4>A propos de nous</h4>
                    <ul>
                        <li><Link to="#"><a>Qui sommes-nous ?</a></Link></li>
                        <li><Link to="#"><a>Produits & Services</a></Link></li>
                        <li><Link to="#"><a>Valeurs & Engagements</a></Link></li>
                        
                    </ul>
                </div>
                <div>
                <h4>Particuliers</h4>
                    <ul>
                        <li><Link to="#"><a>Assurance Auto</a></Link></li>
                        <li><Link to="#"><a>Assurance Habitation</a></Link></li>
                        <li><Link to="#"><a>Assurance Voyage</a></Link></li>
                        <li><Link to="#"><a>Assurance CF chef de famille</a></Link></li>
                    </ul>
                </div>
                <div>
                <h4>Professionnel</h4>
                    <ul>
                        <li><Link to="#"><a>Assurance Voyage</a></Link></li>
                        <li><Link to="#"><a>Assurance Risque professionnel</a></Link></li>
                        <li><Link to="#"><a>Assurance Vol, Incendits</a></Link></li>
                        <li><Link to="#"><a>Assurance Catastrophe Naturelle</a></Link></li>
                    </ul>
                </div>
                <div>
                <h4>Contacts</h4>
                    <ul>
                        <li>
                            <Link to="#">
                                <MailOutlineIcon />
                                <a>contact@ccmcourtiers.com</a>
                            </Link>
                        </li>

                        <li>
                            <Link to="#">
                                <CallIcon />
                                <a>+228 90 04 15 52</a>
                            </Link>
                        </li>

                        <li>
                            <Link to="#">
                                <FacebookIcon />
                                <a href="https://facebook.com/ccm">ccmcourtiers</a>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>

            <div className="bottom">
                <div className="content">
                <p>ccmcourtiers.com - Copyright &copy; 2018-2022 - Tous droits résevés.</p>
                </div>
                
            </div>
        </div>
    );
}

export default Footer;