import "../styles/footer.scss";
import "../styles/footer_mobile.scss";
import {Link} from "react-router-dom";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import {useDispatch,useSelector} from "react-redux";
import {setPage,selectPage,setType,setSousType} from "../features/counterSlice";
import {useHistory} from "react-router-dom";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import video from "./videos/video.mp4";

const Footer=()=>{
    const history=useHistory();
    const dispatch=useDispatch();

    const show_detail=(type,sous_type)=>{
        dispatch(setType(type));
        dispatch(setSousType(sous_type))
        history.push("/produits-et-services");
    }

    return(
        <div className="footer">
            <div className="content">
                <div>
                    <h4>A propos de nous</h4>
                    <ul>
                        <li><Link to="/about"><a>Qui sommes-nous ?</a></Link></li>
                        <li><Link to="/valeurs-et-engagements"><a>Nos engagements</a></Link></li>
                        
                    </ul>
                    <br />
                    
                </div>
                <div>
                <h4>Particuliers</h4>
                    <ul>
                    <li onClick={show_detail.bind(this,1,1)}>
                        <Link><a>Habitation</a></Link>
                    </li>
                    <li onClick={show_detail.bind(this,1,2)}>
                        <Link><a>Automobile</a></Link>
                    </li>
                    <li onClick={show_detail.bind(this,1,3)}>
                        <Link><a>Voyage</a></Link>
                    </li>
                    <li onClick={show_detail.bind(this,1,4)}>
                        <Link><a>RC chef de famille</a></Link>
                    </li>
                    </ul>
                </div>
                <div>
                <h4>Professionnels</h4>
                    <ul>
                    <li onClick={show_detail.bind(this,2,1)}>
                        <Link><a>RC PRO</a></Link>
                    </li>
                    <li onClick={show_detail.bind(this,2,2)}>
                        <Link><a>Flotte-Automobile</a></Link>
                    </li>
                    <li onClick={show_detail.bind(this,2,3)}>
                        <Link ><a>Multirisque professionnelle</a></Link>
                    </li>
                    <li onClick={show_detail.bind(this,2,4)}>
                        <Link><a>Tous risques informatiques</a></Link>
                    </li>
                    <li onClick={show_detail.bind(this,2,5)}>
                        <Link><a>Bris de machine</a></Link>
                    </li>
                    <li onClick={show_detail.bind(this,2,6)}>
                        <Link><a>Tous risques chantier</a></Link>
                    </li>
                    <li onClick={show_detail.bind(this,2,7)}>
                        <Link><a>RC décennale</a></Link>
                    </li>
                    <li onClick={show_detail.bind(this,2,8)}>
                        <Link><a>Santé</a></Link>
                    </li>
                    <li onClick={show_detail.bind(this,2,9)}>
                        <Link><a>Transport de marchandises</a></Link>
                    </li>
                    <li onClick={show_detail.bind(this,2,10)}>
                        <Link><a>Voyages</a></Link>
                    </li>
                    </ul>
                </div>
                <div>
                <h4>Contacts</h4>
                    <ul>
                        <li>
                            <a href ="mailto: info@ccmcourtiers.com">
                                <MailOutlineIcon />
                                contact@ccmcourtiers.com
                            </a>
                        </li>

                        <li>
                            <Link to="#">
                                <CallIcon />
                                <a>+228 91 49 39 39</a>
                            </Link>
                        </li>

                        <li>
                            <Link to="#">
                                <CallIcon /> 
                                <a>+228 98 65 50 50 (24h/24)</a>
                            </Link>
                        </li>

                        <li>
                            <Link to="#">
                                <WhatsAppIcon />
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