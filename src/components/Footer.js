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
                        <li><Link to="#"><a>Habitation</a></Link></li>
                        <li><Link to="#"><a>Automobile</a></Link></li>
                        <li><Link to="#"><a>Voyage</a></Link></li>
                        <li><Link to="#"><a>RC chef de famille</a></Link></li>
                    </ul>
                </div>
                <div>
                <h4>Professionnel</h4>
                    <ul>
                        <li><Link to="#"><a>RC PRO</a></Link></li>
                        <li><Link to="#"><a>Flotte-Automobile</a></Link></li>
                        <li><Link to="#"><a>Multirisque-Professionnel</a></Link></li>
                        <li><Link to="#"><a>Tout risque informatique</a></Link></li>

                        <li><Link to="#"><a>Bris de marchine</a></Link></li>
                        <li><Link to="#"><a>Tout risque chantier</a></Link></li>
                        <li><Link to="#"><a>RC decennale</a></Link></li>
                        <li><Link to="#"><a>Santé</a></Link></li>
                        <li><Link to="#"><a>Transport de marchandises</a></Link></li>
                        <li><Link to="#"><a>Voyages</a></Link></li>
                    </ul>
                </div>
                <div>
                <h4>Contacts</h4>
                    <ul>
                        <li>
                            <Link to="#">
                                <MailOutlineIcon />
                                <a>info@ccmcourtiers.com</a>
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