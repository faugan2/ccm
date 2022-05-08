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
        db.collection("auto_credit").onSnapshot((snap)=>{
           snap.docs.map((doc)=>{
               const key=doc.id;
               const data=doc.data();
               data.key=key;
               d.push(data);
           })
           set_data(d);
        })
    },[])
    
    return(
        <div className="auto_credit_content">
            <div className="form" style={{width:"100vw"}}>
                
                <table border="1" style={{width:"90vw",margin:"auto"}}>
                    <thead>
                        <tr>
                            <th width="3%">N°</th>
                            <th width={`${90/8}%`}>Je suis</th>
                            <th width={`${90/8}%`}>Combien de véhicules possédez-vous </th>
                            <th width={`${90/8}%`}>Votre véhicule est-il actuellement assuré </th>
                            <th width={`${90/8}%`}>A quelle date expire votre assurance actuelle</th>
                            <th width={`${90/8}%`}>Comment pouvons-nous vous contacter</th>
                            <th width={`${90/8}%`}>Donnez-nous votre contact selon votre réponse précédente</th>
                            <th width={`${90/8}%`}>Souhaitez-vous que nous vous proposions des offres plus adaptées et moins chères </th>
                            <th width={`${90/8}%`}>Savez-vous ce que c’est la garantie Responsabilité Civile Chef de Famille </th>
                            <th width="7%">Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <button>
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