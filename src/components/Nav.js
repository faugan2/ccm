import "../styles/nav.scss";
import "../styles/nav_mobile.scss";
import {Link} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useState,useEffect} from "react";
import Modal from "./Modal";
import Contact from "./Contact";
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import ccm from "./img/ccm.jpg";
import logo from "./img/logo.jpg";
import sos from "./img/sos.svg";
import sos2 from "./img/sos2.svg";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {useHistory} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {setPage,selectPage,setType,setSousType} from "../features/counterSlice";
import logo_new from "./img/new/logo.png";

const Nav=()=>{
    const [open,set_open]=useState(false);
    const [index,set_index]=useState(-1);

    const history=useHistory();
    const dispatch=useDispatch();

    const p=useSelector(selectPage);

    useEffect(()=>{
        if(p==null) return;
        set_index(p);
    },[p]);

    const show_menu=(e)=>{
        const menu=document.querySelector(".right");
        menu.classList.toggle("active");
        const btn=document.querySelector(".btn_menu")
        btn.classList.toggle("active")
    }

    const show_detail=(type,sous_type)=>{
        dispatch(setType(type));
        dispatch(setSousType(sous_type))
        history.push("/produits-et-services");
    }
    const show_contact_info=()=>{
        document.querySelector(".contact_info").classList.toggle("active");
    }
  

    return(
        <div className="nav">
            <div className="left">
                <img src={logo_new} onClick={e=>{
                    history.push("/home")
                }}/> 
                <div>
                    <div>
                        <button onClick={show_menu} className="btn_menu">
                            
                            <MenuIcon />
                            <CloseIcon />
                        </button>

                        <button onClick={show_contact_info}>
                            <img src={sos} />
                            <img src={sos2} />
                        </button>
                        <button onClick={e=>{
                            document.querySelector("#mail_to").click();
                        }}>
                            E-mail
                        </button>
                        <a  id="mail_to" href ="mailto: info@ccmcourtiers.com" style={{display:"none"}}>Send Email</a>
                        
                    </div>

                    <div>
                        <button>
                            FR
                        </button>
                        <button>
                            EN
                        </button>
                    </div>

                </div>
            </div>
            <div className="right">
                <ul>
                    <li
                    className={`${index == 0 ? "active" : ""}`}
                    onClick={e=>{
                        history.push("/home")
                    }}>
                        <Link to="/home"><a>Accueil</a></Link>
                    </li>
                    <li
                        className={`${index == 1 ? "active" : ""}`}
                        onClick={e=>{
                            history.push("/about")
                        }}
                    >
                        <Link to="/about"><a>Qui sommes-nous ?</a></Link>
                    </li>

                    <li 
                    className={`${index == 2 ? "active" : ""}`}
                
                    >
                        <Link to="#"><a>Nos Produits/Services</a></Link>
                        <ul>
                            <li>
                                <Link to="#">
                                    <a>Particuliers</a>
                                    <ArrowRightIcon />
                                </Link>
                                <ul>
                                    <li onClick={show_detail.bind(this,1,1)}>
                                        <Link><a>habitation</a></Link>
                                    </li>
                                    <li onClick={show_detail.bind(this,1,2)}>
                                        <Link><a>automobile</a></Link>
                                    </li>
                                    <li onClick={show_detail.bind(this,1,3)}>
                                        <Link><a>voyage</a></Link>
                                    </li>
                                    <li onClick={show_detail.bind(this,1,4)}>
                                        <Link><a>rc chef de famille</a></Link>
                                    </li>
                                </ul>
                            </li> 
                            <li>    
                                <Link to="#"><a>Professionnels</a>
                                <ArrowRightIcon />
                                </Link>

                                <ul>
                                    <li onClick={show_detail.bind(this,2,1)}>
                                        <Link><a>rc pro</a></Link>
                                    </li>
                                    <li onClick={show_detail.bind(this,2,2)}>
                                        <Link><a>flotte-automobile</a></Link>
                                    </li>
                                    <li onClick={show_detail.bind(this,2,3)}>
                                        <Link ><a>multirisque professionnelle</a></Link>
                                    </li>
                                    <li onClick={show_detail.bind(this,2,4)}>
                                        <Link><a>tout risque informatique</a></Link>
                                    </li>
                                    <li onClick={show_detail.bind(this,2,5)}>
                                        <Link><a>bris de marchine</a></Link>
                                    </li>
                                    <li onClick={show_detail.bind(this,2,6)}>
                                        <Link><a>tout risque chantier</a></Link>
                                    </li>
                                    <li onClick={show_detail.bind(this,2,7)}>
                                        <Link><a>rc decennale</a></Link>
                                    </li>
                                    <li onClick={show_detail.bind(this,2,8)}>
                                        <Link><a>sante</a></Link>
                                    </li>
                                    <li onClick={show_detail.bind(this,2,9)}>
                                        <Link><a>transport de marchandises</a></Link>
                                    </li>
                                    <li onClick={show_detail.bind(this,2,10)}>
                                        <Link><a>voyages</a></Link>
                                    </li>
                                    
                                </ul>
                            </li> 
                        </ul>
                    </li>

                   
                    

                    <li 
                    className={`${index == 3 ? "active" : ""}`}
                    onClick={e=>{
                        history.push("/valeurs-et-engagements")
                    }}>
                        <Link to="/valeurs-et-engagements"><a>Nos engagements</a></Link>
                    </li>

                    <li  
                    className={`${index == 5 ? "active" : ""}`}
                    onClick={e=>{
                        history.push("/parteners");
                    }}>
                        <Link><a>Partenaires</a></Link>
                    </li>

                    <li className={`${index == 7 ? "active" : ""}`}>    
                        <Link to="#">
                            <a>Emplois</a>
                        </Link>
                        <ul>
                            <li 
                            onClick={e=>{
                                history.push("/offres-emploi")
                            }}
                            ><Link to="#"><a>Offres d'emploi</a></Link></li>
                            <li
                             onClick={e=>{
                                history.push("/candidature")
                            }}
                            ><Link to="#"><a>Candidature spontanée</a></Link></li>
                        </ul>
                    </li>

                    <li  
                    className={`${index == 6 ? "active" : ""}`}
                    onClick={e=>{
                        history.push("/sinistre");
                    }}>
                        <Link><a>Déclarer un sinistre</a></Link>
                    </li>

                    <li  
                    className={`${index == 4 ? "active" : ""}`}
                    onClick={e=>{
                        history.push("/contact");
                    }}>
                        <Link to="/contact"><a>Contact</a></Link>
                    </li>
                </ul>
            </div>
            <div className="contact_info">
                <div>
                    <div>Déclarer un sinistre</div>
                    <div>Téléphone : +228 91 49 39 39</div>
                    <div>Téléphone 24h/24 : +228 98 65 50 50</div>
                    <div>Email : contact@ccmcourtiers.com</div>
                    <div>WhatsApp : +228 90 04 15 52</div>
                </div>
            </div>

            <button onClick={show_menu} className="btn_show">
                <span></span>
                <span></span>
                <span></span>
            </button>

            {open==true && <Modal content={<Contact click={e=>{set_open(false)}}/>} click={e=>{set_open(false)}}/>}
        </div>
    )
}
export default Nav;