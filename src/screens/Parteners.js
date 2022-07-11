import "../styles/parteners.scss";
import "../styles/parteners_mobile.scss";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import {setPage} from "../features/counterSlice";
import {useState,useEffect} from "react";
import ccm from "../components/img/ccm.jpg";
import sici from "../components/img/sici.jpg";
import a2w from "../components/img/logo3.jpeg";
import get_driver from "../components/img/get_driver.jpeg";
import adesco from "../components/img/adesco.jpg";
import jsql from "../components/img/jsql.png";
import assitchape from "../components/img/assitchape.png";
import foaf from "../components/img/foaf.png";
import img from "../components/img/new/nos_partenaires.jpg";

import ciscofinances from "../components/img/partenaires/ciscofinances.PNG";
import diane from "../components/img/partenaires/diane.png";
import espiat from "../components/img/partenaires/espiat.png";
import gmc from "../components/img/partenaires/gmc.png";
import gireh from "../components/img/partenaires/jireh.jfif";
import lillybelle from "../components/img/partenaires/lillybelle.png";
import lillyfly from "../components/img/partenaires/lillyfly.jpg";
import plastica from "../components/img/partenaires/plastica.jpg";
import pro_batiment from "../components/img/partenaires/pro_batiment.jpg";
import proconsulting from "../components/img/partenaires/pro_consulting.jpg";

const About =()=>{
    const [data,set_data]=useState([sici,ciscofinances,diane,espiat,gmc,gireh,lillybelle,lillyfly,plastica,
    pro_batiment,proconsulting])
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(setPage(5))
    },[])
    return(
        <Layout>
            <div className="home">
                <Nav />
            <div className="content">
                <div className="parteners">
                    <div>
                        <h1>Nos partenaires</h1>
                        <img src={img} />
                    </div>
                   
                   <div>
                       {
                           data?.map((item,i)=>{
                               return(
                                   <img src={item} key={i} />
                               );
                           })
                       }
                   </div>
                </div>
                <Footer />
            </div>
            </div>
        </Layout>
    );
}

export default About;