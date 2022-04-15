import "../styles/contact.scss";
import "../styles/contact_mobile.scss";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import {setPage} from "../features/counterSlice";
import {useState,useEffect} from "react";

const About =()=>{
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(setPage(4))
    },[])
    return(
        <Layout>
            <div className="home">
                <Nav />
            <div className="content">
                <div className="contact">
                   <h1>Nous contacter</h1>
                   <div>
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
                        <label>Votre message</label>
                        <textarea />
                    </div>

                    <div className="line">
                        <button>Envoyez le message</button>
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