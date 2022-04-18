import "../styles/about.scss";
import "../styles/about_mobile.scss";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import { useDispatch } from "react-redux";
import {setPage} from "../features/counterSlice";
import {useState,useEffect} from "react";
import {data} from "../components/data";
import img from "../components/img/new/nos_engagements.png";

const About =()=>{
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(setPage(3))
    },[])

    
    const [title,set_title]=useState("");
    const [content,set_content]=useState("");


    useEffect(()=>{
        if(data==null) return;
        if(data.length<0) return;
        set_title(data[15]?.title);
        set_content(data[15]?.content)
    },[data]);
    return(
        <Layout>
            <div className="home">
                <Nav />
            <div className="content">
                <div className="about">
                    <div>
                         <img src={img} />
                    </div>
                    
                   <div dangerouslySetInnerHTML={{__html:content}} />
                </div>
                <Footer />
            </div>
            </div>
        </Layout>
    );
}

export default About;