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
        const echeances=document.querySelectorAll(".echeance");
        const telephone=document.querySelector("#telephone").value;
        const email=document.querySelector("#email").value;

        const assurance=document.querySelector("input[name=assurance]:checked")?.value;
        
        const echeance=[];
        for(var i=0; i<echeances.length; i++){
            echeance.push(echeances[i].value);
        }
       

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

    const number_vehicule_changed=(e)=>{
        const key=e.keyCode;
        
        let v=document.querySelector("#nombre_vehiculee").value;
        
        v=parseInt(v);
        if(isNaN(v)){
            alert("Vous devez saisir un nombre entier");
            v=1;
            document.querySelector("#nombre_vehiculee").value=1;
        }

        

        var lines="";
        for(var i=0; i<v; i++){
            lines+=`<input type='date' class='echeance' />`;
        }

        document.querySelector(".response_line").innerHTML=lines;
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
                            <input type="number"
                            onKeyUp={number_vehicule_changed}
                            id="nombre_vehiculee"  placeholder="saisir le nombre"/>
                        </div>
                    </div>
                </div>

                <div className="line">
                    <h5>Date d’échéance de l’assurance</h5>
                    <div className="response response_line">
                        <input type="date" className="echeance" />
                        
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
                        
                         Votre formulaire est bien envoyé…Nous vous remercions pour votre intérêt. <br />
                         Nous vous recontactons dans les meilleurs délais.<br /><br />
                          Vous pouvez continuer sur notre site internet en cliquant <a href="/">ici</a>
                        </h4>
                </div>
            }

        </div>
    );
}

export default HomeContent;