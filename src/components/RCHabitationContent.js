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

        const proposant=document.querySelector("#proposant").value;
        const adresse=document.querySelector("#adresse").value;
        const telephone=document.querySelector("#telephone").value;
        const superficie=document.querySelector("#superficie").value;
        const nombre_piece=document.querySelector("#nombre_piece").value;
        const nature_logement=document.querySelector("#nature_logement").value;
        const valeur_logement=document.querySelector("#valeur_logement").value;
        const loyer_mensuel=document.querySelector("#loyer_mensuel").value;
        const usage_logement=document.querySelector("#usage_logement").value;
        //const dependances=document.querySelector("#dependances").value;
        const nombre_personne_toi=document.querySelector("#nombre_personne_toi").value;
        const valeur_biens=document.querySelector("#valeur_biens").value;
        const objet_valeur=document.querySelector("#objet_valeur").value;
        const equipement_particulier=document.querySelector("#equipement_particulier").value;
        const protection_vol=document.querySelector("#protection_vol").value;
        const protection_incendie=document.querySelector("#protection_incendie").value;

        const dependances=[];
        const els=document.querySelectorAll(".dependances:checked");
        for(var i=0; i<els.length; i++){
            var v=els[i].value;
            dependances.push(v);
        }

        if(
           proposant=="" ||
           adresse=="" ||
           telephone=="" ||
           superficie=="" ||
           nombre_piece=="" ||
           nature_logement=="" ||
           usage_logement=="" ||
           dependances.length==0 || 
           nombre_personne_toi=="" ||
           valeur_biens=="" ||
           objet_valeur=="" ||
           equipement_particulier=="" ||
           protection_vol=="" ||
           protection_incendie=="" 
        ){
            alert("Certains champs sont vides");
            return;
        }



        

        const obj={
            proposant,
            adresse,
            telephone,
            superficie,
            nombre_piece,
            nature_logement,
            valeur_logement,
            loyer_mensuel,
            usage_logement,
            dependances,
            nombre_personne_toi,
            valeur_biens,
            objet_valeur,
            equipement_particulier,
            protection_vol,
            protection_incendie,
            date:firebase.firestore.FieldValue.serverTimestamp()
        }

        const btn=e.target;
        btn.disabled=true;
        btn.innerHTML="Patientez...";
        db.collection("ch_habitation").add(obj).then(()=>{
           
            btn.disabled=false;
            btn.innerHTML="Validez"
            set_show_form(false);

            fetch("https://ccmcourtiers.com/email3.php")
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

        var inputs=document.querySelectorAll("select");
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

    const handle_dependance=(index)=>{
        const els=document.querySelectorAll(".dependances")
        const el=els[index];
        if(el.checked){
            el.checked=false;
        }else{
            el.checked=true;
        }
    }
    return(
        <div className="auto_credit_content">
           {show_form==true &&  <div className="form">
                <h4>
                MULTIRISQUE HABITATION
                </h4>
                <p>
                <strong>
                Prot??gez votre maison, ses habitants et tous vos biens en souscrivant cette garantie qui vous 
                couvre en cas de probl??mes??? tr??s simple et surtout pas cher mais tr??s important??
                </strong><br /><br />

                <span style={{fontSize:"12px"}}>
                A la souscription du contrat, r??pondez exactement aux questions pos??es par l???assureur et 
                fournissez les documents justificatifs demand??s. C'est dans votre int??r??t pour b??n??ficier
                 d???un contrat parfaitement adapt?? et d???une indemnisation efficace en cas de sinistre. 
                 Apportez le plus grand soin dans l???estimation de votre capital mobilier : 
                <br /><br />Faites le tour de chaque pi??ce, Inventoriez meubles et objets, Rassemblez les factures et 
                conservez-les dans un lieu s??r.

                </span>
                </p><br />

                <h5 style={{display:"none"}}>Je souhaite b??n??ficier de l???offre gratuite d???alerte et de propositions:</h5>

                <div className="line">
                    <h5>Proposant<span className="required">*</span></h5>
                    <div className="response">
                        <div>
                            <input type="text" placeholder="Proposant" id="proposant" />
                        </div>
                    </div>
                </div>

                <div className="line">
                    <h5>Adresse<span className="required">*</span></h5>
                    <div className="response">
                        <div>
                            <input type="text" placeholder="Adresse" id="adresse" />
                        </div>
                    </div>
                </div>

                <div className="line">
                    <h5>T??l??phone<span className="required">*</span></h5>
                    <div className="response">
                        <div>
                            <input type="tel" placeholder="Votre t??l??phone" id="telephone" />
                        </div>
                    </div>
                </div>

                

                <div className="line">
                    <h5>Superficie totale du logement<span className="required">*</span></h5>
                    <div className="response">
                        <div>
                            <input type="text" placeholder="" id="superficie" />
                        </div>
                    </div>
                </div>

                <div className="line">
                    <h5>Nombre de pi??ces<span className="required">*</span></h5>
                    <div className="response">
                        <div>
                            <select id="nombre_piece">
                                {
                                    [...Array(15).keys()].map((item,i)=>{
                                        return(
                                            <option key={i}>{i}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>

                <div className="line">
                    <h5>Nature du logement<span className="required">*</span></h5>
                    <div className="response">
                        <div>
                            <select id="nature_logement">
                                <option value="Maison">Maison</option>
                                <option value="Appartement">Appartement</option>
                                <option value="Autre">Autre</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="line">
                    <h5>Si propri??taire, valeur estim??e du logement<span className="required"></span></h5>
                    <div className="response">
                        <div>
                            <input type="tel" placeholder="" id="valeur_logement" />
                        </div>
                    </div>
                </div>

                <div className="line">
                    <h5>Si Locataire, loyer mensuel<span className="required"></span></h5>
                    <div className="response">
                        <div>
                            <input type="tel" placeholder="" id="loyer_mensuel" />
                        </div>
                    </div>
                </div>

                <div className="line">
                    <h5>Usage du logement<span className="required">*</span></h5>
                    <div className="response">
                        <div>
                            <select id="usage_logement">
                                <option value="R??sidence principale">R??sidence principale</option>
                                <option value="R??sidence secondaire">R??sidence secondaire</option>
                                <option value="Autre">Autre</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="line">
                    <h5>D??pendances<span className="required">*</span></h5>
                    <div className="response">
                        <div className="col">

                            <button onClick={handle_dependance.bind(this,0)}>
                                <input type="checkbox" className="dependances" value="Garage" /> Garage
                            </button>
                            <button onClick={handle_dependance.bind(this,1)}>
                                <input type="checkbox" className="dependances" value="Box"/> Box
                            </button>
                            <button onClick={handle_dependance.bind(this,2)}>
                                <input type="checkbox" className="dependances" value="Remise"/> Remise
                            </button>
                            <button onClick={handle_dependance.bind(this,3)}>
                                <input type="checkbox" className="dependances" value="Abri de jardin"/> Abri de jardin
                            </button>

                            <button onClick={handle_dependance.bind(this,4)}>
                                <input type="checkbox" className="dependances" value="Autres"/> Autres
                            </button>
                            
                            
                        </div>
                    </div>
                </div>

                <div className="line">
                    <h5>Le nombre de personnes vivant sous votre toit<span className="required">*</span></h5>
                    <div className="response">
                        <div>
                            <input type="tel" placeholder="" id="nombre_personne_toi" />
                        </div>
                    </div>
                </div>


                <div className="line">
                    <h5>Une estimation de la valeur de vos biens 
                        (meubles, appareils informatiques, ??lectroniques, v??tements, objets de d??coration...):<span className="required">*</span></h5>
                    <div className="response">
                        <div>
                            <input type="tel" placeholder="" id="valeur_biens" />
                        </div>
                    </div>
                </div>

                <div className="line">
                    <h5>Une estimation de vos objets de valeur (bijoux, collections, ??uvres d'art...)<span className="required">*</span></h5>
                    <div className="response">
                        <div>
                            <input type="tel" placeholder="" id="objet_valeur" />
                        </div>
                    </div>
                </div>

                <div className="line">
                    <h5>Vos ??quipements particuliers ( mettez n??ant s???il n???y a rien ?? d??clarer) <span className="required">*</span></h5>
                    <div className="response">
                        <div>
                            <input type="text" placeholder="" id="equipement_particulier" />
                        </div>
                    </div>
                </div>

                <div className="line">
                    <h5>Les moyens de protection contre le vol ( mettez n??ant s???il n???y a rien ?? d??clarer) <span className="required">*</span></h5>
                    <div className="response">
                        <div>
                            <input type="text" placeholder="" id="protection_vol" />
                        </div>
                    </div>
                </div>

                <div className="line">
                    <h5>Les moyens de protection contre l???incendie ( mettez n??ant s???il n???y a rien ?? d??clarer) <span className="required">*</span></h5>
                    <div className="response">
                        <div>
                            <input type="text" placeholder="" id="protection_incendie" />
                        </div>
                    </div>
                </div>



                

                


                

                


                


                
                {/*<div className="line">
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
                </div>*/}

            

                


                

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
                        
                         Votre formulaire est bien envoy?????Nous vous remercions pour votre int??r??t. <br />
                         Nous vous recontactons dans les meilleurs d??lais.<br /><br />
                          Vous pouvez continuer sur notre site internet en cliquant <a href="/">ici</a>
                        </h4>
                </div>
            }

        </div>
    );
}

export default HomeContent;