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
        db.collection("alerte_assurance").onSnapshot((snap)=>{
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
        db.collection("alerte_assurance").doc(key).delete();
    }
    
    return(
        <div className="auto_credit_content">
            <div className="form" style={{width:"100vw"}}>
                
                <table border="1" style={{width:"90vw",margin:"auto"}}>
                    <thead>
                        <tr>
                            <th width="3%">N°</th>
                            <th width={`${90/8}%`}>Nom et prénom</th>
                            <th width={`${90/8}%`}>Combien de véhicules possédez-vous </th>
                            <th width={`${90/8}%`}>Date d’échéance de l’assurance</th>
                            <th width={`${90/8}%`}>Téléphone</th>
                            <th width={`${90/8}%`}>Mail</th>
                            <th width={`${90/8}%`}>Avez-vous une assurance habitation ?</th>
                            <th width="7%">Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item,i)=>{
                            const je_suis=item.je_suis;
                            const nombre_vehiculee=item.nombre_vehiculee;
                            const assure=item.assure;
                            const expire=item.expire;
                            const contact=item.contact;
                            const contact_saisie=item.contact_saisie;
                            const offre=item.offre;
                            const garantie=item.garantie;

                            const assurance=item.assurance;
                            const echeances=item.echeance;
                            const email=item.email;
                            const nom_prenom=item.nom_prenom;
                            const telephone=item.telephone;


                            return(
                                <tr key={i}>
                                    <td align="center">{i+1}</td>
                                    <td  align="center">{nom_prenom}</td>
                                    <td align="center">{nombre_vehiculee}</td>
                                    <td align="center">
                                        <ol>
                                            {echeances.map((e,j)=>{
                                                return(
                                                    <li key={`${i}${j}`}>{e}</li>
                                                )
                                            })}
                                        </ol>
                                    </td>
                                    <td align="center">{telephone}</td>
                                    <td align="center">{email}</td>
                                    <td align="center">
                                        {
                                            assurance=="1" ? "Oui":"Non"
                                        }
                                    </td>
                                   
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