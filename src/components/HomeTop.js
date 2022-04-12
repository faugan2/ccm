import "../styles/home_top.scss";
import "../styles/home_top_mobile.scss";
import banner from "./img/banner.webp";
import AirplayIcon from '@material-ui/icons/Airplay';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import HomeIcon from '@material-ui/icons/Home';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import PeopleIcon from '@material-ui/icons/People';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {useState,useEffect} from "react";
import Modal from "./Modal";
import Contact from "./Contact";

const HomeTop=()=>{
    const [assurances,set_assurances]=useState([
        {
            data:[
                "Auto",
                "Habitation",
                "Voyage",
                "RC chef de famille"
            ]   
        },
        {
            data:[
                "Voyage",
                "Accident",
                "Transport de marchandises",
                "Bris de glace",
                "Santé"
            ]
        }
    ])
    const [type,set_type]=useState(0);
    const [data,set_data]=useState(null);
    const [open,set_open]=useState(false);
    

    useEffect(()=>{
        set_data(assurances[type].data);
    },[type])

    const type_changed=(e)=>{
        const v=parseInt(e.target.value);
        set_type(v);
    }
    return(
        <div className="home_top" style={{backgroundImage:`url(${banner})`,backgroundRepeat: 'no-repeat',}}>
            <div className="top">
                <h1></h1>
                <h1 className="content">BIENVENUE CHEZ CCM EXPRESS</h1>
            </div>
            <div className="center">
                <div></div>
                <div className="content">
                    <h2>Etes-vous un particulier ?</h2>
                    <button>Assurance auto
                        <div>
                            <DriveEtaIcon  />
                        </div>
                    </button>
                    <div>
                        <button>Assurance habitation
                        <div>
                            <HomeIcon  />
                        </div>
                        </button>
                        <button>assurance voyage
                        <div>
                            <FlightTakeoffIcon  />
                        </div>
                        </button>
                        <button>assurance cp
                        <div>
                            <PeopleIcon  />
                        </div>
                        </button>
                        <button>Voir plus
                        <div>
                            <MoreHorizIcon  />
                        </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h2>Quelle assurance recherchez-vous ?</h2>
                    <select onChange={type_changed}>
                        <option value="0">Particulier</option>
                        <option value="1">Professionnel</option>
                    </select>
                    <select>
                        {
                            data?.map((item,i)=>{
                                return(
                                    <option key={i}>{item}</option>
                                )
                            })
                        }
                    </select>
                    <button onClick={e=>set_open(true)}>Nous conacter</button>
                </div>
                
            </div>

            {open==true && <Modal content={<Contact click={e=>{set_open(false)}}/>} click={e=>{set_open(false)}}/>}
        </div>
    );
}

export default HomeTop;