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
const About =()=>{
    const [data,set_data]=useState([sici,assitchape,foaf,ccm,a2w,get_driver,adesco,jsql])
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
                   <h1>Nos partenaires</h1>
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