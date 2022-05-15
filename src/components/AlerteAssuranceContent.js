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

        const nom_prenom=document.querySelector("#nom_prenom").value;
        const nombre_vehiculee=document.querySelector("#nombre_vehiculee").value;
        const echeance=document.querySelector("#echeance").value;
        const telephone=document.querySelector("#telephone").value;
        const email=document.querySelector("#email").value;

        const assurance=document.querySelector("input[name=assurance]:checked")?.value;
        
       

        if(nombre_vehiculee=="" || nom_prenom=="" || telephone=="" || email==""){
            alert("Certains champs sont vides");
            return;
        }

        if(assurance==undefined){
            alert("Certains champs sont vides");
            return;
        }

        const obj={
            nom_prenom,
            nombre_vehiculee,
            echeance,
            telephone,
            email,
            assurance,
            date:firebase.firestore.FieldValue.serverTimestamp()
        }

        const btn=e.target;
        btn.disabled=true;
        btn.innerHTML="Patientez...";
        db.collection("alerte_assurance").add(obj).then(()=>{
           
            btn.disabled=false;
            btn.innerHTML="Validez"
            set_show_form(false);

            fetch("https://ccmcourtiers.com/email2.php")
        }).catch((err)=>{
            alert(err.message);
            btn.disabled=false;
            btn.innerHTML="Validez"
            set_show_form(true);
        })


    }

    useEffect(()=>{
        var inputs=document.querySelectorAll("input");
        for(var i=0; i<inputs?.length; i++){
            const el=inputs[i];
            el.title=el.id;
        }
    },[])
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
                            <input type="text" placeholder="Votre nom complet" id="nom_prenom" />
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
                        <input type="date" id="echeance" />
                    </div>
                </div>


                <div className="line">
                    <h5>
                        Téléphone
                        <span className="required">*</span>
                    </h5>
                    <div className="response">
                        <div>
                            <input type="tel" placeholder="+228 00 00 00 00 "  id="telephone" />
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
                            <input type="email" placeholder="example@domaine.com" id="email" />
                        </div>
                    </div>
                </div>


                


                
                <div className="line">
                    <h5>
                     Avez-vous une assurance habitation ?
                    <span className="required">*</span></h5>
                    <div className="response">
                        <div onClick={check.bind(this,"assurance_1")}>
                            <input type="radio" name="assurance" value="1" id="assurance_1"/>
                            <label>Oui</label>
                        </div>
                        <div onClick={check.bind(this,"assurance_2")}>
                            <input type="radio" name="assurance" value="2" id="assurance_2" />
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