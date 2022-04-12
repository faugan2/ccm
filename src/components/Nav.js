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
                <img src={ccm} /> 
                <h1>CCM <span>EXPRESS</span></h1>
            </div>
            <div className="right">
                <ul>
                    <li>
                        <HomeIcon />
                        <Link to="#"><a>Accueil</a></Link>
                    </li>
                    <li>
                        <HelpOutlineIcon />
                        <Link to="#"><a>Qui sommes-nous ?</a></Link>
                    </li>

                    <li>
                        <FolderOpenIcon />
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
                        <TurnedInNotIcon />
                        <Link to="#"><a>Valeurs & Engagements</a></Link>
                    </li>

                    <li  onClick={e=>{set_open(true)}}>
                        <MailOutlineIcon />
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