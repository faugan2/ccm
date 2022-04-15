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
                   
                </div>
                <Footer />
            </div>
            </div>
        </Layout>
    );
}

export default About;