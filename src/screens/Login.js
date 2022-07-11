import React, { useState } from 'react'
import "../styles/login.scss";
import {auth} from "../firebase_file";
import CircularProgress from '@material-ui/core/CircularProgress';
export default function Login() {

    const [processing,set_processing]=useState(false);
    const login=async()=>{
        var id=document.querySelector("#login").value;
        var pw=document.querySelector("#password").value;
        if(id=="" || pw==""){
            alert("Certains champs sont vides");
            return;
        }
        set_processing(true)
        auth.signInWithEmailAndPassword(id,pw).then(()=>{
            console.log("ok we are now logged in")
            set_processing(false);
        }).catch((err)=>{
            set_processing(false)
            alert("Identifiants incorrectes")
        })
    }
  return (
    <div className="login">
        <h2>Administration</h2>
        <div className="line">
            <label>Identifiant</label>
            <input type="email" id="login"/>
        </div>
        <div className="line">
            <label>Mot de passe</label>
            <input type="password" id="password" />
        </div>

        <div className="line">
            
            <button className="btn_valider" onClick={login} disabled={processing}>
            {processing==true && <CircularProgress size={15} style={{color:"white"}} />}
                Valider</button>
        </div>
    </div>
  )
}
