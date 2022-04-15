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

const Nav=()=>{
    const [open,set_open]=useState(false);

    const history=useHistory();

    const show_menu=(e)=>{
        const menu=document.querySelector(".right");
        menu.classList.toggle("active");
        const btn=document.querySelector(".btn_menu")
        btn.classList.toggle("active")
    }

  

    return(
        <div className="nav">
            <div className="left">
                <img src={logo} /> 
                <div>
                    <div>
                        <button onClick={show_menu} className="btn_menu">
                            
                            <MenuIcon />
                            <CloseIcon />
                        </button>

                        <button>
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
                    <li onClick={e=>{
                        history.push("/home")
                    }}>
                        <Link to="/home"><a>Accueil</a></Link>
                    </li>
                    <li
                        onClick={e=>{
                            history.push("/about")
                        }}
                    >
                        <Link to="/about"><a>Qui sommes-nous ?</a></Link>
                    </li>

                    <li onClick={e=>{
                        history.push("/produits-et-services")
                    }}>
                        <Link to="/produits-et-services"><a>Nos Produits/Services</a></Link>
                        <ul>
                            <li>
                                <Link to="/">
                                    <a>Particulier</a>
                                    <ArrowRightIcon />
                                </Link>
                                <ul>
                                    <li>
                                        <Link to="/"><a>habitation</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><a>automobile</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><a>voyage</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><a>rc chef de famille</a></Link>
                                    </li>
                                </ul>
                            </li> 
                            <li>    
                                <Link to="/"><a>Professionnel</a>
                                <ArrowRightIcon />
                                </Link>

                                <ul>
                                    <li>
                                        <Link to="/"><a>rc pro</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><a>flotte-automobile</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><a>multirisque professionnelle</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><a>tout risque informatique</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><a>bris de marchine</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><a>tout risque chantier</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><a>rc decennale</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><a>sante</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><a>transport de marchandises</a></Link>
                                    </li>
                                    <li>
                                        <Link to="/"><a>voyages</a></Link>
                                    </li>
                                    
                                </ul>
                            </li> 
                        </ul>
                    </li>
                    

                    <li onClick={e=>{
                        history.push("/valeurs-et-engagements")
                    }}>
                        <Link to="/valeurs-et-engagements"><a>Nos Valeurs</a></Link>
                    </li>

                    <li  onClick={e=>{
                        history.push("/contact");
                    }}>
                        <Link to="/contact"><a>Contact</a></Link>
                    </li>
                </ul>
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