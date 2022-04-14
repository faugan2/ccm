import "../styles/home.scss";
import "../styles/home_mobile.scss"
import Nav from "../components/Nav";
import HomeTop from "../components/HomeTop";
import Parteners from "../components/Parteners";
import Engagements from "../components/Engagements";
import Who from "../components/Who";
import Une from "../components/Une";
import Informer from "../components/Informer";
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContent";

const Home=()=>{
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