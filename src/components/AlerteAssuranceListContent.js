import "../styles/home_content.scss";
import "../styles/home_content_mobile.scss";
import bg from "./img/banner.webp";
import bg2 from "./img/auto.jpg";
import bg3 from "./img/new/ass_multi_risque.jpg";
import {useState,useEffect,useRef} from "react";
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
        const confirm=window.confirm("Voulez-vous vraiment supprimer ce élément ?");
        if(confirm==false) return;
        
        db.collection("alerte_assurance").doc(key).delete();
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
                    gap:"0.5rem",
                    marginBottom:8,
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
                <table border="1" style={{width:"90%",margin:"auto"}} >
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
                                        <ol style={{
                                            listStyle:"none",
                                        }}>
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
                </ExcelExport>
            </div>

            {add==true && <Modal content={<ModalAddAssurance />} click={()=>set_add(false)}/>}
        </div>
    );
}

export default HomeContent;