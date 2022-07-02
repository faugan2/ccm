import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContent";

import Layout from "../components/Layout";

import { useDispatch } from "react-redux";
import {setPage} from "../features/counterSlice";
import {useState,useEffect} from "react";

import auto from "../components/img/auto.jpg";
import auto2 from "../components/img/auto2.jpeg";
import "../styles/autocredit.scss";
import AlerteAssuranceListContent from "../components/AlerteAssuranceListContent";
import RCHabitationListContent from "../components/RCHabitationListContent";

const Home=()=>{
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(setPage(9))
    },[])
    return(
       
        <Layout>
        <div className="home">
            <Nav />
        <div className="content" >
            <RCHabitationListContent />
            <Footer />
        </div>
        </div>
    </Layout>
        
    );
    
}
export default Home;