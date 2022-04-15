import "../styles/sinistre.scss";
import "../styles/sinistre_mobile.scss";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import {setPage} from "../features/counterSlice";
import {useState,useEffect} from "react";

const About =()=>{
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(setPage(6))
    },[])
    return(
        <Layout>
            <div className="home">
                <Nav />
            <div className="content">
                <div className="sinistre">
                   <h1>sinistre</h1>
                   <div>sinistre</div>
                </div>
                <Footer />
            </div>
            </div>
        </Layout>
    );
}

export default About;