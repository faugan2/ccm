import "../styles/about.scss";
import "../styles/about_mobile.scss";
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
                <div className="about">
                    a propos
                </div>
                <Footer />
            </div>
            </div>
        </Layout>
    );
}

export default About;