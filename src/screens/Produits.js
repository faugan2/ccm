import "../styles/produits.scss";
import "../styles/produits_mobile.scss";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContent";
import { useDispatch,useSelector } from "react-redux";
import {selectSousType, selectType, setPage} from "../features/counterSlice";
import {useState,useEffect} from "react";
import {data} from "../components/data";

const About =()=>{
    const dispatch=useDispatch();
    const [title,set_title]=useState("");
    const [content,set_content]=useState("");
    const [type,set_type]=useState(0);
    const [sous_type,set_sous_type]=useState(0);

    const t=useSelector(selectType);
    const st=useSelector(selectSousType);

    useEffect(()=>{
        dispatch(setPage(2))
    },[])

    useEffect(()=>{
        if(data==null) return;
        if(data.length==0) return;
        if(t==null || st==null) return;

        const res=data.filter((item,i)=>{
            return item?.type==t && item?.sous_type==st
        })

        if(res.length==0) return;
        set_title(res[0].title);
        set_content(res[0].content);

    },[data,t,st]);
    return(
        <Layout>
            <div className="home">
                <Nav />
            <div className="content">
                <div className="produits">
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