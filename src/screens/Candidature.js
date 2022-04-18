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
    const [img,set_img]=useState(null);

    useEffect(()=>{
        dispatch(setPage(7))
    },[])

    useEffect(()=>{
        if(data==null) return;
        if(data.length<0) return;
        set_title(data[18]?.title);
        set_content(data[18]?.content)
        set_img(data[18]?.img);
        
    },[data]);
    

    return(
        <Layout>
            <div className="home">
                <Nav />
            <div className="content">
                <div className="about">
                    <div>
                        <h1>{title}</h1>
                        {img!=null && <img src={img} />}
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