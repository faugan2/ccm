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


import ccm from "./img/ccm.jpg";
import logo from "./img/logo.jpg";
import sos from "./img/sos.svg";

const Nav=()=>{
    const [open,set_open]=useState(false);


    const show_menu=(e)=>{
        const menu=document.querySelector(".right");
        menu.classList.toggle("active");
        const btn=document.querySelector(".nav>button")
        btn.classList.toggle("active")
    }

  

    return(
        <div className="nav">
            <div className="left">
                <img src={logo} /> 
                <div>
                    <div>
                        <button>
                            <img src={sos} />
                        </button>
                        <button>
                            E-mail
                        </button>
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
                    <li>
                        <Link to="#"><a>Accueil</a></Link>
                    </li>
                    <li>
                        <Link to="#"><a>Qui sommes-nous ?</a></Link>
                    </li>

                    <li>
                        <Link to="#"><a>Produits & Services</a></Link>
                        {/*<ul className="dropdown">
                            <li>
                                <Link to="/"><a>Particulier</a></Link>
                            </li> 
                            <li>    
                                <Link to="/"><a>Professionnel</a></Link>
                            </li> 
                        </ul>*/}
                    </li>
                    

                    <li>
                        <Link to="#"><a>Valeurs & Engagements</a></Link>
                    </li>

                    <li  onClick={e=>{set_open(true)}}>
                        <Link to="#"><a>Contact</a></Link>
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