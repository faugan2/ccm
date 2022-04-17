import "../styles/sinistre.scss";
import "../styles/sinistre_mobile.scss";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import {setPage} from "../features/counterSlice";
import {useState,useEffect} from "react";
import {data} from "../components/data";

const About =()=>{
    const dispatch=useDispatch();

    const [content,set_content]=useState("");

    useEffect(()=>{
        dispatch(setPage(6))
    },[])
    useEffect(()=>{
        if(data==null) return;
        const res=data[16].content;
        set_content(res);
    },[data])
    return(
        <Layout>
            <div className="home">
                <Nav />
            <div className="content">
                <div className="sinistre">
                   <h1>Sinistre</h1>
                   <div>
                      <div dangerouslySetInnerHTML={{__html:content}} style={{
                          marginBottom:"2rem"
                      }}/>
                   <div className="line">
                        <label>Votre nom complet</label>
                        <input type="text" />
                    </div>

                    <div className="line">
                        <label>Votre adresse Email</label>
                        <input type="email" />
                    </div>

                    <div className="line">
                        <label>Votre numéro de téléphone</label>
                        <input type="tel" />
                    </div>

                    <div className="line">
                        <label>Détails de la déclaration</label>
                        <textarea />
                    </div>

                    <div className="line">
                        <button>Envoyez la déclaration</button>
                    </div>
                   </div>
                </div>
                <Footer />
            </div>
            </div>
        </Layout>
    );
}

export default About;