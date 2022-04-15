import "../styles/parteners.scss";
import "../styles/parteners_mobile.scss";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import {setPage} from "../features/counterSlice";
import {useState,useEffect} from "react";

const About =()=>{
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
                   <div></div>
                </div>
                <Footer />
            </div>
            </div>
        </Layout>
    );
}

export default About;