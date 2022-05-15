import "../styles/home_content.scss";
import "../styles/home_content_mobile.scss";
import bg from "./img/banner.webp";
import bg2 from "./img/auto.jpg";
import bg3 from "./img/new/ass_multi_risque.jpg";
import {useState,useEffect} from "react";
import video from "./videos/video.mp4";
import CloseIcon from '@material-ui/icons/Close';
import new_bg from "./img/new/bg6.jpg";
import  firebase from "firebase";
import {db} from "../firebase_file";

const HomeContent=()=>{

    const [show_form,set_show_form]=useState(true);
	
    const check=(id)=>{
        document.querySelector(`#${id}`).click();
    }

    const valider=(e)=>{
        const je_suis=document.querySelector("input[name=je_suis]:checked")?.value;
        const nombre_vehiculee=document.querySelector("#nombre_vehiculee").value;
        const assure=document.querySelector("input[name=assure]:checked").value;
        const expire=document.querySelector("#expire").value;
        const contact=document.querySelector("input[name=contact]:checked").value;
        const contact_saisie=document.querySelector("#contact_saisie").value;
        const offre=document.querySelector("input[name=offre]:checked").value;
        const garantie=document.querySelector("input[name=garantie]:checked").value;

        if(je_suis==undefined || assure==undefined 
             || contact==undefined 
            || offre==undefined || garantie==undefined){
            alert("Certains champs sont vides");
            return;
        }

        if(nombre_vehiculee=="" || contact_saisie==""){
            alert("Certains champs sont vides");
            return;
        }

        const obj={
            je_suis,
            nombre_vehiculee,
            assure,
            expire,
            contact,
            contact_saisie,
            offre,
            garantie,
            date:firebase.firestore.FieldValue.serverTimestamp()
        }

        const btn=e.target;
        btn.disabled=true;
        btn.innerHTML="Patientez...";
        db.collection("auto_credit").add(obj).then(()=>{
           
            btn.disabled=false;
            btn.innerHTML="Validez"
            set_show_form(false);

            fetch("https://ccmcourtiers.com/email.php")
        }).catch((err)=>{
            alert(err.message);
            btn.disabled=false;
            btn.innerHTML="Validez"
            set_show_form(true);
        })


    }
    return(
        <div className="auto_credit_content">
           {show_form==true &&  <div className="form">
                <h4>
                ALERTE ASSURANCE
                </h4>
                <p>
                Vous possédez un ou des véhicules assurés. Notre société CCM agréée par le Ministère de l’Economie et 
                des Finances vous alerte quelques jours avant l’échéance de votre contrat en cours et vous fait des
                 propositions adaptées à vos besoins. 
                Vous n’avez plus qu’à faire votre choix et bingo, vous êtes couverts continuellement.
                </p><br />

                <h5>Je souhaite bénéficier de l’offre gratuite d’alerte et de propositions:</h5>

                <div className="line">
                    <h5>Nom et Prénoms<span className="required">*</span></h5>
                    <div className="response">
                        <div>
                            <input type="text" />
                        </div>
                    </div>
                </div>

                <div className="line">
                    <h5>
                        Combien de véhicules possédez vous?
                        <span className="required">*</span>
                    </h5>
                    <div className="response">
                        <div>
                            <input type="text" id="nombre_vehiculee"  placeholder="saisir le nombre"/>
                        </div>
                    </div>
                </div>

                <div className="line">
                    <h5>Date d’échéance de l’assurance</h5>
                    <div className="response">
                        <input type="date" id="expire" />
                    </div>
                </div>


                <div className="line">
                    <h5>
                        Téléphone
                        <span className="required">*</span>
                    </h5>
                    <div className="response">
                        <div>
                            <input type="tel" />
                        </div>
                    </div>
                </div>

                <div className="line">
                    <h5>
                        Mail
                        <span className="required">*</span>
                    </h5>
                    <div className="response">
                        <div>
                            <input type="tel" />
                        </div>
                    </div>
                </div>


                <div className="line">
                    <h5>
                        Téléphone
                        <span className="required">*</span>
                    </h5>
                    <div className="response">
                        <div>
                            <input type="tel" />
                        </div>
                    </div>
                </div>


                
                <div className="line">
                    <h5>
                    - Avez-vous une assurance habitation ?
                    <span className="required">*</span></h5>
                    <div className="response">
                        <div onClick={check.bind(this,"offre_1")}>
                            <input type="radio" name="offre" value="1" id="offre_1"/>
                            <label>Oui</label>
                        </div>
                        <div onClick={check.bind(this,"offre_2")}>
                            <input type="radio" name="offre" value="2" id="offre_2" />
                            <label>Non</label>
                        </div>
                    </div>
                </div>

            

                


                

                <div className="line">
                    <button onClick={valider}>
                        Valider
                    </button>
                </div>


            </div>
            }

            {
                show_form==false && 
                <div className="form">
                        <h4>
                        Nous vous remercions pour votre intérêt. Nous vous recontactons dans 
                        les meilleurs délais.<br /><br />
                         Vous pouvez continuer sur notre site internet en cliquant <a href="/">ici</a>
                        </h4>
                </div>
            }

        </div>
    );
}

export default HomeContent;