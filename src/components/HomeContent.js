import "../styles/home_content.scss";
import "../styles/home_content_mobile.scss";
import bg from "./img/banner.webp";
import bg2 from "./img/auto.jpg";
import bg3 from "./img/new/ass_multi_risque.jpg";
import {useState,useEffect} from "react";
import video from "./videos/video.mp4";

const HomeContent=()=>{

    const [data,set_data]=useState([bg,bg3,bg,bg2]);
    const [b,set_b]=useState(0);

    useEffect(()=>{
        console.log("b is ",b);
        //show_bg(b);
    },[b])

    const show_bg=(x)=>{
        
    }
    return(
        <div className="home_content">
            <img src={data[b]} />
            <h2>Bienvenue</h2>
            <video src={video} controls></video>
        </div>
    );
}

export default HomeContent;