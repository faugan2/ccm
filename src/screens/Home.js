import "../styles/home.scss";
import Nav from "../components/Nav";
import HomeTop from "../components/HomeTop";
import Parteners from "../components/Parteners";
import Engagements from "../components/Engagements";
import Who from "../components/Who";
import Une from "../components/Une";
import Informer from "../components/Informer";
import Footer from "../components/Footer";

const Home=()=>{
    return(
        <div className="home">
            <Nav />
            <HomeTop />
            <Parteners />
            <Engagements />
            <Who />
            <Une />
            <Informer />
            <Footer />
        </div>
    )
}
export default Home;