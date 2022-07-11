import "../styles/parteners.scss";
import "../styles/parteners_mobile.scss";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import assitchape from "./img/assitchape.png";
import foaf from "./img/foaf.png";
import {useState,useEffect} from "react";
import ccm from "./img/ccm.jpg";
import sici from "./img/sici.jpg";
import a2w from "./img/logo3.jpeg";
import get_driver from "./img/get_driver.jpeg";
import adesco from "./img/adesco.jpg";
import jsql from "./img/jsql.png";

const Parteners=()=>{
    const [data,set_data]=useState([sici,assitchape,foaf,ccm,a2w,get_driver,adesco,jsql])
    return(
        <div className="parteners">
           <ScrollMenu>
                {
                    data?.map((item,i)=>{
                        return(
                           <button 
                            key={i}
                            className="partener"
                           >
                               <img src={item} />
                           </button>
                        )
                    })
                }
                </ScrollMenu>
        </div>
    );
}
export default  Parteners;