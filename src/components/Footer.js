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
                        <li><Link to="/about"><a>Qui sommes-nous ?</a></Link></li>
                        <li><Link to="/produits-et-services"><a>Nos Produits/Services</a></Link></li>
                        <li><Link to="/valeurs-et-engagements"><a>Nos valeurs</a></Link></li>
                        
                    </ul>
                </div>
                <div>
                <h4>Particuliers</h4>
                    <ul>
                        <li><Link to="/produits-et-services"><a>Habitation</a></Link></li>
                        <li><Link to="/produits-et-services"><a>Automobile</a></Link></li>
                        <li><Link to="/produits-et-services"><a>Voyage</a></Link></li>
                        <li><Link to="/produits-et-services"><a>RC chef de famille</a></Link></li>
                    </ul>
                </div>
                <div>
                <h4>Professionnel</h4>
                    <ul>
                        <li><Link to="/produits-et-services"><a>RC PRO</a></Link></li>
                        <li><Link to="/produits-et-services"><a>Flotte-Automobile</a></Link></li>
                        <li><Link to="/produits-et-services"><a>Multirisque-Professionnel</a></Link></li>
                        <li><Link to="#"><a>Tout risque informatique</a></Link></li>

                        <li><Link to="/produits-et-services"><a>Bris de marchine</a></Link></li>
                        <li><Link to="/produits-et-services"><a>Tout risque chantier</a></Link></li>
                        <li><Link to="/produits-et-services"><a>RC decennale</a></Link></li>
                        <li><Link to="/produits-et-services"><a>Santé</a></Link></li>
                        <li><Link to="/produits-et-services"><a>Transport de marchandises</a></Link></li>
                        <li><Link to="/produits-et-services"><a>Voyages</a></Link></li>
                    </ul>
                </div>
                <div>
                <h4>Contacts</h4>
                    <ul>
                        <li>
                            <a href ="mailto: info@ccmcourtiers.com">
                                <MailOutlineIcon />
                                info@ccmcourtiers.com
                            </a>
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