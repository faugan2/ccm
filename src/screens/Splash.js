import "../styles/splash.scss";
import CircularProgress from '@material-ui/core/CircularProgress';

import {useState,useEffect} from "react";
import { useHistory } from "react-router-dom";

const Splash=()=>{
    const history=useHistory();
    useEffect(()=>{
        setTimeout(()=>{
            history.replace("/home");
        },2000)
    },[])
    return (
        <div className="splash">
           <div>
               <CircularProgress size={25} />
               <p>Chargement...</p>
           </div>
           
        </div>
    )
}

export default Splash;