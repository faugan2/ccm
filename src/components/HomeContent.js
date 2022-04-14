import "../styles/home_content.scss";
import "../styles/home_content_mobile.scss";
import bg from "./img/banner.webp";
import bg2 from "./img/auto.jpg";
import {useState,useEffect} from "react";

const HomeContent=()=>{

    const [data,set_data]=useState([bg,bg2]);
    const [b,set_b]=useState(0);

    useEffect(()=>{
        console.log("b is ",b);
        //show_bg(b);
    },[b])

    const show_bg=(x)=>{
        
    }
    return(
        <div className="home_content" style={{
            backgroundImage:`url(${data[b]})`,
            backgroundSize:"cover"
        }}>
            <h2>Bienvenue</h2>
        </div>
    );
}

export default HomeContent;