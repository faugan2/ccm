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
import DeleteIcon from '@material-ui/icons/Delete';

const HomeContent=()=>{

    const [data,set_data]=useState([]);
    useEffect(()=>{
        const d=[];
        db.collection("ch_habitation").onSnapshot((snap)=>{
           snap.docs.map((doc)=>{
               const key=doc.id;
               const data=doc.data();
               data.key=key;
               d.push(data);
           })
           set_data(d);
        })
    },[])

    const del=(key)=>{
        const confirm=window.confirm("Voulez-vous vraiment supprimer ce élément ?");
        if(confirm==false) return;
        
        db.collection("ch_habitation").doc(key).delete();
    }
    
    return(
        <div className="auto_credit_content">
            <div className="form" style={{width:"100%"}}>
                
                <table border="1" style={{width:"90%",margin:"auto"}}>
                    <thead>
                        <tr>
                            <th width="3%">N°</th>
                            <th width={`${90/15}%`}>Proposant</th>
                            <th width={`${90/15}%`}>Adresse</th>
                            <th width={`${90/15}%`}>Téléphone</th>
                            <th width={`${90/15}%`}>Superficie</th>
                            <th width={`${90/15}%`}>Pièces</th>
                            <th width={`${90/15}%`}>Nature</th>
                            <th width={`${90/15}%`}>Valeur-Logement</th>
                            <th width={`${90/15}%`}>Loyer-Mensuel</th>
                            <th width={`${90/15}%`}>Usage</th>
                            <th width={`${90/15}%`}>Dependances</th>
                            <th width={`${90/15}%`}>Valeur-Biens</th>
                            <th width={`${90/15}%`}>Objet-de-valeur</th>
                            <th width={`${90/15}%`}>Equipements</th>
                            <th width={`${90/15}%`}>Protection-Vol</th>
                            <th width={`${90/15}%`}>Protection-Incendie</th>
                            <th width="7%">Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item,i)=>{
                            const proposant=item.proposant;
                            const adresse=item.adresse;
                            const telephone=item.telephone;
                            const superficie=item.superficie;
                            const nombre_piece=item.nombre_piece;
                            const nature_logement=item.nature_logement;
                            const valeur_logement=item.valeur_logement;
                            const loyer_mensuel=item.loyer_mensuel;
                            const usage_logement=item.usage_logement;
                            const dependances=item.dependances;
                            const valeur_biens=item.valeur_biens;
                            const objet_valeur=item.objet_valeur;
                            const equipement_particulier=item.equipement_particulier;
                            const protection_vol=item.protection_vol;
                            const protection_incendie=item.protection_incendie;
                            return(
                                <tr key={i}>
                                    <td align="center">{i+1}</td>
                                    <td  align="center">{proposant}</td>
                                    <td align="center">{adresse}</td>
                                    <td align="center">{telephone}</td>
                                    <td align="center">{superficie}</td>
                                    <td align="center">{nombre_piece}</td>
                                    <td align="center">{nature_logement}</td>
                                    <td align="center">{valeur_logement}</td>
                                    <td align="center">{loyer_mensuel}</td>
                                    <td align="center">{usage_logement}</td>
                                    <td align="center">
                                        <ul style={{
                                            listStyle:"none",
                                        }}>
                                            {
                                                dependances.map((dep,j)=>{
                                                    return(
                                                        <li key={j}>{dep}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </td>
                                    <td align="center">{valeur_biens}</td>
                                    <td align="center">{objet_valeur}</td>
                                    <td align="center">{equipement_particulier}</td>
                                    <td align="center">{protection_vol}</td>
                                    <td align="center">{protection_vol}</td>
                                    <td>
                                        <button onClick={del.bind(this,item.key)}>
                                                <DeleteIcon />
                                        </button>

                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default HomeContent;