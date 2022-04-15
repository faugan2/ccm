import "../styles/about.scss";
import "../styles/about_mobile.scss";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import { useDispatch } from "react-redux";
import {setPage} from "../features/counterSlice";
import {useState,useEffect} from "react";
const About =()=>{
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(setPage(3))
    },[])
    return(
        <Layout>
            <div className="home">
                <Nav />
            <div className="content">
                <div className="about">
                    
                </div>
                <Footer />
            </div>
            </div>
        </Layout>
    );
}

export default About;