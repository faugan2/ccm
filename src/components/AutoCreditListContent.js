import "../styles/home_content.scss";
import "../styles/home_content_mobile.scss";
import bg from "./img/banner.webp";
import bg2 from "./img/auto.jpg";
import bg3 from "./img/new/ass_multi_risque.jpg";
import {useState,useEffect, useRef} from "react";
import video from "./videos/video.mp4";
import CloseIcon from '@material-ui/icons/Close';
import new_bg from "./img/new/bg6.jpg";
import  firebase from "firebase";
import {db} from "../firebase_file";
import DeleteIcon from '@material-ui/icons/Delete';
import GetAppIcon from '@material-ui/icons/GetApp';
import { ExcelExport } from "@progress/kendo-react-excel-export";
import data_test from "./test.json";
import AddIcon from '@material-ui/icons/Add';
import Modal from "./Modal";
import ModalAddAssurance from "./ModalAddAssurance";
const HomeContent=()=>{
    const tableRef = useRef(null);
    const [data,set_data]=useState([]);
    const [add,set_add]=useState(false);
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

    const del=(key)=>{
        const confirm=window.confirm("Voulez-vous vraiment supprimer ce élément ?");
        if(confirm==false) return;
        db.collection("auto_credit").doc(key).delete();
    }
    const exporter=()=>{
        if(tableRef.current==null) return;
        tableRef.current.save();
    }
    return(
        <div className="auto_credit_content">
            <div className="form" style={{width:"100%"}}>
            <div style={{
                    width:"90%",
                    margin:"auto",
                    display:"flex",
                    justifyContent:"flex-end",
                    marginBottom:8,
                    gap:8,
                }}>
                     <button style={{
                    padding:"0.6rem 1rem",
                    cursor:"pointer",
                    display:"flex",
                    alignItems:"center",
                    gap:8,
                }}
                onClick={()=>set_add(true)}
                >
                    <AddIcon />
                    Ajouter un enregistrement</button>
                <button style={{
                    padding:"0.6rem 1rem",
                    cursor:"pointer",
                    display:"flex",
                    alignItems:"center",
                    gap:8,
                }}
                onClick={exporter}
                >
                    <GetAppIcon />
                    Exporter en excel</button>
                </div>
               <ExcelExport data={data_test} ref={tableRef}>
                <table border="1" style={{width:"90%",margin:"auto"}}>
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
                            const je_suis=item.je_suis;
                            const nombre_vehiculee=item.nombre_vehiculee;
                            const assure=item.assure;
                            const expire=item.expire;
                            const contact=item.contact;
                            const contact_saisie=item.contact_saisie;
                            const offre=item.offre;
                            const garantie=item.garantie;

                            return(
                                <tr key={i}>
                                    <td align="center">{i+1}</td>
                                    <td  align="center">{je_suis=="1" ? "Un particulier" :  "Un professionnel"}</td>
                                    <td align="center">{nombre_vehiculee}</td>
                                    <td align="center">{assure=="1" ? "Oui" : "Non"}</td>
                                    <td align="center">{expire}</td>
                                    <td align="center">{
                                        contact=="1" ? "Mail" :
                                        contact=="2" ? "Tel" : "WhatsApp"
                                    }</td>
                                    <td align="center">{contact_saisie}</td>
                                    <td align="center">
                                        {
                                            offre=="1" ? "Oui":"Non"
                                        }
                                    </td>
                                    <td align="center">
                                        {
                                            garantie=="1" ? "Oui" :"Non"
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
                </ExcelExport>
            </div>
            {add==true && <Modal content={<ModalAddAssurance />} click={()=>set_add(false)}/>}
        </div>
    );
}

export default HomeContent;