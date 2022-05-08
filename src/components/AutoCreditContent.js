import "../styles/home_content.scss";
import "../styles/home_content_mobile.scss";
import bg from "./img/banner.webp";
import bg2 from "./img/auto.jpg";
import bg3 from "./img/new/ass_multi_risque.jpg";
import {useState,useEffect} from "react";
import video from "./videos/video.mp4";
import CloseIcon from '@material-ui/icons/Close';
import new_bg from "./img/new/bg6.jpg";

const HomeContent=()=>{

	
    const check=(id)=>{
        document.querySelector(`#${id}`).click();
    }
    return(
        <div className="auto_credit_content">
            <div className="form">
                <h4>
                Assurez vos véhicules et étalez le paiement en plusieurs fois!
                </h4>
                <p>
                La société de courtage en assurances CCM et son partenaire 
                Cisco-Finances vous permettent d’assurer votre véhicule à 
                crédit en échelonnant le paiement des primes. 
                </p>

                <div className="line">
                    <h5>Je suis<span className="required">*</span></h5>
                    <div className="response">
                        <div onClick={check.bind(this,"je_suis_1")}>
                            <input type="radio" name="je_suis" value="1" id="je_suis_1"/>
                            <label>Un particulier</label>
                        </div>

                        <div onClick={check.bind(this,"je_suis_2")}>
                            <input type="radio" name="je_suis" value="2" id="je_suis_2" />
                            <label>Un professionnel</label>
                        </div>
                    </div>
                </div>

                <div className="line">
                    <h5>
                        Combien de véhicules possédez-vous ?
                        <span className="required">*</span>
                    </h5>
                    <div className="response">
                        <div>
                            <input type="text" id="nombre_vehiculee"  placeholder="saisir le nombre"/>
                        </div>
                    </div>
                </div>


                <div className="line">
                    <h5>Votre véhicule est-il actuellement assuré ? <span className="required">*</span></h5>
                    <div className="response">
                        <div onClick={check.bind(this,"assure_1")}>
                            <input type="radio" name="assure" value="1" id="assure_1"/>
                            <label>Oui</label>
                        </div>
                        <div onClick={check.bind(this,"assure_2")}>
                            <input type="radio" name="assure" value="2" id="assure_2" />
                            <label>Non</label>
                        </div>
                    </div>
                </div>


                <div className="line">
                    <h5>A quelle date expire votre assurance actuelle ?</h5>
                    <div className="response">
                        <div onClick={check.bind(this,"expire_1")}>
                            <input type="radio" name="expire" value="1" id="expire_1"/>
                            <label>Oui</label>
                        </div>
                        <div onClick={check.bind(this,"expire_2")}>
                            <input type="radio" name="expire" value="2" id="expire_2" />
                            <label>Non</label>
                        </div>
                    </div>
                </div>


                <div className="line">
                    <h5>Comment pouvons-nous vous contacter ? <span className="required">*</span></h5>
                    <div className="response">
                        <div onClick={check.bind(this,"contact_1")}>
                            <input type="radio" name="contact" value="1" id="contact_1"/>
                            <label>Mail</label>
                        </div>
                        <div onClick={check.bind(this,"contact_2")}>
                            <input type="radio" name="contact" value="2" id="contact_2" />
                            <label>Tel</label>
                        </div>
                        <div onClick={check.bind(this,"contact_3")}>
                            <input type="radio" name="contact" value="3" id="contact_3" />
                            <label>WhatsApp</label>
                        </div>
                    </div>
                </div>


                <div className="line">
                    <h5>
                    Donnez-nous votre contact selon votre réponse précédente
                        <span className="required">*</span>
                    </h5>
                    <div className="response">
                        <div>
                            <input type="text" id="contact_saisie"  placeholder="saisir le contact"/>
                        </div>
                    </div>
                </div>

                <div className="line">
                    <h5>
                    Souhaitez-vous que nous vous proposions des offres plus adaptées et moins chères ?
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
                    <h5>
                    Savez-vous ce que c’est la garantie Responsabilité Civile Chef de Famille ?
                    <span className="required">*</span></h5>
                    <div className="response">
                        <div onClick={check.bind(this,"garantie_1")}>
                            <input type="radio" name="garantie" value="1" id="garantie_1"/>
                            <label>Oui</label>
                        </div>
                        <div onClick={check.bind(this,"garantie_2")}>
                            <input type="radio" name="garantie" value="2" id="garantie_2" />
                            <label>Non</label>
                        </div>
                    </div>
                </div>

                <div className="line">
                    <button>
                        Valider
                    </button>
                </div>


            </div>
        </div>
    );
}

export default HomeContent;