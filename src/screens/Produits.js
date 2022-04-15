import "../styles/produits.scss";
import "../styles/produits_mobile.scss";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContent";

const About =()=>{
    return(
        <Layout>
            <div className="home">
                <Nav />
            <div className="content">
                <div className="produits">
                    
                </div>
                <Footer />
            </div>
            </div>
        </Layout>
    );
}

export default About;