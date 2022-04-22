import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContent";

import Layout from "../components/Layout";

import { useDispatch } from "react-redux";
import {setPage} from "../features/counterSlice";
import {useState,useEffect} from "react";

const Home=()=>{
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(setPage(0))
    },[])
    return(
        <Layout>
            <div className="home">
                <Nav />
            <div className="content" >
                <HomeContent />
                <Footer />
            </div>
            </div>
        </Layout>
    );
    return(
        <div className="home">
            <Nav />
            <div className="content">
                <HomeContent />
                <Footer />
            </div>
            
        </div>
    )
}
export default Home;