import "../styles/about.scss";
import "../styles/about_mobile.scss";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContent";
import { useDispatch } from "react-redux";
import {setPage} from "../features/counterSlice";
import {useState,useEffect} from "react";
import {data} from "../components/data";

const About =()=>{
    const dispatch=useDispatch();
    const [title,set_title]=useState("");
    const [content,set_content]=useState("");

    useEffect(()=>{
        dispatch(setPage(1))
    },[])

    useEffect(()=>{
        if(data==null) return;
        if(data.length<0) return;
        set_title(data[0]?.title);
        set_content(data[0]?.content)
    },[data]);
    

    return(
        <Layout>
            <div className="home">
                <Nav />
            <div className="content">
                <div className="about">
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{__html:content}} />
                </div>
                <Footer />
            </div>
            </div>
        </Layout>
    );
}

export default About;